<template>
  <q-layout
    ref="layout"
    view="hHr Lpr fff"
    :right-class="{'bg-grey-2': true}"
  >
    <postlogin-header v-on:toggleRight="toggleRight"></postlogin-header>
    <sidebar slot="right"></sidebar>
    <router-view></router-view>
    <audio id="horn">
      <source src="/assets/audio/horn.mp3" type="audio/mpeg">
    </audio>
    <audio id="notification">
      <source src="/assets/audio/notification.mp3" type="audio/mpeg">
    </audio>
    <q-modal
      class="relative-position"
      ref="tutorialTourModal"
      noEscDismiss
      noBackdropDismiss
      :content-css="{maxWidth: tourModalWidth}"
    >
      <q-stepper
        class="tutorial-tour"
        flat
        color="primary"
        ref="stepper"
        alternative-labels
        v-model="tutorialStep"
        contractable
      >
        <q-step default name="welcome" title="Welcome" icon="ion-android-hand" active-icon="ion-android-hand">
          <h5 class="text-center text-primary">Welcome to Beacon!</h5>
          <p>
            This application is made for connecting with those around you. Before we let you loose, we'd like to explain the various features of Beacon so that you'll be able to jump in with full confidence.
          </p>
        </q-step>
        <q-step name="announce" title="Announce" icon="ion-flame" active-icon="ion-flame">
          <h5 class="text-center text-primary">Announce</h5>
          <p>
            The cornerstones of Beacon are, well, the beacons.
          </p>
          <p>
            Beacons can only be placed on the beacon page at your <strong>current location</strong> and can be customized through titles, descriptions, colors, and tags.
          </p>
          <p>
            As the owner of a beacon, you are in charge of who gets to view and connect with it. You can filter out people based on age or gender and you can also set a beacon password for extra security.
          </p>
        </q-step>
        <q-step name="explore" title="Explore" icon="map" active-icon="map">
          <h5 class="text-center text-secondary">Explore</h5>
          <p>
            Hosting not your thing? Don't worry.
          </p>
          <p>
            Visit the map page to view the beacons around you. Beacons with age or gender restrictions that don't include you won't even appear on your map so you know that you'll be welcome at any beacons that do.
          </p>
        </q-step>
        <q-step name="connect" title="Connect" icon="fa-plug" active-icon="fa-plug">
          <h5 class="text-center text-secondary">Connect</h5>
          <p>
            Join forces via connections to strengthen a beacon's flame.
          </p>
          <p>
            When a connection request is sent to a beacon, it will appear in real-time in the beacon owner's inbox.
          </p>
          <p>
            Likewise, when the beacon owner decides to accept or deny the request, the user that sent it will be notified of their decision immediately.
          </p>
          <p>
            The more connections a beacon has, the <strong>bigger it will appear</strong> on the map.
          </p>
        </q-step>
        <q-step name="wrap-up" title="Wrap-up" icon="ion-flag" active-icon="ion-flag">
          <h5 class="text-center text-primary">Wrap-Up</h5>
          <p>
            Here are some tips to make sure that your Beacon usage goes as smoothly as possible.
          </p>
          <ul class="tutorial-step-list">
            <li>
              Remember that you must be <strong>within 250m</strong> of a beacon to connect to it.
            </li>
            <li>
              Try to use Wi-Fi or mobile data as opposed to a wired internet connection. Beacon relies heavily on accurate location data and wired connections are MUCH less accurate when compared to wireless alternatives.
            </li>
            <li>
              If your location is still inaccurate even while using a wireless internet connection, try moving to an open location that's both above ground and not surrounded by thick walls.
            </li>
          </ul>
          <p>
            With all of that out of the way, we here at Beacon would like to thank you for using our application. We wish you the best of luck in the adventures it will bring. Now get out there and explore!
          </p>
        </q-step>
        <q-stepper-navigation>
          <q-btn
            v-if="tutorialStep !== 'welcome'"
            :color="getTutorialTourStepColor()"
            flat
            @click="$refs.stepper.previous()"
          >
            Back
          </q-btn>
          <q-btn
            v-if="tutorialStep !== 'wrap-up'"
            :color="getTutorialTourStepColor()"
            @click="$refs.stepper.next()"
          >
            Continue
          </q-btn>
          <q-btn
            v-if="tutorialStep === 'wrap-up'"
            :color="getTutorialTourStepColor()"
            @click="completeTutorialTour"
          >
            Finish
          </q-btn>
        </q-stepper-navigation>
        <q-inner-loading :visible="tourLoading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </q-stepper>
    </q-modal>
    <div class="stepper-wrapper" v-if="showStepper">
      <q-stepper
        class="tutorial-tour mobile"
        flat
        color="primary"
        ref="stepper"
        alternative-labels
        v-model="tutorialStep"
        contractable
      >
        <q-step default name="welcome" title="Welcome" icon="ion-android-hand" active-icon="ion-android-hand">
          <h5 class="text-center text-primary">Welcome to Beacon!</h5>
          <p>
            This application is made for connecting with those around you. Before we let you loose, we'd like to explain the various features of Beacon so that you'll be able to jump in with full confidence.
          </p>
          <q-stepper-navigation>
            <q-btn
              :color="getTutorialTourStepColor()"
              @click="$refs.stepper.next()"
            >
              Continue
            </q-btn>
          </q-stepper-navigation>
        </q-step>
        <q-step name="announce" title="Announce" icon="ion-flame" active-icon="ion-flame">
          <h5 class="text-center text-primary">Announce</h5>
          <p>
            The cornerstones of Beacon are, well, the beacons.
          </p>
          <p>
            Beacons can only be placed on the beacon page at your <strong>current location</strong> and can be customized through titles, descriptions, colors, and tags.
          </p>
          <p>
            As the owner of a beacon, you are in charge of who gets to view and connect with it. You can filter out people based on age or gender and you can also set a beacon password for extra security.
          </p>
          <q-stepper-navigation>
            <q-btn
              v-if="tutorialStep !== 'welcome'"
              :color="getTutorialTourStepColor()"
              flat
              @click="$refs.stepper.previous()"
            >
              Back
            </q-btn>
            <q-btn
              :color="getTutorialTourStepColor()"
              @click="$refs.stepper.next()"
            >
              Continue
            </q-btn>
          </q-stepper-navigation>
        </q-step>
        <q-step name="explore" title="Explore" icon="map" active-icon="map">
          <h5 class="text-center text-secondary">Explore</h5>
          <p>
            Hosting not your thing? Don't worry.
          </p>
          <p>
            Visit the map page to view the beacons around you. Beacons with age or gender restrictions that don't include you won't even appear on your map so you know that you'll be welcome at any beacons that do.
          </p>
          <q-stepper-navigation>
            <q-btn
              v-if="tutorialStep !== 'welcome'"
              :color="getTutorialTourStepColor()"
              flat
              @click="$refs.stepper.previous()"
            >
              Back
            </q-btn>
            <q-btn
              :color="getTutorialTourStepColor()"
              @click="$refs.stepper.next()"
            >
              Continue
            </q-btn>
          </q-stepper-navigation>
        </q-step>
        <q-step name="connect" title="Connect" icon="fa-plug" active-icon="fa-plug">
          <h5 class="text-center text-secondary">Connect</h5>
          <p>
            Join forces via connections to strengthen a beacon's flame.
          </p>
          <p>
            When a connection request is sent to a beacon, it will appear in real-time in the beacon owner's inbox.
          </p>
          <p>
            Likewise, when the beacon owner decides to accept or deny the request, the user that sent it will be notified of their decision immediately.
          </p>
          <p>
            The more connections a beacon has, the <strong>bigger it will appear</strong> on the map.
          </p>
          <q-stepper-navigation>
            <q-btn
              v-if="tutorialStep !== 'welcome'"
              :color="getTutorialTourStepColor()"
              flat
              @click="$refs.stepper.previous()"
            >
              Back
            </q-btn>
            <q-btn
              :color="getTutorialTourStepColor()"
              @click="$refs.stepper.next()"
            >
              Continue
            </q-btn>
          </q-stepper-navigation>
        </q-step>
        <q-step name="wrap-up" title="Wrap-up" icon="ion-flag" active-icon="ion-flag">
          <h5 class="text-center text-primary">Wrap-Up</h5>
          <p>
            Here are some tips to make sure that your Beacon usage goes as smoothly as possible.
          </p>
          <ul class="tutorial-step-list">
            <li>
              Remember that you must be <strong>within 250m</strong> of a beacon to connect to it.
            </li>
            <li>
              Try to use Wi-Fi or mobile data as opposed to a wired internet connection. Beacon relies heavily on accurate location data and wired connections are MUCH less accurate when compared to wireless alternatives.
            </li>
            <li>
              If your location is still inaccurate even while using a wireless internet connection, try moving to an open location that's both above ground and not surrounded by thick walls.
            </li>
          </ul>
          <p>
            With all of that out of the way, we here at Beacon would like to thank you for using our application. We wish you the best of luck in the adventures it will bring. Now get out there and explore!
          </p>
          <q-stepper-navigation>
            <q-btn
              v-if="tutorialStep !== 'welcome'"
              :color="getTutorialTourStepColor()"
              flat
              @click="$refs.stepper.previous()"
            >
              Back
            </q-btn>
            <q-btn
              :color="getTutorialTourStepColor()"
              @click="completeTutorialTour"
            >
              Finish
            </q-btn>
          </q-stepper-navigation>
        </q-step>
        <q-inner-loading :visible="tourLoading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </q-stepper>
    </div>
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
  QSideLink,
  QModal,
  QStepper,
  QStep,
  QStepperNavigation,
  QInnerLoading,
  QSpinnerGears,
  dom
} from 'quasar'
const { viewport } = dom
import PostloginHeader from 'components/postlogin/header/Header'
import Sidebar from 'components/postlogin/sidebar/Sidebar'
import UserService from 'services/userService.js'
import Toast from 'mixins/Toast.js'

