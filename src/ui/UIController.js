import * as THREE from 'three';

/**
 * UIController
 * Handles UI interactions, slider events, presets, scenario activations,
 * raycasting vehicle selection, and real-time telemetry HUD updates.
 */
export class UIController {
  constructor(simManager) {
    this.sim = simManager;

    // Raycaster for clicking vehicles
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.cacheElements();
    this.bindEvents();
    this.initRaycasting();
  }

  cacheElements() {
    this.el = {
      // Scenarios
      btnScenarioNormal: document.getElementById('btn-scenario-normal'),
      btnScenarioHeavy: document.getElementById('btn-scenario-heavy'),
      btnScenarioJam: document.getElementById('btn-scenario-jam'),
      btnScenarioEmergency: document.getElementById('btn-scenario-emergency'),
      btnScenarioAdaptive: document.getElementById('btn-scenario-adaptive'),
      scenarioBtns: document.querySelectorAll('.scenario-btn'),
      ambDirBtns: document.querySelectorAll('.amb-dir-btn'),
      emergencyBanner: document.getElementById('emergency-banner'),
      emergencyBannerText: document.getElementById('emergency-banner-text'),

      // Header actions
      btnDayNight: document.getElementById('btn-day-night'),
      dayNightIcon: document.getElementById('day-night-icon'),
      btnWeather: document.getElementById('btn-weather'),
      btnSound: document.getElementById('btn-sound'),
      soundIcon: document.getElementById('sound-icon'),
      btnAbout: document.getElementById('btn-about'),
      btnCgGuide: document.getElementById('btn-cg-guide'),
      btnReset: document.getElementById('btn-reset'),

      // Sidebar
      sidebarPanel: document.getElementById('sidebar-panel'),
      btnToggleSidebar: document.getElementById('btn-toggle-sidebar'),

      // Telemetry
      fpsCounter: document.getElementById('fps-counter'),
      statVehicleCount: document.getElementById('stat-vehicle-count'),
      statAvgSpeed: document.getElementById('stat-avg-speed'),
      statFlowEfficiency: document.getElementById('stat-flow-efficiency'),
      statSignalMode: document.getElementById('stat-signal-mode'),

      // Signal HUD
      signalPhaseBadge: document.getElementById('signal-phase-badge'),
      signalTimerText: document.getElementById('signal-timer-text'),
      signalProgressBar: document.getElementById('signal-progress-bar'),
      queueValNorth: document.getElementById('queue-val-north'),
      queueValSouth: document.getElementById('queue-val-south'),
      queueValEast: document.getElementById('queue-val-east'),
      queueValWest: document.getElementById('queue-val-west'),
      meterNorth: document.getElementById('meter-north'),
      meterSouth: document.getElementById('meter-south'),
      meterEast: document.getElementById('meter-east'),
      meterWest: document.getElementById('meter-west'),

      // Sliders & Presets
      modePills: document.querySelectorAll('.mode-pill'),
      sliderActiveVehicles: document.getElementById('slider-active-vehicles'),
      valActiveVehicles: document.getElementById('val-active-vehicles'),
      activeVehiclesRangeHint: document.getElementById('active-vehicles-range-hint'),
      sliderSpawnRate: document.getElementById('slider-spawn-rate'),
      valSpawnRate: document.getElementById('val-spawn-rate'),
      sliderSpeedMult: document.getElementById('slider-speed-mult'),
      valSpeedMult: document.getElementById('val-speed-mult'),
      lanePills: document.querySelectorAll('.lane-pill'),
      valLanes: document.getElementById('val-lanes'),

      // Signals
      toggleAdaptiveSignal: document.getElementById('toggle-adaptive-signal'),
      sliderNsGreen: document.getElementById('slider-ns-green'),
      valNsGreen: document.getElementById('val-ns-green'),
      sliderEwGreen: document.getElementById('slider-ew-green'),
      valEwGreen: document.getElementById('val-ew-green'),
      sliderYellowDur: document.getElementById('slider-yellow-dur'),
      valYellowDur: document.getElementById('val-yellow-dur'),
      btnForcePhase: document.getElementById('btn-force-phase'),
      btnForceNsGreen: document.getElementById('btn-force-ns-green'),
      btnForceEwGreen: document.getElementById('btn-force-ew-green'),
      btnForceYellow: document.getElementById('btn-force-yellow'),
      btnForceAllRed: document.getElementById('btn-force-all-red'),

      // Toggles
      togglePedestrians: document.getElementById('toggle-pedestrians'),
      toggleShadows: document.getElementById('toggle-shadows'),
      togglePaths: document.getElementById('toggle-paths'),
      toggleColliders: document.getElementById('toggle-colliders'),
      toggleParticles: document.getElementById('toggle-particles'),

      // Camera Dock
      camBtns: document.querySelectorAll('.cam-btn'),
      freeflyHelper: document.getElementById('freefly-helper'),

      // Vehicle Card
      vehicleCard: document.getElementById('vehicle-card'),
      vcardBadge: document.getElementById('vcard-badge'),
      vcardId: document.getElementById('vcard-id'),
      vcardSpeed: document.getElementById('vcard-speed'),
      vcardAccel: document.getElementById('vcard-accel'),
      vcardDist: document.getElementById('vcard-dist'),
      vcardIntent: document.getElementById('vcard-intent'),
      vcardClose: document.getElementById('vcard-close'),
      vcardBtnChase: document.getElementById('vcard-btn-chase'),

      // Modal
      cgModal: document.getElementById('cg-modal'),
      btnCloseModal: document.getElementById('btn-close-modal'),

      // Project introduction
      aboutPage: document.getElementById('about-page'),
      btnEnterSimulation: document.getElementById('btn-enter-simulation')
    };
  }

