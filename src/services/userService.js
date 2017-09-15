import Vue from 'vue'

export default {
  getUserByEmail (email) {
    return Vue.http.get(`user/getuser/${email}`)
  },
  updateUserSettings (data) {
    return Vue.http.post('user/updateusersettings', data)
  }
}
