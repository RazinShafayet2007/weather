import { createCanvas } from './createCanvas';

export function generateDropTextures() {
  const size = 64;

  const alpha = createCanvas(size, size);
  const alphaCtx = alpha.getContext('2d');
  if (!alphaCtx) {
    throw new Error('2D context unavailable');
  }
  alphaCtx.clearRect(0, 0, size, size);
  alphaCtx.beginPath();
  alphaCtx.ellipse(32, 32, 18, 25, 0, 0, Math.PI * 2);
  const alphaGradient = alphaCtx.createRadialGradient(26, 24, 2, 32, 32, 28);
  alphaGradient.addColorStop(0, 'rgba(255,255,255,0.95)');
  alphaGradient.addColorStop(0.55, 'rgba(255,255,255,0.78)');
  alphaGradient.addColorStop(1, 'rgba(255,255,255,0)');
  alphaCtx.fillStyle = alphaGradient;
  alphaCtx.fill();

  const color = createCanvas(size, size);
  const colorCtx = color.getContext('2d');
  if (!colorCtx) {
    throw new Error('2D context unavailable');
  }
  colorCtx.clearRect(0, 0, size, size);
  const baseGradient = colorCtx.createLinearGradient(0, 0, size, size);
  baseGradient.addColorStop(0, 'rgba(228,244,255,0.95)');
  baseGradient.addColorStop(0.45, 'rgba(149,187,212,0.9)');
  baseGradient.addColorStop(1, 'rgba(52,82,104,0.88)');
  colorCtx.fillStyle = baseGradient;
  colorCtx.fillRect(0, 0, size, size);
  colorCtx.globalCompositeOperation = 'screen';
  const shine = colorCtx.createRadialGradient(20, 18, 0, 20, 18, 16);
  shine.addColorStop(0, 'rgba(255,255,255,0.95)');
  shine.addColorStop(1, 'rgba(255,255,255,0)');
  colorCtx.fillStyle = shine;
  colorCtx.fillRect(0, 0, size, size);

  return { alpha, color };
}
