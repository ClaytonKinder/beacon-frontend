import Vue from 'vue'

export default {
  isAuth () {
    return Vue.http.post('auth/isauth')
  },
  login (email, password) {
    return Vue.http.post('auth/authenticate', {email, password})
  }
}
