# 3D Traffic Flow Simulation & Intelligent Intersection Visualization System

A high-performance WebGL traffic simulation built with **Three.js** demonstrating core Computer Graphics (CG) concepts: hierarchical transformations, parametric spline path-following, collision avoidance & queueing models, multi-aspect traffic light state machines with adaptive optimization, pedestrian crosswalk gait animations, emergency vehicle overrides with dynamic strobe lighting, soft shadows, and procedural texturing.

---

##  Key Features & Demonstrable Scenarios

1. **Normal Traffic Flow**: Balanced vehicle count, smooth multi-lane path following, default traffic light timing cycles.
2. **Heavy Traffic**: High vehicle spawn density with realistic queue buildup at red lights.
3. **Traffic Jam**: Saturated bottleneck demonstrating queue spillback and speed reduction without vehicle collisions.
4. **?? Emergency Vehicle Override**: Spawns an ambulance with synchronized red/blue strobe beacons, siren audio synthesis, green corridor signal preemption, cross-traffic halting, and third-person chase camera tracking.
5. **? Adaptive Signal Optimization**: AI controller that monitors directional queue lengths in real-time ($Q_{	ext{NS}}$ vs $Q_{	ext{EW}}$) and dynamically extends green lights for congested approaches.
6. **Configurable Multi-Lane Intersection**: Dynamically rebuilds the road network from 1 to 3 lanes per approach.
7. **Pedestrian Crosswalk System**: Articulated humanoid figures with procedural trigonometric walking gaits ($sin(omega t)$) synchronized with pedestrian walk/don't-walk signals.
8. **Multi-Perspective Camera System**:
   - **Orbit Camera**: 360? turntable controls with damping.
   - **Top-Down View**: Overhead bird's-eye traffic flow inspection.
   - **Chase Camera**: Smooth spring-damper follower tracking any clicked vehicle or the emergency ambulance.
   - **CCTV Camera**: High roadside intersection surveillance viewpoint.
   - **Free-Fly Drone Camera**: Manual WASD + mouse drag exploration.
9. **Visual Effects & Lighting**:
   - Directional solar lighting with **PCF Soft Shadows** (`PCFSoftShadowMap`).
   - Day / Night cycle with functional illuminated streetlamps and vehicle headlights.
   - Rain particle system and vehicle exhaust smoke particles.
   - Web Audio API procedural sound synthesizer for siren wailing and engine humming.

---

##  Computer Graphics Concepts Implemented

| CG Concept | Implementation Details |
|---|---|
| **Hierarchical 3D Modeling** | Scene graph parent-child transforms: Vehicle Root $\to$ Chassis (pitch/roll) $\to$ 4 Independent Wheels $\to$ Emissive Headlights/Taillights. |
| **Parametric Splines** | `CatmullRomCurve3` 3D splines for straight, left-turn, and right-turn trajectories with arc-length parametrization and tangent alignment. |
| **Transformations & Heading** | Alignment rotation matrix calculated from curve tangent $\mathbf{T}(t)$ and normal vector: $\mathbf{R} = \text{lookAt}(\mathbf{P}(t), \mathbf{P}(t) + \mathbf{T}(t), \text{Up})$. |
| **Kinematic Wheel Animation** | Independent wheel spin angle: $\Delta \theta_{\text{wheel}} = \frac{v \cdot \Delta t}{r_{\text{wheel}}}$. |
| **Pedestrian Joint Articulation** | Procedural trigonometric gait: $\theta_{\text{limb}}(t) = A \sin(2\pi f t)$ for alternating swinging legs and arms with vertical torso oscillation. |
| **IDM Collision Avoidance** | Intelligent Driver Model with dynamic desired headway distance $s^*(v, \Delta v) = s_0 + \max\left(0, v T + \frac{v \Delta v}{2\sqrt{ab}}\right)$ preventing vehicle overlap. |
| **Procedural Canvas Textures** | HTML5 Canvas rendered PBR textures for road asphalt grain, zebra crosswalks, dashed/solid lane dividers, yellow double lines, and skyscraper illuminated window grids. |
| **Multi-Source Lighting & Shadows** | Directional Sun with orthographic shadow camera, Ambient fill, Hemisphere sky light, and Point lights for streetlamps with distance falloff. |
| **Particle Systems** | Emergency ambulance rotating strobe flares, velocity-dependent exhaust smoke puffs with alpha fade, and atmospheric rain particles. |
| **Camera Projection & LERP/SLERP** | Smooth camera state interpolation between perspective and orthographic angles using linear and spherical interpolation. |

