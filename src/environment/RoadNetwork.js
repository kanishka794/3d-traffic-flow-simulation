import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

/**
 * RoadNetwork
 * Constructs the 3D procedural environment:
 * - 4-Way intersection with dynamic lane configurations (1, 2, 3 lanes)
 * - Textured road arms with lane markings, dividers, and stop lines
 * - Textured zebra crosswalks
 * - Sidewalks with curbs and decorative planters
 * - 3D road signs (Stop, Speed Limit, Turn Lane)
 * - Surrounding low-poly city skyscrapers with illuminated window textures
 * - Modern streetlamps with dynamic night lighting point lights
 * - Street trees
 */
export class RoadNetwork {
  constructor(scene, lanesPerDirection = 2, roadLength = 90, laneWidth = 3.8) {
    this.scene = scene;
    this.lanesPerDirection = lanesPerDirection;
    this.roadLength = roadLength;
    this.laneWidth = laneWidth;
    this.group = new THREE.Group();
    this.streetLights = [];
    this.scene.add(this.group);

    this.buildEnvironment();
  }

  rebuild(lanesPerDirection) {
    this.lanesPerDirection = lanesPerDirection;
    // Clear existing meshes
    while (this.group.children.length > 0) {
      const obj = this.group.children[0];
      this.group.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this.streetLights = [];
    this.buildEnvironment();
  }

  buildEnvironment() {
    const L = this.roadLength;
    const LW = this.laneWidth;
    const N = this.lanesPerDirection;
    const roadWidth = N * 2 * LW;
    const halfW = roadWidth / 2;
    const sidewalkWidth = 14;

    // 1. Terrain Ground Base
    const groundGeo = new THREE.PlaneGeometry(350, 350);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x131922,
      roughness: 0.9,
      metalness: 0.1
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.05;
    groundMesh.receiveShadow = true;
    this.group.add(groundMesh);

    // 2. Center Intersection Box
    const centerGeo = new THREE.PlaneGeometry(roadWidth, roadWidth);
    const asphaltTex = TextureGenerator.getAsphaltTexture();
    const centerMat = new THREE.MeshStandardMaterial({
      map: asphaltTex,
      roughness: 0.85,
      metalness: 0.15
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    centerMesh.rotation.x = -Math.PI / 2;
    centerMesh.position.y = 0.01;
    centerMesh.receiveShadow = true;
    this.group.add(centerMesh);

    // 3. Four Road Arms
    const roadTex = TextureGenerator.getRoadLaneTexture(N);
    const armLength = L - halfW;
    const armGeo = new THREE.PlaneGeometry(roadWidth, armLength);
    const armMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.85,
      metalness: 0.15
    });

    // North Arm (Z < -halfW)
    const northArm = new THREE.Mesh(armGeo, armMat);
    northArm.rotation.x = -Math.PI / 2;
    northArm.position.set(0, 0.01, -(halfW + armLength / 2));
    northArm.receiveShadow = true;
    this.group.add(northArm);

    // South Arm (Z > halfW)
    const southArm = new THREE.Mesh(armGeo, armMat);
    southArm.rotation.x = -Math.PI / 2;
    southArm.rotation.z = Math.PI;
    southArm.position.set(0, 0.01, halfW + armLength / 2);
    southArm.receiveShadow = true;
    this.group.add(southArm);

    // East Arm (X > halfW)
    const eastArm = new THREE.Mesh(armGeo, armMat);
    eastArm.rotation.x = -Math.PI / 2;
    eastArm.rotation.z = -Math.PI / 2;
    eastArm.position.set(halfW + armLength / 2, 0.01, 0);
    eastArm.receiveShadow = true;
    this.group.add(eastArm);

    // West Arm (X < -halfW)
    const westArm = new THREE.Mesh(armGeo, armMat);
    westArm.rotation.x = -Math.PI / 2;
    westArm.rotation.z = Math.PI / 2;
    westArm.position.set(-(halfW + armLength / 2), 0.01, 0);
    westArm.receiveShadow = true;
    this.group.add(westArm);

    // 4. Crosswalks
    const crosswalkTex = TextureGenerator.getCrosswalkTexture();
    const crosswalkGeo = new THREE.PlaneGeometry(roadWidth, 4.0);
    const crosswalkMat = new THREE.MeshStandardMaterial({
      map: crosswalkTex,
      roughness: 0.7,
      transparent: true
    });

    const crosswalkDist = halfW + 2.2;

    // North Crosswalk
    const cwNorth = new THREE.Mesh(crosswalkGeo, crosswalkMat);
    cwNorth.rotation.x = -Math.PI / 2;
    cwNorth.position.set(0, 0.02, -crosswalkDist);
    cwNorth.receiveShadow = true;
    this.group.add(cwNorth);

    // South Crosswalk
    const cwSouth = new THREE.Mesh(crosswalkGeo, crosswalkMat);
    cwSouth.rotation.x = -Math.PI / 2;
    cwSouth.position.set(0, 0.02, crosswalkDist);
    cwSouth.receiveShadow = true;
    this.group.add(cwSouth);

    // East Crosswalk
    const cwEast = new THREE.Mesh(crosswalkGeo, crosswalkMat);
    cwEast.rotation.x = -Math.PI / 2;
    cwEast.rotation.z = Math.PI / 2;
    cwEast.position.set(crosswalkDist, 0.02, 0);
    cwEast.receiveShadow = true;
    this.group.add(cwEast);

    // West Crosswalk
    const cwWest = new THREE.Mesh(crosswalkGeo, crosswalkMat);
    cwWest.rotation.x = -Math.PI / 2;
    cwWest.rotation.z = Math.PI / 2;
    cwWest.position.set(-crosswalkDist, 0.02, 0);
    cwWest.receiveShadow = true;
    this.group.add(cwWest);

    // 5. Stop Line Markers
    const stopLineGeo = new THREE.PlaneGeometry(halfW - 0.2, 0.7);
    const stopLineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const stopLineDist = halfW + 4.8;

    // North Entry (Right half of North road)
    const slNorth = new THREE.Mesh(stopLineGeo, stopLineMat);
    slNorth.rotation.x = -Math.PI / 2;
    slNorth.position.set(halfW / 2, 0.03, -stopLineDist);
    this.group.add(slNorth);

    // South Entry (Left half of South road)
    const slSouth = new THREE.Mesh(stopLineGeo, stopLineMat);
    slSouth.rotation.x = -Math.PI / 2;
    slSouth.position.set(-halfW / 2, 0.03, stopLineDist);
    this.group.add(slSouth);

    // East Entry
    const slEast = new THREE.Mesh(stopLineGeo, stopLineMat);
    slEast.rotation.x = -Math.PI / 2;
    slEast.rotation.z = Math.PI / 2;
    slEast.position.set(stopLineDist, 0.03, halfW / 2);
    this.group.add(slEast);

    // West Entry
    const slWest = new THREE.Mesh(stopLineGeo, stopLineMat);
    slWest.rotation.x = -Math.PI / 2;
    slWest.rotation.z = Math.PI / 2;
    slWest.position.set(-stopLineDist, 0.03, -halfW / 2);
    this.group.add(slWest);

    // 6. Sidewalks (4 Corner Quadrants)
    const sidewalkTex = TextureGenerator.getSidewalkTexture();
    const cornerSize = (300 - roadWidth) / 2;
    const cornerGeo = new THREE.BoxGeometry(cornerSize, 0.2, cornerSize);
    const cornerMat = new THREE.MeshStandardMaterial({
      map: sidewalkTex,
      roughness: 0.9
    });

    const cOffset = halfW + cornerSize / 2;

    const corners = [
      { x: -cOffset, z: -cOffset }, // North-West
      { x: cOffset, z: -cOffset },  // North-East
      { x: -cOffset, z: cOffset },  // South-West
      { x: cOffset, z: cOffset }   // South-East
    ];

    corners.forEach(c => {
      const sw = new THREE.Mesh(cornerGeo, cornerMat);
      sw.position.set(c.x, 0.1, c.z);
      sw.receiveShadow = true;
      this.group.add(sw);
    });

    // 7. Road Signs (Stop Signs & Speed Limit Signs)
    this.buildRoadSigns(halfW);

    // 8. Surrounding City Skyscrapers
    this.buildCityBuildings(halfW, cornerSize);

    // 9. Streetlamps with point lights
    this.buildStreetLamps(halfW, L);

    // 10. Sidewalk Trees
    this.buildTrees(halfW, L);
  }

  buildRoadSigns(halfW) {
    const signOffsets = [
      { x: halfW + 1.8, z: -(halfW + 5.5), rotY: 0, type: 'stop' },
      { x: -(halfW + 1.8), z: halfW + 5.5, rotY: Math.PI, type: 'stop' },
      { x: halfW + 5.5, z: halfW + 1.8, rotY: Math.PI / 2, type: 'stop' },
      { x: -(halfW + 5.5), z: -(halfW + 1.8), rotY: -Math.PI / 2, type: 'stop' },
      { x: halfW + 2.0, z: -(halfW + 25.0), rotY: 0, type: 'speed_limit' },
      { x: -(halfW + 2.0), z: halfW + 25.0, rotY: Math.PI, type: 'speed_limit' },
      { x: halfW + 25.0, z: halfW + 2.0, rotY: Math.PI / 2, type: 'speed_limit' },
      { x: -(halfW + 25.0), z: -(halfW + 2.0), rotY: -Math.PI / 2, type: 'speed_limit' }
    ];

    signOffsets.forEach(s => {
      const signGroup = new THREE.Group();
      signGroup.position.set(s.x, 0, s.z);
      signGroup.rotation.y = s.rotY;

      // Pole
      const poleGeo = new THREE.CylinderGeometry(0.06, 0.06, 3.2, 8);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x71717a, metalness: 0.8, roughness: 0.3 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 1.6;
      pole.castShadow = true;
      signGroup.add(pole);

      // Sign Plate
      const tex = TextureGenerator.getRoadSignTexture(s.type);
      const plateGeo = new THREE.PlaneGeometry(0.9, 0.9);
      const plateMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.4, side: THREE.DoubleSide });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 2.6, 0.08);
      plate.castShadow = true;
      signGroup.add(plate);

      this.group.add(signGroup);
    });
  }

  buildCityBuildings(halfW, cornerSize) {
    const buildingPalette = [
      { base: '#1e293b', win: '#fef08a' },
      { base: '#0f172a', win: '#bae6fd' },
      { base: '#334155', win: '#fef3c7' },
      { base: '#1e1b4b', win: '#67e8f9' },
      { base: '#18181b', win: '#fde047' }
    ];

    const minBuildingDist = halfW + 16;
    const positions = [
      // North-West Block
      { x: -minBuildingDist - 12, z: -minBuildingDist - 12, w: 22, d: 22, h: 48 },
      { x: -minBuildingDist - 40, z: -minBuildingDist - 10, w: 26, d: 20, h: 65 },
      { x: -minBuildingDist - 12, z: -minBuildingDist - 40, w: 20, d: 26, h: 38 },
      { x: -minBuildingDist - 42, z: -minBuildingDist - 42, w: 28, d: 28, h: 78 },

      // North-East Block
      { x: minBuildingDist + 12, z: -minBuildingDist - 12, w: 22, d: 22, h: 55 },
      { x: minBuildingDist + 40, z: -minBuildingDist - 10, w: 24, d: 20, h: 42 },
      { x: minBuildingDist + 12, z: -minBuildingDist - 40, w: 20, d: 26, h: 70 },
      { x: minBuildingDist + 42, z: -minBuildingDist - 42, w: 28, d: 28, h: 50 },

      // South-West Block
      { x: -minBuildingDist - 12, z: minBuildingDist + 12, w: 22, d: 22, h: 44 },
      { x: -minBuildingDist - 40, z: minBuildingDist + 10, w: 24, d: 20, h: 62 },
      { x: -minBuildingDist - 12, z: minBuildingDist + 40, w: 20, d: 26, h: 52 },
      { x: -minBuildingDist - 42, z: minBuildingDist + 42, w: 28, d: 28, h: 85 },

      // South-East Block
      { x: minBuildingDist + 12, z: minBuildingDist + 12, w: 22, d: 22, h: 60 },
      { x: minBuildingDist + 40, z: minBuildingDist + 10, w: 26, d: 20, h: 36 },
      { x: minBuildingDist + 12, z: minBuildingDist + 40, w: 20, d: 26, h: 58 },
      { x: minBuildingDist + 42, z: minBuildingDist + 42, w: 28, d: 28, h: 72 }
    ];

    positions.forEach((b, idx) => {
      const palette = buildingPalette[idx % buildingPalette.length];
      const tex = TextureGenerator.getBuildingFacadeTexture(palette.base, palette.win);
      tex.repeat.set(1, Math.floor(b.h / 12));

      const bGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
      const bMat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.6,
        metalness: 0.2
      });

      const building = new THREE.Mesh(bGeo, bMat);
      building.position.set(b.x, b.h / 2, b.z);
      building.castShadow = true;
      building.receiveShadow = true;
      this.group.add(building);

      // Rooftop Structure (HVAC Unit / Roof Deck)
      const roofGeo = new THREE.BoxGeometry(b.w * 0.4, 3, b.d * 0.4);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
      const roofMesh = new THREE.Mesh(roofGeo, roofMat);
      roofMesh.position.set(b.x, b.h + 1.5, b.z);
      this.group.add(roofMesh);
    });
  }

  buildStreetLamps(halfW, L) {
    const lampDist = halfW + 1.5;
    const lampSpacings = [12, 35, 60, 85];

    const lampPositions = [];
    lampSpacings.forEach(d => {
      // North & South sides
      lampPositions.push({ x: lampDist, z: -d, rotY: Math.PI / 2 });
      lampPositions.push({ x: -lampDist, z: d, rotY: -Math.PI / 2 });
      // East & West sides
      lampPositions.push({ x: d, z: lampDist, rotY: Math.PI });
      lampPositions.push({ x: -d, z: -lampDist, rotY: 0 });
    });

    const poleMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 });
    const lampHeadMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfef08a,
      emissiveIntensity: 0.8
    });

    lampPositions.forEach(p => {
      const lampGroup = new THREE.Group();
      lampGroup.position.set(p.x, 0, p.z);
      lampGroup.rotation.y = p.rotY;

      // Vertical pole
      const poleGeo = new THREE.CylinderGeometry(0.1, 0.15, 6.0, 8);
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 3.0;
      pole.castShadow = true;
      lampGroup.add(pole);

      // Overhang Arm
      const armGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.0, 8);
      const arm = new THREE.Mesh(armGeo, poleMat);
      arm.rotation.z = Math.PI / 3;
      arm.position.set(0.8, 6.2, 0);
      lampGroup.add(arm);

      // Light Fixture Head
      const headGeo = new THREE.BoxGeometry(0.6, 0.15, 0.3);
      const head = new THREE.Mesh(headGeo, lampHeadMat);
      head.position.set(1.6, 6.6, 0);
      lampGroup.add(head);

      // Point Light for Night Illumination
      const light = new THREE.PointLight(0xfef08a, 0.0, 24, 1.8);
      light.position.set(1.6, 6.4, 0);
      lampGroup.add(light);
      this.streetLights.push(light);

      this.group.add(lampGroup);
    });
  }

  buildTrees(halfW, L) {
    const treeDist = halfW + 3.8;
    const treeSpacings = [20, 48, 75];

    const treePositions = [];
    treeSpacings.forEach(d => {
      treePositions.push({ x: treeDist, z: -d });
      treePositions.push({ x: -treeDist, z: -d });
      treePositions.push({ x: treeDist, z: d });
      treePositions.push({ x: -treeDist, z: d });
      treePositions.push({ x: d, z: treeDist });
      treePositions.push({ x: d, z: -treeDist });
      treePositions.push({ x: -d, z: treeDist });
      treePositions.push({ x: -d, z: -treeDist });
    });

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x543d2b, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x166534, roughness: 0.7, flatShading: true });

    treePositions.forEach(p => {
      const tree = new THREE.Group();
      tree.position.set(p.x, 0, p.z);

      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2.0, 6);
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 1.0;
      trunk.castShadow = true;
      tree.add(trunk);

      // Canopy 1 (Lower)
      const canopy1Geo = new THREE.ConeGeometry(1.6, 2.5, 7);
      const canopy1 = new THREE.Mesh(canopy1Geo, leafMat);
      canopy1.position.y = 2.8;
      canopy1.castShadow = true;
      tree.add(canopy1);

      // Canopy 2 (Upper)
      const canopy2Geo = new THREE.ConeGeometry(1.2, 2.0, 7);
      const canopy2 = new THREE.Mesh(canopy2Geo, leafMat);
      canopy2.position.y = 4.0;
      canopy2.castShadow = true;
      tree.add(canopy2);

      this.group.add(tree);
    });
  }

  setNightMode(isNight) {
    const intensity = isNight ? 1.4 : 0.0;
    this.streetLights.forEach(l => {
      l.intensity = intensity;
    });
  }
}
