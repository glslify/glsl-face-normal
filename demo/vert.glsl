varying vec3 vViewPos;

void main() {
  vec4 pos = vec4(position, 1.0);
  vec4 mpos = modelViewMatrix * pos;
  gl_Position = projectionMatrix * mpos;
  vViewPos = -mpos.xyz;
}