import * as THREE from 'three';
import { Vehicle } from './Vehicle.js';

/**
 * Coordinates vehicle spawning, lane following, intersection reservations,
 * emergency priority and telemetry.
 */
export class VehicleManager {
  constructor(scene, pathGenerator, trafficLightSystem) {
    this.scene = scene;
    this.pathGen = pathGenerator;
    this.trafficLights = trafficLightSystem;

    this.vehicles = [];
    this.spawnRate = 28;
    this.spawnTimer = 0;
    this.globalSpeedMult = 1.0;
    this.spawnDirectionIndex = 0;

    // Safety tuning is kept here so the simulation has one place where the
    // multi-vehicle coordination rules are defined.
    // MAX_VEHICLES doubles as the user-controlled "active vehicles" target
    // (see setTargetVehicleCount). The spawn loop in update() never creates
    // more than this many vehicles at once; as vehicles exit the far end of
    // the intersection new ones spawn in to keep the count near the target.
    this.MAX_VEHICLES = 8;
    this.MIN_SPAWN_HEADWAY = 18.0;
    this.INTERSECTION_CONFLICT_RADIUS = 0;
    this.MIN_CONFLICT_GAP = 1.0;
    this.PREDICTION_HORIZON = 1.8;
    this.SAFE_LATERAL_GAP = 0.35;
    this.PHYSICAL_SAFETY_MARGIN = 0.35;

    this.emergencyVehicle = null;
    this.selectedVehicle = null;

    this.showColliders = false;
    this.colliderHelpers = new Map();

    this.pathLinesGroup = new THREE.Group();
    this.pathLinesGroup.visible = false;
    this.scene.add(this.pathLinesGroup);
    this.buildPathDebugLines();
    this.refreshConflictGeometry();
  }

  refreshConflictGeometry() {
    this.INTERSECTION_CONFLICT_RADIUS = this.pathGen.halfRoadWidth + 5.0;
  }

  /**
   * User-facing control: how many vehicles should be active in the scene at
   * once (Normal 5-10, Heavy 15-20, Traffic Jam 20-30). This directly caps
   * the spawn loop in update(), and drives the spawn rate fast enough that
   * the simulation reaches the target quickly, then simply maintains it as
   * vehicles arrive/exit.
   */
  setTargetVehicleCount(count) {
    this.MAX_VEHICLES = Math.max(1, Math.round(count));
    // Fill toward the target briskly without dumping every vehicle in on the
    // same frame; higher targets get a proportionally faster spawn rate.
    this.spawnRate = Math.max(12, Math.min(90, this.MAX_VEHICLES * 4));
    this.spawnTimer = 0;
  }

  updateLanes(pathGenerator) {
    this.pathGen = pathGenerator;
    this.refreshConflictGeometry();
    this.clearAllVehicles();
    this.buildPathDebugLines();
  }

