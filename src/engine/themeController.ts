import gsap from 'gsap';
import * as THREE from 'three';
import { getPerformanceProfile } from './performanceManager';
import { BackgroundRenderer } from './renderer';
import { TransitionManager } from './transitionManager';
import type { SceneContext, Season, SeasonalScene, ThemeDefinition } from './types';

type SceneFactory = () => SeasonalScene;

const STORAGE_KEY = 'weather-season';

export class ThemeController {
  private readonly host: HTMLElement;
  private readonly sceneFactories: Record<Season, SceneFactory>;
  private readonly themes: Record<Season, ThemeDefinition>;
  private readonly transitionManager = new TransitionManager();
  private readonly onThemeChange?: (theme: ThemeDefinition) => void;
  private renderer: BackgroundRenderer | null;
  private performance = getPerformanceProfile();
  private activeContext: SceneContext;
  private activeScene: SeasonalScene | null = null;
  private previousScene: SeasonalScene | null = null;
  private currentSeason: Season;
  private themeMix = 1;
  private rafId = 0;
  private elapsed = 0;
  private lastTime = 0;
  private boundResize = () => this.handleResize();

  constructor(options: {
    host: HTMLElement;
    defaultSeason: Season;
    sceneFactories: Record<Season, SceneFactory>;
    themes: Record<Season, ThemeDefinition>;
    onThemeChange?: (theme: ThemeDefinition) => void;
  }) {
    this.host = options.host;
    this.sceneFactories = options.sceneFactories;
    this.themes = options.themes;
    this.onThemeChange = options.onThemeChange;
    this.currentSeason = this.getInitialSeason(options.defaultSeason);
    this.renderer = this.performance.prefersFallback ? null : new BackgroundRenderer(this.host, this.performance);
    this.activeContext = this.createContext();
  }

  init() {
    if (this.renderer) {
      this.mountScene(this.currentSeason);
      this.rafId = window.requestAnimationFrame(this.tick);
    }
    this.applyUiTheme(this.themes[this.currentSeason], true);
    window.addEventListener('resize', this.boundResize);
  }

  getSeason() {
    return this.currentSeason;
  }

  getFallbackMode() {
    return this.performance.prefersFallback;
  }

  setSeason(nextSeason: Season) {
    if (nextSeason === this.currentSeason) {
      return;
    }

    this.currentSeason = nextSeason;
    window.localStorage.setItem(STORAGE_KEY, nextSeason);

    if (!this.renderer) {
      this.applyUiTheme(this.themes[nextSeason]);
      return;
    }

    const nextScene = this.sceneFactories[nextSeason]();
    nextScene.init(this.activeContext);
    nextScene.enter(this.activeContext);
    setSceneOpacity(nextScene, 0);
    this.renderer.root.add(nextScene.root);

    if (this.previousScene) {
      this.renderer.root.remove(this.previousScene.root);
      this.previousScene.dispose();
    }

    this.previousScene = this.activeScene;
    this.activeScene = nextScene;
    this.applyUiTheme(this.themes[nextSeason]);

    this.transitionManager.start(
      (value) => {
        this.themeMix = value;
        this.applySceneMix();
      },
      () => {
        if (!this.renderer || !this.previousScene) {
          return;
        }
        this.previousScene.exit();
        this.renderer.root.remove(this.previousScene.root);
        this.previousScene.dispose();
        this.previousScene = null;
      },
      this.performance.reducedMotion ? 0.3 : 1.15,
    );
  }

  dispose() {
    window.cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.boundResize);
    this.transitionManager.dispose();
    this.activeScene?.dispose();
    this.previousScene?.dispose();
    this.renderer?.dispose();
  }

  private mountScene(season: Season) {
    this.activeScene = this.sceneFactories[season]();
    this.activeScene.init(this.activeContext);
    this.activeScene.enter(this.activeContext);
    this.renderer?.root.add(this.activeScene.root);
    this.applySceneMix();
  }

  private applySceneMix() {
    setSceneOpacity(this.activeScene, this.themeMix);
    setSceneOpacity(this.previousScene, 1 - this.themeMix);
  }

  private applyUiTheme(theme: ThemeDefinition, immediate = false) {
    const root = document.documentElement;
    const duration = immediate || this.performance.reducedMotion ? 0 : 1.05;
    const cssVars = Object.fromEntries(
      Object.entries(theme.palette).map(([key, value]) => [`--${key}`, value]),
    );

    if (duration === 0) {
      for (const [key, value] of Object.entries(cssVars)) {
        root.style.setProperty(key, value as string);
      }
    } else {
      gsap.to(root, {
        ...cssVars,
        duration,
        ease: 'power2.inOut',
        overwrite: 'auto',
      });
    }

    this.onThemeChange?.(theme);
  }

  private handleResize() {
    this.performance = getPerformanceProfile();
    this.renderer?.resize(this.performance);
    this.activeContext = this.createContext();
    this.activeScene?.resize(this.activeContext);
    this.previousScene?.resize(this.activeContext);
  }

  private createContext(): SceneContext {
    if (this.renderer) {
      return this.renderer.getContext(this.performance);
    }

    const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 60);
    camera.position.set(0, 0, 13);

    return {
      camera,
      performance: this.performance,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio || 1,
      },
    };
  }

  private getInitialSeason(defaultSeason: Season) {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Season | null;
    return stored && stored in this.sceneFactories ? stored : defaultSeason;
  }

  private tick = (time: number) => {
    const delta = Math.min((time - this.lastTime) / 1000, 0.033);
    this.lastTime = time;
    this.elapsed += delta;
    this.activeScene?.update(delta, this.elapsed, this.themeMix);
    this.previousScene?.update(delta, this.elapsed, 1 - this.themeMix);
    this.renderer?.render();
    this.rafId = window.requestAnimationFrame(this.tick);
  };
}

function setSceneOpacity(scene: SeasonalScene | null, mix: number) {
  if (!scene) {
    return;
  }

  scene.root.traverse((child: THREE.Object3D) => {
    const entry = child as { material?: THREE.Material | THREE.Material[] };
    if (!entry.material) {
      return;
    }

    if (Array.isArray(entry.material)) {
      entry.material.forEach((material) => {
        material.transparent = true;
        const baseOpacity = typeof material.userData.baseOpacity === 'number' ? material.userData.baseOpacity : material.opacity;
        material.userData.baseOpacity = baseOpacity;
        material.opacity = baseOpacity * mix;
      });
      return;
    }

    entry.material.transparent = true;
    const baseOpacity =
      typeof entry.material.userData.baseOpacity === 'number' ? entry.material.userData.baseOpacity : entry.material.opacity;
    entry.material.userData.baseOpacity = baseOpacity;
    entry.material.opacity = baseOpacity * mix;
  });
}
