import Vue from 'vue'
import Vuex from 'vuex'
import authService from 'services/authService'
import Toast from 'mixins/Toast.js'

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
    updateBeacon: (state, beacon) => {
      state.user.beacon = beacon
    },
    extinguishBeacon: (state) => {
      state.user.beacon = null
    }
  },
  actions: {
    refreshUser () {
      authService.isAuth()
        .then(response => {
          store.commit('updateUser', response.body)
        })
        .catch(() => {
          localStorage.setItem('userId', '')
          Toast.methods.createToast('negative', 'Could not update user information at this time')
        })
    },
    socket_socketEvent: (context, data) => {
      if (data.dispatch) {
        context.dispatch(data.dispatch)
      }
      if (data.type && data.message) {
        Toast.methods.createToast(data.type, data.message)
      }
    }
    // socket_denyConnectionRequest: (context, data) => {
    //   context.dispatch('refreshUser')
    //   Toast.methods.createToast(data.type, data.message)
    // },
    // socket_disconnectFromBeacon: (context, data) => {
    //   context.dispatch('refreshUser')
    // },
    // socket_removeConnection: (context, data) => {
    //   context.dispatch('refreshUser')
    //   Toast.methods.createToast(data.type, data.message)
    // },
    // socket_extinguishBeacon: (context, data) => {
    //   context.dispatch('refreshUser')
    //   Toast.methods.createToast(data.type, data.message)
    // }
  }
})

export default store
