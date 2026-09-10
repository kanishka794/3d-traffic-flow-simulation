import * as THREE from 'three';
import { Pedestrian } from './Pedestrian.js';

/**
 * PedestrianManager
 * Spawns and coordinates groups of pedestrians traversing the 4 crosswalks.
 */
export class PedestrianManager {
  constructor(scene, trafficLights, lanesPerDirection = 2, laneWidth = 3.8) {
    this.scene = scene;
    this.trafficLights = trafficLights;
    this.lanesPerDirection = lanesPerDirection;
    this.laneWidth = laneWidth;
    this.enabled = true;
    this.pedestrians = [];

    this.buildPedestrians();
  }

  rebuild(lanesPerDirection) {
    this.lanesPerDirection = lanesPerDirection;
    this.clear();
    this.buildPedestrians();
  }

  clear() {
    this.pedestrians.forEach(p => p.dispose());
    this.pedestrians = [];
  }

  buildPedestrians() {
    const halfW = (this.lanesPerDirection * 2 * this.laneWidth) / 2;
    const cwDist = halfW + 2.2;
    const curbExtent = halfW + 1.8;

    // Crosswalk definitions: start and end curb positions
    // 1. North Crosswalk (Runs West <-> East, Axis EW)
    // 2. South Crosswalk (Runs West <-> East, Axis EW)
    // 3. East Crosswalk (Runs North <-> South, Axis NS)
    // 4. West Crosswalk (Runs North <-> South, Axis NS)

    const crosswalkConfigs = [
      {
        id: 'CW_North',
        axis: 'EW',
        p1: new THREE.Vector3(-curbExtent, 0.1, -cwDist),
        p2: new THREE.Vector3(curbExtent, 0.1, -cwDist)
      },
      {
        id: 'CW_South',
        axis: 'EW',
        p1: new THREE.Vector3(curbExtent, 0.1, cwDist),
        p2: new THREE.Vector3(-curbExtent, 0.1, cwDist)
      },
      {
        id: 'CW_East',
        axis: 'NS',
        p1: new THREE.Vector3(cwDist, 0.1, -curbExtent),
        p2: new THREE.Vector3(cwDist, 0.1, curbExtent)
      },
      {
        id: 'CW_West',
        axis: 'NS',
        p1: new THREE.Vector3(-cwDist, 0.1, curbExtent),
        p2: new THREE.Vector3(-cwDist, 0.1, -curbExtent)
      }
    ];

    crosswalkConfigs.forEach(cfg => {
      // Spawn 2 pedestrians per crosswalk (one from each side)
      const ped1 = new Pedestrian(cfg.id, 0, cfg.p1, cfg.p2, cfg.axis);
      this.pedestrians.push(ped1);
      this.scene.add(ped1.group);

      const ped2 = new Pedestrian(cfg.id, 1, cfg.p2, cfg.p1, cfg.axis);
      this.pedestrians.push(ped2);
      this.scene.add(ped2.group);
    });
  }

  update(delta) {
    this.pedestrians.forEach(p => {
      p.update(delta, this.trafficLights, this.enabled);
    });
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }
}
