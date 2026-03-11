import * as THREE from 'three';
import type { SceneContext } from './types';
import type { PerformanceProfile } from './types';

export class BackgroundRenderer {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly root: THREE.Group;
  private host: HTMLElement;

  constructor(host: HTMLElement, performance: PerformanceProfile) {
    this.host = host;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2('#101521', 0.035);
    this.camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 60);
    this.camera.position.set(0, 0, 13);
    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(performance.pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setClearColor('#000000', 0);
    this.host.appendChild(this.renderer.domElement);
  }

  getContext(performance: PerformanceProfile): SceneContext {
    return {
      camera: this.camera,
      performance,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: this.renderer.getPixelRatio(),
      },
    };
  }

  resize(performance: PerformanceProfile) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(performance.pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.dispose();
    this.host.removeChild(this.renderer.domElement);
  }
}
