<template>
  <form class="relative-position" name="loginForm" @submit.prevent="login">
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
    <q-field
      :error="$v.formData.password.$dirty && $v.formData.password.$invalid"
      error-label="Please enter your password"
    >
      <q-input
        type="password"
        v-model.trim="formData.password"
        @blur="$v.formData.password.$touch()"
        float-label="Password"
      />
    </q-field>
    <div>
      <small><a @click="$router.push('/forgot-password')">I forgot my password</a></small>
    </div>
    <div class="button-wrapper text-center">
      <q-btn :disabled="$v.formData.$invalid" type="submit" color="primary">
        Login
      </q-btn>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </form>
</template>

<script>
import { QBtn, QField, QInput, QInnerLoading, QSpinnerGears } from 'quasar'
import { required, email } from 'vuelidate/lib/validators'
import AuthService from 'services/authService.js'
import Toast from 'mixins/Toast.js'

export default {
  name: 'LoginForm',
  mixins: [Toast],
  components: {
    QBtn,
    QField,
    QInput,
    QInnerLoading,
    QSpinnerGears
  },
  data () {
    return {
      formData: {
        email: 'ClaytonAlanKinder@gmail.com',
        password: 'clayton123'
      },
      loading: false
    }
  },
  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  props: {},
  methods: {
    login () {
      this.loading = true
      AuthService.login(this.formData).then(res => {
        // localStorage.setItem('token', res.body.token)
        this.$cookie.set('token', res.body.token, 1)
        this.$router.push('/app/beacon')
        this.loading = false
      }).catch(err => {
        this.loading = false
        this.createToast('negative', err.body.message)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  form
    padding-bottom 1.5rem
  .button-wrapper
    margin-top 1rem
</style>
