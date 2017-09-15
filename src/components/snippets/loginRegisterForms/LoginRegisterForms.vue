<template>
  <div class="full-width block snippet.loginRegisterForms">
    <q-tabs v-if="(!loginOnly && !registerOnly) || (loginOnly && registerOnly)" inverted align="justify">
      <q-tab default slot="title" name="login" label="Login" />
      <q-tab slot="title" name="register" label="Register" />
      <q-tab-pane name="login" class="row justify-center">
        <login-form class="col col-lg-8 col-md-9 col-sm-10 col-xs-11"></login-form>
      </q-tab-pane>
      <q-tab-pane name="register" class="row justify-center">
        <register-form class="col col-lg-8 col-md-9 col-sm-10 col-xs-11"></register-form>
      </q-tab-pane>
    </q-tabs>
    <div class="row justify-center" v-if="loginOnly && !registerOnly">
      <h3 class="col col-xs-12 form-header text-center">Login</h3>
      <login-form class="col col-lg-8 col-md-9 col-sm-10 col-xs-11"></login-form>
    </div>
    <div class="row justify-center"  v-if="!loginOnly && registerOnly">
      <h3 class="col col-xs-12 form-header text-center">Register</h3>
      <register-form class="col col-lg-8 col-md-9 col-sm-10 col-xs-11"></register-form>
    </div>
  </div>
</template>

<script>
import { QTabs, QTab, QTabPane, QBtn, QIcon, QField, QInput } from 'quasar'
import LoginForm from 'components/snippets/loginRegisterForms/loginForm/LoginForm'
import RegisterForm from 'components/snippets/loginRegisterForms/registerForm/RegisterForm'

export default {
  name: 'LoginRegisterForms',
  components: {
    QTabs,
    QTab,
    QTabPane,
    QBtn,
    QIcon,
    QField,
    QInput,
    LoginForm,
    RegisterForm
  },
  data () {
    return {
      registerData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {},
  props: {
    loginOnly: {
      default: false,
      type: Boolean
    },
    registerOnly: {
      default: false,
      type: Boolean
    }
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .snippet.loginRegisterForms
    .q-tab-pane
      border: 0
  .form-header
    margin-bottom 0
</style>