export default {
  name: 'Postlogin',
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
    QModal,
    QStepper,
    QStep,
    QStepperNavigation,
    QInnerLoading,
    QSpinnerGears,
    PostloginHeader,
    Sidebar
  },
  data () {
    return {
      socketClientObj: {
        fullName: this.$store.state.user.fullName,
        email: this.$store.state.user.email,
        userId: this.$store.state.user._id
      },
      tourLoading: false,
      showStepper: false,
      tutorialStep: null
    }
  },
  computed: {
    tourModalWidth () {
      if (this.$q.platform.is.mobile) {
        return '100%'
      }
      else {
        let {width} = viewport()
        if (width <= 600) {
          return '100%'
        }
        else {
          return '600px'
        }
      }
    }
  },
  methods: {
    completeTutorialTour () {
      this.tourLoading = true
      UserService.completeTutorialTour({ userId: this.$store.state.user._id })
        .then((response) => {
          this.tourLoading = false
          this.showStepper = false
          this.$refs.tutorialTourModal.close()
        })
        .catch(() => {
          this.tourLoading = false
          this.showStepper = false
          this.$refs.tutorialTourModal.close()
          this.createToast('Unable to fully complete tutorial tour at this time')
        })
    },
    getTutorialTourStepColor () {
      if (
        this.tutorialStep === 'welcome' ||
        this.tutorialStep === 'announce' ||
        this.tutorialStep === 'wrap-up'
      ) {
        return 'primary'
      }
      else if (this.tutorialStep === 'explore') {
        return 'secondary'
      }
      else if (this.tutorialStep === 'connect') {
        return 'tertiary'
      }
    },
    toggleRight () {
      this.$refs.layout.toggleRight()
    }
  },
  mounted () {
    this.$socket.emit('userNavigatedToPostlogin', this.socketClientObj)
    if (!this.$store.state.user.hasCompletedTutorialTour) {
      if (this.$q.platform.is.mobile) {
        this.showStepper = true
      }
      else {
        this.$refs.tutorialTourModal.open()
      }
    }
  },
  beforeDestroy () {
    this.$cookie.delete('has-seen-geolocation-alert')
    this.$socket.emit('userNavigatedToPrelogin', this.socketClientObj)
  }
}
</script>

<style lang="stylus">
  @import '~variables'
  .postlogin-page-wrapper
    width 500px
    max-width 90vw
  // .colorpicker-block
  //   padding 1px
  //   background rgba(0,0,0,0.12)
  //   cursor pointer
  //   &.disabled
  //     opacity: 0.6
  // .colorpicker-wrapper
  //   height 40px
  //   cursor pointer
  // .colorpicker
  //   cursor pointer
  //   height 100%
  //   position absolute
  //   top 0
  //   right 0
  //   bottom 0
  //   left 0
  //   padding: 0
  //   padding-bottom 0
  //   border: 0
  //   opacity 0
  //   &:disabled
  //     opacity 0 !important
  //   &:focus
  //     outline 0
  .stepper-wrapper
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background white
  .q-stepper.tutorial-tour
    &:not(.mobile)
      height 100%
    .tutorial-step-list
      li:not(last-of-type)
        margin-bottom 1rem
    .q-stepper-tab
      &:nth-of-type(3).step-active
        color $secondary
      &:nth-of-type(4).step-active
        color $tertiary
    .q-stepper-nav
      justify-content flex-end
    &.mobile
      box-shadow none
      .q-stepper-header
        width 100%
      .q-stepper-step
        max-width 100%
</style>
