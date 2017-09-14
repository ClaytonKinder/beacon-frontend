import Vue from 'vue'

export default {
  getUserByEmail (email) {
    return Vue.http.get(`user/getuser/${email}asdasdasd`)
  }
}
