import Vue from 'vue'

export default {
  isAuth () {
    return Vue.http.post('auth/isauth')
  },
  login (data) {
    return Vue.http.post('auth/authenticate', data)
  },
  register (data) {
    return Vue.http.post('auth/register', data)
  }
}
