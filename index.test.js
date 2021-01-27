const GeolocationHelper = require('./index');

const geoLocationHelper = new GeolocationHelper();

describe('Countries', () => {

  describe('class', () => {
    test('should be an instance of class GeolocationHelper', () => {
      expect(geoLocationHelper).toBeInstanceOf(GeolocationHelper);
    });
  });


});