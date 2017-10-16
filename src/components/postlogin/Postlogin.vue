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
    <tutorial-tour></tutorial-tour>
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
import TutorialTour from 'components/postlogin/tutorialTour/TutorialTour'
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
    Sidebar,
    TutorialTour
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
  // .layout-page
  //   height 100vh
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
