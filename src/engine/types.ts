import * as THREE from 'three';

export type Season = 'summer' | 'winter' | 'rainy';

export interface PerformanceProfile {
  particleScale: number;
  pixelRatio: number;
  reducedMotion: boolean;
  prefersFallback: boolean;
}

export interface SceneContext {
  camera: THREE.PerspectiveCamera;
  performance: PerformanceProfile;
  viewport: {
    width: number;
    height: number;
    dpr: number;
  };
}

export interface ThemeDefinition {
  season: Season;
  label: string;
  palette: {
    base: string;
    surface: string;
    accent: string;
    accentSoft: string;
    text: string;
    mutedText: string;
    border: string;
    heroGlow: string;
    gradientA: string;
    gradientB: string;
    gradientC: string;
    overlay: string;
  };
}

export interface SeasonalScene {
  readonly season: Season;
  readonly label: string;
  readonly root: THREE.Group;
  init(context: SceneContext): void;
  enter(context: SceneContext): void;
  update(delta: number, elapsed: number, mix: number): void;
  exit(): void;
  resize(context: SceneContext): void;
  dispose(): void;
}
