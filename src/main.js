// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueResource from 'vue-resource'
import authService from './services/authService'
import store from './store'
import Vuelidate from 'vuelidate'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueSocketio, io(process.env.SERVER_URL), store)
Vue.use(require('vue-moment'))
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.MAPS_API_KRY,
    libraries: 'places'
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    authService.isAuth()
      .then(response => {
        store.commit('updateUser', response.body)
        next(response.body)
      })
      .catch(() => {
        localStorage.setItem('userId', '')
        next({
          path: '/'
        })
      })
  }
  else if (to.matched.some(record => record.meta.onlyIfLoggedOut)) {
    authService.isAuth()
      .then(response => {
        store.commit('updateUser', response.body)
        next('/app/beacon')
      })
      .catch(() => {
        next()
      })
  }
  else {
    next()
  }
})

Vue.http.interceptors.push(function (request, next) {
  request.headers.set('x-access-token', localStorage.getItem('token'))
  next(function (response) {
    if (response.headers.has('x-access-token')) {
      var token = response.headers('x-access-token')
      localStorage.setItem('token', token)
    }
  })
})

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
Vue.http.options.root = process.env.API_URL

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    VueGoogleMaps,
    render: h => h(require('./App'))
  })
})
