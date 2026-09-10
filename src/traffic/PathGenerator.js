import * as THREE from 'three';

/**
 * PathGenerator
 * Generates mathematically continuous 3D Catmull-Rom splines for every lane
 * across configurable intersection layouts (1, 2, or 3 lanes per approach).
 * Supports Straight, Right-Turn, and Left-Turn maneuvers.
 */
export class PathGenerator {
  constructor(lanesPerDirection = 2, roadLength = 90, laneWidth = 3.8) {
    this.lanesPerDirection = lanesPerDirection;
    this.roadLength = roadLength;
    this.laneWidth = laneWidth;
    this.halfRoadWidth = lanesPerDirection * laneWidth;
    this.stopLineOffset = this.halfRoadWidth + 3.0;
    this.paths = [];
    this.conflictMap = new Map();
    this.generatePaths();
  }

  updateLanes(lanesPerDirection) {
    this.lanesPerDirection = lanesPerDirection;
    this.halfRoadWidth = lanesPerDirection * this.laneWidth;
    this.stopLineOffset = this.halfRoadWidth + 3.0;
    this.generatePaths();
  }

  generatePaths() {
    this.paths = [];
    const L = this.roadLength;
    const LW = this.laneWidth;
    const N = this.lanesPerDirection;
    const S = this.stopLineOffset;

    const getEntryOffset = (laneIdx) => (laneIdx + 0.5) * LW;
    const getExitOffset = (laneIdx) => -(laneIdx + 0.5) * LW;

    const directions = ['N', 'S', 'E', 'W'];

    directions.forEach(dir => {
      for (let laneIdx = 0; laneIdx < N; laneIdx++) {
        const offsetIn = getEntryOffset(laneIdx);

        let maneuvers = ['straight'];
        if (N === 1) {
          maneuvers = ['straight', 'right', 'left'];
        } else if (N === 2) {
          if (laneIdx === 0) maneuvers = ['left', 'straight'];
          if (laneIdx === 1) maneuvers = ['right', 'straight'];
        } else if (N === 3) {
          if (laneIdx === 0) maneuvers = ['left'];
          if (laneIdx === 1) maneuvers = ['straight'];
          if (laneIdx === 2) maneuvers = ['right', 'straight'];
        }

        maneuvers.forEach(maneuver => {
          const points = this.computePathPoints(dir, laneIdx, maneuver, L, S, LW, offsetIn, N);
          const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.15);
          curve.arcLengthDivisions = 400;
          const totalLength = curve.getLength();

          const stopT = this.findStopT(curve, dir, S);
          const stopPos = curve.getPointAt(stopT);

          let exitDir = 'S';
          if (maneuver === 'straight') {
            exitDir = dir === 'N' ? 'S' : (dir === 'S' ? 'N' : (dir === 'E' ? 'W' : 'E'));
          } else if (maneuver === 'right') {
            exitDir = dir === 'N' ? 'W' : (dir === 'S' ? 'E' : (dir === 'E' ? 'N' : 'S'));
          } else if (maneuver === 'left') {
            exitDir = dir === 'N' ? 'E' : (dir === 'S' ? 'W' : (dir === 'E' ? 'S' : 'N'));
          }
          const exitLaneIdx = Math.min(laneIdx, N - 1);
          const exitLaneKey = exitDir + '_exit_L' + exitLaneIdx;

          this.paths.push({
            id: dir + '_L' + laneIdx + '_' + maneuver,
            direction: dir,
            laneIndex: laneIdx,
            maneuver: maneuver,
            curve: curve,
            length: totalLength,
            stopT: stopT,
            stopPosition: stopPos,
            entryPoint: points[0],
            exitPoint: points[points.length - 1],
            laneKey: dir + '_L' + laneIdx,
            exitDirection: exitDir,
            exitLaneKey: exitLaneKey,
            approachEndT: this.findApproachEndT(curve, dir)
          });
        });
      }
    });

