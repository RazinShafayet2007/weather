export function getContext(canvas: HTMLCanvasElement, options: WebGLContextAttributes = {}) {
  return (canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options)) as WebGLRenderingContext | null;
}

export function createShader(gl: WebGLRenderingContext, source: string, type: number) {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error('Unable to create shader');
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(error || 'Shader compilation failed');
  }
  return shader;
}

export function createProgram(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
  const vertexShader = createShader(gl, vertexSource, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
  const program = gl.createProgram();
  if (!program) {
    throw new Error('Unable to create WebGL program');
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const error = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(error || 'Program link failed');
  }

  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  return program;
}

export function createTexture(gl: WebGLRenderingContext, source: TexImageSource | null, index: number) {
  const texture = gl.createTexture();
  if (!texture) {
    throw new Error('Unable to create texture');
  }

  activeTexture(gl, index);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  if (source) {
    updateTexture(gl, source);
  }

  return texture;
}

export function createUniform(
  gl: WebGLRenderingContext,
  program: WebGLProgram,
  type: '1f' | '1i' | '2f',
  name: string,
  ...args: number[]
) {
  const location = gl.getUniformLocation(program, `u_${name}`);
  if (location === null) {
    return;
  }
  if (type === '1f') {
    gl.uniform1f(location, args[0]);
    return;
  }
  if (type === '1i') {
    gl.uniform1i(location, args[0]);
    return;
  }
  gl.uniform2f(location, args[0], args[1]);
}

export function activeTexture(gl: WebGLRenderingContext, index: number) {
  gl.activeTexture(gl.TEXTURE0 + index);
}

export function updateTexture(gl: WebGLRenderingContext, source: TexImageSource) {
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
}
