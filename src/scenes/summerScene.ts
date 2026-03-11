import * as THREE from 'three';
import { BaseScene } from './baseScene';
import type { SceneContext } from '../engine/types';

export class SummerScene extends BaseScene {
  readonly season = 'summer';
  readonly label = 'Summer';
  private pollenFar!: THREE.Points;
  private pollenNear!: THREE.Points;
  private glow!: THREE.Mesh;
  private sun!: THREE.Mesh;
  private haze!: THREE.Mesh;

  protected build(context: SceneContext) {
    this.pollenFar = this.createParticleLayer(Math.floor(150 * context.performance.particleScale), 0.055, 0.45, '#f4d58f');
    this.pollenNear = this.createParticleLayer(Math.floor(80 * context.performance.particleScale), 0.09, 0.78, '#ffe5a7');
    this.root.add(this.pollenFar);
    this.root.add(this.pollenNear);

    this.sun = new THREE.Mesh(
      this.trackGeometry(new THREE.CircleGeometry(1.2, 48)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#ffe4a8',
          transparent: true,
          opacity: 0.28,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    this.sun.position.set(4.2, 2.35, -4.2);
    this.root.add(this.sun);

    const glowMaterial = this.trackMaterial(
      new THREE.MeshBasicMaterial({
        color: '#f6d38f',
        transparent: true,
        opacity: 0.24,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    this.glow = new THREE.Mesh(this.trackGeometry(new THREE.PlaneGeometry(18, 12)), glowMaterial);
    this.glow.position.set(1.2, 0.8, -4.5);
    this.root.add(this.glow);

    this.haze = new THREE.Mesh(
      this.trackGeometry(new THREE.PlaneGeometry(20, 7.5)),
      this.trackMaterial(
        new THREE.MeshBasicMaterial({
          color: '#f1c977',
          transparent: true,
          opacity: 0.12,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    this.haze.position.set(0, -1.9, -4.8);
    this.root.add(this.haze);
  }

  update(delta: number, elapsed: number) {
    this.updateParticleLayer(this.pollenFar, delta, elapsed, 0.1, 0.0012);
    this.updateParticleLayer(this.pollenNear, delta, elapsed, 0.16, 0.0022);
    this.glow.rotation.z = Math.sin(elapsed * 0.12) * 0.06;
    this.glow.position.x = 1.2 + Math.sin(elapsed * 0.16) * 0.24;
    this.sun.position.y = 2.35 + Math.sin(elapsed * 0.08) * 0.08;
    this.sun.scale.setScalar(1 + Math.sin(elapsed * 0.45) * 0.025);
    this.haze.position.x = Math.sin(elapsed * 0.1) * 0.3;
    this.haze.rotation.z = Math.cos(elapsed * 0.08) * 0.025;
  }

  private createParticleLayer(count: number, size: number, opacity: number, color: string) {
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      positions[i] = (Math.random() - 0.5) * 18;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    const geometry = this.trackGeometry(new THREE.BufferGeometry());
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return new THREE.Points(
      geometry,
      this.trackMaterial(
        new THREE.PointsMaterial({
          color,
          size,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
  }

  private updateParticleLayer(layer: THREE.Points, delta: number, elapsed: number, rise: number, sway: number) {
    const positions = layer.geometry.getAttribute('position') as THREE.BufferAttribute;
    for (let index = 0; index < positions.count; index += 1) {
      const z = positions.getZ(index);
      const nextX = positions.getX(index) + Math.sin(elapsed * 0.35 + index * 0.2 + z) * sway;
      const nextY = positions.getY(index) + delta * (rise + (index % 4) * 0.008);
      positions.setXYZ(index, nextX, nextY, z);

      if (nextY > 5.7) {
        positions.setXYZ(index, (Math.random() - 0.5) * 18, -5.6, z);
      }

      if (nextX > 9.4 || nextX < -9.4) {
        positions.setX(index, -nextX * 0.92);
      }
    }
    positions.needsUpdate = true;
  }
}
