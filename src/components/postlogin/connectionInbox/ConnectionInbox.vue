<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <div v-if="this.$store.state.user && this.$store.state.user.beacon">
        <q-field class="no-margin">
          <q-search inverted v-model="search" />
        </q-field>
        <q-list separator>
          <q-item v-for="request in filteredRequests" key="request.fullName">
            <q-item-side class="text-center" left :avatar="request.image">
              <q-item-tile stamp>10 min ago</q-item-tile>
            </q-item-side>
            <q-item-main :label="request.fullName" />
            <q-item-side right>
              <q-btn flat class="text-center request-button" color="positive" icon="ion-checkmark-round"></q-btn>
              <q-btn flat class="no-shadow text-center request-button" color="negative" icon="ion-close-round"></q-btn>
            </q-item-side>
          </q-item>
        </q-list>
      </div>
      <q-card class="beacon-card no-beacon" v-if="this.$store.state.user && !this.$store.state.user.beacon">
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
  QSearch
} from 'quasar'

export default {
  name: 'CommunicationInbox',
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
    QSearch
  },
  data () {
    return {
      loading: false,
      search: '',
      connectionRequests: [
        {
          fullName: 'Solaire of Astora',
          image: 'https://gravatar.com/avatar/8de383882cac86d2a4bec30cefd34589?s=200&d=mm'
        },
        {
          fullName: 'Siegmeyer of Catarina',
          image: 'https://gravatar.com/avatar/8de383882cac86d2a4bec30cefd34589?s=200&d=mm'
        },
        {
          fullName: 'Trusty Patches',
          image: 'https://gravatar.com/avatar/8de383882cac86d2a4bec30cefd34589?s=200&d=mm'
        }
      ]
    }
  },
  computed: {
    filteredRequests () {
      return this.connectionRequests.filter(request => {
        return request.fullName.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .request-button
    i.on-left
      margin-right 0
  .q-card.no-beacon
    i
      font-size 4rem
    .beacon-card-title
      color: white
</style>
