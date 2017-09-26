import Vue from 'vue'

export default {
  getCurrentPosition () {
    return Vue.http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GEOLOCATION_API_KEY}`)
  },
  getBeaconDistance (data) {
    return Vue.http.post('location/getbeacondistance', data)
  },
  createBeaconDistanceObject (beacon, userPosition) {
    return {
      beaconLat: beacon.position.lat,
      beaconLng: beacon.position.lng,
      userLat: userPosition.lat,
      userLng: userPosition.lng
    }
  }
}
