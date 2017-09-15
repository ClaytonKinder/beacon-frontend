import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    beaconLit: false
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
    updateBeaconLit: (state, value) => {
      state.beaconLit = value
    }
  }
})

export default store
