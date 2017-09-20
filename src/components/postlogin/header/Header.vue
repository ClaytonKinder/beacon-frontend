<template>
  <header id="appHeader">
    <q-toolbar slot="header" color="primary">
      <q-toolbar-title>
        Beacon
        <div slot="subtitle" v-if="this.$store.state.user && this.$store.state.user.beacon">Active</div>
        <div slot="subtitle" v-if="this.$store.state.user && !this.$store.state.user.beacon">Inactive</div>
      </q-toolbar-title>
      <q-btn
        flat
        @click="toggleRight()"
      >
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>
    <q-tabs slot="navigation">
      <q-route-tab slot="title" name="beacon" icon="ion-flame" to="/app/beacon" replace hide="label" label="Beacon" />
      <q-route-tab slot="title" name="map" icon="map" to="/app/map" replace hide="label" label="Map" />
      <q-route-tab slot="title" name="settings" icon="settings" to="/app/settings" replace hide="label" label="Settings" />
    </q-tabs>
  </header>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QTabs,
  QRouteTab,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink,
  QTransition
} from 'quasar'

export default {
  name: 'PostloginHeader',
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QTabs,
    QRouteTab,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink,
    QTransition
  },
  data () {
    return {}
  },
  computed: {

  },
  methods: {
    toggleRight: function () {
      this.$emit('toggleRight')
    }
  }
}
</script>

<style lang="stylus">

</style>
