import Vue from 'vue'

export default {
  lightBeacon (data) {
    return Vue.http.post('beacon/lightbeacon', data)
  },
  extinguishBeacon (data) {
    return Vue.http.post('beacon/extinguishbeacon', data)
  },
  getNearbyBeacons (data) {
    return Vue.http.post('beacon/getnearbybeacons', data)
  }
}
