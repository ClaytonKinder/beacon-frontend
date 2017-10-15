<template>
  <div>
    <q-list class="no-padding" no-border link inset-delimiter>
      <div class="sidebar-header column justify-end no-wrap">
        <div class="sidebar-image"></div>
        <div class="relative-position" v-if="this.$store.state.user">
          <q-icon v-if="!isAppFullscreen" @click.prevent="toggleFullscreen" class="fullscreen-icon" name="ion-arrow-expand"></q-icon>
          <q-icon v-if="isAppFullscreen" @click.prevent="toggleFullscreen" class="fullscreen-icon" name="ion-arrow-shrink"></q-icon>
          <img class="circular profile" :src="this.$store.state.user.gravatar" />
          <h5 class="sidebar-name" @click.prevent="log">
            {{this.$store.state.user.firstName}}
          </h5>
        </div>
      </div>
      <q-side-link item to="account">
        <q-item-side icon="account circle" />
        <q-item-main label="Account" />
      </q-side-link>
      <q-item @click="logout()">
        <q-item-side icon="exit to app" />
        <q-item-main label="Logout" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import {
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink,
  QIcon,
  AppFullscreen
} from 'quasar'
import Helper from 'mixins/Helper.js'

export default {
  name: 'Sidebar',
  mixins: [Helper],
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink,
    QIcon,
    AppFullscreen
  },
  data () {
    return {
      isAppFullscreen: AppFullscreen.isActive() || false
    }
  },
  methods: {
    toggleFullscreen () {
      this.isAppFullscreen = !this.isAppFullscreen
      AppFullscreen.toggle()
    },
    toggleRight () {
      this.$emit('toggleRight')
    },
    logout () {
      this.$cookie.delete('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
  .sidebar-header
    height 122px
    padding 1rem
    color white
    background url('~/assets/images/lighthouse.jpg') 0% 20%
    background-size: 150%
    .fullscreen-icon
      cursor pointer
      font-size 1.5rem
      position absolute
      right 0
    .sidebar-name
      margin-bottom 0
</style>
