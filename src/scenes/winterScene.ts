import * as THREE from 'three';
import { BaseScene } from './baseScene';
import type { SceneContext } from '../engine/types';

export class WinterScene extends BaseScene {
  readonly season = 'winter';
  readonly label = 'Winter';
  private veil!: THREE.Mesh;
  private shimmer!: THREE.Mesh;

  protected build(context: SceneContext) {
    this.veil = new THREE.Mesh(
      this.trackGeometry(new THREE.PlaneGeometry(20, 12)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#97bee1',
          transparent: true,
          opacity: 0.14,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    this.veil.position.set(0, 0.4, -5);
    this.root.add(this.veil);

    this.shimmer = new THREE.Mesh(
      this.trackGeometry(new THREE.PlaneGeometry(16, 9)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#d7edff',
          transparent: true,
          opacity: 0.08,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    this.shimmer.position.set(-0.5, 0.9, -4.3);
    this.root.add(this.shimmer);
  }

  update(delta: number, elapsed: number) {
    this.veil.rotation.z = Math.sin(elapsed * 0.18) * 0.05;
    this.shimmer.position.x = -0.5 + Math.sin(elapsed * 0.22) * 0.32;
    this.shimmer.position.y = 0.9 + Math.cos(elapsed * 0.18) * 0.12;
    this.shimmer.rotation.z = Math.cos(elapsed * 0.16) * 0.06;
  }
}
