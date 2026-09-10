import * as THREE from 'three';

/**
 * Procedural Texture Generator
 * Creates crisp, high-performance canvas textures for roads, markings, crosswalks,
 * road signs, and building facades with zero external image asset dependencies.
 */
export class TextureGenerator {
  static cachedTextures = new Map();

  /**
   * Generates asphalt road texture with subtle noise grain
   */
  static getAsphaltTexture() {
    if (this.cachedTextures.has('asphalt')) return this.cachedTextures.get('asphalt');

    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Base dark asphalt color
    ctx.fillStyle = '#23272e';
    ctx.fillRect(0, 0, size, size);

    // Add noise grain
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 18;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    this.cachedTextures.set('asphalt', texture);
    return texture;
  }

  /**
   * Generates road segment texture with configurable lanes, center divider, and markings
   * @param {number} lanesPerDirection - 1, 2, or 3
   */
  static getRoadLaneTexture(lanesPerDirection = 2) {
    const key = 'road_lanes_' + lanesPerDirection;
    if (this.cachedTextures.has(key)) return this.cachedTextures.get(key);

    const width = 1024;
    const height = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Base asphalt
    ctx.fillStyle = '#22262c';
    ctx.fillRect(0, 0, width, height);

    // Fine aggregate noise
    const imgData = ctx.getImageData(0, 0, width, height);
    const d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = (Math.random() - 0.5) * 14;
      d[i] = Math.min(255, Math.max(0, d[i] + n));
      d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n));
      d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n));
    }
    ctx.putImageData(imgData, 0, 0);

    const totalLanes = lanesPerDirection * 2;
    const laneWidth = width / totalLanes;
    const centerX = width / 2;

    // Solid white edge lines
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(12, 0, 10, height);
    ctx.fillRect(width - 22, 0, 10, height);

    // Double solid yellow center divider
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(centerX - 10, 0, 6, height);
    ctx.fillRect(centerX + 4, 0, 6, height);

    // Dashed white lane dividers
    ctx.fillStyle = '#ffffff';
    const dashLength = 64;
    const gapLength = 64;
    const numDashes = Math.ceil(height / (dashLength + gapLength));

    for (let i = 1; i < totalLanes; i++) {
      if (i === lanesPerDirection) continue; // Skip center line (handled by yellow divider)
      const x = i * laneWidth;
      for (let j = 0; j < numDashes; j++) {
        const y = j * (dashLength + gapLength);
        ctx.fillRect(x - 3, y, 6, dashLength);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 4);
    this.cachedTextures.set(key, texture);
    return texture;
  }

  /**
   * Generates zebra crosswalk texture
   */
  static getCrosswalkTexture() {
    if (this.cachedTextures.has('crosswalk')) return this.cachedTextures.get('crosswalk');

    const width = 512;
    const height = 512;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Asphalt background
    ctx.fillStyle = '#1e2229';
    ctx.fillRect(0, 0, width, height);

    // Zebra white stripes
    ctx.fillStyle = '#f8fafc';
    const stripeWidth = 42;
    const gap = 38;
    const total = stripeWidth + gap;
    const count = Math.ceil(width / total) + 1;

    for (let i = 0; i < count; i++) {
      const x = i * total;
      ctx.fillRect(x, 20, stripeWidth, height - 40);
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cachedTextures.set('crosswalk', texture);
    return texture;
  }

  /**
   * Generates sidewalk pavement texture
   */
  static getSidewalkTexture() {
    if (this.cachedTextures.has('sidewalk')) return this.cachedTextures.get('sidewalk');

    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Concrete base
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(0, 0, size, size);

    // Tile grid lines
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4;
    const tileSize = 64;

    for (let x = 0; x <= size; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, size);
      ctx.stroke();
    }
    for (let y = 0; y <= size; y += tileSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
    this.cachedTextures.set('sidewalk', texture);
    return texture;
  }

  /**
   * Generates skyscraper facade texture with glowing and dark windows
   */
  static getBuildingFacadeTexture(baseColor = '#1e293b', windowColor = '#fef08a') {
    const key = 'facade_' + baseColor + '_' + windowColor;
    if (this.cachedTextures.has(key)) return this.cachedTextures.get(key);

    const width = 512;
    const height = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Base building wall
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, width, height);

    // Grid of windows
    const cols = 8;
    const rows = 24;
    const padX = 16;
    const padY = 16;
    const winW = (width - padX * (cols + 1)) / cols;
    const winH = (height - padY * (rows + 1)) / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = padX + c * (winW + padX);
        const y = padY + r * (winH + padY);

        // Random window illumination state (80% illuminated, 20% dark)
        const isLit = Math.random() > 0.35;
        if (isLit) {
          const warm = Math.random() > 0.4;
          ctx.fillStyle = warm ? windowColor : '#bae6fd';
          ctx.fillRect(x, y, winW, winH);

          // Window frame inner shadow
          ctx.fillStyle = 'rgba(0,0,0,0.15)';
          ctx.fillRect(x, y, winW, 3);
        } else {
          ctx.fillStyle = '#090d16';
          ctx.fillRect(x, y, winW, winH);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.cachedTextures.set(key, texture);
    return texture;
  }

  /**
   * Generates road signs: Stop, Speed Limit, One Way, etc.
   */
  static getRoadSignTexture(type = 'stop') {
    const key = 'sign_' + type;
    if (this.cachedTextures.has(key)) return this.cachedTextures.get(key);

    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (type === 'stop') {
      // Octagon Stop Sign
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      const r = size * 0.46;
      const cx = size / 2;
      const cy = size / 2;
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + Math.PI / 8;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      // White inner border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 10;
      ctx.stroke();

      // STOP text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 64px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('STOP', cx, cy);
    } else if (type === 'speed_limit') {
      // Speed Limit Sign
      ctx.fillStyle = '#ffffff';
      ctx.roundRect(16, 16, size - 32, size - 32, 20);
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 8;
      ctx.stroke();

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 26px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SPEED', size / 2, 60);
      ctx.fillText('LIMIT', size / 2, 90);

      ctx.font = 'bold 88px Inter, sans-serif';
      ctx.fillText('35', size / 2, 180);
    } else if (type === 'one_way') {
      // Direction / One Way Arrow
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(16, 64, size - 32, 128);

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(size - 48, 128);
      ctx.lineTo(size - 100, 88);
      ctx.lineTo(size - 100, 112);
      ctx.lineTo(48, 112);
      ctx.lineTo(48, 144);
      ctx.lineTo(size - 100, 144);
      ctx.lineTo(size - 100, 168);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('ONE WAY', 120, 136);
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cachedTextures.set(key, texture);
    return texture;
  }
}
