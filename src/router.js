import Vue from 'vue'
import VueRouter from 'vue-router'
// import authService from './services/authService'
// import store from './store'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'history',
  routes: [
    {
      path: '/',
      component: load('prelogin/Prelogin'),
      meta: { onlyIfLoggedOut: true },
      children: [
        {
          path: '',
          components: {
            default: load('prelogin/home/Home')
          }
        },
        {
          path: 'forgot-password',
          components: {
            default: load('prelogin/forgotPassword/ForgotPassword')
          }
        },
        {
          name: 'reset-password',
          path: 'reset-password/:resetPasswordToken',
          components: {
            default: load('prelogin/resetPassword/ResetPassword')
          }
        }
      ]
    },
    {
      path: '/app',
      component: load('postlogin/Postlogin'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'account',
          component: load('postlogin/account/Account')
        },
        {
          path: 'beacon',
          component: load('postlogin/beacon/Beacon')
        },
        {
          path: 'map',
          component: load('postlogin/map/Map')
        },
        {
          path: 'settings',
          component: load('postlogin/settings/Settings')
        },
        {
          path: 'connection-inbox',
          component: load('postlogin/connectionInbox/ConnectionInbox')
        }
      ]
    },
    {
      path: '*',
      redirect: '/app/beacon'
    }
  ]
})
