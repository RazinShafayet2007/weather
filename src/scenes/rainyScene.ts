import * as THREE from 'three';
import { BaseScene } from './baseScene';
import type { SceneContext } from '../engine/types';

export class RainyScene extends BaseScene {
  readonly season = 'rainy';
  readonly label = 'Rainy';
  private mist!: THREE.Mesh;
  private haze!: THREE.Mesh;
  private flicker = 0;

  protected build(context: SceneContext) {
    this.mist = new THREE.Mesh(
      this.trackGeometry(new THREE.PlaneGeometry(22, 12)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#40566d',
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
        }),
      ),
    );
    this.mist.position.set(0, -0.2, -4.8);
    this.root.add(this.mist);

    this.haze = new THREE.Mesh(
      this.trackGeometry(new THREE.PlaneGeometry(18, 9)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#68859a',
          transparent: true,
          opacity: 0.09,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    this.haze.position.set(0.4, 0.8, -4.2);
    this.root.add(this.haze);
  }

  update(delta: number, elapsed: number) {
    this.flicker += delta;
    const intensity = 0.18 + Math.max(0, Math.sin(this.flicker * 0.9) * 0.08);
    (this.mist.material as THREE.MeshBasicMaterial).opacity = intensity + (Math.sin(elapsed * 2.4) > 0.995 ? 0.12 : 0);
    this.mist.position.x = Math.sin(elapsed * 0.22) * 0.35;
    this.haze.position.x = 0.4 + Math.sin(elapsed * 0.14) * 0.45;
    this.haze.position.y = 0.8 + Math.cos(elapsed * 0.18) * 0.12;
    this.haze.rotation.z = Math.sin(elapsed * 0.12) * 0.05;
  }
}
