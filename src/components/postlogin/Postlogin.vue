<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
    :right-class="{'bg-grey-2': true}"
  >
    <postlogin-header v-on:toggleRight="toggleRight"></postlogin-header>
    <sidebar slot="right"></sidebar>
    <div class="layout-padding row justify-center">
      <div class="postlogin-page-wrapper">
        <router-view></router-view>
      </div>
    </div>
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

export default {
  name: 'postlogin',
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
    Sidebar
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
  }
}
</script>

<style lang="stylus">
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
</style>
