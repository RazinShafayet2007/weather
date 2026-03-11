import { useEffect, useRef } from 'react';

interface SnowfallEffectProps {
  active: boolean;
}

interface Flake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  nextSpeed: number;
  nextWind: number;
  opacity: number;
  drift: number;
  layer: 0 | 1 | 2;
}

const TARGET_FRAME = 1000 / 60;

export function SnowfallEffect({ active }: SnowfallEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active || !canvasRef.current) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;
    let lastUpdate = Date.now();
    let ticks = 0;
    let flakes: Flake[] = [];

    const flakeCount = window.innerWidth < 640 ? 55 : window.innerWidth < 1024 ? 85 : 115;

    const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;
    const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount;

    const createFlake = (spawnAtTop = false): Flake => ({
      x: randomBetween(0, width),
      y: spawnAtTop ? randomBetween(-height * 0.15, 0) : randomBetween(-height, height),
      radius: randomBetween(1, 3.2),
      speed: randomBetween(0.4, 1.05),
      wind: randomBetween(-0.22, 0.45),
      nextSpeed: randomBetween(0.4, 1.05),
      nextWind: randomBetween(-0.22, 0.45),
      opacity: randomBetween(0.5, 0.92),
      drift: randomBetween(0.2, 1.1),
      layer: Math.random() > 0.72 ? 2 : Math.random() > 0.45 ? 1 : 0,
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flakes = Array.from({ length: flakeCount }, () => createFlake());
    };

    const draw = (framesPassed: number) => {
      ctx.clearRect(0, 0, width, height);

      for (let layer = 0; layer < 3; layer += 1) {
        ctx.beginPath();

        for (const flake of flakes) {
          flake.x += (flake.wind + Math.sin((ticks + flake.drift) * 0.01) * 0.12) * framesPassed;
          flake.y += flake.speed * framesPassed;
          flake.speed = lerp(flake.speed, flake.nextSpeed, 0.008);
          flake.wind = lerp(flake.wind, flake.nextWind, 0.008);

          if (ticks % 240 === 0) {
            flake.nextSpeed = randomBetween(0.4, 1.05);
            flake.nextWind = randomBetween(-0.22, 0.45);
          }

          if (flake.y > height + flake.radius || flake.x > width + 24 || flake.x < -24) {
            Object.assign(flake, createFlake(true), { x: randomBetween(-20, width + 20) });
          }

          if (flake.layer !== layer) {
            continue;
          }

          const radius = flake.radius * (layer === 2 ? 1.1 : layer === 1 ? 0.9 : 0.75);
          ctx.moveTo(flake.x + radius, flake.y);
          ctx.arc(flake.x, flake.y, radius, 0, Math.PI * 2);
        }

        ctx.globalAlpha = layer === 2 ? 0.88 : layer === 1 ? 0.68 : 0.46;
        ctx.fillStyle = layer === 2 ? '#f8fcff' : layer === 1 ? '#e5f1fb' : '#d5e7f5';
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const loop = () => {
      const now = Date.now();
      const framesPassed = (now - lastUpdate) / TARGET_FRAME;
      lastUpdate = now;
      ticks += 1;
      draw(Math.min(framesPassed, 2));
      frameId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    frameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  return <canvas ref={canvasRef} className={active ? 'snowfall-canvas active' : 'snowfall-canvas'} aria-hidden="true" />;
}
