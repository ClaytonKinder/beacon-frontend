<template>
  <div>
    <q-list no-border link inset-delimiter>
      <q-side-link item to="/account">
        <q-item-side icon="account circle" />
        <q-item-main v-if="this.$store.state.user" v-bind:label="this.$store.state.user.firstName" />
        <q-item-main v-if="!this.$store.state.user" label="Account" />
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
  computed: {

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

</style>