---

##  Project Architecture

```
traffic-3d-sim/
??? index.html                     # Main HTML with UI overlay & CG Inspector Modal
??? package.json                   # Project configuration and dependencies
??? vite.config.js                 # Vite bundler configuration
??? src/
?   ??? main.js                    # Application entry point
?   ??? style.css                  # Modern cyber-aesthetic glassmorphism stylesheet
?   ??? core/
?   ?   ??? SceneManager.js        # Three.js WebGLRenderer, lights, shadows, day/night
?   ?   ??? CameraSystem.js        # Orbit, Top-Down, Chase, CCTV, Free-Fly camera modes
?   ?   ??? SimulationManager.js   # Main coordinator and animation game loop
?   ??? environment/
?   ?   ??? TextureGenerator.js    # Procedural canvas PBR textures for asphalt, markings, facades
?   ?   ??? RoadNetwork.js         # 4-way intersection, crosswalks, signs, buildings, lamps
?   ??? traffic/
?   ?   ??? PathGenerator.js       # 3D Catmull-Rom splines for straight & turn lanes
?   ?   ??? TrafficLightSystem.js  # Multi-aspect signal poles, FSM, adaptive AI, preemption
?   ??? vehicles/
?   ?   ??? VehicleMeshFactory.js  # Procedural low-poly 3D models (Sedan, SUV, Bus, Ambulance)
?   ?   ??? Vehicle.js             # IDM physics, wheel spin, chassis pitch, stop-line logic
?   ?   ??? VehicleManager.js      # Spawner, lane leader queries, telemetry, debug boxes
?   ??? pedestrians/
?   ?   ??? Pedestrian.js          # Articulated humanoid model with gait joint animation
?   ?   ??? PedestrianManager.js   # Crosswalk navigation and pedestrian signal sync
?   ??? effects/
?   ?   ??? ParticleSystem.js      # Siren strobe flares, exhaust smoke, rain weather
?   ??? audio/
?       ??? SoundManager.js        # Web Audio API synthesizer for siren & engine tones
?   ??? ui/
?       ??? UIController.js        # Control HUD, telemetry updates, scenario bindings
??? dist/                          # Production-ready compiled build
```

---

##  How to Run the Project

### Prerequisites
- Node.js (v18+) and npm installed.

### Development Mode
```bash
# 1. Install dependencies
npm install

# 2. Start Vite local development server
npm run dev
```
Open your browser at **`http://localhost:3000`**.

### Production Build
```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

##  Controls Guide

- **Orbit Camera**: Left-Click Drag to Rotate, Right-Click Drag to Pan, Scroll Wheel to Zoom.
- **Top-Down View**: Click the Top-Down button in the bottom dock for bird's-eye traffic view.
- **Chase Camera**: Click on any vehicle in the 3D scene (or click the Emergency button) to enter third-person follower mode.
- **Free-Fly Drone Camera**: Use `W, A, S, D` to move, `Q / E` for Down/Up, Left-Click Drag to look around.
- **Scenario Bar (Top)**: Quick buttons to switch between Normal, Heavy, Traffic Jam, Emergency Preemption, and Adaptive AI.
- **CG Concepts Modal**: Click the `?? CG Concepts` button in the top right to inspect detailed computer graphics implementation notes.
