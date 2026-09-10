import * as THREE from 'three';
import { SceneManager } from './SceneManager.js';
import { CameraSystem } from './CameraSystem.js';
import { RoadNetwork } from '../environment/RoadNetwork.js';
import { PathGenerator } from '../traffic/PathGenerator.js';
import { TrafficLightSystem } from '../traffic/TrafficLightSystem.js';
import { VehicleManager } from '../vehicles/VehicleManager.js';
import { PedestrianManager } from '../pedestrians/PedestrianManager.js';
import { ParticleSystem } from '../effects/ParticleSystem.js';
import { SoundManager } from '../audio/SoundManager.js';
import { UIController } from '../ui/UIController.js';

/**
 * SimulationManager
 * Central coordinator and game loop engine for the 3D Traffic Simulation.
 */
export class SimulationManager {
  constructor(container) {
    this.container = container;
    this.lanesPerDirection = 2;

    // 1. Scene Manager
    this.sceneMgr = new SceneManager(this.container);

    // 2. Camera System
    this.cameraSystem = new CameraSystem(this.sceneMgr.camera, this.sceneMgr.renderer.domElement);

    // 3. Path Generator
    this.pathGen = new PathGenerator(this.lanesPerDirection);

    // 4. Road Network Environment
    this.roadNetwork = new RoadNetwork(this.sceneMgr.scene, this.lanesPerDirection);

    // 5. Traffic Light System
    this.trafficLights = new TrafficLightSystem(this.sceneMgr.scene, this.lanesPerDirection);

    // 6. Vehicle Manager
    this.vehicleMgr = new VehicleManager(this.sceneMgr.scene, this.pathGen, this.trafficLights);

    // 7. Pedestrian Manager
    this.pedestrianMgr = new PedestrianManager(this.sceneMgr.scene, this.trafficLights, this.lanesPerDirection);

    // 8. Particle System
    this.particleSystem = new ParticleSystem(this.sceneMgr.scene);

    // 9. Sound Synthesizer
    this.soundMgr = new SoundManager();

    // 10. UI Controller
    this.ui = new UIController(this);

    // Loop variables
    this.clock = new THREE.Clock();
    this.frameCount = 0;
    this.fpsTimer = 0;
    this.currentFps = 60;
    this.simulationActive = false;

    // Start the render loop. Simulation updates begin after ENTER SIMULATION.

    this.setScenario('normal');
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  // Active-vehicle-count ranges for each traffic mode, per spec:
  // Normal 5-10, Heavy 15-20, Traffic Jam 20-30.
  static VEHICLE_COUNT_RANGES = {
    normal: { min: 5, max: 10, default: 8 },
    heavy: { min: 15, max: 20, default: 18 },
    jam: { min: 20, max: 30, default: 25 }
  };

  setScenario(scenarioName) {
    this.ui.setScenarioUI(scenarioName);

    // Scenarios change traffic behaviour/signals, not the amount of traffic.
    // Vehicle creation remains explicitly controlled by the user's spawn-rate slider.
    if (scenarioName !== 'emergency' && this.vehicleMgr.emergencyVehicle) {
      this.vehicleMgr.removeVehicle(this.vehicleMgr.emergencyVehicle);
      this.trafficLights.setEmergency(false);
      this.soundMgr.setEmergencySiren(false);
      this.ui.hideEmergencyBanner();
    }

    if (scenarioName === 'normal') {
      this.setTrafficMode('normal', SimulationManager.VEHICLE_COUNT_RANGES.normal.default, 1.0);
      this.trafficLights.setAdaptive(false);
      this.trafficLights.nsGreenDuration = 12;
      this.trafficLights.ewGreenDuration = 12;
      this.ui.el.toggleAdaptiveSignal.checked = false;
      this.ui.el.statSignalMode.textContent = 'Fixed';
      this.soundMgr.setEmergencySiren(false);
    } else if (scenarioName === 'heavy') {
      this.setTrafficMode('heavy', SimulationManager.VEHICLE_COUNT_RANGES.heavy.default, 0.9);
      this.trafficLights.setAdaptive(false);
      this.trafficLights.nsGreenDuration = 14;
      this.trafficLights.ewGreenDuration = 14;
      this.ui.el.toggleAdaptiveSignal.checked = false;
      this.ui.el.statSignalMode.textContent = 'Fixed';
      this.soundMgr.setEmergencySiren(false);
    } else if (scenarioName === 'jam') {
      this.setTrafficMode('jam', SimulationManager.VEHICLE_COUNT_RANGES.jam.default, 0.65);
      this.trafficLights.setAdaptive(false);
      this.trafficLights.nsGreenDuration = 7;
      this.trafficLights.ewGreenDuration = 7;
      this.ui.el.toggleAdaptiveSignal.checked = false;
      this.ui.el.statSignalMode.textContent = 'Fixed';
      this.soundMgr.setEmergencySiren(false);
    } else if (scenarioName === 'emergency') {
      this.triggerEmergencyAmbulance('N');
    } else if (scenarioName === 'adaptive') {
      this.setTrafficMode('heavy', SimulationManager.VEHICLE_COUNT_RANGES.heavy.default, 1.0);
      this.trafficLights.setAdaptive(true);
      this.ui.el.toggleAdaptiveSignal.checked = true;
      this.ui.el.statSignalMode.textContent = 'Adaptive AI';
      this.soundMgr.setEmergencySiren(false);
    }
  }

  triggerEmergencyAmbulance(direction = 'N') {
    this.ui.setScenarioUI('emergency');
    this.ui.setEmergencyDirectionUI(direction);
    const amb = this.vehicleMgr.triggerEmergencyAmbulance(direction);
    this.soundMgr.setEmergencySiren(true);
    this.ui.setCameraModeUI('chase');
    this.cameraSystem.setMode('chase', amb);
  }

  /**
   * Switches traffic mode (normal/heavy/jam), updates the active-vehicle
   * target count and speed multiplier, and syncs the sidebar controls
   * (mode pills + the Active Vehicles slider's range/value) to match.
   */
  setTrafficMode(mode, vehicleCount, speedMult) {
    const range = SimulationManager.VEHICLE_COUNT_RANGES[mode] || SimulationManager.VEHICLE_COUNT_RANGES.normal;
    const clamped = Math.max(range.min, Math.min(range.max, vehicleCount));

    this.trafficMode = mode;
    this.vehicleMgr.setTargetVehicleCount(clamped);
    this.vehicleMgr.globalSpeedMult = speedMult;

    this.ui.setTrafficModeUI(mode, range, clamped);
    this.ui.el.sliderSpeedMult.value = speedMult;
    this.ui.el.valSpeedMult.textContent = speedMult.toFixed(1) + 'x';
  }

  /** Slider-only update: keeps the current mode but changes the target count within its range. */
  setActiveVehicleCount(count) {
    const mode = this.trafficMode || 'normal';
    const range = SimulationManager.VEHICLE_COUNT_RANGES[mode] || SimulationManager.VEHICLE_COUNT_RANGES.normal;
    const clamped = Math.max(range.min, Math.min(range.max, count));
    this.vehicleMgr.setTargetVehicleCount(clamped);
    this.ui.el.valActiveVehicles.textContent = clamped + ' vehicles';
  }

  setTrafficDensity(spawnRate, speedMult) {
    this.vehicleMgr.spawnRate = spawnRate;
    this.vehicleMgr.globalSpeedMult = speedMult;
    // Apply a new scenario/slider rate immediately without carrying the old
    // accumulator into the new traffic level.
    this.vehicleMgr.spawnTimer = 0;
    this.ui.el.sliderSpawnRate.value = spawnRate;
    this.ui.el.valSpawnRate.textContent = spawnRate + ' veh/min';
    this.ui.el.sliderSpeedMult.value = speedMult;
    this.ui.el.valSpeedMult.textContent = speedMult.toFixed(1) + 'x';
  }

  rebuildRoadLanes(lanes) {
    this.lanesPerDirection = lanes;
    this.pathGen.updateLanes(lanes);
    this.roadNetwork.rebuild(lanes);
    this.trafficLights.rebuild(lanes);
    this.vehicleMgr.updateLanes(this.pathGen);
    this.pedestrianMgr.rebuild(lanes);
  }

  resetSimulation() {
    this.vehicleMgr.clearAllVehicles();
    this.soundMgr.setEmergencySiren(false);
    this.setScenario('normal');
  }

  setSimulationActive(active) {
    this.simulationActive = active;
    this.clock.getDelta();
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);
    if (!this.simulationActive) {
      this.sceneMgr.render();
      return;
    }

    // FPS Meter
    this.frameCount++;
    this.fpsTimer += delta;
    if (this.fpsTimer >= 0.5) {
      this.currentFps = Math.round((this.frameCount / this.fpsTimer));
      this.frameCount = 0;
      this.fpsTimer = 0;
    }

    // 1. Update Traffic Lights (passes queue statistics for adaptive logic)
    const stats = this.vehicleMgr.getTelemetryStats();
    this.trafficLights.update(delta, stats.queues);

    // 2. Update Pedestrians
    this.pedestrianMgr.update(delta);

    // 3. Update Vehicles
    this.vehicleMgr.update(delta, this.pedestrianMgr.pedestrians);

    // Automatically end emergency preemption mode when ambulance finishes its corridor
    if (!this.vehicleMgr.emergencyVehicle && this.trafficLights.emergencyActive) {
      this.trafficLights.setEmergency(false);
      this.soundMgr.setEmergencySiren(false);
      this.ui.hideEmergencyBanner();
    }

    // 4. Update Particle FX
    this.particleSystem.update(delta, this.vehicleMgr.emergencyVehicle, this.vehicleMgr.vehicles);

    // 5. Update Camera System
    this.cameraSystem.update(delta);

    // 6. Update Scene Environment & Day/Night
    this.sceneMgr.update(delta);

    // 7. Update UI HUD
    this.ui.update(this.currentFps);

    // 8. Render WebGL Frame
    this.sceneMgr.render();
  }
}
