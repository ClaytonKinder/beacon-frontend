<template>
  <header id="appHeader">
    <q-toolbar slot="header" color="primary">
      <q-toolbar-title>
        Beacon
        <div slot="subtitle" v-if="checkBeaconStatus('active')">Active</div>
        <div slot="subtitle" v-if="checkBeaconStatus('inactive')">Inactive</div>
        <div slot="subtitle" v-if="checkBeaconStatus('awaitingConnectionApproval')">Awaiting connection approval</div>
        <div slot="subtitle" v-if="checkBeaconStatus('connected')">Connected</div>
      </q-toolbar-title>
      <q-btn
        flat
        @click="toggleRight()"
      >
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>
    <q-tabs v-model="tab" slot="navigation">
      <q-route-tab slot="title" name="beacon" icon="ion-flame" to="/app/beacon" hide="label" label="Beacon" />
      <q-route-tab slot="title" name="map" icon="map" to="/app/map" hide="label" label="Map" />
      <!-- count attribute on q-route-tab elements will be fixed in an upcoming Quasar release -->
      <q-route-tab slot="title" name="inbox" icon="mail" to="/app/connection-inbox" hide="label" label="Inbox" :count="$store.state.user.beacon && $store.state.user.beacon.incomingConnectionRequests.length" />
      <q-route-tab slot="title" name="settings" icon="settings" to="/app/settings" hide="label" label="Settings" />
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
  QSideLink
} from 'quasar'
import Helper from 'mixins/Helper.js'

export default {
  name: 'PostloginHeader',
  mixins: [Helper],
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
    QSideLink
  },
  data () {
    return {
      tabRoutes: ['/app/beacon', '/app/map', '/app/settings'],
      tab: ''
    }
  },
  watch: {
    '$route': function (val) {
      if (!this.tabRoutes.includes(val.path)) {
        this.tab = ''
      }
    }
  },
  methods: {
    toggleRight () {
      this.$q.events.$emit('emitResizeMap')
      this.$emit('toggleRight')
    },
    checkBeaconStatus (key) {
      if (key === 'active') {
        return (this.$store.state.user && this.$store.state.user.beacon)
      }
      else if (key === 'inactive') {
        return (this.$store.state.user && !this.$store.state.user.beacon && !this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest) && !this.doesObjectExist(this.$store.state.user.connectedTo))
      }
      else if (key === 'awaitingConnectionApproval') {
        return (this.$store.state.user && !this.$store.state.user.beacon && this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest))
      }
      else if (key === 'connected') {
        return (this.$store.state.user && !this.$store.state.user.beacon && this.doesObjectExist(this.$store.state.user.connectedTo))
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-btn.mail-button
    padding 0 0.5rem
    .q-icon.has-mail
      margin-right 2px
    span
      margin-left 2px
</style>
