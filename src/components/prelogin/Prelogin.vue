<template>
  <div class="error-page window-height window-width bg-light column items-center no-wrap">
    <div class="error-code bg-primary flex items-center justify-center">
      Hi
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  name: 'prelogin',
  components: {
    QBtn,
    QIcon
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    padding 25px
    > i
      font-size 5rem
</style>
