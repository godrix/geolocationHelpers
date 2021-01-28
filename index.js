
const pi = Math.PI / 180;
const radiusEarth = 6371 * 2
const coseno = Math.cos;


function getDistance(firstPoint, secondPoint) {

    const [lat1, lon1] = normalizeGeolocation(firstPoint);
    const [lat2, lon2] = normalizeGeolocation(secondPoint);

    const a = 0.5 - coseno((lat2 - lat1) * pi) / 2 +
        coseno(lat1 * pi) * coseno(lat2 * pi) *
        (1 - coseno((lon2 - lon1) * pi)) / 2;

    return Number((radiusEarth * Math.asin(Math.sqrt(a))).toFixed(3));
}

function near(firstPoint, secondPoint, debound) {

    if (!(isNumber(debound)) || debound < 0) {
        throw 'The radius value must be a positive integer'
    }
    const Haversine = getDistance(firstPoint, secondPoint);

    return debound >= Haversine;
}

function measureDistance(coords) {

    const totalKM = coords.reduce((total, current, index, array) => {
        if (index === array.length - 1) {
            return total
        } else {
            return total + getDistance(current, array[index + 1])
        }
    }, 0);

    return Number(totalKM.toFixed(3));
}

function measureDistanceGeoJSON(coords) {
    // no formato geoJson a longitude vem primeiro do que a latitude, por isso ele deve ser invertido
    const geoCoords = coords.map(item => item.reverse());
    measureDistanceGeoJSON(geoCoords)
}

function normalizeGeolocation(geolocation) {

    if (Array.isArray(geolocation)) {
        if (geolocation.length !== 2) {
            throw 'The array of locations must contain two positions, for latitude and longitude'
        }

        const [lat1, lat2] = geolocation;

        const valid1 = Number(lat1);
        const valid2 = Number(lat2);

        if (isNaN(valid1) || isNaN(valid2)) {
            throw 'Only arrays with numeric values are accepted'
        }
        return [lat1, lat2];
    }

    if (typeof geolocation === 'object') {
        const { latitude, longitude } = geolocation;

        if (!(!!latitude || !!longitude)) {
            throw 'Object does not contain latitude or longitude property'

        }

        const valid1 = Number(latitude);
        const valid2 = Number(longitude);

        if (isNaN(valid1) || isNaN(valid2)) {
            throw 'Only objects with numeric values are accepted'
        }

        return [latitude, longitude];


    }

}

function isNumber(numb){
    const valid = Number(numb);

    if (isNaN(valid)) {
        return false;
    }
    return true;
}



module.exports.getDistance = getDistance;
module.exports.near = near;
module.exports.measureDistance = measureDistance;
module.exports.measureDistanceGeoJSON = measureDistanceGeoJSON;