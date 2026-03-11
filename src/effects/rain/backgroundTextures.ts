import { createCanvas } from './createCanvas';

export function createRainBackgroundTextures(width: number, height: number) {
  const bg = createCanvas(width, height);
  const fg = createCanvas(width, height);

  const bgCtx = bg.getContext('2d');
  const fgCtx = fg.getContext('2d');
  if (!bgCtx || !fgCtx) {
    throw new Error('2D context unavailable');
  }

  const gradient = bgCtx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#050a11');
  gradient.addColorStop(0.45, '#132536');
  gradient.addColorStop(1, '#46677c');
  bgCtx.fillStyle = gradient;
  bgCtx.fillRect(0, 0, width, height);

  const glowA = bgCtx.createRadialGradient(width * 0.18, height * 0.22, 0, width * 0.18, height * 0.22, width * 0.36);
  glowA.addColorStop(0, 'rgba(108, 154, 184, 0.22)');
  glowA.addColorStop(1, 'rgba(108, 154, 184, 0)');
  bgCtx.fillStyle = glowA;
  bgCtx.fillRect(0, 0, width, height);

  const glowB = fgCtx.createRadialGradient(width * 0.7, height * 0.15, 0, width * 0.7, height * 0.15, width * 0.28);
  glowB.addColorStop(0, 'rgba(208, 229, 240, 0.12)');
  glowB.addColorStop(1, 'rgba(208, 229, 240, 0)');
  fgCtx.fillStyle = gradient;
  fgCtx.fillRect(0, 0, width, height);
  fgCtx.fillStyle = glowB;
  fgCtx.fillRect(0, 0, width, height);

  fgCtx.strokeStyle = 'rgba(210, 228, 238, 0.08)';
  fgCtx.lineWidth = Math.max(1, width * 0.0012);
  for (let index = 0; index < 6; index += 1) {
    const y = height * (0.15 + index * 0.13);
    fgCtx.beginPath();
    fgCtx.moveTo(-width * 0.1, y);
    fgCtx.quadraticCurveTo(width * 0.45, y - 24, width * 1.05, y + 18);
    fgCtx.stroke();
  }

  return { fg, bg };
}
