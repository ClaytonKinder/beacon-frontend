<template>
  <div class="prelogin-page window-width bg-light column items-center no-wrap">
    <div class="prelogin-header bg-primary flex items-center justify-center">

    </div>
    <div>
      <div class="prelogin-card shadow-4 bg-white column items-center justify-center no-wrap">
        <login-register-forms></login-register-forms>
      </div>
    </div>
    <div>
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
          Connect with other beacons to stoke the flame and shine that much brighter to others on the map. Make friends, communicate, grow together.
        </span>
      </triple-icon-cards>
    </div>
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
.prelogin-page
  padding-bottom: 100px
  .prelogin-header
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .prelogin-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    > i
      font-size 5rem
</style>
