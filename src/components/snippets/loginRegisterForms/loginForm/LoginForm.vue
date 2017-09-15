<template>
  <form class="relative-position" name="loginForm" @submit.prevent="emitLogin">
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

export default {
  name: 'LoginForm',
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
        email: 'test@test.com',
        password: 'test123'
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
    emitLogin () {
      this.loading = true
      this.$q.events.$emit('emitLogin', this.formData)
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('loaded', function (loadedName) {
      if (loadedName === 'loginForm') {
        vm.loading = false
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  form
    padding-bottom 1.5rem
  .button-wrapper
    margin-top 1rem
</style>
