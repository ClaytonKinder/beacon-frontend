<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
    :right-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" color="primary">
      <q-toolbar-title>
        Beacon
        <!-- <div slot="subtitle">Running on Quasar v{{$q.version}}</div> -->
      </q-toolbar-title>
      <q-btn
        flat
        @click="$refs.layout.toggleRight()"
      >
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-tabs slot="navigation">
      <q-route-tab slot="title" name="beacon" icon="explore" to="/app/beacon" replace hide="label" label="Beacon" />
      <q-route-tab slot="title" name="map" icon="map" to="/app/map" replace hide="label" label="Map" />
      <q-route-tab slot="title" name="settings" icon="settings" to="/app/settings" replace hide="label" label="Settings" />
    </q-tabs>

    <div slot="right">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <!-- <q-list-header>Essential Links</q-list-header> -->
        <q-side-link item to="/account">
          <q-item-side icon="account circle" />
          <q-item-main label="Account" />
        </q-side-link>
        <q-item @click="logout()">
          <q-item-side icon="exit to app" />
          <q-item-main label="Logout" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
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
  QTabs,
  QRouteTab,
  QSideLink
} from 'quasar'

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
    QTabs,
    QRouteTab,
    QSideLink
  },
  data () {
    return {}
  },
  computed: {

  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      this.$store.commit('updateUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
</style>
