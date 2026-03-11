import { createCanvas } from './createCanvas';
import { chance, random } from './random';
import { times } from './times';

interface Drop {
  x: number;
  y: number;
  r: number;
  spreadX: number;
  spreadY: number;
  momentum: number;
  momentumX: number;
  lastSpawn: number;
  nextSpawn: number;
  parent: Drop | null;
  isNew: boolean;
  killed: boolean;
  shrink: number;
}

interface RainOptions {
  minR: number;
  maxR: number;
  maxDrops: number;
  rainChance: number;
  rainLimit: number;
  dropletsRate: number;
  dropletsSize: [number, number];
  dropletsCleaningRadiusMultiplier: number;
  raining: boolean;
  globalTimeScale: number;
  trailRate: number;
  autoShrink: boolean;
  spawnArea: [number, number];
  trailScaleRange: [number, number];
  collisionRadius: number;
  collisionRadiusIncrease: number;
  dropFallMultiplier: number;
  collisionBoostMultiplier: number;
  collisionBoost: number;
}

const dropSize = 64;
const defaultOptions: RainOptions = {
  minR: 10,
  maxR: 34,
  maxDrops: 400,
  rainChance: 0.22,
  rainLimit: 3,
  dropletsRate: 30,
  dropletsSize: [2, 4],
  dropletsCleaningRadiusMultiplier: 0.38,
  raining: true,
  globalTimeScale: 1,
  trailRate: 1,
  autoShrink: true,
  spawnArea: [-0.1, 0.95],
  trailScaleRange: [0.2, 0.45],
  collisionRadius: 0.5,
  collisionRadiusIncrease: 0.01,
  dropFallMultiplier: 1,
  collisionBoostMultiplier: 0.05,
  collisionBoost: 1,
};

export class Raindrops {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  private readonly droplets: HTMLCanvasElement;
  private readonly dropletsCtx: CanvasRenderingContext2D;
  private readonly clearDropletsGfx: HTMLCanvasElement;
  private readonly dropsGfx: HTMLCanvasElement[];
  private readonly width: number;
  private readonly height: number;
  private readonly scale: number;
  private readonly dropAlpha: HTMLCanvasElement;
  private readonly dropColor: HTMLCanvasElement;
  private readonly dropletsPixelDensity = 1;
  private drops: Drop[] = [];
  private dropletsCounter = 0;
  private textureCleaningIterations = 0;
  private lastRender: number | null = null;
  private frameId = 0;
  options: RainOptions;

  constructor(width: number, height: number, scale: number, dropAlpha: HTMLCanvasElement, dropColor: HTMLCanvasElement, options: Partial<RainOptions> = {}) {
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.dropAlpha = dropAlpha;
    this.dropColor = dropColor;
    this.options = { ...defaultOptions, ...options };

    this.canvas = createCanvas(width, height);
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.droplets = createCanvas(width * this.dropletsPixelDensity, height * this.dropletsPixelDensity);
    this.dropletsCtx = this.droplets.getContext('2d') as CanvasRenderingContext2D;
    this.dropsGfx = this.renderDropsGfx();
    this.clearDropletsGfx = this.renderClearBrush();
    this.update();
  }

  clearDrops() {
    this.textureCleaningIterations = 40;
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
  }

  private get deltaR() {
    return this.options.maxR - this.options.minR;
  }

  private get areaMultiplier() {
    return Math.sqrt((this.width * this.height) / this.scale / (1024 * 768));
  }

  private renderDropsGfx() {
    const dropBuffer = createCanvas(dropSize, dropSize);
    const dropBufferCtx = dropBuffer.getContext('2d') as CanvasRenderingContext2D;

    return Array.from({ length: 255 }, (_, index) => {
      const drop = createCanvas(dropSize, dropSize);
      const dropCtx = drop.getContext('2d') as CanvasRenderingContext2D;

      dropBufferCtx.clearRect(0, 0, dropSize, dropSize);
      dropBufferCtx.globalCompositeOperation = 'source-over';
      dropBufferCtx.drawImage(this.dropColor, 0, 0, dropSize, dropSize);
      dropBufferCtx.globalCompositeOperation = 'screen';
      dropBufferCtx.fillStyle = `rgba(0,0,${index},1)`;
      dropBufferCtx.fillRect(0, 0, dropSize, dropSize);

      dropCtx.globalCompositeOperation = 'source-over';
      dropCtx.drawImage(this.dropAlpha, 0, 0, dropSize, dropSize);
      dropCtx.globalCompositeOperation = 'source-in';
      dropCtx.drawImage(dropBuffer, 0, 0, dropSize, dropSize);

      return drop;
    });
  }

