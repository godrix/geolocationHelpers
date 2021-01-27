class GeolocationHelper {
    constructor() {
        this.pi = Math.PI / 180;
        this.radiusEarth = 6371 * 2
        this.coseno = Math.cos;
    }

    getDistance(firstPoint, secondPoint) {

        const [lat1, lon1] = firstPoint;
        const [lat2, lon2] = secondPoint;

        const a = 0.5 - this.coseno((lat2 - lat1) * this.pi) / 2 +
            this.coseno(lat1 * this.pi) * this.coseno(lat2 * this.pi) *
            (1 - this.coseno((lon2 - lon1) * this.pi)) / 2;

        return Number((this.radiusEarth * Math.asin(Math.sqrt(a))).toFixed(3));
    }

    near(firstPoint, secondPoint, debound) {
        const Haversine = this.getDistance(firstPoint, secondPoint)

        return debound >= Haversine;
    }

    measureDistance(coords, geoJson = false) {

        // no formato geoJson a longitude vem primeiro do que a latitude, por isso ele deve ser invertido
        const geoCoords = geoJson ? coords.map(item => item.reverse()) : coords;
    
        const totalKM = geoCoords.reduce((total, current, index, array) => {
            if (index === array.length - 1) {
                return total
            } else {
                return total + this.getDistance(current, array[index + 1])
            }
        }, 0);
    
        return totalKM.toFixed(3);
    }
}


module.exports = GeolocationHelper;