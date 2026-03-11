import { activeTexture, createProgram, createTexture, createUniform, getContext, updateTexture } from './webgl';

export class GL {
  readonly canvas: HTMLCanvasElement;
  readonly gl: WebGLRenderingContext;
  program: WebGLProgram;

  constructor(canvas: HTMLCanvasElement, options: WebGLContextAttributes, vertexSource: string, fragmentSource: string) {
    const context = getContext(canvas, options);
    if (!context) {
      throw new Error('WebGL unavailable');
    }
    this.canvas = canvas;
    this.gl = context;
    this.program = createProgram(this.gl, vertexSource, fragmentSource);
    this.gl.useProgram(this.program);
  }

  useProgram(program: WebGLProgram) {
    this.program = program;
    this.gl.useProgram(program);
  }

  createTexture(source: TexImageSource | null, index: number) {
    return createTexture(this.gl, source, index);
  }

  createUniform(type: '1f' | '1i' | '2f', name: string, ...values: number[]) {
    createUniform(this.gl, this.program, type, name, ...values);
  }

  activeTexture(index: number) {
    activeTexture(this.gl, index);
  }

  updateTexture(source: TexImageSource) {
    updateTexture(this.gl, source);
  }

  draw() {
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }
}
