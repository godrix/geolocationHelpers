const {getDistance, near} = require('./index');


// try {
//   const brazilToGermany = getDistance([37.4847, '122.1477'], { latitude: 37.4847, longitude: 122.1477 })
//   console.log(brazilToGermany)
// } catch (error) {
//   console.log(error)
// }

try {
  const brazilToGermany = near({ latitude: 37.4847, longitude: 122.1477 }, { latitude: 37.4847, longitude: 122.1477 }, null)
  console.log(brazilToGermany)
} catch (error) {
  console.log(error)
}
