import { SimulationManager } from './core/SimulationManager.js';

// Initialize Simulation once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (container) {
    window.simulationApp = new SimulationManager(container);
    console.log('🚀 3D Traffic Simulation & Intelligent Intersection Initialized Successfully!');
  }
});
