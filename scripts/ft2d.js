const {log} = require('Diagnostics')
const FT2D = require('FaceTracking2D')
const face = FT2D.face(0)
const R = require('Reactive')

const Patches = require('Patches')
log(face)

const init = (async function () {

  Patches.inputs.set('face0position', R.pack2(face.boundingBox.x.add(face.boundingBox.width.div(2)), face.boundingBox.y.add(face.boundingBox.height.div(2))))

})()
