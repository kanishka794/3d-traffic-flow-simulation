import * as THREE from 'three';

/**
 * ParticleSystem
 * Handles dynamic graphics effects:
 * - Emergency vehicle rotating siren beacon cones & dynamic point lights
 * - Vehicle exhaust smoke puffs during acceleration
 * - Atmospheric weather rain particle system
 */
export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.enabled = true;
    this.rainEnabled = false;

    // Siren Dynamic Point Light
    this.sirenLight = new THREE.PointLight(0xff0000, 0, 30, 2);
    this.scene.add(this.sirenLight);

    // Weather Rain System
    this.buildRainSystem();

    // Exhaust Smoke Particles
    this.smokeParticles = [];
    this.buildExhaustPool();
  }

  buildRainSystem() {
    const rainCount = 1800;
    const rainGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(rainCount * 3);
    const velocities = new Float32Array(rainCount);

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 1] = Math.random() * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 180;
      velocities[i] = 30 + Math.random() * 20;
    }

    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.rainVelocities = velocities;

    const rainMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.35,
      transparent: true,
      opacity: 0.6
    });

    this.rainMesh = new THREE.Points(rainGeo, rainMat);
    this.rainMesh.visible = false;
    this.scene.add(this.rainMesh);
  }

  buildExhaustPool() {
    const maxPuffs = 40;
    const smokeGeo = new THREE.SphereGeometry(0.18, 6, 6);
    const smokeMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.4,
      roughness: 1.0
    });

    this.smokePool = [];
    for (let i = 0; i < maxPuffs; i++) {
      const mesh = new THREE.Mesh(smokeGeo, smokeMat.clone());
      mesh.visible = false;
      this.scene.add(mesh);
      this.smokePool.push({
        mesh: mesh,
        active: false,
        life: 0,
        maxLife: 1.2,
        vel: new THREE.Vector3(),
        scale: 1.0
      });
    }
  }

  spawnExhaustPuff(pos, forwardDir) {
    if (!this.enabled) return;
    const p = this.smokePool.find(item => !item.active);
    if (!p) return;

    p.active = true;
    p.life = 0;
    p.mesh.visible = true;
    p.mesh.position.copy(pos);
    p.mesh.position.y += 0.25;
    // Emit slightly backward and up
    p.vel.set(
      -forwardDir.x * 2.0 + (Math.random() - 0.5) * 0.4,
      0.8 + Math.random() * 0.5,
      -forwardDir.z * 2.0 + (Math.random() - 0.5) * 0.4
    );
    p.scale = 0.5;
    p.mesh.scale.set(p.scale, p.scale, p.scale);
    p.mesh.material.opacity = 0.45;
  }

  update(delta, emergencyVehicle, activeVehicles) {
    // 1. Emergency Siren Light Animation
    if (emergencyVehicle && !emergencyVehicle.isFinished && this.enabled) {
      const pos = emergencyVehicle.mesh.position;
      this.sirenLight.position.set(pos.x, pos.y + 3.0, pos.z);
      const isRed = Math.sin(Date.now() * 0.015) > 0;
      this.sirenLight.color.setHex(isRed ? 0xff1111 : 0x0088ff);
      this.sirenLight.intensity = 2.5;
    } else {
      this.sirenLight.intensity = 0;
    }

    // 2. Exhaust Smoke Updates
    if (this.enabled) {
      // Chance to emit from accelerating vehicles
      if (activeVehicles && activeVehicles.length > 0 && Math.random() < 0.3) {
        const v = activeVehicles[Math.floor(Math.random() * activeVehicles.length)];
        if (v.acceleration > 0.5 && v.currentSpeed < 10) {
          this.spawnExhaustPuff(v.mesh.position, v.tangentVec);
        }
      }

      this.smokePool.forEach(p => {
        if (!p.active) return;
        p.life += delta;
        if (p.life >= p.maxLife) {
          p.active = false;
          p.mesh.visible = false;
        } else {
          const prog = p.life / p.maxLife;
          p.mesh.position.addScaledVector(p.vel, delta);
          p.scale = 0.5 + prog * 2.2;
          p.mesh.scale.set(p.scale, p.scale, p.scale);
          p.mesh.material.opacity = (1.0 - prog) * 0.4;
        }
      });
    }

    // 3. Rain Particle Update
    if (this.rainEnabled && this.rainMesh) {
      const posAttr = this.rainMesh.geometry.attributes.position;
      const count = posAttr.count;
      for (let i = 0; i < count; i++) {
        let y = posAttr.getY(i) - this.rainVelocities[i] * delta;
        if (y < 0) {
          y = 55 + Math.random() * 10;
        }
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
    }
  }

  setRain(enabled) {
    this.rainEnabled = enabled;
    if (this.rainMesh) {
      this.rainMesh.visible = enabled;
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) {
      this.sirenLight.intensity = 0;
      this.smokePool.forEach(p => {
        p.active = false;
        p.mesh.visible = false;
      });
    }
  }
}
