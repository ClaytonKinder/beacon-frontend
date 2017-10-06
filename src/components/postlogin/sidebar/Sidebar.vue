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
      <q-side-link item to="connection-inbox">
        <q-item-side icon="mail" />
        <q-item-main :label="'Inbox' + countIncomingRequests()" />
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
import Helper from 'mixins/Helper.js'

export default {
  name: 'Sidebar',
  mixins: [Helper],
  components: {
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  },
  computed: {
    emptyUser () {
      if (this.$store.state.user) {
        let obj = JSON.parse(JSON.stringify(this.$store.state.user))
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === 'object') {
            // If property is an array
            if (Array.isArray(obj[key])) {
              obj[key] = []
            }
            // If property is an object
            else {
              obj[key] = {}
            }
          }
          else {
            obj[key] = null
          }
        })
        return obj
      }
    }
  },
  methods: {
    toggleRight () {
      this.$emit('toggleRight')
    },
    countIncomingRequests () {
      if (this.checkExistence(this.$store.state.user, ['beacon', 'incomingConnectionRequests'])) {
        return ` <strong>(${this.$store.state.user.beacon.incomingConnectionRequests.length})</strong>`
      }
      else {
        return ''
      }
    },
    logout () {
      localStorage.removeItem('token')
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
