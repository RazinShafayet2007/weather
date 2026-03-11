import { useEffect, useRef } from 'react';
import { createRainBackgroundTextures } from './backgroundTextures';
import { generateDropTextures } from './generateDropTextures';
import { Raindrops } from './raindrops';
import { RainRenderer } from './rainRenderer';

interface RainGlassEffectProps {
  active: boolean;
}

export function RainGlassEffect({ active }: RainGlassEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active || !canvasRef.current) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const dpi = Math.min(window.devicePixelRatio || 1, 1.6);
    const width = Math.max(1, Math.floor(window.innerWidth * dpi));
    const height = Math.max(1, Math.floor(window.innerHeight * dpi));
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const { alpha, color } = generateDropTextures();
    const { fg, bg } = createRainBackgroundTextures(width, height);
    const raindrops = new Raindrops(width, height, dpi, alpha, color, {
      minR: 10,
      maxR: 28,
      maxDrops: 260,
      rainChance: 0.24,
      rainLimit: 2,
      dropletsRate: 22,
      dropletsSize: [1.5, 3.2],
      trailRate: 0.75,
      collisionRadius: 0.42,
      dropletsCleaningRadiusMultiplier: 0.22,
    });
    const renderer = new RainRenderer(canvas, raindrops.canvas, fg, bg);

    const handleResize = () => window.location.reload();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.destroy();
      raindrops.destroy();
    };
  }, [active]);

  return <canvas ref={canvasRef} className={active ? 'rain-glass-canvas active' : 'rain-glass-canvas'} aria-hidden="true" />;
}
