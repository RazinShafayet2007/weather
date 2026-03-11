export const vertexShader = `
precision mediump float;
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export const fragmentShader = `
precision mediump float;
uniform sampler2D u_waterMap;
uniform sampler2D u_textureFg;
uniform sampler2D u_textureBg;
uniform vec2 u_resolution;
uniform float u_textureRatio;
uniform float u_minRefraction;
uniform float u_refractionDelta;
uniform float u_brightness;
uniform float u_alphaMultiply;
uniform float u_alphaSubtract;

vec4 blend(vec4 bg, vec4 fg) {
  vec3 bgm = bg.rgb * bg.a;
  vec3 fgm = fg.rgb * fg.a;
  float ia = 1.0 - fg.a;
  float a = fg.a + bg.a * ia;
  vec3 rgb = a == 0.0 ? vec3(0.0) : (fgm + bgm * ia) / a;
  return vec4(rgb, a);
}

vec2 pixel() {
  return vec2(1.0) / u_resolution;
}

vec2 texCoord() {
  return vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y) / u_resolution;
}

vec2 scaledTexCoord() {
  float ratio = u_resolution.x / u_resolution.y;
  vec2 scale = vec2(1.0);
  vec2 offset = vec2(0.0);
  float ratioDelta = ratio - u_textureRatio;
  if (ratioDelta >= 0.0) {
    scale.y = 1.0 + ratioDelta;
    offset.y = ratioDelta / 2.0;
  } else {
    scale.x = 1.0 - ratioDelta;
    offset.x = -ratioDelta / 2.0;
  }
  return (texCoord() + offset) / scale;
}

void main() {
  vec4 bg = texture2D(u_textureBg, scaledTexCoord());
  vec4 cur = texture2D(u_waterMap, texCoord());

  float thickness = cur.b;
  vec2 refraction = (vec2(cur.g, cur.r) - 0.5) * 2.0;
  float alpha = clamp(cur.a * u_alphaMultiply - u_alphaSubtract, 0.0, 1.0);
  vec2 refracted = scaledTexCoord() + pixel() * refraction * (u_minRefraction + thickness * u_refractionDelta);
  vec4 fg = texture2D(u_textureFg, refracted);
  fg = vec4(fg.rgb * u_brightness, alpha);

  gl_FragColor = blend(bg, fg);
}
`;
