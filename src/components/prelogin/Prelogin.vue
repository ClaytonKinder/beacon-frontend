<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
  >
    <prelogin-header></prelogin-header>
    <div class="row justify-center">
      <div class="prelogin-page-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <prelogin-footer></prelogin-footer>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QBtn, QIcon } from 'quasar'
import PreloginFooter from 'components/prelogin/footer/Footer'
import PreloginHeader from 'components/prelogin/header/Header'
import AuthService from 'services/authService.js'
import EventBus from 'buses/EventBus.js'
import Toast from 'mixins/Toast.js'

export default {
  name: 'prelogin',
  components: {
    QLayout,
    QToolbar,
    QBtn,
    QIcon,
    PreloginHeader,
    PreloginFooter
  },
  mixins: [Toast],
  data () {
    return {}
  },
  methods: {
    login: function (data) {
      AuthService.login(data).then(res => {
        EventBus.$emit('loaded', 'loginForm')
        localStorage.setItem('token', res.body.token)
        this.$router.push('/app/beacon')
      }).catch(err => {
        EventBus.$emit('loaded', 'loginForm')
        this.createToast('negative', err.body.message)
      })
    },
    register: function (data) {
      AuthService.register(data).then(res => {
        EventBus.$emit('loaded', 'registerForm')
        localStorage.setItem('token', res.body.token)
        this.$router.push('/app/beacon')
      }).catch(err => {
        EventBus.$emit('loaded', 'registerForm')
        this.createToast('negative', err.body.message)
      })
    }
  },
  mounted () {
    const vm = this
    EventBus.$on('emitLogin', function (data) {
      vm.login(data)
    })
    EventBus.$on('emitRegister', function (data) {
      vm.register(data)
    })
  }
}
</script>

<style lang="stylus">

</style>
