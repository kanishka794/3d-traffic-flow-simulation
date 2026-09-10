import * as THREE from 'three';

/**
 * SceneManager
 * Sets up WebGLRenderer, PCFSoftShadowMap, ACESFilmicToneMapping,
 * multi-source lighting rig (Sun, Ambient, Hemisphere), and Day/Night cycle transitions.
 */
export class SceneManager {
  constructor(container) {
    this.container = container;

    // 1. Three.js Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0c1322);
    this.scene.fog = new THREE.FogExp2(0x0c1322, 0.005);

    // 2. Perspective Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(52, aspect, 0.5, 600);
    this.camera.position.set(38, 30, 48);

    // 3. WebGLRenderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting Rig
    this.setupLighting();

    // 5. Day/Night State
    this.isNight = false;
    this.targetSkyColor = new THREE.Color(0x0c1322);
    this.daySkyColor = new THREE.Color(0x87ceeb);
    this.nightSkyColor = new THREE.Color(0x080e1a);

    // Resize listener
    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupLighting() {
    // Ambient light
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    this.scene.add(this.ambientLight);

    // Hemisphere sky/ground fill
    this.hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x1e293b, 0.45);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Directional Sun Light with Shadows
    this.sunLight = new THREE.DirectionalLight(0xfff7ed, 1.4);
    this.sunLight.position.set(65, 80, 50);
    this.sunLight.castShadow = true;

    // Shadow Frustum Bounds for intersection
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 240;
    const d = 75;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0003;
    this.sunLight.shadow.radius = 2.0;

    this.scene.add(this.sunLight);
  }

  setShadowsEnabled(enabled) {
    this.renderer.shadowMap.enabled = enabled;
    this.sunLight.castShadow = enabled;
    this.scene.traverse(child => {
      if (child.material) {
        child.material.needsUpdate = true;
      }
    });
  }

  setNightMode(isNight) {
    this.isNight = isNight;
    if (isNight) {
      this.targetSkyColor.copy(this.nightSkyColor);
      this.sunLight.intensity = 0.15;
      this.sunLight.color.setHex(0x38bdf8);
      this.ambientLight.intensity = 0.25;
      this.hemiLight.intensity = 0.2;
    } else {
      this.targetSkyColor.copy(this.daySkyColor);
      this.sunLight.intensity = 1.4;
      this.sunLight.color.setHex(0xfff7ed);
      this.ambientLight.intensity = 0.55;
      this.hemiLight.intensity = 0.45;
    }
  }

  update(delta) {
    // Smoothly lerp background color
    this.scene.background.lerp(this.targetSkyColor, 0.08);
    this.scene.fog.color.lerp(this.targetSkyColor, 0.08);
  }

  onWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
