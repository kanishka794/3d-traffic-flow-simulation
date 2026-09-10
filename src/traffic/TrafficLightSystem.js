import * as THREE from 'three';

/**
 * TrafficLightSystem
 * Manages 3D physical traffic signal assemblies, pedestrian signal heads,
 * and the Finite State Machine (FSM) controlling signal timings.
 * Supports Fixed Cycle, Queue-Adaptive AI Optimization, and Emergency Preemption.
 */
export class TrafficLightSystem {
  constructor(scene, lanesPerDirection = 2, laneWidth = 3.8) {
    this.scene = scene;
    this.lanesPerDirection = lanesPerDirection;
    this.laneWidth = laneWidth;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Timings in seconds
    this.nsGreenDuration = 12;
    this.ewGreenDuration = 12;
    this.yellowDuration = 3;
    this.allRedDuration = 1.5;

    // FSM States
    this.STATES = {
      NS_GREEN: 'NS_GREEN',
      NS_YELLOW: 'NS_YELLOW',
      ALL_RED_1: 'ALL_RED_1',
      EW_GREEN: 'EW_GREEN',
      EW_YELLOW: 'EW_YELLOW',
      ALL_RED_2: 'ALL_RED_2'
    };

    this.currentState = this.STATES.NS_GREEN;
    this.stateTimer = 0;
    this.isAdaptive = false;
    this.emergencyActive = false;
    this.emergencyDirection = null; // 'N', 'S', 'E', or 'W'

    // Visual Mesh references for lights
    this.signals = []; // Array of signal pole object data
    this.pedSignals = [];

    this.buildSignalPoles();
    this.updateVisuals();
  }

  rebuild(lanesPerDirection) {
    this.lanesPerDirection = lanesPerDirection;
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this.signals = [];
    this.pedSignals = [];
    this.buildSignalPoles();
    this.updateVisuals();
  }

