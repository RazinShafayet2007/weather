import { GL } from './gl';
import { fragmentShader, vertexShader } from './shaders';

interface RainRendererOptions {
  minRefraction: number;
  maxRefraction: number;
  brightness: number;
  alphaMultiply: number;
  alphaSubtract: number;
}

const defaultOptions: RainRendererOptions = {
  minRefraction: 96,
  maxRefraction: 196,
  brightness: 1.05,
  alphaMultiply: 18,
  alphaSubtract: 3.8,
};

export class RainRenderer {
  private readonly gl: GL;
  private readonly canvasLiquid: HTMLCanvasElement;
  private readonly textureFg: HTMLCanvasElement;
  private readonly textureBg: HTMLCanvasElement;
  private readonly frame: () => void;
  private frameId = 0;

  constructor(canvas: HTMLCanvasElement, canvasLiquid: HTMLCanvasElement, textureFg: HTMLCanvasElement, textureBg: HTMLCanvasElement, options: Partial<RainRendererOptions> = {}) {
    const merged = { ...defaultOptions, ...options };
    this.canvasLiquid = canvasLiquid;
    this.textureFg = textureFg;
    this.textureBg = textureBg;
    this.gl = new GL(canvas, { alpha: true }, vertexShader, fragmentShader);
    this.gl.createUniform('2f', 'resolution', canvas.width, canvas.height);
    this.gl.createUniform('1f', 'textureRatio', textureBg.width / textureBg.height);
    this.gl.createUniform('1f', 'minRefraction', merged.minRefraction);
    this.gl.createUniform('1f', 'refractionDelta', merged.maxRefraction - merged.minRefraction);
    this.gl.createUniform('1f', 'brightness', merged.brightness);
    this.gl.createUniform('1f', 'alphaMultiply', merged.alphaMultiply);
    this.gl.createUniform('1f', 'alphaSubtract', merged.alphaSubtract);
    this.gl.createTexture(null, 0);
    this.gl.createTexture(textureFg, 1);
    this.gl.createUniform('1i', 'textureFg', 1);
    this.gl.createTexture(textureBg, 2);
    this.gl.createUniform('1i', 'textureBg', 2);
    this.gl.createUniform('1i', 'waterMap', 0);

    this.frame = () => {
      this.gl.activeTexture(0);
      this.gl.updateTexture(this.canvasLiquid);
      this.gl.activeTexture(1);
      this.gl.updateTexture(this.textureFg);
      this.gl.activeTexture(2);
      this.gl.updateTexture(this.textureBg);
      this.gl.draw();
      this.frameId = requestAnimationFrame(this.frame);
    };
    this.frame();
  }

  destroy() {
    cancelAnimationFrame(this.frameId);
  }
}