  bindEvents() {
    // Scenarios
    this.el.btnScenarioNormal.addEventListener('click', () => this.sim.setScenario('normal'));
    this.el.btnScenarioHeavy.addEventListener('click', () => this.sim.setScenario('heavy'));
    this.el.btnScenarioJam.addEventListener('click', () => this.sim.setScenario('jam'));
    this.el.btnScenarioEmergency.addEventListener('click', () => this.sim.setScenario('emergency'));
    this.el.btnScenarioAdaptive.addEventListener('click', () => this.sim.setScenario('adaptive'));

    this.el.ambDirBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const dir = btn.dataset.dir;
        this.sim.triggerEmergencyAmbulance(dir);
      });
    });

    // Utilities
    this.el.btnDayNight.addEventListener('click', () => {
      const isNight = !this.sim.sceneMgr.isNight;
      this.sim.sceneMgr.setNightMode(isNight);
      this.sim.roadNetwork.setNightMode(isNight);
      this.el.dayNightIcon.textContent = isNight ? '🌙' : '☀️';
    });

    this.el.btnWeather.addEventListener('click', () => {
      const isRain = !this.sim.particleSystem.rainEnabled;
      this.sim.particleSystem.setRain(isRain);
      this.el.btnWeather.classList.toggle('active', isRain);
    });

    this.el.btnSound.addEventListener('click', () => {
      const unmuted = this.sim.soundMgr.toggleMute();
      this.el.soundIcon.textContent = unmuted ? '🔊' : '🔇';
    });

    this.el.btnReset.addEventListener('click', () => this.sim.resetSimulation());

    // Project introduction: show/hide only the overlay. The existing Three.js
    // scene and simulation loop remain intact underneath it.
    this.el.btnAbout.addEventListener('click', () => this.showAbout());
    this.el.btnEnterSimulation.addEventListener('click', () => this.hideAbout());

    // Modal
    this.el.btnCgGuide.addEventListener('click', () => {
      this.el.cgModal.classList.remove('hidden');
    });
    this.el.btnCloseModal.addEventListener('click', () => {
      this.el.cgModal.classList.add('hidden');
    });
    this.el.cgModal.addEventListener('click', (e) => {
      if (e.target === this.el.cgModal) this.el.cgModal.classList.add('hidden');
    });

    // Sidebar collapse
    this.el.btnToggleSidebar.addEventListener('click', () => {
      this.el.sidebarPanel.classList.toggle('collapsed');
      this.el.btnToggleSidebar.textContent = this.el.sidebarPanel.classList.contains('collapsed') ? '▶' : '◀';
    });

    // Sliders
    this.el.sliderSpawnRate.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      this.sim.vehicleMgr.spawnRate = val;
      this.el.valSpawnRate.textContent = val + ' veh/min';
    });

    this.el.sliderSpeedMult.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.sim.vehicleMgr.globalSpeedMult = val;
      this.el.valSpeedMult.textContent = val.toFixed(1) + 'x';
    });

    // Traffic Mode (controls the Active Vehicles slider's range and default)
    this.el.modePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const mode = pill.dataset.mode;
        // setScenario drives setTrafficMode and keeps the top scenario bar,
        // signal timings, and this sidebar control in sync with each other.
        this.sim.setScenario(mode);
      });
    });

    // Active Vehicles slider: directly sets how many vehicles are kept alive
    // in the scene at once, clamped to the current mode's range (Normal
    // 5-10, Heavy 15-20, Traffic Jam 20-30).
    this.el.sliderActiveVehicles.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      this.sim.setActiveVehicleCount(val);
    });

    // Lanes
    this.el.lanePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const lanes = parseInt(pill.dataset.lanes);
        this.el.lanePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.el.valLanes.textContent = lanes + (lanes === 1 ? ' Lane' : ' Lanes');
        this.sim.rebuildRoadLanes(lanes);
      });
    });

    // Traffic Light controls
    this.el.toggleAdaptiveSignal.addEventListener('change', (e) => {
      this.sim.trafficLights.setAdaptive(e.target.checked);
      this.el.statSignalMode.textContent = e.target.checked ? 'Adaptive AI' : 'Fixed';
    });

    this.el.sliderNsGreen.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      this.sim.trafficLights.nsGreenDuration = val;
      this.el.valNsGreen.textContent = val + 's';
    });

    this.el.sliderEwGreen.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      this.sim.trafficLights.ewGreenDuration = val;
      this.el.valEwGreen.textContent = val + 's';
    });

    this.el.sliderYellowDur.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      this.sim.trafficLights.yellowDuration = val;
      this.el.valYellowDur.textContent = val + 's';
    });

    this.el.btnForcePhase.addEventListener('click', () => {
      this.sim.trafficLights.setManualPhase(this.sim.trafficLights.getNextPhaseState());
      this.el.statSignalMode.textContent = 'Manual';
      this.el.toggleAdaptiveSignal.checked = false;
    });

    this.el.btnForceNsGreen.addEventListener('click', () => this.setManualSignal(this.sim.trafficLights.STATES.NS_GREEN));
    this.el.btnForceEwGreen.addEventListener('click', () => this.setManualSignal(this.sim.trafficLights.STATES.EW_GREEN));
    this.el.btnForceYellow.addEventListener('click', () => this.setManualSignal(this.sim.trafficLights.STATES.NS_YELLOW));
    this.el.btnForceAllRed.addEventListener('click', () => this.setManualSignal(this.sim.trafficLights.STATES.ALL_RED_1));

    // Toggles
    this.el.togglePedestrians.addEventListener('change', (e) => {
      this.sim.pedestrianMgr.setEnabled(e.target.checked);
    });

    this.el.toggleShadows.addEventListener('change', (e) => {
      this.sim.sceneMgr.setShadowsEnabled(e.target.checked);
    });

    this.el.togglePaths.addEventListener('change', (e) => {
      this.sim.vehicleMgr.setPathLinesVisible(e.target.checked);
    });

    this.el.toggleColliders.addEventListener('change', (e) => {
      this.sim.vehicleMgr.setCollidersVisible(e.target.checked);
    });

    this.el.toggleParticles.addEventListener('change', (e) => {
      this.sim.particleSystem.setEnabled(e.target.checked);
    });

    // Camera Dock
    this.el.camBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.cam;
        this.setCameraModeUI(mode);
        this.sim.cameraSystem.setMode(mode, this.sim.vehicleMgr.selectedVehicle);
      });
    });

    // Vehicle Card actions
    this.el.vcardClose.addEventListener('click', () => {
      this.el.vehicleCard.classList.add('hidden');
      this.sim.vehicleMgr.selectedVehicle = null;
    });

    this.el.vcardBtnChase.addEventListener('click', () => {
      if (this.sim.vehicleMgr.selectedVehicle) {
        this.setCameraModeUI('chase');
        this.sim.cameraSystem.setMode('chase', this.sim.vehicleMgr.selectedVehicle);
      }
    });
  }

  setManualSignal(state) {
    this.sim.trafficLights.setManualPhase(state);
    this.el.toggleAdaptiveSignal.checked = false;
    this.el.statSignalMode.textContent = 'Manual';
  }

  showAbout() {
    this.sim.setSimulationActive(false);
    this.el.aboutPage.classList.remove('is-hidden');
    this.el.aboutPage.scrollTop = 0;
  }

  hideAbout() {
    this.el.aboutPage.classList.add('is-hidden');
    this.sim.setSimulationActive(true);
  }

  setCameraModeUI(mode) {
    this.el.camBtns.forEach(b => b.classList.remove('active'));
    const btn = document.querySelector('.cam-btn[data-cam="' + mode + '"]');
    if (btn) btn.classList.add('active');

    if (mode === 'freefly') {
      this.el.freeflyHelper.classList.remove('hidden');
    } else {
      this.el.freeflyHelper.classList.add('hidden');
    }
  }

  setScenarioUI(scenario) {
    this.el.scenarioBtns.forEach(b => b.classList.remove('active'));
    const btn = document.querySelector('.scenario-btn[data-scenario="' + scenario + '"]');
    if (btn) btn.classList.add('active');
    if (scenario !== 'emergency') {
      this.hideEmergencyBanner();
    }
  }

  setEmergencyDirectionUI(dir) {
    this.el.ambDirBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.dir === dir);
    });
    this.showEmergencyBanner(dir);
  }

  showEmergencyBanner(dir = 'N') {
    const dirNames = { N: 'NORTH', S: 'SOUTH', E: 'EAST', W: 'WEST' };
    const name = dirNames[dir] || 'NORTH';
    if (this.el.emergencyBannerText) {
      this.el.emergencyBannerText.textContent = 'EMERGENCY AMBULANCE PREEMPTION — EXCLUSIVE ' + name + ' GREEN CORRIDOR ACTIVE';
    }
    if (this.el.emergencyBanner) {
      this.el.emergencyBanner.classList.remove('hidden');
    }
  }

  hideEmergencyBanner() {
    if (this.el.emergencyBanner) {
      this.el.emergencyBanner.classList.add('hidden');
    }
  }

  /** Syncs the sidebar Traffic Mode pills + Active Vehicles slider to a mode/range/value. */
  setTrafficModeUI(mode, range, value) {
    this.el.modePills.forEach(p => p.classList.remove('active'));
    const pill = document.querySelector('.mode-pill[data-mode="' + mode + '"]');
    if (pill) pill.classList.add('active');

    this.el.sliderActiveVehicles.min = range.min;
    this.el.sliderActiveVehicles.max = range.max;
    this.el.sliderActiveVehicles.value = value;
    this.el.valActiveVehicles.textContent = value + ' vehicles';
    if (this.el.activeVehiclesRangeHint) {
      this.el.activeVehiclesRangeHint.textContent = range.min + '\u2013' + range.max + ' vehicles';
    }
  }

  initRaycasting() {
    window.addEventListener('click', (e) => {
      // Ignore clicks on UI overlay panels
      if (e.target.closest('.glass-panel') || e.target.closest('.modal-dialog')) return;

      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.sim.cameraSystem.camera);
      const vehicleMeshes = this.sim.vehicleMgr.vehicles.map(v => v.mesh);
      const intersects = this.raycaster.intersectObjects(vehicleMeshes, true);

      if (intersects.length > 0) {
        // Find corresponding vehicle
        let hitObj = intersects[0].object;
        while (hitObj.parent && !vehicleMeshes.includes(hitObj)) {
          hitObj = hitObj.parent;
        }
        const clickedVehicle = this.sim.vehicleMgr.vehicles.find(v => v.mesh === hitObj);
        if (clickedVehicle) {
          this.sim.vehicleMgr.selectedVehicle = clickedVehicle;
          this.el.vehicleCard.classList.remove('hidden');
        }
      }
    });
  }

  update(fps) {
    // 1. FPS Counter
    this.el.fpsCounter.textContent = fps + ' FPS';

    // 2. Telemetry Stats
    const stats = this.sim.vehicleMgr.getTelemetryStats();
    this.el.statVehicleCount.textContent = stats.vehicleCount;
    this.el.statAvgSpeed.innerHTML = stats.avgSpeed + ' <small>km/h</small>';
    this.el.statFlowEfficiency.textContent = stats.efficiency + '%';

    // 3. Directional Queues
    this.el.queueValNorth.textContent = stats.queues.N;
    this.el.queueValSouth.textContent = stats.queues.S;
    this.el.queueValEast.textContent = stats.queues.E;
    this.el.queueValWest.textContent = stats.queues.W;

    this.el.meterNorth.style.width = Math.min(100, stats.queues.N * 18) + '%';
    this.el.meterSouth.style.width = Math.min(100, stats.queues.S * 18) + '%';
    this.el.meterEast.style.width = Math.min(100, stats.queues.E * 18) + '%';
    this.el.meterWest.style.width = Math.min(100, stats.queues.W * 18) + '%';

    // 4. Traffic Light Cycle HUD
    const cycle = this.sim.trafficLights.getCycleInfo(stats.queues);
    this.el.signalPhaseBadge.textContent = cycle.phaseName;
    this.el.signalPhaseBadge.className = 'signal-phase-badge ' + cycle.phaseClass;
    this.el.signalTimerText.textContent = cycle.remainingSeconds + 's';
    this.el.signalProgressBar.style.width = cycle.progressPercent + '%';
    this.el.signalProgressBar.style.backgroundColor =
      cycle.phaseClass === 'green' ? '#10b981' : (cycle.phaseClass === 'yellow' ? '#f59e0b' : '#ef4444');

    // 5. Selected / Chased Vehicle Inspector Card
    const sel = this.sim.vehicleMgr.selectedVehicle;
    if (sel && !sel.isFinished) {
      this.el.vehicleCard.classList.remove('hidden');
      this.el.vcardId.textContent = '#' + (sel.isEmergency ? 'AMB-911' : 'CAR-' + sel.id);
      this.el.vcardBadge.textContent = sel.type.toUpperCase();
      this.el.vcardBadge.className = 'vtype-badge ' + sel.type;
      this.el.vcardSpeed.textContent = Math.round(sel.currentSpeed * 3.6) + ' km/h';
      this.el.vcardAccel.textContent = (sel.acceleration >= 0 ? '+' : '') + sel.acceleration.toFixed(2) + ' m/s²';
      this.el.vcardDist.textContent = sel.leadDistance > 200 ? 'Clear Road' : sel.leadDistance.toFixed(1) + ' m';
      this.el.vcardIntent.textContent = sel.pathData.maneuver.toUpperCase() + ' (' + sel.pathData.direction + ')';
    } else if (sel && sel.isFinished) {
      this.el.vehicleCard.classList.add('hidden');
    }
  }
}