  buildSignalPoles() {
    const halfW = (this.lanesPerDirection * 2 * this.laneWidth) / 2;
    const cornerOffset = halfW + 1.2;

    // 4 Corner Positions & Rotations
    const polesData = [
      { id: 'NW', x: -cornerOffset, z: -cornerOffset, rotY: -Math.PI / 2, facingDir: 'S' },
      { id: 'NE', x: cornerOffset, z: -cornerOffset, rotY: Math.PI, facingDir: 'W' },
      { id: 'SE', x: cornerOffset, z: cornerOffset, rotY: Math.PI / 2, facingDir: 'N' },
      { id: 'SW', x: -cornerOffset, z: cornerOffset, rotY: 0, facingDir: 'E' }
    ];

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x27272a, metalness: 0.85, roughness: 0.25 });
    const housingMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.7 });

    polesData.forEach(p => {
      const poleGroup = new THREE.Group();
      poleGroup.position.set(p.x, 0, p.z);
      poleGroup.rotation.y = p.rotY;

      // Vertical Mast Pole
      const poleGeo = new THREE.CylinderGeometry(0.14, 0.18, 7.2, 12);
      const poleMesh = new THREE.Mesh(poleGeo, metalMat);
      poleMesh.position.y = 3.6;
      poleMesh.castShadow = true;
      poleGroup.add(poleMesh);

      // Horizontal Mast Arm extending over lanes
      const armLength = Math.max(5.0, halfW * 0.85);
      const armGeo = new THREE.CylinderGeometry(0.1, 0.1, armLength, 12);
      const armMesh = new THREE.Mesh(armGeo, metalMat);
      armMesh.rotation.z = -Math.PI / 2;
      armMesh.position.set(armLength / 2, 6.8, 0);
      armMesh.castShadow = true;
      poleGroup.add(armMesh);

      // Signal Housing 1 (Overhead Mast)
      const overheadSignal = this.createSignalHead(housingMat, p.facingDir);
      overheadSignal.mesh.position.set(armLength * 0.75, 6.0, 0);
      poleGroup.add(overheadSignal.mesh);
      this.signals.push(overheadSignal);

      // Signal Housing 2 (Pole Mount for pedestrians / curb)
      const curbSignal = this.createSignalHead(housingMat, p.facingDir, 0.7);
      curbSignal.mesh.position.set(0.3, 3.8, 0);
      poleGroup.add(curbSignal.mesh);
      this.signals.push(curbSignal);

      // Pedestrian Signal Box
      const pedSignal = this.createPedestrianHead(housingMat, p.facingDir);
      pedSignal.mesh.position.set(0.3, 2.5, 0.2);
      poleGroup.add(pedSignal.mesh);
      this.pedSignals.push(pedSignal);

      this.group.add(poleGroup);
    });
  }

  createSignalHead(housingMat, facingDir, scale = 1.0) {
    const headGroup = new THREE.Group();
    headGroup.scale.set(scale, scale, scale);

    // Box Housing
    const boxGeo = new THREE.BoxGeometry(0.65, 1.8, 0.4);
    const boxMesh = new THREE.Mesh(boxGeo, housingMat);
    boxMesh.castShadow = true;
    headGroup.add(boxMesh);

    // 3 Lenses: Red (Top), Yellow (Middle), Green (Bottom)
    const lensGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 16);
    lensGeo.rotateX(Math.PI / 2);

    // Materials with dynamic emissive properties
    const redMat = new THREE.MeshStandardMaterial({
      color: 0x330000,
      emissive: 0xff1111,
      emissiveIntensity: 0.1,
      roughness: 0.3
    });
    const redLens = new THREE.Mesh(lensGeo, redMat);
    redLens.position.set(0, 0.55, 0.18);
    headGroup.add(redLens);

    const yellowMat = new THREE.MeshStandardMaterial({
      color: 0x332200,
      emissive: 0xffaa00,
      emissiveIntensity: 0.1,
      roughness: 0.3
    });
    const yellowLens = new THREE.Mesh(lensGeo, yellowMat);
    yellowLens.position.set(0, 0, 0.18);
    headGroup.add(yellowLens);

    const greenMat = new THREE.MeshStandardMaterial({
      color: 0x003311,
      emissive: 0x00ff66,
      emissiveIntensity: 0.1,
      roughness: 0.3
    });
    const greenLens = new THREE.Mesh(lensGeo, greenMat);
    greenLens.position.set(0, -0.55, 0.18);
    headGroup.add(greenLens);

    // Sun Visors / Hoods
    [-0.55, 0, 0.55].forEach(y => {
      const visorGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.2, 12, 1, true, 0, Math.PI);
      visorGeo.rotateX(Math.PI / 2);
      visorGeo.rotateZ(Math.PI);
      const visorMat = new THREE.MeshStandardMaterial({ color: 0x111827, side: THREE.DoubleSide });
      const visor = new THREE.Mesh(visorGeo, visorMat);
      visor.position.set(0, y, 0.22);
      headGroup.add(visor);
    });

    return {
      mesh: headGroup,
      facingDir: facingDir,
      redMat: redMat,
      yellowMat: yellowMat,
      greenMat: greenMat
    };
  }

  createPedestrianHead(housingMat, facingDir) {
    const headGroup = new THREE.Group();
    const boxGeo = new THREE.BoxGeometry(0.4, 0.7, 0.25);
    const boxMesh = new THREE.Mesh(boxGeo, housingMat);
    headGroup.add(boxMesh);

    const lensGeo = new THREE.PlaneGeometry(0.3, 0.26);

    const handMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 0.2
    });
    const handMesh = new THREE.Mesh(lensGeo, handMat);
    handMesh.position.set(0, 0.14, 0.13);
    headGroup.add(handMesh);

    const walkMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.1
    });
    const walkMesh = new THREE.Mesh(lensGeo, walkMat);
    walkMesh.position.set(0, -0.14, 0.13);
    headGroup.add(walkMesh);

    return {
      mesh: headGroup,
      facingDir: facingDir,
      handMat: handMat,
      walkMat: walkMat
    };
  }

  update(delta, queueStats) {
    this.stateTimer += delta;

    if (this.emergencyActive) {
      this.updateEmergencyPreemption(delta);
    } else {
      const currentMax = this.getCurrentPhaseDuration(queueStats);
      if (this.stateTimer >= currentMax) {
        this.advancePhase();
      }
    }

    this.updateVisuals();
  }

  updateEmergencyPreemption(delta) {
    const emergencyIsNS = this.emergencyDirection === 'N' || this.emergencyDirection === 'S';
    const targetGreen = emergencyIsNS ? this.STATES.NS_GREEN : this.STATES.EW_GREEN;

    // Immediately grant green signal state to emergency direction
    if (this.currentState !== targetGreen) {
      this.currentState = targetGreen;
      this.stateTimer = 0;
    }
  }

  getCurrentPhaseDuration(queueStats) {
    if (this.currentState === this.STATES.NS_YELLOW || this.currentState === this.STATES.EW_YELLOW) {
      return this.yellowDuration;
    }
    if (this.currentState === this.STATES.ALL_RED_1 || this.currentState === this.STATES.ALL_RED_2) {
      return this.allRedDuration;
    }

    if (!this.isAdaptive || !queueStats) {
      return this.currentState === this.STATES.NS_GREEN ? this.nsGreenDuration : this.ewGreenDuration;
    }

    // Adaptive Queue-Length Optimization
    const nsQueue = (queueStats.N || 0) + (queueStats.S || 0);
    const ewQueue = (queueStats.E || 0) + (queueStats.W || 0);

    if (this.currentState === this.STATES.NS_GREEN) {
      const weight = (nsQueue + 1) / (ewQueue + 1);
      return Math.min(26, Math.max(5, this.nsGreenDuration * Math.sqrt(weight)));
    } else {
      const weight = (ewQueue + 1) / (nsQueue + 1);
      return Math.min(26, Math.max(5, this.ewGreenDuration * Math.sqrt(weight)));
    }
  }

  getNextPhaseState() {
    switch (this.currentState) {
      case this.STATES.NS_GREEN: return this.STATES.NS_YELLOW;
      case this.STATES.NS_YELLOW: return this.STATES.ALL_RED_1;
      case this.STATES.ALL_RED_1: return this.STATES.EW_GREEN;
      case this.STATES.EW_GREEN: return this.STATES.EW_YELLOW;
      case this.STATES.EW_YELLOW: return this.STATES.ALL_RED_2;
      case this.STATES.ALL_RED_2: return this.STATES.NS_GREEN;
      default: return this.STATES.NS_GREEN;
    }
  }

  advancePhase() {
    this.stateTimer = 0;
    switch (this.currentState) {
      case this.STATES.NS_GREEN:
        this.currentState = this.STATES.NS_YELLOW;
        break;
      case this.STATES.NS_YELLOW:
        this.currentState = this.STATES.ALL_RED_1;
        break;
      case this.STATES.ALL_RED_1:
        this.currentState = this.STATES.EW_GREEN;
        break;
      case this.STATES.EW_GREEN:
        this.currentState = this.STATES.EW_YELLOW;
        break;
      case this.STATES.EW_YELLOW:
        this.currentState = this.STATES.ALL_RED_2;
        break;
      case this.STATES.ALL_RED_2:
        this.currentState = this.STATES.NS_GREEN;
        break;
      default:
        this.currentState = this.STATES.NS_GREEN;
    }
  }

  updateVisuals() {
    const isNSGreen = this.currentState === this.STATES.NS_GREEN;
    const isNSYellow = this.currentState === this.STATES.NS_YELLOW;
    const isEWGreen = this.currentState === this.STATES.EW_GREEN;
    const isEWYellow = this.currentState === this.STATES.EW_YELLOW;

    this.signals.forEach(sig => {
      let state = 'red';
      if (this.emergencyActive) {
        state = (sig.facingDir === this.emergencyDirection) ? 'green' : 'red';
      } else {
        const isNS = sig.facingDir === 'N' || sig.facingDir === 'S';
        if (isNS) {
          if (isNSGreen) state = 'green';
          else if (isNSYellow) state = 'yellow';
          else state = 'red';
        } else {
          if (isEWGreen) state = 'green';
          else if (isEWYellow) state = 'yellow';
          else state = 'red';
        }
      }

      sig.redMat.emissiveIntensity = state === 'red' ? 1.5 : 0.05;
      sig.yellowMat.emissiveIntensity = state === 'yellow' ? 1.5 : 0.05;
      sig.greenMat.emissiveIntensity = state === 'green' ? 1.5 : 0.05;
    });

    this.pedSignals.forEach(ped => {
      const isNS = ped.facingDir === 'N' || ped.facingDir === 'S';
      const isWalk = !this.emergencyActive && ((isNS && isNSGreen) || (!isNS && isEWGreen));

      ped.walkMat.emissiveIntensity = isWalk ? 1.5 : 0.05;
      ped.handMat.emissiveIntensity = !isWalk ? 1.5 : 0.05;
    });
  }

  isGreen(direction) {
    if (this.emergencyActive) {
      return direction === this.emergencyDirection;
    }
    if (direction === 'N' || direction === 'S') {
      return this.currentState === this.STATES.NS_GREEN;
    } else {
      return this.currentState === this.STATES.EW_GREEN;
    }
  }

  isYellow(direction) {
    if (this.emergencyActive) {
      return false;
    }
    if (direction === 'N' || direction === 'S') {
      return this.currentState === this.STATES.NS_YELLOW;
    } else {
      return this.currentState === this.STATES.EW_YELLOW;
    }
  }

  isRed(direction) {
    return !this.isGreen(direction) && !this.isYellow(direction);
  }

  isPedestrianWalk(axis) {
    if (axis === 'NS') {
      return this.currentState === this.STATES.NS_GREEN;
    } else {
      return this.currentState === this.STATES.EW_GREEN;
    }
  }

  setManualPhase(state) {
    if (!Object.values(this.STATES).includes(state)) return;
    this.isAdaptive = false;
    this.currentState = state;
    this.stateTimer = 0;
  }

  setEmergency(active, direction = 'N') {
    this.emergencyActive = active;
    this.emergencyDirection = direction;
  }

  setAdaptive(enabled) {
    this.isAdaptive = enabled;
  }

  getCycleInfo(queueStats) {
    const maxDur = this.getCurrentPhaseDuration(queueStats);
    const remain = Math.max(0, maxDur - this.stateTimer);
    const progress = Math.min(100, Math.max(0, (this.stateTimer / maxDur) * 100));

    let phaseName = 'NS GREEN';
    let phaseClass = 'green';
    if (this.currentState === this.STATES.NS_YELLOW) { phaseName = 'NS YELLOW'; phaseClass = 'yellow'; }
    else if (this.currentState === this.STATES.ALL_RED_1 || this.currentState === this.STATES.ALL_RED_2) { phaseName = 'ALL RED CLEARANCE'; phaseClass = 'red'; }
    else if (this.currentState === this.STATES.EW_GREEN) { phaseName = 'EW GREEN'; phaseClass = 'green'; }
    else if (this.currentState === this.STATES.EW_YELLOW) { phaseName = 'EW YELLOW'; phaseClass = 'yellow'; }

    return {
      phaseName,
      phaseClass,
      remainingSeconds: Math.ceil(remain),
      progressPercent: progress,
      currentState: this.currentState,
      isAdaptive: this.isAdaptive,
      emergencyActive: this.emergencyActive
    };
  }
}
