<template>
  <form class="relative-position" name="registerForm" @submit.prevent="emitRegister">
    <q-field
      :error="$v.formData.firstName.$dirty && $v.formData.firstName.$invalid"
      error-label="Please enter your first name"
    >
      <q-input
        type="text"
        v-model.trim="formData.firstName"
        @blur="$v.formData.firstName.$touch()"
        float-label="First Name"
      />
    </q-field>
    <q-field
      :error="$v.formData.lastName.$dirty && $v.formData.lastName.$invalid"
      error-label="Please enter your last name"
    >
      <q-input
        type="text"
        v-model.trim="formData.lastName"
        @blur="$v.formData.lastName.$touch()"
        float-label="Last Name"
      />
    </q-field>
    <q-field
      :error="$v.formData.email.$dirty && $v.formData.email.$invalid"
      error-label="Please enter a valid email address"
    >
      <q-input
        type="email"
        v-model.trim="formData.email"
        float-label="Email"
        @blur="$v.formData.email.$touch()"
      />
    </q-field>
    <q-field
      :error="$v.formData.password.$dirty && $v.formData.password.$invalid"
      error-label="Please enter a secure password"
    >
      <q-input
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
        type="password"
        v-model.trim="formData.passwordConfirmation"
        @blur="$v.formData.passwordConfirmation.$touch()"
        float-label="Confirm Password"
      />
    </q-field>
    <div class="button-wrapper text-center">
      <q-btn :disabled="$v.formData.$invalid" type="submit" color="primary">
        Register
      </q-btn>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </form>
</template>

<script>
import { QBtn, QField, QInput, QInnerLoading, QSpinnerGears } from 'quasar'
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterForm',
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
        firstName: 'Clayton',
        lastName: 'Kinder',
        email: 'ClaytonAlanKinder@gmail.com',
        password: 'clayton123',
        passwordConfirmation: 'clayton123'
      },
      loading: false
    }
  },
  validations: {
    formData: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  props: {},
  methods: {
    emitRegister () {
      this.loading = true
      this.$q.events.$emit('emitRegister', this.formData)
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('loaded', function (loadedName) {
      if (loadedName === 'registerForm') {
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
