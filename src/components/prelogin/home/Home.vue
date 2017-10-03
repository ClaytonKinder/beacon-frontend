<template>
  <div class="column items-center no-wrap">
    <div class="prelogin-card shadow-4 bg-white column items-center justify-center no-wrap">
      <login-register-forms></login-register-forms>
    </div>
    <triple-icon-cards>
      <!-- First Card -->
      <i slot="card1-icon" class="icon ion-flame"></i>
      <h4 slot="card1-title" class="thin uppercase no-margin">Announce</h4>
      <span slot="card1-text">
        Put yourself on the map by lighting your beacon. Immediately appear on the radar of other users and show them why you're worth approaching.
      </span>
      <!-- Second Card -->
      <q-icon slot="card2-icon" name="map" />
      <h4 slot="card2-title" class="thin uppercase no-margin">Explore</h4>
      <span slot="card2-text">
        Explore the world around you. Go find out why so many beacons are lit at the new bar down the street or the seemingly-forgotten park a few blocks away.
      </span>
      <!-- Third Card -->
      <i slot="card3-icon" class="fa fa-plug"></i>
      <h4 slot="card3-title" class="thin uppercase no-margin">Connect</h4>
      <span slot="card3-text">
        Connect with other beacons to stoke the flame and shine that much brighter to others on the map. Make friends, communicate, and take on the world together.
      </span>
    </triple-icon-cards>
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'
import TripleIconCards from 'components/snippets/tripleIconCards/TripleIconCards'
import LoginRegisterForms from 'components/snippets/loginRegisterForms/LoginRegisterForms'

export default {
  name: 'home',
  components: {
    QBtn,
    QIcon,
    TripleIconCards,
    LoginRegisterForms
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus">
  .prelogin-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    > i
      font-size 5rem
</style>
