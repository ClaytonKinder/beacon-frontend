<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
    :right-class="{'bg-grey-2': true}"
  >
    <postlogin-header v-on:toggleRight="toggleRight"></postlogin-header>
    <sidebar slot="right"></sidebar>
    <router-view></router-view>
    <audio id="horn">
      <source src="assets/audio/horn.mp3" type="audio/mpeg">
    </audio>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'
import PostloginHeader from 'components/postlogin/header/Header'
import Sidebar from 'components/postlogin/sidebar/Sidebar'
import Toast from 'mixins/Toast.js'

export default {
  name: 'postlogin',
  mixins: [Toast],
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink,
    PostloginHeader,
    Sidebar,
    Toast
  },
  data () {
    return {}
  },
  computed: {

  },
  methods: {
    toggleRight: function () {
      this.$refs.layout.toggleRight()
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
  .colorpicker-block
    padding 1px
    background rgba(0,0,0,0.12)
    cursor pointer
    &.disabled
      opacity: 0.6
  .colorpicker-wrapper
    height 40px
    cursor pointer
  .colorpicker
    cursor pointer
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    padding: 0
    padding-bottom 0
    border: 0
    opacity 0
    &:disabled
      opacity 0 !important
    &:focus
      outline 0
</style>
