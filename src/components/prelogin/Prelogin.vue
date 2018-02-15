<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
  >
    <prelogin-header></prelogin-header>
    <div class="row justify-center">
      <div class="prelogin-page-wrapper">
        <div class="prelogin-page window-width bg-light column items-center no-wrap">
          <div class="prelogin-header bg-lighthouse flex items-center justify-center"></div>
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

export default {
  name: 'prelogin',
  components: {
    QLayout,
    QToolbar,
    QBtn,
    QIcon,
    PreloginHeader,
    PreloginFooter
  }
}
</script>

<style lang="stylus">
  .prelogin-page
    padding-bottom 100px
    .bg-lighthouse
      background url('~/assets/images/lighthouse.jpg') 50% 40%
      background-size cover
    .prelogin-header
      height 50vh
      width 100%
      padding-top 15vh
      font-size 30vmax
      color rgba(255, 255, 255, .2)
      overflow hidden
</style>
