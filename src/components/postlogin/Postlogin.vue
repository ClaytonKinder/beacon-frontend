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
import store from 'store'

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
        store.commit('updateUser', response.body)
        this.createToast('positive', 'Your settings were successfully updated')
      }).catch(err => {
        console.error(err)
        this.$q.events.$emit('loaded', 'settingsForm')
        this.createToast('negative', err.body.message)
      })
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('emitUpdateUserSettings', function (data) {
      vm.updateUserSettings(data)
    })
  }
}
</script>

<style lang="stylus">
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
</style>
