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
  },
  getSingleBeacon (data) {
    return Vue.http.post('beacon/getsinglebeacon', data)
  },
  verifyBeaconPassword (data) {
    return Vue.http.post('beacon/verifybeaconpassword', data)
  }
}
