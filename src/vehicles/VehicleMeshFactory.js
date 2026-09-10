import * as THREE from 'three';

/**
 * VehicleMeshFactory
 * Procedurally generates compound 3D vehicle geometries with hierarchical scene graphs:
 * Root -> Chassis -> Animated Rotating Wheels + Dynamic Emissive Headlights/Taillights/Sirens.
 */
export class VehicleMeshFactory {
  static wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 16);
  static rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.29, 12);
  static tireMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
  static rimMat = new THREE.MeshStandardMaterial({ color: 0xd4d4d8, metalness: 0.9, roughness: 0.2 });

  static sedanColors = [
    0x2563eb, 0xdc2626, 0x16a34a, 0x9333ea, 0x0891b2, 0xe11d48, 0x475569, 0xf1f5f9
  ];
  static suvColors = [
    0x334155, 0x1e293b, 0xb45309, 0x15803d, 0x0369a1, 0x4c1d95, 0xe2e8f0
  ];

  static createWheel() {
    const wheelGroup = new THREE.Group();
    // Tire
    const tire = new THREE.Mesh(this.wheelGeo, this.tireMat);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    wheelGroup.add(tire);

    // Rim
    const rim = new THREE.Mesh(this.rimGeo, this.rimMat);
    rim.rotation.z = Math.PI / 2;
    wheelGroup.add(rim);

    return wheelGroup;
  }

  static createSedan() {
    const root = new THREE.Group();
    const chassis = new THREE.Group();
    root.add(chassis);

    const bodyColor = this.sedanColors[Math.floor(Math.random() * this.sedanColors.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      metalness: 0.6,
      roughness: 0.3
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const darkTrimMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });

    // Lower Main Body
    const lowerGeo = new THREE.BoxGeometry(1.85, 0.65, 4.4);
    const lowerMesh = new THREE.Mesh(lowerGeo, bodyMat);
    lowerMesh.position.y = 0.55;
    lowerMesh.castShadow = true;
    chassis.add(lowerMesh);

    // Upper Cabin Glass & Roof
    const cabinGeo = new THREE.BoxGeometry(1.6, 0.6, 2.3);
    const cabinMesh = new THREE.Mesh(cabinGeo, glassMat);
    cabinMesh.position.set(0, 1.1, -0.2);
    cabinMesh.castShadow = true;
    chassis.add(cabinMesh);

    const roofGeo = new THREE.BoxGeometry(1.58, 0.08, 2.2);
    const roofMesh = new THREE.Mesh(roofGeo, bodyMat);
    roofMesh.position.set(0, 1.42, -0.2);
    chassis.add(roofMesh);

    // Bumpers
    const bumperGeo = new THREE.BoxGeometry(1.86, 0.25, 0.2);
    const frontBumper = new THREE.Mesh(bumperGeo, darkTrimMat);
    frontBumper.position.set(0, 0.4, 2.25);
    chassis.add(frontBumper);

    const rearBumper = new THREE.Mesh(bumperGeo, darkTrimMat);
    rearBumper.position.set(0, 0.4, -2.25);
    chassis.add(rearBumper);

    // Headlights (Emissive)
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2 });
    const headGeo = new THREE.BoxGeometry(0.35, 0.15, 0.05);
    const hlLeft = new THREE.Mesh(headGeo, headMat);
    hlLeft.position.set(0.65, 0.65, 2.22);
    chassis.add(hlLeft);

    const hlRight = new THREE.Mesh(headGeo, headMat);
    hlRight.position.set(-0.65, 0.65, 2.22);
    chassis.add(hlRight);

    // Taillights (Emissive Brake Lights)
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.3 });
    const tailGeo = new THREE.BoxGeometry(0.35, 0.15, 0.05);
    const tlLeft = new THREE.Mesh(tailGeo, tailMat);
    tlLeft.position.set(0.65, 0.65, -2.22);
    chassis.add(tlLeft);

    const tlRight = new THREE.Mesh(tailGeo, tailMat);
    tlRight.position.set(-0.65, 0.65, -2.22);
    chassis.add(tlRight);

    // 4 Animated Wheels
    const wheels = [];
    const wPositions = [
      { x: 0.92, y: 0.38, z: 1.3 },   // Front Left
      { x: -0.92, y: 0.38, z: 1.3 },  // Front Right
      { x: 0.92, y: 0.38, z: -1.3 },  // Rear Left
      { x: -0.92, y: 0.38, z: -1.3 }  // Rear Right
    ];

    wPositions.forEach(p => {
      const w = this.createWheel();
      w.position.set(p.x, p.y, p.z);
      chassis.add(w);
      wheels.push(w);
    });

    return {
      root,
      chassis,
      wheels,
      brakeLights: [tlLeft, tlRight],
      tailMat,
      headlights: [hlLeft, hlRight],
      headMat,
      length: 4.6,
      width: 1.9,
      height: 1.5,
      wheelRadius: 0.38,
      type: 'sedan'
    };
  }

  static createSUV() {
    const root = new THREE.Group();
    const chassis = new THREE.Group();
    root.add(chassis);

    const bodyColor = this.suvColors[Math.floor(Math.random() * this.suvColors.length)];
    const bodyMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      metalness: 0.5,
      roughness: 0.4
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.88
    });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });

    // Lower Body
    const lowerGeo = new THREE.BoxGeometry(2.0, 0.85, 4.8);
    const lowerMesh = new THREE.Mesh(lowerGeo, bodyMat);
    lowerMesh.position.y = 0.75;
    lowerMesh.castShadow = true;
    chassis.add(lowerMesh);

    // Upper Cabin
    const cabinGeo = new THREE.BoxGeometry(1.85, 0.8, 3.2);
    const cabinMesh = new THREE.Mesh(cabinGeo, glassMat);
    cabinMesh.position.set(0, 1.45, -0.4);
    cabinMesh.castShadow = true;
    chassis.add(cabinMesh);

    const roofGeo = new THREE.BoxGeometry(1.82, 0.08, 3.1);
    const roofMesh = new THREE.Mesh(roofGeo, bodyMat);
    roofMesh.position.set(0, 1.88, -0.4);
    chassis.add(roofMesh);

    // Roof Rails
    const railMat = new THREE.MeshStandardMaterial({ color: 0x71717a, metalness: 0.8 });
    const railGeo = new THREE.BoxGeometry(0.06, 0.08, 2.6);
    const railL = new THREE.Mesh(railGeo, railMat);
    railL.position.set(0.8, 1.96, -0.4);
    chassis.add(railL);

    const railR = new THREE.Mesh(railGeo, railMat);
    railR.position.set(-0.8, 1.96, -0.4);
    chassis.add(railR);

    // Headlights
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2 });
    const headGeo = new THREE.BoxGeometry(0.4, 0.22, 0.05);
    const hlLeft = new THREE.Mesh(headGeo, headMat);
    hlLeft.position.set(0.72, 0.85, 2.42);
    chassis.add(hlLeft);

    const hlRight = new THREE.Mesh(headGeo, headMat);
    hlRight.position.set(-0.72, 0.85, 2.42);
    chassis.add(hlRight);

    // Taillights
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.3 });
    const tailGeo = new THREE.BoxGeometry(0.35, 0.3, 0.05);
    const tlLeft = new THREE.Mesh(tailGeo, tailMat);
    tlLeft.position.set(0.75, 0.95, -2.42);
    chassis.add(tlLeft);

    const tlRight = new THREE.Mesh(tailGeo, tailMat);
    tlRight.position.set(-0.75, 0.95, -2.42);
    chassis.add(tlRight);

    // Wheels
    const wheels = [];
    const wPositions = [
      { x: 1.02, y: 0.44, z: 1.4 },
      { x: -1.02, y: 0.44, z: 1.4 },
      { x: 1.02, y: 0.44, z: -1.4 },
      { x: -1.02, y: 0.44, z: -1.4 }
    ];

    wPositions.forEach(p => {
      const w = this.createWheel();
      w.scale.set(1.15, 1.15, 1.15);
      w.position.set(p.x, p.y, p.z);
      chassis.add(w);
      wheels.push(w);
    });

    return {
      root,
      chassis,
      wheels,
      brakeLights: [tlLeft, tlRight],
      tailMat,
      headlights: [hlLeft, hlRight],
      headMat,
      length: 5.0,
      width: 2.1,
      height: 1.9,
      wheelRadius: 0.44,
      type: 'suv'
    };
  }

  static createBus() {
    const root = new THREE.Group();
    const chassis = new THREE.Group();
    root.add(chassis);

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.4, roughness: 0.4 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, transparent: true, opacity: 0.85 });

    // Main Bus Body
    const bodyGeo = new THREE.BoxGeometry(2.5, 2.6, 9.8);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 1.7;
    bodyMesh.castShadow = true;
    chassis.add(bodyMesh);

    // White Roof
    const roofGeo = new THREE.BoxGeometry(2.48, 0.25, 9.75);
    const roofMesh = new THREE.Mesh(roofGeo, whiteMat);
    roofMesh.position.set(0, 3.05, 0);
    chassis.add(roofMesh);

    // Front Windshield
    const winGeo = new THREE.BoxGeometry(2.4, 1.2, 0.1);
    const frontWin = new THREE.Mesh(winGeo, glassMat);
    frontWin.position.set(0, 2.1, 4.91);
    chassis.add(frontWin);

    // Side Window Bands
    const sideWinGeo = new THREE.BoxGeometry(0.08, 0.9, 8.8);
    const leftWin = new THREE.Mesh(sideWinGeo, glassMat);
    leftWin.position.set(1.26, 2.1, -0.2);
    chassis.add(leftWin);

    const rightWin = new THREE.Mesh(sideWinGeo, glassMat);
    rightWin.position.set(-1.26, 2.1, -0.2);
    chassis.add(rightWin);

    // Headlights
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2 });
    const headGeo = new THREE.BoxGeometry(0.4, 0.25, 0.05);
    const hlLeft = new THREE.Mesh(headGeo, headMat);
    hlLeft.position.set(0.95, 0.8, 4.92);
    chassis.add(hlLeft);

    const hlRight = new THREE.Mesh(headGeo, headMat);
    hlRight.position.set(-0.95, 0.8, 4.92);
    chassis.add(hlRight);

    // Taillights
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.3 });
    const tailGeo = new THREE.BoxGeometry(0.35, 0.4, 0.05);
    const tlLeft = new THREE.Mesh(tailGeo, tailMat);
    tlLeft.position.set(0.95, 0.9, -4.92);
    chassis.add(tlLeft);

    const tlRight = new THREE.Mesh(tailGeo, tailMat);
    tlRight.position.set(-0.95, 0.9, -4.92);
    chassis.add(tlRight);

    // 6 Wheels
    const wheels = [];
    const wPositions = [
      { x: 1.28, y: 0.48, z: 3.2 },
      { x: -1.28, y: 0.48, z: 3.2 },
      { x: 1.28, y: 0.48, z: -2.2 },
      { x: -1.28, y: 0.48, z: -2.2 },
      { x: 1.28, y: 0.48, z: -3.6 },
      { x: -1.28, y: 0.48, z: -3.6 }
    ];

    wPositions.forEach(p => {
      const w = this.createWheel();
      w.scale.set(1.25, 1.25, 1.25);
      w.position.set(p.x, p.y, p.z);
      chassis.add(w);
      wheels.push(w);
    });

    return {
      root,
      chassis,
      wheels,
      brakeLights: [tlLeft, tlRight],
      tailMat,
      headlights: [hlLeft, hlRight],
      headMat,
      length: 10.0,
      width: 2.6,
      height: 3.2,
      wheelRadius: 0.48,
      type: 'bus'
    };
  }

  static createAmbulance() {
    const root = new THREE.Group();
    const chassis = new THREE.Group();
    root.add(chassis);

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.3 });
    const redStripeMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, transparent: true, opacity: 0.88 });

    // Front Cab
    const cabGeo = new THREE.BoxGeometry(2.0, 1.3, 2.0);
    const cabMesh = new THREE.Mesh(cabGeo, whiteMat);
    cabMesh.position.set(0, 1.05, 1.6);
    cabMesh.castShadow = true;
    chassis.add(cabMesh);

    // Rear Medical Box Body
    const boxGeo = new THREE.BoxGeometry(2.2, 1.85, 3.8);
    const boxMesh = new THREE.Mesh(boxGeo, whiteMat);
    boxMesh.position.set(0, 1.45, -1.1);
    boxMesh.castShadow = true;
    chassis.add(boxMesh);

    // Red Side Stripes
    const stripeGeo = new THREE.BoxGeometry(2.24, 0.35, 3.75);
    const stripeMesh = new THREE.Mesh(stripeGeo, redStripeMat);
    stripeMesh.position.set(0, 1.4, -1.1);
    chassis.add(stripeMesh);

    // Red Cross Emblem
    const crossHGeo = new THREE.BoxGeometry(2.26, 0.2, 0.6);
    const crossH = new THREE.Mesh(crossHGeo, redStripeMat);
    crossH.position.set(0, 1.8, -1.1);
    chassis.add(crossH);

    const crossVGeo = new THREE.BoxGeometry(2.26, 0.6, 0.2);
    const crossV = new THREE.Mesh(crossVGeo, redStripeMat);
    crossV.position.set(0, 1.8, -1.1);
    chassis.add(crossV);

    // Front Windshield
    const winGeo = new THREE.BoxGeometry(1.8, 0.6, 0.08);
    const winMesh = new THREE.Mesh(winGeo, glassMat);
    winMesh.position.set(0, 1.3, 2.61);
    chassis.add(winMesh);

    // Headlights
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.4 });
    const headGeo = new THREE.BoxGeometry(0.35, 0.2, 0.05);
    const hlLeft = new THREE.Mesh(headGeo, headMat);
    hlLeft.position.set(0.75, 0.7, 2.62);
    chassis.add(hlLeft);

    const hlRight = new THREE.Mesh(headGeo, headMat);
    hlRight.position.set(-0.75, 0.7, 2.62);
    chassis.add(hlRight);

    // Taillights
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.4 });
    const tailGeo = new THREE.BoxGeometry(0.3, 0.4, 0.05);
    const tlLeft = new THREE.Mesh(tailGeo, tailMat);
    tlLeft.position.set(0.85, 0.8, -3.02);
    chassis.add(tlLeft);

    const tlRight = new THREE.Mesh(tailGeo, tailMat);
    tlRight.position.set(-0.85, 0.8, -3.02);
    chassis.add(tlRight);

    // Roof Lightbar (Emergency Red & Blue Strobe Beacons)
    const sirenBarGeo = new THREE.BoxGeometry(1.6, 0.14, 0.35);
    const sirenBarMat = new THREE.MeshStandardMaterial({ color: 0x111827 });
    const sirenBar = new THREE.Mesh(sirenBarGeo, sirenBarMat);
    sirenBar.position.set(0, 2.45, -0.6);
    chassis.add(sirenBar);

    const beaconGeo = new THREE.BoxGeometry(0.4, 0.16, 0.28);
    // Red Beacon (Left)
    const sirenRedMat = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 2.0,
      roughness: 0.1
    });
    const beaconRed = new THREE.Mesh(beaconGeo, sirenRedMat);
    beaconRed.position.set(0.5, 2.56, -0.6);
    chassis.add(beaconRed);

    // Blue Beacon (Right)
    const sirenBlueMat = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      emissive: 0x0088ff,
      emissiveIntensity: 2.0,
      roughness: 0.1
    });
    const beaconBlue = new THREE.Mesh(beaconGeo, sirenBlueMat);
    beaconBlue.position.set(-0.5, 2.56, -0.6);
    chassis.add(beaconBlue);

    // 4 Wheels
    const wheels = [];
    const wPositions = [
      { x: 1.05, y: 0.44, z: 1.6 },
      { x: -1.05, y: 0.44, z: 1.6 },
      { x: 1.05, y: 0.44, z: -1.6 },
      { x: -1.05, y: 0.44, z: -1.6 }
    ];

    wPositions.forEach(p => {
      const w = this.createWheel();
      w.scale.set(1.15, 1.15, 1.15);
      w.position.set(p.x, p.y, p.z);
      chassis.add(w);
      wheels.push(w);
    });

    return {
      root,
      chassis,
      wheels,
      brakeLights: [tlLeft, tlRight],
      tailMat,
      headlights: [hlLeft, hlRight],
      headMat,
      sirenLights: [beaconRed, beaconBlue],
      sirenRedMat,
      sirenBlueMat,
      length: 5.6,
      width: 2.2,
      height: 2.7,
      wheelRadius: 0.44,
      type: 'ambulance'
    };
  }
}
