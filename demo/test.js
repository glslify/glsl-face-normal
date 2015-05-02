var THREE = require('three')
var createViewer = require('three-orbit-viewer')(THREE)
var glslify = require('glslify')

var app = createViewer({
    clearColor: 0x000000,
    clearAlpha: 1,
    fov: 65,
    position: new THREE.Vector3(1, 1, -2)
})

var geo = new THREE.TorusGeometry(0.85, 0.3, 15, 15)
var mat = new THREE.ShaderMaterial({ 
  shading: THREE.FlatShading,
  vertexShader: glslify('./vert.glsl'),
  fragmentShader: glslify('./frag.glsl')
})
var box = new THREE.Mesh(geo, mat)
app.scene.add(box)

