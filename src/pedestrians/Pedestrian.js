import * as THREE from 'three';

/**
 * Pedestrian
 * Represents an articulated humanoid pedestrian with procedural gait animation.
 * Follows crosswalk paths and synchronizes with pedestrian signals.
 */
export class Pedestrian {
  static shirtColors = [0x3b82f6, 0xef4444, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xec4899, 0xf8fafc];
  static pantsColors = [0x1e293b, 0x334155, 0x1e1b4b, 0x475569];

  constructor(crosswalkId, startSide = 0, startPos, endPos, axis = 'NS') {
    this.crosswalkId = crosswalkId;
    this.startPos = startPos.clone();
    this.endPos = endPos.clone();
    this.currentGoal = endPos.clone();
    this.axis = axis; // 'NS' or 'EW'

    this.position = startPos.clone();
    this.walkSpeed = 1.35; // m/s
    this.isCrossing = false;
    this.waitingOnCurb = true;
    this.walkCycleTime = Math.random() * Math.PI * 2;

    this.group = new THREE.Group();
    this.group.position.copy(this.position);

    this.buildMesh();
  }

  buildMesh() {
    const shirtCol = Pedestrian.shirtColors[Math.floor(Math.random() * Pedestrian.shirtColors.length)];
    const pantsCol = Pedestrian.pantsColors[Math.floor(Math.random() * Pedestrian.pantsColors.length)];
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xfbcfe8, roughness: 0.8 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtCol, roughness: 0.7 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsCol, roughness: 0.8 });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.44, 0.6, 0.26);
    this.torso = new THREE.Mesh(torsoGeo, shirtMat);
    this.torso.position.y = 1.1;
    this.torso.castShadow = true;
    this.group.add(this.torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.6;
    head.castShadow = true;
    this.group.add(head);

    // Left Arm (Jointed at shoulder)
    this.armL = new THREE.Group();
    this.armL.position.set(0.28, 1.35, 0);
    const armGeo = new THREE.BoxGeometry(0.12, 0.5, 0.12);
    armGeo.translate(0, -0.22, 0);
    const armLMesh = new THREE.Mesh(armGeo, shirtMat);
    this.armL.add(armLMesh);
    this.group.add(this.armL);

    // Right Arm
    this.armR = new THREE.Group();
    this.armR.position.set(-0.28, 1.35, 0);
    const armRMesh = new THREE.Mesh(armGeo, shirtMat);
    this.armR.add(armRMesh);
    this.group.add(this.armR);

    // Left Leg (Jointed at hip)
    this.legL = new THREE.Group();
    this.legL.position.set(0.13, 0.8, 0);
    const legGeo = new THREE.BoxGeometry(0.16, 0.75, 0.16);
    legGeo.translate(0, -0.35, 0);
    const legLMesh = new THREE.Mesh(legGeo, pantsMat);
    legLMesh.castShadow = true;
    this.legL.add(legLMesh);
    this.group.add(this.legL);

    // Right Leg
    this.legR = new THREE.Group();
    this.legR.position.set(-0.13, 0.8, 0);
    const legRMesh = new THREE.Mesh(legGeo, pantsMat);
    legRMesh.castShadow = true;
    this.legR.add(legRMesh);
    this.group.add(this.legR);
  }

  update(delta, trafficLights, enabled = true) {
    if (!enabled) {
      this.group.visible = false;
      this.isCrossing = false;
      return;
    }
    this.group.visible = true;

    const canWalk = trafficLights.isPedestrianWalk(this.axis);

    if (this.waitingOnCurb) {
      // Idle on curb
      this.isCrossing = false;
      this.armL.rotation.x = 0;
      this.armR.rotation.x = 0;
      this.legL.rotation.x = 0;
      this.legR.rotation.x = 0;

      if (canWalk) {
        this.waitingOnCurb = false;
        this.isCrossing = true;
      }
    } else {
      // Walking across crosswalk
      this.isCrossing = true;
      const dir = new THREE.Vector3().subVectors(this.currentGoal, this.position);
      const dist = dir.length();

      if (dist < 0.3) {
        // Reached opposite curb
        this.waitingOnCurb = true;
        this.isCrossing = false;
        // Swap goal to walk back next time
        const nextGoal = this.currentGoal.equals(this.endPos) ? this.startPos : this.endPos;
        this.currentGoal.copy(nextGoal);
      } else {
        dir.normalize();
        this.position.addScaledVector(dir, this.walkSpeed * delta);
        this.group.position.copy(this.position);

        // Face movement direction
        const angle = Math.atan2(dir.x, dir.z);
        this.group.rotation.y = angle;

        // Gait Joint Animation
        this.walkCycleTime += delta * this.walkSpeed * 7.5;
        const swing = Math.sin(this.walkCycleTime) * 0.65;
        this.legL.rotation.x = swing;
        this.legR.rotation.x = -swing;
        this.armL.rotation.x = -swing * 0.8;
        this.armR.rotation.x = swing * 0.8;

        // Torso subtle vertical bounce
        this.torso.position.y = 1.1 + Math.abs(Math.sin(this.walkCycleTime)) * 0.04;
      }
    }
  }

  dispose() {
    if (this.group.parent) {
      this.group.parent.remove(this.group);
    }
  }
}