  buildPathDebugLines() {
    while (this.pathLinesGroup.children.length > 0) {
      const obj = this.pathLinesGroup.children[0];
      this.pathLinesGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    const colors = { N: 0x38bdf8, S: 0x10b981, E: 0xf59e0b, W: 0xa855f7 };
    this.pathGen.paths.forEach(p => {
      const geo = new THREE.BufferGeometry().setFromPoints(p.curve.getPoints(60));
      const mat = new THREE.LineBasicMaterial({
        color: colors[p.direction] || 0x00ffff,
        transparent: true,
        opacity: 0.75
      });
      const line = new THREE.Line(geo, mat);
      line.position.y = 0.15;
      this.pathLinesGroup.add(line);
    });
  }

  setPathLinesVisible(visible) {
    this.pathLinesGroup.visible = visible;
  }

  setCollidersVisible(visible) {
    this.showColliders = visible;
    this.colliderHelpers.forEach(h => { h.visible = visible; });
  }

  triggerEmergencyAmbulance(direction = 'N') {
    if (this.emergencyVehicle && !this.emergencyVehicle.isFinished) {
      this.removeVehicle(this.emergencyVehicle);
    }

    const path = this.pathGen.getStraightPathForDirection(direction);
    const amb = new Vehicle(path, 'ambulance', true);

    // Position ambulance 30m before stop line for immediate high-impact preemption action!
    const totalLen = path.length;
    const stopDist = path.stopT * totalLen;
    const startDist = Math.max(5.0, stopDist - 30.0);
    amb.distanceTraveled = startDist;
    amb.t = startDist / totalLen;
    amb.currentSpeed = amb.desiredSpeed;
    amb.updateTransform();

    this.vehicles.push(amb);
    this.scene.add(amb.mesh);
    this.emergencyVehicle = amb;
    this.selectedVehicle = amb;
    this.trafficLights.setEmergency(true, direction);

    // Clear out regular traffic ahead on the approach corridor
    this.vehicles.forEach(v => {
      if (v !== amb && !v.isEmergency && v.pathData.direction === direction) {
        if (v.distanceTraveled < stopDist + 15) {
          v.currentSpeed = Math.max(v.currentSpeed, 16.0);
        }
      }
    });

    return amb;
  }

  /** Pick a route while keeping traffic distributed across the four approaches. */
  spawnRandomVehicle() {
    const directions = ['N', 'E', 'S', 'W'];
    let selected = null;

    // Try each approach once so one blocked entry does not stall the entire
    // spawner and traffic remains visually ordered rather than random-clustered.
    for (let attempt = 0; attempt < directions.length; attempt++) {
      const dir = directions[(this.spawnDirectionIndex + attempt) % directions.length];
      const candidates = this.pathGen.paths.filter(p => p.direction === dir);
      if (!candidates.length) continue;

      // Prefer a lane with the least traffic near its entry.
      candidates.sort((a, b) => this.getEntryOccupancy(a) - this.getEntryOccupancy(b));
      const path = candidates[0];
      if (!this.isEntryBlocked(path)) {
        selected = path;
        this.spawnDirectionIndex = (directions.indexOf(dir) + 1) % directions.length;
        break;
      }
    }

    if (!selected) return false;

    const rand = Math.random();
    let type = 'sedan';
    if (rand < 0.22) type = 'suv';
    else if (rand < 0.35) type = 'bus';

    const vehicle = new Vehicle(selected, type, false);
    this.vehicles.push(vehicle);
    this.scene.add(vehicle.mesh);

    if (this.showColliders) {
      const boxHelper = new THREE.BoxHelper(vehicle.mesh, 0x00ffcc);
      this.scene.add(boxHelper);
      this.colliderHelpers.set(vehicle.id, boxHelper);
    }
    return true;
  }

  getEntryOccupancy(path) {
    return this.vehicles.reduce((count, v) => {
      if (v.pathData.laneKey !== path.laneKey) return count;
      return count + (v.distanceTraveled < this.MIN_SPAWN_HEADWAY ? 1 : 0);
    }, 0);
  }

  isEntryBlocked(path) {
    const entry = path.curve.getPointAt(0);
    return this.vehicles.some(v => {
      if (v.isFinished || v.pathData.laneKey !== path.laneKey) return false;
      const distanceAlong = v.distanceTraveled;
      const spatial = Math.hypot(v.positionVec.x - entry.x, v.positionVec.z - entry.z);
      return distanceAlong < this.MIN_SPAWN_HEADWAY || spatial < this.MIN_SPAWN_HEADWAY;
    });
  }

  getLaneLeader(vehicle, laneGroups) {
    const exactGroup = laneGroups.get(vehicle.pathData.id) || [];
    const exactIndex = exactGroup.indexOf(vehicle);
    let leader = exactIndex > 0 ? exactGroup[exactIndex - 1] : null;

    // 1. Approach Lane leader check (before intersection)
    if (vehicle.t <= vehicle.pathData.approachEndT) {
      const laneGroup = laneGroups.get(vehicle.pathData.laneKey) || [];
      for (const candidate of laneGroup) {
        if (candidate === vehicle || candidate.isFinished) continue;
        if (candidate.distanceTraveled <= vehicle.distanceTraveled) continue;
        if (candidate.t > candidate.pathData.approachEndT) continue;
        if (!leader || candidate.distanceTraveled > leader.distanceTraveled) {
          leader = candidate;
        }
      }
    }

    // 2. Exit Lane leader check (after intersection)
    if (vehicle.t > 0.5 && vehicle.pathData.exitLaneKey) {
      for (const candidate of this.vehicles) {
        if (candidate === vehicle || candidate.isFinished) continue;
        if (candidate.t <= 0.4) continue;
        if (candidate.pathData.exitLaneKey === vehicle.pathData.exitLaneKey) {
          if (candidate.distanceTraveled > vehicle.distanceTraveled) {
            if (!leader || candidate.distanceTraveled < leader.distanceTraveled) {
              leader = candidate;
            }
          }
        }
      }
    }

    // 3. Universal Spatial Forward Proximity Cone leader check
    // Scans all active vehicles in front of `vehicle` along its 3D heading vector
    const vPos = vehicle.positionVec;
    const vHeading = vehicle.tangentVec;
    let closestAheadDist = leader ? (leader.distanceTraveled - vehicle.distanceTraveled) : 999;

    for (const candidate of this.vehicles) {
      if (candidate === vehicle || candidate.isFinished) continue;

      const relX = candidate.positionVec.x - vPos.x;
      const relZ = candidate.positionVec.z - vPos.z;

      // Project candidate displacement onto vehicle's heading vector
      const forwardDist = relX * vHeading.x + relZ * vHeading.z;

      if (forwardDist > 0.2 && forwardDist < 45.0) {
        // Lateral displacement relative to heading ray
        const lateralDist = Math.abs(-relX * vHeading.z + relZ * vHeading.x);
        const maxLateral = (vehicle.width + candidate.width) * 0.5 + 0.65;

        if (lateralDist <= maxLateral) {
          if (forwardDist < closestAheadDist) {
            closestAheadDist = forwardDist;
            leader = candidate;
          }
        }
      }
    }

    return leader;
  }

  getConflictEntry(vehicle, conflict) {
    const isA = vehicle.pathData.id === conflict.pathA;
    const conflictT = isA ? conflict.tA : conflict.tB;
    const windowStart = isA ? conflict.tStartA : conflict.tStartB;
    const windowEnd = isA ? conflict.tEndA : conflict.tEndB;
    const centerDistance = conflictT * vehicle.pathData.length;
    const frontDistance = centerDistance - vehicle.length * 0.5;
    const distanceToConflict = frontDistance - vehicle.distanceTraveled;

    return {
      conflictT,
      windowStart,
      windowEnd,
      distanceToConflict,
      inside: vehicle.t >= windowStart && vehicle.t <= windowEnd,
      cleared: vehicle.t > windowEnd
    };
  }

  /**
   * Return the strongest crossing reservation constraint for a vehicle.
   * A crossing vehicle is treated as a virtual lead vehicle so IDM performs
   * the actual braking rather than teleporting/stopping the car.
   */
  getIntersectionConflictConstraint(vehicle) {
    const radialDistance = Math.hypot(vehicle.positionVec.x, vehicle.positionVec.z);
    const reach = vehicle.currentSpeed * this.PREDICTION_HORIZON + vehicle.length;
    if (radialDistance > this.INTERSECTION_CONFLICT_RADIUS + reach) return null;

    let best = null;

    for (const other of this.vehicles) {
      if (other === vehicle || other.isFinished) continue;
      if (vehicle.pathData.id === other.pathData.id) continue;

      const emergencyPriority = other.isEmergency && !vehicle.isEmergency;
      const myEmergency = vehicle.isEmergency && !other.isEmergency;

      // Ambulance NEVER yields to regular traffic
      if (myEmergency) continue;

      // Regular traffic ALWAYS yields to Ambulance
      if (emergencyPriority) {
        const conflict = this.pathGen.getPathConflict(vehicle.pathData.id, other.pathData.id);
        const mine = conflict ? this.getConflictEntry(vehicle, conflict) : { distanceToConflict: 15.0 };
        const constraint = {
          leadGap: Math.max(0.1, mine.distanceToConflict - (vehicle.length + other.length) * 0.5),
          deltaV: vehicle.currentSpeed,
          otherVehicle: other,
          distanceToConflict: mine.distanceToConflict
        };
        if (!best || constraint.distanceToConflict < best.distanceToConflict) {
          best = constraint;
        }
        continue;
      }

      const otherIsRed = this.trafficLights.isRed(other.pathData.direction);
      const otherBeforeStop = other.t <= (other.pathData.stopT || 0.45);
      if (otherIsRed && (otherBeforeStop || other.stoppedAtLight)) {
        continue;
      }

      const conflict = this.pathGen.getPathConflict(vehicle.pathData.id, other.pathData.id);
      if (!conflict) continue;

      const mine = this.getConflictEntry(vehicle, conflict);
      const theirs = this.getConflictEntry(other, conflict);
      if (mine.cleared && theirs.cleared) continue;

      // Once I have passed this conflict point, do not brake because another
      // vehicle is still approaching a point behind me.
      if (mine.distanceToConflict < -vehicle.length) continue;

      const physicallyClose = Math.hypot(
        vehicle.positionVec.x - other.positionVec.x,
        vehicle.positionVec.z - other.positionVec.z
      ) < (vehicle.length + other.length) * 0.5 + this.PHYSICAL_SAFETY_MARGIN;

      let yieldToOther = false;

      if (theirs.inside && !mine.cleared) {
        yieldToOther = true;
      } else if (!mine.cleared && !theirs.cleared) {
        // Straight traffic on green has priority over opposing left turns
        const vehicleIsStraightGreen = vehicle.pathData.maneuver === 'straight' && this.trafficLights.isGreen(vehicle.pathData.direction);
        const otherIsLeft = other.pathData.maneuver === 'left';

        if (vehicleIsStraightGreen && otherIsLeft && !theirs.inside) {
          yieldToOther = false;
        } else {
          const mySpeed = Math.max(1.5, vehicle.currentSpeed);
          const otherSpeed = Math.max(1.5, other.currentSpeed);
          const myETA = Math.max(0, mine.distanceToConflict) / mySpeed;
          const otherETA = Math.max(0, theirs.distanceToConflict) / otherSpeed;

          const otherWins = otherETA < myETA - 0.15 ||
            (Math.abs(otherETA - myETA) <= 0.15 && other.id < vehicle.id);
          yieldToOther = otherWins && otherETA <= this.PREDICTION_HORIZON + 1.0;
        }
      }

      if (!yieldToOther && !physicallyClose) continue;

      if (physicallyClose) yieldToOther = other.isEmergency ? !vehicle.isEmergency : true;
      if (!yieldToOther) continue;

      const halfLength = (vehicle.length + other.length) * 0.5;
      const leadGap = Math.max(0.15, mine.distanceToConflict - halfLength);
      const constraint = {
        leadGap,
        deltaV: vehicle.currentSpeed - other.currentSpeed,
        otherVehicle: other,
        distanceToConflict: mine.distanceToConflict
      };

      if (!best || constraint.distanceToConflict < best.distanceToConflict) {
        best = constraint;
      }
    }

    return best;
  }

  /**
   * Final geometric guard after movement.
   */
  footprintsOverlap(a, b) {
    const ax = new THREE.Vector2(a.tangentVec.x, a.tangentVec.z).normalize();
    const ay = new THREE.Vector2(-ax.y, ax.x);
    const bx = new THREE.Vector2(b.tangentVec.x, b.tangentVec.z).normalize();
    const by = new THREE.Vector2(-bx.y, bx.x);
    const center = new THREE.Vector2(
      b.positionVec.x - a.positionVec.x,
      b.positionVec.z - a.positionVec.z
    );

    const axes = [ax, ay, bx, by];
    for (const axis of axes) {
      const ra = Math.abs(axis.dot(ax)) * a.length * 0.5 +
        Math.abs(axis.dot(ay)) * a.width * 0.5;
      const rb = Math.abs(axis.dot(bx)) * b.length * 0.5 +
        Math.abs(axis.dot(by)) * b.width * 0.5;
      if (Math.abs(axis.dot(center)) > ra + rb + this.PHYSICAL_SAFETY_MARGIN) {
        return false;
      }
    }
    return true;
  }

  resolvePhysicalConflicts() {
    for (let i = 0; i < this.vehicles.length; i++) {
      const a = this.vehicles[i];
      if (a.isFinished) continue;

      for (let j = i + 1; j < this.vehicles.length; j++) {
        const b = this.vehicles[j];
        if (b.isFinished) continue;

        // Apply physical bounding box collision separation universally across all vehicles
        if (!this.footprintsOverlap(a, b)) continue;

        const sameLane = a.pathData.laneKey === b.pathData.laneKey &&
          a.t <= a.pathData.approachEndT && b.t <= b.pathData.approachEndT;

        let yielding;
        if (a.isEmergency !== b.isEmergency) {
          yielding = a.isEmergency ? b : a;
        } else if (sameLane) {
          yielding = a.distanceTraveled < b.distanceTraveled ? a : b;
        } else {
          yielding = a.distanceTraveled < b.distanceTraveled ? a : b;
        }

        const correction = Math.max(0.35, Math.min(2.0, Math.max(yielding.length, yielding.width) * 0.35));
        yielding.distanceTraveled = Math.max(0, yielding.distanceTraveled - correction);
        yielding.t = Math.min(1, yielding.distanceTraveled / yielding.pathData.length);
        yielding.currentSpeed = Math.min(yielding.currentSpeed, 0.2);
        yielding.acceleration = Math.min(yielding.acceleration, -4.0);
        yielding.isBraking = true;
        yielding.updateTransform();
      }
    }
  }

  update(delta, pedestrians) {
    const spawnInterval = 60.0 / Math.max(1, this.spawnRate);
    this.spawnTimer += delta;

    // Accumulator preserves fractional time; at high spawn rates the simulation
    // can create multiple vehicles in a long frame without losing spawn events.
    while (this.spawnTimer >= spawnInterval && this.vehicles.length < this.MAX_VEHICLES) {
      const spawned = this.spawnRandomVehicle();
      if (!spawned) break;
      this.spawnTimer -= spawnInterval;
    }

    const laneGroups = new Map();
    const exactPathGroups = new Map();
    this.vehicles.forEach(v => {
      if (!laneGroups.has(v.pathData.laneKey)) laneGroups.set(v.pathData.laneKey, []);
      if (!exactPathGroups.has(v.pathData.id)) exactPathGroups.set(v.pathData.id, []);
      laneGroups.get(v.pathData.laneKey).push(v);
      exactPathGroups.get(v.pathData.id).push(v);
    });

    laneGroups.forEach(group => group.sort((a, b) => b.distanceTraveled - a.distanceTraveled));
    exactPathGroups.forEach(group => group.sort((a, b) => b.distanceTraveled - a.distanceTraveled));

    // Update the vehicles that are closest to a conflict first. This makes the
    // reservation decision deterministic and prevents two crossing cars from
    // both entering the centre during the same frame.
    const updateOrder = [...this.vehicles].sort((a, b) => {
      if (a.isEmergency !== b.isEmergency) return a.isEmergency ? -1 : 1;
      const da = this.getNearestConflictDistance(a);
      const db = this.getNearestConflictDistance(b);
      return da - db;
    });

    const toRemove = [];
    for (const v of updateOrder) {
      if (v.isFinished) continue;
      const leader = this.getLaneLeader(v, laneGroups);
      const conflictConstraint = this.getIntersectionConflictConstraint(v);
      v.update(delta, this.globalSpeedMult, this.trafficLights, leader, pedestrians, conflictConstraint);

      if (this.showColliders && this.colliderHelpers.has(v.id)) {
        this.colliderHelpers.get(v.id).update();
      }
      if (v.isFinished) toRemove.push(v);
    }

    this.resolvePhysicalConflicts();
    toRemove.forEach(v => this.removeVehicle(v));

    if (this.emergencyVehicle && this.emergencyVehicle.isFinished) {
      this.trafficLights.setEmergency(false);
      this.emergencyVehicle = null;
    }
  }

  getNearestConflictDistance(vehicle) {
    let best = Infinity;
    for (const other of this.vehicles) {
      if (other === vehicle || other.isFinished) continue;
      const conflict = this.pathGen.getPathConflict(vehicle.pathData.id, other.pathData.id);
      if (!conflict) continue;
      const mine = this.getConflictEntry(vehicle, conflict);
      if (mine.distanceToConflict >= 0) best = Math.min(best, mine.distanceToConflict);
    }
    return best === Infinity ? 10000 : best;
  }

  removeVehicle(v) {
    const idx = this.vehicles.indexOf(v);
    if (idx !== -1) this.vehicles.splice(idx, 1);
    if (this.selectedVehicle === v) this.selectedVehicle = null;
    if (this.colliderHelpers.has(v.id)) {
      this.scene.remove(this.colliderHelpers.get(v.id));
      this.colliderHelpers.delete(v.id);
    }
    v.dispose();
  }

  clearAllVehicles() {
    this.vehicles.forEach(v => {
      if (this.colliderHelpers.has(v.id)) this.scene.remove(this.colliderHelpers.get(v.id));
      v.dispose();
    });
    this.vehicles = [];
    this.colliderHelpers.clear();
    this.emergencyVehicle = null;
    this.selectedVehicle = null;
    this.trafficLights.setEmergency(false);
  }

  getTelemetryStats() {
    const total = this.vehicles.length;
    let totalSpeed = 0;
    let movingCount = 0;
    const queues = { N: 0, S: 0, E: 0, W: 0 };

    this.vehicles.forEach(v => {
      const speedKmH = v.currentSpeed * 3.6;
      totalSpeed += speedKmH;
      if (speedKmH > 3.0) movingCount++;
      if (v.currentSpeed < 1.8 && v.t < v.pathData.stopT + 0.05) {
        queues[v.pathData.direction]++;
      }
    });

    return {
      vehicleCount: total,
      avgSpeed: total > 0 ? Math.round(totalSpeed / total) : 0,
      efficiency: total > 0 ? Math.round((movingCount / total) * 100) : 100,
      queues
    };
  }
}
