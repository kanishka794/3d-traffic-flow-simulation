import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * CameraSystem
 * Manages multi-mode camera perspectives with smooth position and target interpolation (LERP):
 * - Orbit Camera (Turntable)
 * - Top-Down Bird's Eye
 * - 3rd-Person Dynamic Chase Camera
 * - Roadside CCTV Camera
 * - Free-Fly WASD Drone Camera
 */
export class CameraSystem {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // Default OrbitControls
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground
    this.controls.minDistance = 8;
    this.controls.maxDistance = 220;
    this.controls.target.set(0, 0, 0);

    // Camera Modes: 'orbit', 'topdown', 'chase', 'cctv', 'freefly'
    this.currentMode = 'orbit';
    this.targetVehicle = null;

    // Transition interpolation state
    this.isTransitioning = false;
    this.transProgress = 1.0;
    this.transDuration = 0.8; // seconds
    this.startPos = new THREE.Vector3();
    this.endPos = new THREE.Vector3();
    this.startTarget = new THREE.Vector3();
    this.endTarget = new THREE.Vector3();
    this.currentTarget = new THREE.Vector3(0, 0, 0);

    // Free-fly state
    this.keys = { w: false, a: false, s: false, d: false, q: false, e: false };
    this.freeFlyEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    this.isMouseDown = false;
    this.prevMouse = { x: 0, y: 0 };
    this.initFreeFlyListeners();

    // Presets
    this.presets = {
      orbit: { pos: new THREE.Vector3(38, 30, 48), target: new THREE.Vector3(0, 0, 0) },
      topdown: { pos: new THREE.Vector3(0, 95, 0.1), target: new THREE.Vector3(0, 0, 0) },
      cctv: { pos: new THREE.Vector3(32, 22, 32), target: new THREE.Vector3(0, 1.5, 0) }
    };
  }

  initFreeFlyListeners() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = true;
    });
    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = false;
    });

    this.domElement.addEventListener('mousedown', (e) => {
      if (this.currentMode === 'freefly') {
        this.isMouseDown = true;
        this.prevMouse.x = e.clientX;
        this.prevMouse.y = e.clientY;
      }
    });
    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });
    window.addEventListener('mousemove', (e) => {
      if (this.currentMode === 'freefly' && this.isMouseDown) {
        const dx = e.clientX - this.prevMouse.x;
        const dy = e.clientY - this.prevMouse.y;
        this.prevMouse.x = e.clientX;
        this.prevMouse.y = e.clientY;

        this.freeFlyEuler.setFromQuaternion(this.camera.quaternion);
        this.freeFlyEuler.y -= dx * 0.003;
        this.freeFlyEuler.x -= dy * 0.003;
        this.freeFlyEuler.x = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, this.freeFlyEuler.x));
        this.camera.quaternion.setFromEuler(this.freeFlyEuler);
      }
    });
  }

  setMode(mode, targetVehicle = null) {
    if (this.currentMode === mode && this.targetVehicle === targetVehicle) return;

    this.currentMode = mode;
    this.targetVehicle = targetVehicle;

    if (mode === 'orbit') {
      this.controls.enabled = true;
      this.startTransition(this.camera.position, this.presets.orbit.pos, this.currentTarget, this.presets.orbit.target);
    } else if (mode === 'topdown') {
      this.controls.enabled = false;
      this.startTransition(this.camera.position, this.presets.topdown.pos, this.currentTarget, this.presets.topdown.target);
    } else if (mode === 'cctv') {
      this.controls.enabled = false;
      this.startTransition(this.camera.position, this.presets.cctv.pos, this.currentTarget, this.presets.cctv.target);
    } else if (mode === 'chase') {
      this.controls.enabled = false;
      if (this.targetVehicle) {
        const vPos = this.targetVehicle.mesh.position;
        const chasePos = vPos.clone().add(new THREE.Vector3(0, 5, -12));
        this.startTransition(this.camera.position, chasePos, this.currentTarget, vPos);
      }
    } else if (mode === 'freefly') {
      this.controls.enabled = false;
      this.freeFlyEuler.setFromQuaternion(this.camera.quaternion);
    }
  }

  startTransition(fromPos, toPos, fromTarget, toTarget) {
    this.isTransitioning = true;
    this.transProgress = 0;
    this.startPos.copy(fromPos);
    this.endPos.copy(toPos);
    this.startTarget.copy(fromTarget);
    this.endTarget.copy(toTarget);
  }

  update(delta) {
    if (this.isTransitioning) {
      this.transProgress += delta / this.transDuration;
      if (this.transProgress >= 1.0) {
        this.transProgress = 1.0;
        this.isTransitioning = false;
      }

      // Smooth step easing
      const t = THREE.MathUtils.smoothstep(this.transProgress, 0, 1);
      this.camera.position.lerpVectors(this.startPos, this.endPos, t);
      this.currentTarget.lerpVectors(this.startTarget, this.endTarget, t);
      this.camera.lookAt(this.currentTarget);

      if (this.currentMode === 'orbit') {
        this.controls.target.copy(this.currentTarget);
      }
      return;
    }

    if (this.currentMode === 'orbit') {
      this.controls.update();
      this.currentTarget.copy(this.controls.target);
    } else if (this.currentMode === 'chase') {
      this.updateChaseCamera(delta);
    } else if (this.currentMode === 'freefly') {
      this.updateFreeFly(delta);
    } else if (this.currentMode === 'topdown' || this.currentMode === 'cctv') {
      this.camera.lookAt(this.currentTarget);
    }
  }

  updateChaseCamera(delta) {
    if (!this.targetVehicle || this.targetVehicle.isFinished) {
      this.setMode('orbit');
      return;
    }

    const vMesh = this.targetVehicle.mesh;
    const vPos = vMesh.position;
    const fwd = this.targetVehicle.tangentVec.clone();

    // Desired camera position behind and above vehicle
    const followDist = this.targetVehicle.isEmergency ? 12.0 : 9.5;
    const followHeight = this.targetVehicle.isEmergency ? 5.2 : 4.2;
    const desiredPos = vPos.clone().sub(fwd.clone().multiplyScalar(followDist)).add(new THREE.Vector3(0, followHeight, 0));

    // Desired lookAt target slightly ahead of vehicle
    const desiredTarget = vPos.clone().add(fwd.clone().multiplyScalar(6.0)).add(new THREE.Vector3(0, 1.2, 0));

    // Smooth spring-damper lerp
    this.camera.position.lerp(desiredPos, 0.1);
    this.currentTarget.lerp(desiredTarget, 0.12);
    this.camera.lookAt(this.currentTarget);
  }

  updateFreeFly(delta) {
    const moveSpeed = 28 * delta;
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const up = new THREE.Vector3(0, 1, 0);

    if (this.keys.w) this.camera.position.addScaledVector(fwd, moveSpeed);
    if (this.keys.s) this.camera.position.addScaledVector(fwd, -moveSpeed);
    if (this.keys.d) this.camera.position.addScaledVector(right, moveSpeed);
    if (this.keys.a) this.camera.position.addScaledVector(right, -moveSpeed);
    if (this.keys.e) this.camera.position.addScaledVector(up, moveSpeed);
    if (this.keys.q) this.camera.position.addScaledVector(up, -moveSpeed);

    // Keep camera above ground
    if (this.camera.position.y < 1.0) this.camera.position.y = 1.0;
  }
}
