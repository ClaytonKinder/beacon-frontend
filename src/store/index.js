import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser: state => {
      return state.user
    }
  },
  mutations: {
    updateUser: (state, user) => {
      state.user = user
    },
    deleteUser: (state) => {
      state.user = null
    },
    lightBeacon: (state, beacon) => {
      state.user.beacon = beacon
    },
    extinguishBeacon: (state) => {
      state.user.beacon = null
    }
  }
})

export default store
