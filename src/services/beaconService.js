import Vue from 'vue'

export default {
  lightBeacon (data) {
    return Vue.http.post('beacon/lightbeacon', data)
  },
  extinguishBeacon (userId) {
    return Vue.http.post(`beacon/extinguishbeacon/${userId}`)
  },
  getNearbyBeacons (data) {
    return Vue.http.post('beacon/getnearbybeacons', data)
  }
}
