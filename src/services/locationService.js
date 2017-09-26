import Vue from 'vue'

export default {
  getCurrentPosition () {
    return Vue.http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GEOLOCATION_API_KEY}`)
  }
}
