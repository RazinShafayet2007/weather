import type { PerformanceProfile } from './types';

const MOBILE_WIDTH = 640;
const TABLET_WIDTH = 1024;

export function getPerformanceProfile(): PerformanceProfile {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const maxTouchPoints = navigator.maxTouchPoints || 0;
  const isMobile = window.innerWidth <= MOBILE_WIDTH || maxTouchPoints > 1;
  const isTablet = !isMobile && window.innerWidth <= TABLET_WIDTH;
  const webglAvailable = detectWebGL();

  return {
    particleScale: reducedMotion ? 0.45 : isMobile ? 0.55 : isTablet ? 0.8 : 1,
    pixelRatio: Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2),
    reducedMotion,
    prefersFallback: !webglAvailable,
  };
}

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}
