#extension GL_OES_standard_derivatives : enable

varying vec3 vViewPos;

#pragma glslify: faceNormal = require('../')

void main() {
  vec3 normal = faceNormal(vViewPos);

  gl_FragColor.rgb = normal;
  gl_FragColor.a = 1.0;
}