  private renderClearBrush() {
    const brush = createCanvas(128, 128);
    const brushCtx = brush.getContext('2d') as CanvasRenderingContext2D;
    brushCtx.fillStyle = '#000';
    brushCtx.beginPath();
    brushCtx.arc(64, 64, 64, 0, Math.PI * 2);
    brushCtx.fill();
    return brush;
  }

  private createDrop(overrides: Partial<Drop>) {
    if (this.drops.length >= this.options.maxDrops * this.areaMultiplier) {
      return null;
    }

    return {
      x: 0,
      y: 0,
      r: 0,
      spreadX: 0,
      spreadY: 0,
      momentum: 0,
      momentumX: 0,
      lastSpawn: 0,
      nextSpawn: 0,
      parent: null,
      isNew: true,
      killed: false,
      shrink: 0,
      ...overrides,
    } as Drop;
  }

  private updateRain(timeScale: number) {
    const rainDrops: Drop[] = [];
    if (!this.options.raining) {
      return rainDrops;
    }

    const limit = this.options.rainLimit * timeScale * this.areaMultiplier;
    let count = 0;
    while (chance(this.options.rainChance * timeScale * this.areaMultiplier) && count < limit) {
      count += 1;
      const radius = random(this.options.minR, this.options.maxR, (value) => value ** 3);
      const drop = this.createDrop({
        x: random(this.width / this.scale),
        y: random((this.height / this.scale) * this.options.spawnArea[0], (this.height / this.scale) * this.options.spawnArea[1]),
        r: radius,
        momentum: 1 + (radius - this.options.minR) * 0.1 + random(1.2),
        spreadX: 1.3,
        spreadY: 1.3,
      });
      if (drop) {
        rainDrops.push(drop);
      }
    }

    return rainDrops;
  }

  private drawDrop(ctx: CanvasRenderingContext2D, drop: Drop) {
    const d = Math.max(0, Math.min(1, ((drop.r - this.options.minR) / this.deltaR) * 0.9)) / (((drop.spreadX + drop.spreadY) * 0.5) + 1);
    const sprite = this.dropsGfx[Math.floor(d * (this.dropsGfx.length - 1))];
    const scaleX = 1;
    const scaleY = 1.5;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(
      sprite,
      (drop.x - drop.r * scaleX * (drop.spreadX + 1)) * this.scale,
      (drop.y - drop.r * scaleY * (drop.spreadY + 1)) * this.scale,
      drop.r * 2 * scaleX * (drop.spreadX + 1) * this.scale,
      drop.r * 2 * scaleY * (drop.spreadY + 1) * this.scale,
    );
  }

  private clearDroplets(x: number, y: number, r = 30) {
    this.dropletsCtx.globalCompositeOperation = 'destination-out';
    this.dropletsCtx.drawImage(
      this.clearDropletsGfx,
      (x - r) * this.dropletsPixelDensity * this.scale,
      (y - r) * this.dropletsPixelDensity * this.scale,
      r * 2 * this.dropletsPixelDensity * this.scale,
      r * 2 * this.dropletsPixelDensity * this.scale * 1.5,
    );
  }

  private updateDroplets(timeScale: number) {
    if (this.textureCleaningIterations > 0) {
      this.textureCleaningIterations -= 1 * timeScale;
      this.dropletsCtx.globalCompositeOperation = 'destination-out';
      this.dropletsCtx.fillStyle = `rgba(0,0,0,${0.05 * timeScale})`;
      this.dropletsCtx.fillRect(0, 0, this.width * this.dropletsPixelDensity, this.height * this.dropletsPixelDensity);
    }

    if (this.options.raining) {
      this.dropletsCounter += this.options.dropletsRate * timeScale * this.areaMultiplier;
      times(this.dropletsCounter, () => {
        this.dropletsCounter -= 1;
        this.drawDrop(this.dropletsCtx, {
          x: random(this.width / this.scale) * this.dropletsPixelDensity,
          y: random(this.height / this.scale) * this.dropletsPixelDensity,
          r: random(...this.options.dropletsSize, (value) => value * value) * this.dropletsPixelDensity,
          spreadX: 0,
          spreadY: 0,
          momentum: 0,
          momentumX: 0,
          lastSpawn: 0,
          nextSpawn: 0,
          parent: null,
          isNew: false,
          killed: false,
          shrink: 0,
        });
      });
    }

    this.ctx.drawImage(this.droplets, 0, 0, this.width, this.height);
  }

