<template>
  <div>
    <q-list class="no-padding" no-border link inset-delimiter>
      <div class="sidebar-header column justify-end no-wrap">
        <div class="sidebar-image">

        </div>
        <div v-if="this.$store.state.user">
          <img class="circular profile" :src="this.$store.state.user.gravatar" />
          <h5 class="sidebar-name">
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
  QSideLink
} from 'quasar'

export default {
  name: 'Sidebar',
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  },
  data () {
    return {}
  },
  methods: {
    toggleRight: function () {
      this.$emit('toggleRight')
    },
    logout: function () {
      localStorage.removeItem('token')
      this.$store.commit('updateUser', null)
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
    .sidebar-name
      margin-bottom 0
</style>
