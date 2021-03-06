import Vue from 'vue'

export default {
  getUserByEmail (email) {
    return Vue.http.get(`user/getuser/${email}`)
  },
  updateUserSettings (data) {
    return Vue.http.post('user/updateusersettings', data)
  },
  updateUserInformation (data) {
    return Vue.http.post('user/updateuserinformation', data)
  },
  updateUserEmail (data) {
    return Vue.http.post('user/updateuseremail', data)
  },
  updateUserPassword (data) {
    return Vue.http.post('user/updateuserpassword', data)
  },
  completeTutorialTour (data) {
    return Vue.http.post('user/completetutorialtour', data)
  },
  addCorrectedAddress (data) {
    return Vue.http.post('user/addcorrectedaddress', data)
  },
  deleteCorrectedAddress (data) {
    return Vue.http.post('user/deletecorrectedaddress', data)
  }
}
