import Vue from 'vue'

export default {
  getCurrentPosition () {
    return Vue.http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GEOLOCATION_API_KEY}`)
  },
  getAddressFromCoordinates (data) {
    return Vue.http.post('location/getaddressfromcoordinates', data)
  },
  getDistanceBetweenCoordinates (data) {
    return Vue.http.post('location/getdistancebetweencoordinates', data)
  },
  createBeaconDistanceObject (beacon, userPosition) {
    return {
      lat1: userPosition.lat,
      lng1: userPosition.lng,
      lat2: beacon.position.lat,
      lng2: beacon.position.lng
    }
  }
}
