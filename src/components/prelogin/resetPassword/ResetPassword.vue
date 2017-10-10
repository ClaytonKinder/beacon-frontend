<template>
  <div class="column items-center no-wrap">
    <div class="prelogin-card shadow-4 bg-white column items-center justify-center no-wrap">
      <div class="forgot-password-form-title">
        Enter your new password below
      </div>
      {{$route.query.resetPasswordToken}}
      <form class="relative-position" name="passwordResetEmailForm" @submit.prevent="resetPassword">
        <q-field
          :error="$v.formData.password.$dirty && $v.formData.password.$invalid"
          error-label="Please enter a secure password that's between 8 and 50 characters"
        >
          <q-input
            max-length="50"
            type="password"
            v-model.trim="formData.password"
            @blur="$v.formData.password.$touch()"
            float-label="Password"
          />
        </q-field>
        <q-field
          :error="$v.formData.passwordConfirmation.$dirty && $v.formData.passwordConfirmation.$invalid"
          error-label="Please make sure that this matches your password"
        >
          <q-input
            max-length="50"
            type="password"
            v-model.trim="formData.passwordConfirmation"
            @blur="$v.formData.passwordConfirmation.$touch()"
            float-label="Confirm Password"
          />
        </q-field>
        <div class="button-wrapper text-center">
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
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import AuthService from 'services/authService.js'
import TripleIconCards from 'components/snippets/tripleIconCards/TripleIconCards'
import Toast from 'mixins/Toast.js'

export default {
  name: 'ResetPassword',
  components: {
    QBtn,
    QIcon,
    QField,
    QInput,
    QInnerLoading,
    QSpinnerGears,
    TripleIconCards
  },
  mixins: [Toast],
  data () {
    return {
      loading: false,
      formData: {
        email: '',
        password: '',
        passwordConfirmation: '',
        resetPasswordToken: this.$route.params.resetPasswordToken
      }
    }
  },
  validations: {
    formData: {
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(50)
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs('password'),
        minLength: minLength(8),
        maxLength: maxLength(50)
      }
    }
  },
  methods: {
    resetPassword () {
      this.loading = true
      AuthService.resetPassword(this.formData)
        .then((response) => {
          if (response.body) {
            this.loading = false
            this.createToast('positive', 'Your password has been successfully reset')
            this.$router.push('/')
          }
          else {
            this.loading = false
            this.createToast('negative', 'Could not reset your password at this time')
          }
        })
        .catch((error) => {
          this.loading = false
          this.createToast('negative', error.body.message)
        })
    }
  },
  mounted () {
    if (this.$route.params && this.$route.params.resetPasswordToken) {
      let resetPasswordToken = {
        resetPasswordToken: this.$route.params.resetPasswordToken
      }
      AuthService.validateResetPasswordToken(resetPasswordToken)
        .then((response) => {
          if (response.body) {
            this.formData.email = response.body
          }
          else {
            this.$router.push('/')
            this.createToast('negative', 'Password reset is invalid or has expired')
          }
        })
        .catch((error) => {
          this.$router.push('/')
          this.createToast('negative', error.body.message)
        })
    }
    else {
      this.$router.push('/')
      this.createToast('negative', 'A password reset token was not provided')
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
