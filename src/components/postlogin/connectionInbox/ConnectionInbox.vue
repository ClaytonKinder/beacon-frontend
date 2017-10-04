<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <q-card class="relative-position" v-if="checkExistence(user, ['beacon'])">
        <q-card-title color="white" class="uppercase color-white text-center block bg-primary">
          Inbox
        </q-card-title>
        <q-search v-if="checkExistence(user, ['beacon', 'incomingConnectionRequests'])" class="no-margin" color="primary" inverted v-model="search" />
        <q-list separator>
          <q-item v-if="checkExistence(user, ['beacon', 'incomingConnectionRequests'])" v-for="request in getSlice(filteredRequests)" key="request.fullName">
            <q-item-side class="text-center" left>
              <img :src="request.gravatar" class="circular profile" />
            </q-item-side>
            <q-item-main class="text-center" :label="request.name">
              <q-item-tile sublabel>{{ request.created | moment('from', 'now') }}</q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-btn flat class="text-center icon-button" color="positive" icon="ion-checkmark-round" @click.prevent="approveConnectionRequest(request)"></q-btn>
              <q-btn flat class="no-shadow text-center icon-button" color="negative" icon="ion-close-round" @click.prevent="denyConnectionRequest(request)"></q-btn>
            </q-item-side>
          </q-item>
          <q-item v-if="checkExistence(user, ['beacon', 'incomingConnectionRequests'], true)" class="text-center">
            <div class="full-width text-center">
              You have no connection requests at this time
            </div>
          </q-item>
        </q-list>
        <div class="text-center" v-if="checkExistence(user, ['beacon', 'incomingConnectionRequests'])">
          <q-pagination v-model="page" :min="minPages" :max="maxPages" />
        </div>

        <q-inner-loading :visible="loading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </q-card>
      <q-card class="beacon-card no-beacon" v-if="checkExistence(user, ['beacon'], true)">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          <i class="icon ion-flame"></i>
          <h6>Light your beacon to view connection requests</h6>
        </q-card-title>
      </q-card>
      <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
      </q-inner-loading>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QInnerLoading,
  QSpinnerGears,
  QCard,
  QCardTitle,
  QField,
  QSearch,
  QPagination
} from 'quasar'
import Helper from 'mixins/Helper.js'
import ConnectionService from 'services/connectionService.js'
import Toast from 'mixins/Toast.js'

export default {
  name: 'CommunicationInbox',
  mixins: [Helper, Toast],
  components: {
    QBtn,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QInnerLoading,
    QSpinnerGears,
    QCard,
    QCardTitle,
    QField,
    QSearch,
    QPagination
  },
  data () {
    return {
      loading: false,
      search: '',
      page: 1,
      limit: 10,
      minPages: 1
    }
  },
  computed: {
    connectionRequests () {
      if (this.checkExistence(this.$store.state.user, ['beacon', 'incomingConnectionRequests'])) {
        return this.$store.state.user.beacon.incomingConnectionRequests
      }
      else {
        return []
      }
    },
    filteredRequests () {
      return this.connectionRequests.filter(request => {
        return request.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    skip () {
      return (this.page * this.limit) - this.limit
    },
    maxPages () {
      return Math.ceil(this.filteredRequests.length / this.limit)
    },
    user () {
      return (this.$store.state.user) ? this.$store.state.user : false
    }
  },
  methods: {
    getSlice (arr) {
      if (this.page === 1) {
        return arr.slice(0, 10)
      }
      else {
        return arr.slice(this.skip, this.skip + this.limit)
      }
    },
    denyConnectionRequest (request) {
      this.loading = true
      ConnectionService.denyConnectionRequest(request)
        .then((response) => {
          this.loading = false
          this.$store.commit('updateBeacon', response.body)
        })
        .catch((error) => {
          this.loading = false
          this.createToast('negative', error.body.message)
        })
    },
    approveConnectionRequest (request) {
      this.loading = true
      ConnectionService.approveConnectionRequest(request)
        .then((response) => {
          this.loading = false
          this.$store.commit('updateBeacon', response.body)
        })
        .catch((error) => {
          this.loading = false
          this.createToast('negative', error.body.message)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .q-card.no-beacon
    i
      font-size 4rem
    .beacon-card-title
      color: white
  .q-if-inverted
    box-shadow none
    border-radius 0px
</style>
