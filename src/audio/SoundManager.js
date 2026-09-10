/**
 * SoundManager
 * Web Audio API procedural sound synthesizer for vehicle engine hums
 * and emergency wailing sirens without requiring external mp3/wav files.
 */
export class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = true;
    this.sirenActive = false;

    // Nodes
    this.sirenOsc = null;
    this.sirenGain = null;
    this.lfoOsc = null;
    this.lfoGain = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    this.initContext();
    if (this.muted) {
      this.stopSiren();
    } else if (this.sirenActive) {
      this.startSiren();
    }
    return !this.muted;
  }

  setEmergencySiren(active) {
    this.sirenActive = active;
    if (active && !this.muted) {
      this.startSiren();
    } else {
      this.stopSiren();
    }
  }

  startSiren() {
    if (this.muted || this.sirenOsc) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      // Main carrier oscillator
      this.sirenOsc = this.ctx.createOscillator();
      this.sirenOsc.type = 'sawtooth';
      this.sirenOsc.frequency.setValueAtTime(750, this.ctx.currentTime);

      // Low-Frequency Oscillator (LFO) for pitch modulation (wail effect)
      this.lfoOsc = this.ctx.createOscillator();
      this.lfoOsc.type = 'triangle';
      this.lfoOsc.frequency.setValueAtTime(0.4, this.ctx.currentTime); // 0.4 Hz sweep

      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(220, this.ctx.currentTime); // +/- 220 Hz pitch variation

      this.lfoOsc.connect(this.lfoGain);
      this.lfoGain.connect(this.sirenOsc.frequency);

      // Output Gain
      this.sirenGain = this.ctx.createGain();
      this.sirenGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      this.sirenOsc.connect(this.sirenGain);
      this.sirenGain.connect(this.ctx.destination);

      this.sirenOsc.start();
      this.lfoOsc.start();
    } catch (e) {
      console.warn('Audio start error:', e);
    }
  }

  stopSiren() {
    if (this.sirenOsc) {
      try {
        this.sirenOsc.stop();
        this.lfoOsc.stop();
        this.sirenOsc.disconnect();
        this.lfoOsc.disconnect();
      } catch (e) {}
      this.sirenOsc = null;
      this.lfoOsc = null;
      this.sirenGain = null;
    }
  }
}
