const {getDistance, near, measureDistance, normalizeGeolocation} = require('./index');


// try {
//   const brazilToGermany = getDistance([37.4847, '122.1477'], { latitude: 37.4847, longitude: 122.1477 })
//   console.log(brazilToGermany)
// } catch (error) {
//   console.log(error)
// }

// try {
//   const brazilToGermany = near({ latitude: 37.4847, longitude: 122.1477 }, { latitude: 37.4847, longitude: 122.1477 }, null)
//   console.log(brazilToGermany)
// } catch (error) {
//   console.log(error)
// }
try {
  const brazilToGermany = measureDistance([
    [
      60.224811180303185,
      79.365234375
    ],
    [
      60.17157405145976,
      79.47509765625
    ],
    [
      60.122355390387824,
      79.36798095703125
    ],
    [
      60.116882101981595,
      79.26361083984375,
    ],
    [
      60.1551760158896,
      79.1510009765625,
    ],
    [
      60.223447204398866,
      79.15924072265625,
    ],
    [
      60.264341801061505,
      79.2608642578125,
    ],
    [
      60.24117446498967,
      79.2828369140625,
    ]
  ])
  console.log(brazilToGermany)
} catch (error) {
  console.log(error)
}
// try {
//   const brazilToGermany = [1, 2,1,2].filter(i => normalizeGeolocation(i))
//   console.log(brazilToGermany)
// } catch (error) {
//   console.log(error)
// }
