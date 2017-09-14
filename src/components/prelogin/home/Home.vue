<template>
  <div>
    <!-- <q-btn icon-right="trending flat" color="primary">
      Login
    </q-btn> -->
    <!-- <q-btn icon-right="trending flat" color="primary" loader @click="simulateProgress"> -->
    <form :disabled="$v.$error" @submit="login">
      <q-field
        :error="$v.email.$error"
        error-label="Please enter a valid email address"
      >
        <q-input
          type="email"
          v-model="email"
          float-label="Email"
          @blur="$v.email.$touch"
        />
      </q-field>
      <q-field
        :error="$v.password.$error"
        error-label="Please enter your password"
      >
        <q-input
          type="password"
          v-model="password"
          float-label="Password"
        />
      </q-field>
      <q-btn type="submit" icon-right="trending flat" color="primary" loader>
      Login
      </q-btn>
    </form>
  </div>
</template>

<script>
import { QBtn, QIcon, QField, QInput } from 'quasar'
import authService from '../../../services/authService'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'home',
  components: {
    QBtn,
    QIcon,
    QField,
    QInput
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  validations: {
    email: {required, email},
    password: {required}
  },
  methods: {
    login (event) {
      authService.login(this.$data.email, this.$data.password).then(response => {
        localStorage.setItem('token', response.body.token)
        this.$router.push('/app/beacon')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus">

</style>
