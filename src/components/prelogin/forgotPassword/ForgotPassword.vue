<template>
  <div class="column items-center no-wrap">
    <div class="prelogin-card shadow-4 bg-white column items-center justify-center no-wrap">
      <div class="forgot-password-form-title">
        Enter your email below to begin the password reset process
      </div>
      <form class="relative-position" name="passwordResetEmailForm" @submit.prevent="sendPasswordResetEmail">
        <q-field
          :error="$v.formData.email.$dirty && $v.formData.email.$invalid"
          error-label="Please enter a valid email address"
        >
          <q-input
            type="email"
            v-model.trim="formData.email"
            @blur="$v.formData.email.$touch()"
            float-label="Email"
          />
        </q-field>
        <div class="button-wrapper text-center">
          <q-btn flat @click.prevent="$router.push('/')" color="primary">
            Back
          </q-btn>
          <q-btn :disabled="$v.formData.$invalid" type="submit" color="primary">
            Submit
          </q-btn>
        </div>
        <q-inner-loading :visible="loading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </form>
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
import {
  QBtn,
  QIcon,
  QField,
  QInput,
  QInnerLoading,
  QSpinnerGears
} from 'quasar'
import { required, email } from 'vuelidate/lib/validators'
import TripleIconCards from 'components/snippets/tripleIconCards/TripleIconCards'

export default {
  name: 'ForgotPassword',
  components: {
    QBtn,
    QIcon,
    QField,
    QInput,
    QInnerLoading,
    QSpinnerGears,
    TripleIconCards
  },
  data () {
    return {
      loading: false,
      formData: {
        email: null
      }
    }
  },
  validations: {
    formData: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    sendPasswordResetEmail () {
      console.log(this.formData)
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'
  .prelogin-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    > i
      font-size 5rem
    form
      min-width 200px
      width 50%
      padding-bottom 1.5rem
    .button-wrapper
      margin-top 1rem
    .forgot-password-form-title
      font-size 0.95rem
      padding 14px 12px
      color $primary
      font-weight 500
</style>
