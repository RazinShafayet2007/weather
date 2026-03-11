import * as THREE from 'three';
import type { SceneContext, Season, SeasonalScene } from '../engine/types';

export abstract class BaseScene implements SeasonalScene {
  readonly root = new THREE.Group();
  protected context!: SceneContext;
  private disposables: THREE.BufferGeometry[] = [];
  private materials: THREE.Material[] = [];

  abstract readonly season: Season;
  abstract readonly label: string;

  init(context: SceneContext) {
    this.context = context;
    this.build(context);
  }

  enter() {
    this.root.visible = true;
  }

  exit() {
    this.root.visible = false;
  }

  resize(context: SceneContext) {
    this.context = context;
  }

  dispose() {
    this.root.clear();
    this.disposables.forEach((geometry) => geometry.dispose());
    this.materials.forEach((material) => material.dispose());
    this.disposables = [];
    this.materials = [];
  }

  protected trackGeometry<T extends THREE.BufferGeometry>(geometry: T) {
    this.disposables.push(geometry);
    return geometry;
  }

  protected trackMaterial<T extends THREE.Material>(material: T) {
    this.materials.push(material);
    return material;
  }

  protected abstract build(context: SceneContext): void;
  abstract update(delta: number, elapsed: number, mix: number): void;
}
