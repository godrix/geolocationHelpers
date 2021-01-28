const { getDistance, near, measureDistance } = require('./index');


const locationWithObject = {
  latitude: -13.752724664396975,
  longitude: -49.21875
}

const locationWithArray = [-13.752724664396975, -49.21875];

const arrayTheArrayLocations = [
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
]

describe('getDistance', () => {

  test('should returns a number if an object with latitude and longitude was provided', () => {
    expect(getDistance(locationWithObject, locationWithObject)).toBeNumber();
  });

  test('should returns a number if an array with two possibilities is provided', () => {
    expect(getDistance(locationWithArray, locationWithArray)).toBeNumber();
  });

  test('should returns an error if the object does not contain latitude or longitude', () => {
    try {
      expect(getDistance({
        lati: -13.75272,
        long: -49.21875
      }, locationWithObject)).toBeNumber();
    } catch (e) {
      expect(e).toBe('Object does not contain latitude or longitude property');
    }
  });

  test('should returns an error if the array of locations does not have two positions', () => {
    try {
      expect(getDistance([231], locationWithArray)).toBeNumber();
    } catch (e) {
      expect(e).toBe('The array of locations must contain two positions, for latitude and longitude');
    }
  });

  test('should returns an error if an array element is not numeric', () => {
    try {
      expect(getDistance([231, 'ccc'], locationWithArray)).toBeNumber();
    } catch (e) {
      expect(e).toBe('Only arrays with numeric values are accepted');
    }
  });

  test('should returns an error if an object element is not numeric', () => {
    try {
      expect(getDistance({ latitude: 'sgd', longitude: null }, locationWithArray)).toBeNumber();
    } catch (e) {
      expect(e).toBe('Only objects with numeric values are accepted');
    }
  });
});

describe('near', () => {
  test('should returns a boolean when a location is passed to the function', () => {
    expect(near(locationWithObject, locationWithObject, 5)).toBeBoolean();
  });

  test('should returns true for the location that is within the proximity radius', () => {
    expect(near({ latitude: 1, longitude: 1 }, { latitude: 1, longitude: 1 }, 5)).toBe(true);
  });

  test('should returns false for the location that is without the proximity radius', () => {
    expect(near({ latitude: 27, longitude: 48 }, { latitude: 1, longitude: 1 }, 5)).toBe(false);
  });

  test('should returns an error if the value passed for the radius size is not a positive integer', () => {
    try {
      expect(near(locationWithObject, locationWithObject, -2)).toBeBoolean();
    } catch (e) {
      expect(e).toBe('The radius value must be a positive integer');
    }
  });


});

describe('measureDistance', () => {

  test('should returns a numeric value when passing an array of positions to the near method', () => {
    expect(measureDistance(arrayTheArrayLocations)).toBeNumber()
  });

});