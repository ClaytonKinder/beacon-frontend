<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
    :right-class="{'bg-grey-2': true}"
  >
    <postlogin-header v-on:toggleRight="toggleRight"></postlogin-header>
    <sidebar slot="right"></sidebar>
    <!-- <div class="layout-padding row justify-center">
      <div class="postlogin-page-wrapper">
        <router-view></router-view>
      </div>
    </div> -->
    <router-view></router-view>
    <audio id="horn">
      <source src="statics/audio/horn.mp3" type="audio/mpeg">
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
import UserService from 'services/userService.js'
import Toast from 'mixins/Toast.js'
import BeaconService from 'services/beaconService.js'
// import store from 'store'

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
    },
    updateUserSettings: function (data) {
      UserService.updateUserSettings(data).then(response => {
        this.$q.events.$emit('loaded', 'settingsForm', true)
        this.$store.commit('updateUser', response.body)
        this.createToast('positive', 'Your settings were successfully updated')
      }).catch(err => {
        this.$q.events.$emit('loaded', 'settingsForm')
        this.createToast('negative', err.body.message)
      })
    },
    lightBeacon: function (data) {
      BeaconService.lightBeacon(data).then(response => {
        this.$q.events.$emit('loaded', 'beaconForm', true)
        this.$store.commit('lightBeacon', response.body)
        this.createToast('positive', 'Your beacon has been successfully lit')
      }).catch(err => {
        this.$q.events.$emit('loaded', 'beaconForm')
        this.createToast('negative', err.body.message)
      })
    },
    extinguishBeacon: function (userId) {
      BeaconService.extinguishBeacon(userId).then(response => {
        this.$store.commit('extinguishBeacon')
        this.$q.events.$emit('loaded', 'beaconForm', true)
        this.createToast('positive', 'Your beacon has been successfully extinguished')
      }).catch(err => {
        this.$q.events.$emit('loaded', 'beaconForm')
        this.createToast('negative', err.body.message)
      })
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('emitUpdateUserSettings', function (data) {
      vm.updateUserSettings(data)
    })
    this.$q.events.$on('emitLightBeacon', function (data) {
      vm.lightBeacon(data)
    })
    this.$q.events.$on('emitExtinguishBeacon', function (userId) {
      vm.extinguishBeacon(userId)
    })
  }
}
</script>

<style lang="stylus">
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
</style>