    this.buildConflictMap();
  }

  buildConflictMap() {
    this.conflictMap.clear();
    const INTERSECTION_CONFLICT_RADIUS = this.halfRoadWidth + 5.0;
    const PATH_SAMPLE_COUNT = 120;
    const MAX_CENTERLINE_CONFLICT_DISTANCE = 3.2;
    const MIN_CONFLICT_SEPARATION = 0.75;

    const samples = new Map();
    this.paths.forEach(path => {
      const points = [];
      for (let i = 0; i <= PATH_SAMPLE_COUNT; i++) {
        const t = i / PATH_SAMPLE_COUNT;
        const point = path.curve.getPointAt(t);
        if (Math.hypot(point.x, point.z) <= INTERSECTION_CONFLICT_RADIUS) {
          points.push({ t, point });
        }
      }
      samples.set(path.id, points);
      path.conflicts = [];
    });

    const addConflict = (a, b, tA, tB, distance) => {
      const key = [a.id, b.id].sort().join('|');
      if (this.conflictMap.has(key)) return;

      const windowMeters = Math.max(3.5, MIN_CONFLICT_SEPARATION * 4.0);
      const halfWindowA = Math.min(0.18, windowMeters / Math.max(1, a.length));
      const halfWindowB = Math.min(0.18, windowMeters / Math.max(1, b.length));

      const record = {
        pathA: a.id,
        pathB: b.id,
        tA,
        tB,
        tStartA: Math.max(0, tA - halfWindowA),
        tEndA: Math.min(1, tA + halfWindowA),
        tStartB: Math.max(0, tB - halfWindowB),
        tEndB: Math.min(1, tB + halfWindowB),
        centerDistance: distance
      };

      this.conflictMap.set(key, record);
      a.conflicts.push({
        otherPathId: b.id,
        conflictT: tA,
        windowStart: record.tStartA,
        windowEnd: record.tEndA,
        otherConflictT: tB
      });
      b.conflicts.push({
        otherPathId: a.id,
        conflictT: tB,
        windowStart: record.tStartB,
        windowEnd: record.tEndB,
        otherConflictT: tA
      });
    };

    for (let i = 0; i < this.paths.length; i++) {
      const a = this.paths[i];
      for (let j = i + 1; j < this.paths.length; j++) {
        const b = this.paths[j];
        if (a.direction === b.direction) continue;

        const aSamples = samples.get(a.id) || [];
        const bSamples = samples.get(b.id) || [];
        let bestDistance = Infinity;
        let bestA = null;
        let bestB = null;

        for (const sa of aSamples) {
          for (const sb of bSamples) {
            const d = Math.hypot(sa.point.x - sb.point.x, sa.point.z - sb.point.z);
            if (d < bestDistance) {
              bestDistance = d;
              bestA = sa;
              bestB = sb;
            }
          }
        }

        if (bestA && bestB && bestDistance <= MAX_CENTERLINE_CONFLICT_DISTANCE) {
          addConflict(a, b, bestA.t, bestB.t, bestDistance);
        }
      }
    }
  }

  getPathConflict(pathAId, pathBId) {
    if (pathAId === pathBId) return null;
    const key = [pathAId, pathBId].sort().join('|');
    return this.conflictMap.get(key) || null;
  }

  computePathPoints(dir, laneIdx, maneuver, L, S, LW, offsetIn, N) {
    const points = [];
    const exitLaneIdx = Math.min(laneIdx, N - 1);
    const offsetOut = (exitLaneIdx + 0.5) * LW;

    if (dir === 'N') {
      const startX = offsetIn;
      // Uniform approach control points
      points.push(new THREE.Vector3(startX, 0.05, -L));
      points.push(new THREE.Vector3(startX, 0.05, -L * 0.65));
      points.push(new THREE.Vector3(startX, 0.05, -L * 0.35));
      points.push(new THREE.Vector3(startX, 0.05, -S));

      if (maneuver === 'straight') {
        points.push(new THREE.Vector3(startX, 0.05, 0));
        points.push(new THREE.Vector3(startX, 0.05, S));
        points.push(new THREE.Vector3(startX, 0.05, L * 0.35));
        points.push(new THREE.Vector3(startX, 0.05, L * 0.65));
        points.push(new THREE.Vector3(startX, 0.05, L));
      } else if (maneuver === 'right') {
        points.push(new THREE.Vector3(startX, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-S, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L * 0.35, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L * 0.65, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L, 0.05, -offsetOut));
      } else if (maneuver === 'left') {
        points.push(new THREE.Vector3(startX, 0.05, offsetOut * 0.5));
        points.push(new THREE.Vector3(startX * 0.5 + offsetOut * 0.5, 0.05, offsetOut));
        points.push(new THREE.Vector3(S, 0.05, offsetOut));
        points.push(new THREE.Vector3(L * 0.35, 0.05, offsetOut));
        points.push(new THREE.Vector3(L * 0.65, 0.05, offsetOut));
        points.push(new THREE.Vector3(L, 0.05, offsetOut));
      }
    } else if (dir === 'S') {
      const startX = -offsetIn;
      points.push(new THREE.Vector3(startX, 0.05, L));
      points.push(new THREE.Vector3(startX, 0.05, L * 0.65));
      points.push(new THREE.Vector3(startX, 0.05, L * 0.35));
      points.push(new THREE.Vector3(startX, 0.05, S));

      if (maneuver === 'straight') {
        points.push(new THREE.Vector3(startX, 0.05, 0));
        points.push(new THREE.Vector3(startX, 0.05, -S));
        points.push(new THREE.Vector3(startX, 0.05, -L * 0.35));
        points.push(new THREE.Vector3(startX, 0.05, -L * 0.65));
        points.push(new THREE.Vector3(startX, 0.05, -L));
      } else if (maneuver === 'right') {
        points.push(new THREE.Vector3(startX, 0.05, offsetOut));
        points.push(new THREE.Vector3(offsetOut, 0.05, offsetOut));
        points.push(new THREE.Vector3(S, 0.05, offsetOut));
        points.push(new THREE.Vector3(L * 0.35, 0.05, offsetOut));
        points.push(new THREE.Vector3(L * 0.65, 0.05, offsetOut));
        points.push(new THREE.Vector3(L, 0.05, offsetOut));
      } else if (maneuver === 'left') {
        points.push(new THREE.Vector3(startX, 0.05, -offsetOut * 0.5));
        points.push(new THREE.Vector3(startX * 0.5 - offsetOut * 0.5, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-S, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L * 0.35, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L * 0.65, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-L, 0.05, -offsetOut));
      }
    } else if (dir === 'E') {
      const startZ = offsetIn;
      points.push(new THREE.Vector3(L, 0.05, startZ));
      points.push(new THREE.Vector3(L * 0.65, 0.05, startZ));
      points.push(new THREE.Vector3(L * 0.35, 0.05, startZ));
      points.push(new THREE.Vector3(S, 0.05, startZ));

      if (maneuver === 'straight') {
        points.push(new THREE.Vector3(0, 0.05, startZ));
        points.push(new THREE.Vector3(-S, 0.05, startZ));
        points.push(new THREE.Vector3(-L * 0.35, 0.05, startZ));
        points.push(new THREE.Vector3(-L * 0.65, 0.05, startZ));
        points.push(new THREE.Vector3(-L, 0.05, startZ));
      } else if (maneuver === 'right') {
        points.push(new THREE.Vector3(-offsetOut, 0.05, startZ));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -offsetOut));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -S));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -L * 0.35));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -L * 0.65));
        points.push(new THREE.Vector3(-offsetOut, 0.05, -L));
      } else if (maneuver === 'left') {
        points.push(new THREE.Vector3(-offsetOut * 0.5, 0.05, startZ));
        points.push(new THREE.Vector3(-offsetOut, 0.05, startZ * 0.5 + offsetOut * 0.5));
        points.push(new THREE.Vector3(-offsetOut, 0.05, S));
        points.push(new THREE.Vector3(-offsetOut, 0.05, L * 0.35));
        points.push(new THREE.Vector3(-offsetOut, 0.05, L * 0.65));
        points.push(new THREE.Vector3(-offsetOut, 0.05, L));
      }
    } else if (dir === 'W') {
      const startZ = -offsetIn;
      points.push(new THREE.Vector3(-L, 0.05, startZ));
      points.push(new THREE.Vector3(-L * 0.65, 0.05, startZ));
      points.push(new THREE.Vector3(-L * 0.35, 0.05, startZ));
      points.push(new THREE.Vector3(-S, 0.05, startZ));

      if (maneuver === 'straight') {
        points.push(new THREE.Vector3(0, 0.05, startZ));
        points.push(new THREE.Vector3(S, 0.05, startZ));
        points.push(new THREE.Vector3(L * 0.35, 0.05, startZ));
        points.push(new THREE.Vector3(L * 0.65, 0.05, startZ));
        points.push(new THREE.Vector3(L, 0.05, startZ));
      } else if (maneuver === 'right') {
        points.push(new THREE.Vector3(offsetOut, 0.05, startZ));
        points.push(new THREE.Vector3(offsetOut, 0.05, offsetOut));
        points.push(new THREE.Vector3(offsetOut, 0.05, S));
        points.push(new THREE.Vector3(offsetOut, 0.05, L * 0.35));
        points.push(new THREE.Vector3(offsetOut, 0.05, L * 0.65));
        points.push(new THREE.Vector3(offsetOut, 0.05, L));
      } else if (maneuver === 'left') {
        points.push(new THREE.Vector3(offsetOut * 0.5, 0.05, startZ));
        points.push(new THREE.Vector3(offsetOut, 0.05, startZ * 0.5 - offsetOut * 0.5));
        points.push(new THREE.Vector3(offsetOut, 0.05, -S));
        points.push(new THREE.Vector3(offsetOut, 0.05, -L * 0.35));
        points.push(new THREE.Vector3(offsetOut, 0.05, -L * 0.65));
        points.push(new THREE.Vector3(offsetOut, 0.05, -L));
      }
    }

    return points;
  }

  findApproachEndT(curve, dir) {
    // The shared lane continues until the path reaches the central conflict
    // area. This avoids treating a turning vehicle and a straight vehicle as
    // unrelated while they are still physically in the same lane.
    const radius = this.halfRoadWidth + 1.0;
    let endT = 0.5;
    for (let i = 1; i <= 100; i++) {
      const t = i / 100;
      const p = curve.getPointAt(t);
      if (Math.hypot(p.x, p.z) <= radius) {
        endT = Math.min(0.65, t + 0.05);
        break;
      }
    }
    return endT;
  }

  findStopT(curve, dir, stopDist) {
    let low = 0;
    let high = 0.6;
    for (let i = 0; i < 20; i++) {
      const mid = (low + high) / 2;
      const pt = curve.getPointAt(mid);
      let dist = 0;
      if (dir === 'N') dist = -pt.z;
      else if (dir === 'S') dist = pt.z;
      else if (dir === 'E') dist = pt.x;
      else if (dir === 'W') dist = -pt.x;

      if (dist > stopDist) {
        low = mid;
      } else {
        high = mid;
      }
    }
    return (low + high) / 2;
  }

  getRandomPathForDirection(dir) {
    const matching = this.paths.filter(p => p.direction === dir);
    if (matching.length === 0) return this.paths[0];
    return matching[Math.floor(Math.random() * matching.length)];
  }

  getStraightPathForDirection(dir) {
    const matching = this.paths.filter(p => p.direction === dir && p.maneuver === 'straight');
    if (matching.length === 0) return this.getRandomPathForDirection(dir);
    return matching[0];
  }
}