  private updateDrops(timeScale: number) {
    let newDrops = this.updateRain(timeScale);
    this.updateDroplets(timeScale);
    this.drops.sort((left, right) => left.y - right.y || left.x - right.x);

    this.drops.forEach((drop, index) => {
      if (drop.killed) {
        return;
      }

      if (chance((drop.r - this.options.minR * this.options.dropFallMultiplier) * (0.1 / this.deltaR) * timeScale)) {
        drop.momentum += random((drop.r / this.options.maxR) * 3);
      }
      if (this.options.autoShrink && drop.r <= this.options.minR && chance(0.04 * timeScale)) {
        drop.shrink += 0.01;
      }
      drop.r -= drop.shrink * timeScale;
      if (drop.r <= 0) {
        drop.killed = true;
      }

      if (this.options.raining) {
        drop.lastSpawn += drop.momentum * timeScale * this.options.trailRate;
        if (drop.lastSpawn > drop.nextSpawn) {
          const trailDrop = this.createDrop({
            x: drop.x + random(-drop.r, drop.r) * 0.1,
            y: drop.y - drop.r * 0.01,
            r: drop.r * random(...this.options.trailScaleRange),
            spreadY: drop.momentum * 0.1,
            parent: drop,
          });
          if (trailDrop) {
            newDrops.push(trailDrop);
            drop.r *= Math.pow(0.97, timeScale);
            drop.lastSpawn = 0;
            drop.nextSpawn = random(this.options.minR, this.options.maxR) - drop.momentum * 2 * this.options.trailRate + (this.options.maxR - drop.r);
          }
        }
      }

      drop.spreadX *= Math.pow(0.4, timeScale);
      drop.spreadY *= Math.pow(0.7, timeScale);

      const moved = drop.momentum > 0;
      if (moved && !drop.killed) {
        drop.y += drop.momentum * this.options.globalTimeScale;
        drop.x += drop.momentumX * this.options.globalTimeScale;
        if (drop.y > this.height / this.scale + drop.r) {
          drop.killed = true;
        }
      }

      if ((moved || drop.isNew) && !drop.killed) {
        drop.isNew = false;
        this.drops.slice(index + 1, index + 70).forEach((drop2) => {
          if (drop === drop2 || drop.r <= drop2.r || drop.parent === drop2 || drop2.parent === drop || drop2.killed) {
            return;
          }
          const dx = drop2.x - drop.x;
          const dy = drop2.y - drop.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance >= (drop.r + drop2.r) * (this.options.collisionRadius + drop.momentum * this.options.collisionRadiusIncrease * timeScale)) {
            return;
          }
          const area1 = Math.PI * drop.r * drop.r;
          const area2 = Math.PI * drop2.r * drop2.r;
          drop.r = Math.sqrt((area1 + area2 * 0.8) / Math.PI);
          drop.momentumX += dx * 0.1;
          drop.spreadX = 0;
          drop.spreadY = 0;
          drop2.killed = true;
          drop.momentum = Math.max(drop2.momentum, Math.min(40, drop.momentum + drop.r * this.options.collisionBoostMultiplier + this.options.collisionBoost));
        });
      }

      drop.momentum -= Math.max(1, this.options.minR * 0.5 - drop.momentum) * 0.1 * timeScale;
      drop.momentum = Math.max(0, drop.momentum);
      drop.momentumX *= Math.pow(0.7, timeScale);

      if (!drop.killed) {
        newDrops.push(drop);
        if (moved && this.options.dropletsRate > 0) {
          this.clearDroplets(drop.x, drop.y, drop.r * this.options.dropletsCleaningRadiusMultiplier);
        }
        this.drawDrop(this.ctx, drop);
      }
    });

    this.drops = newDrops;
  }

  private update = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const now = performance.now();
    if (this.lastRender === null) {
      this.lastRender = now;
    }
    const delta = now - this.lastRender;
    let timeScale = delta / ((1 / 60) * 1000);
    timeScale = Math.min(timeScale, 1.1);
    timeScale *= this.options.globalTimeScale;
    this.lastRender = now;

    this.updateDrops(timeScale);
    this.frameId = requestAnimationFrame(this.update);
  };
}
