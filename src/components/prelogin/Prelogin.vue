<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
  >
    <prelogin-header></prelogin-header>
    <div class="row justify-center">
      <div class="prelogin-page-wrapper">
        <div class="prelogin-page window-width bg-light column items-center no-wrap">
          <div class="prelogin-header bg-lighthouse flex items-center justify-center">

          </div>
          <router-view></router-view>
        </div>
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
        this.$q.events.$emit('loaded', 'loginForm')
        localStorage.setItem('token', res.body.token)
        this.$router.push('/app/beacon')
      }).catch(err => {
        this.$q.events.$emit('loaded', 'loginForm')
        this.createToast('negative', err.body.message)
      })
    },
    register: function (data) {
      AuthService.register(data).then(res => {
        this.$q.events.$emit('loaded', 'registerForm')
        localStorage.setItem('token', res.body.token)
        this.$router.push('/app/beacon')
      }).catch(err => {
        this.$q.events.$emit('loaded', 'registerForm')
        this.createToast('negative', err.body.message)
      })
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('emitLogin', function (data) {
      vm.login(data)
    })
    this.$q.events.$on('emitRegister', function (data) {
      vm.register(data)
    })
  }
}
</script>

<style lang="stylus">
  .prelogin-page
    padding-bottom 100px
    .bg-lighthouse
      background url('~/assets/images/lighthouse.jpg') 50% 40%
    .prelogin-header
      height 50vh
      width 100%
      padding-top 15vh
      font-size 30vmax
      color rgba(255, 255, 255, .2)
      overflow hidden
</style>
