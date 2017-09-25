<template>
  <form class="relative-position" name="registerForm" @submit.prevent="emitRegister">
    <q-field
      :error="$v.formData.firstName.$dirty && $v.formData.firstName.$invalid"
      error-label="Please enter your first name"
    >
      <q-input
        max-length="50"
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
        max-length="50"
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
        max-length="50"
        type="email"
        v-model.trim="formData.email"
        float-label="Email"
        @blur="$v.formData.email.$touch()"
      />
    </q-field>
    <q-field
      :error="$v.formData.dateOfBirth.$dirty && $v.formData.dateOfBirth.$invalid"
      error-label="Please enter a past date"
    >
      <q-datetime
        float-label="Date of birth"
        @blur="$v.formData.dateOfBirth.$touch()"
        v-model="formData.dateOfBirth"
        type="date"
      />
    </q-field>
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
        Register
      </q-btn>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </form>
</template>

<script>
import {
  QBtn,
  QField,
  QInput,
  QInnerLoading,
  QSpinnerGears,
  QDatetime
} from 'quasar'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterForm',
  components: {
    QBtn,
    QField,
    QInput,
    QInnerLoading,
    QSpinnerGears,
    QDatetime
  },
  data () {
    return {
      formData: {
        firstName: 'Hambone',
        lastName: 'Fakenamington',
        email: 'Hambone@gmail.com',
        dateOfBirth: '1994-10-21T04:00:00.000Z',
        password: 'hambone123',
        passwordConfirmation: 'hambone123'
      },
      loading: false
    }
  },
  validations: {
    formData: {
      firstName: {
        required,
        maxLength: maxLength(50)
      },
      lastName: {
        required,
        maxLength: maxLength(50)
      },
      email: {
        required,
        email,
        maxLength: maxLength(100)
      },
      dateOfBirth: {
        required,
        isInThePast (value) {
          let date = new Date(value)
          let now = new Date()
          now.setHours(0, 0, 0, 0)
          return (date < now)
        }
      },
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
