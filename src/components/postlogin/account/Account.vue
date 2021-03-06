<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <q-card class="account-card relative-position">
        <q-card-title class="uppercase account-card-title text-center block bg-primary" color="white">
          Account
        </q-card-title>
        <q-list>
          <q-collapsible group="account" icon="account_circle" label="User information">
            <form class="relative-position" name="userInformationForm" @submit.prevent="updateUserInformation">
              <q-field
                :error="$v.informationFormData.firstName.$dirty && $v.informationFormData.firstName.$invalid"
                error-label="Please enter your first name"
              >
                <q-input
                  type="text"
                  max-length="50"
                  v-model.trim="informationFormData.firstName"
                  @blur="$v.informationFormData.firstName.$touch()"
                  float-label="First Name"
                />
              </q-field>
              <q-field
                :error="$v.informationFormData.lastName.$dirty && $v.informationFormData.lastName.$invalid"
                error-label="Please enter your last name"
              >
                <q-input
                  type="text"
                  max-length="50"
                  v-model.trim="informationFormData.lastName"
                  @blur="$v.informationFormData.lastName.$touch()"
                  float-label="Last Name"
                />
              </q-field>
              <q-field
                :error="$v.informationFormData.dateOfBirth.$dirty && $v.informationFormData.dateOfBirth.$invalid"
                error-label="You must be at least 18 years old"
              >
                <q-datetime
                  float-label="Date of birth"
                  @blur="$v.informationFormData.dateOfBirth.$touch()"
                  v-model="informationFormData.dateOfBirth"
                  type="date"
                />
              </q-field>
              <q-field
                label="Gender"
                :labelWidth="11"
              >
              </q-field>
              <q-radio v-model="informationFormData.gender" val="male" label="Male" /><br/>
              <q-radio v-model="informationFormData.gender" val="female" label="Female" /><br/>
              <q-radio v-model="informationFormData.gender" :val="null" label="Prefer not to say" />
              <div class=" button-wrapper text-right">
                <q-btn color="primary" :disabled="areObjectsEqual(originalInformationFormData, informationFormData) || $v.informationFormData.$invalid">
                  Update User Information
                </q-btn>
              </div>
            </form>
          </q-collapsible>
          <q-collapsible group="account" icon="email" label="Email address">
            <form class="relative-position" name="userEmailForm" @submit.prevent="updateUserEmail">
              <q-field
                :error="$v.emailFormData.email.$dirty && $v.emailFormData.email.$invalid"
                :error-label="emailErrorText"
              >
                <q-input
                  type="email"
                  max-length="100"
                  v-model.trim="emailFormData.email"
                  float-label="Email"
                  @input="delayTouch($v.emailFormData.email)"
                  @blur="$v.emailFormData.email.$touch()"
                />
              </q-field>
              <div class=" button-wrapper text-right">
                <q-btn color="primary" :disabled="areObjectsEqual(originalEmailFormData, emailFormData) || $v.emailFormData.$invalid">
                  Update Email Address
                </q-btn>
              </div>
            </form>
          </q-collapsible>
          <q-collapsible group="account" icon="lock" label="Password">
            <form class="relative-position" name="userPasswordForm" @submit.prevent="updateUserPassword">
              <q-field
                :error="$v.passwordFormData.currentPassword.$dirty && $v.passwordFormData.currentPassword.$invalid"
                error-label="Current password must be at least 8 characters"
              >
                <q-input
                  type="password"
                  max-length="50"
                  v-model.trim="passwordFormData.currentPassword"
                  @blur="$v.passwordFormData.currentPassword.$touch()"
                  float-label="Current password"
                />
              </q-field>
              <q-field
                :error="$v.passwordFormData.newPassword.$dirty && $v.passwordFormData.newPassword.$invalid"
                error-label="New password must be at least 8 characters"
              >
                <q-input
                  type="password"
                  max-length="50"
                  v-model.trim="passwordFormData.newPassword"
                  @blur="$v.passwordFormData.newPassword.$touch()"
                  float-label="New password"
                />
              </q-field>
              <q-field
                :error="$v.passwordFormData.newPasswordConfirmation.$dirty && $v.passwordFormData.newPasswordConfirmation.$invalid"
                error-label="New password confirmation must equal new password"
              >
                <q-input
                  type="password"
                  max-length="50"
                  v-model.trim="passwordFormData.newPasswordConfirmation"
                  @blur="$v.passwordFormData.newPasswordConfirmation.$touch()"
                  float-label="Confirm new password"
                />
              </q-field>
              <div class=" button-wrapper text-right">
                <q-btn color="primary" :disabled="areObjectsEqual(originalPasswordFormData, passwordFormData) || $v.passwordFormData.$invalid">
                  Update Password
                </q-btn>
              </div>
            </form>
          </q-collapsible>
          <q-collapsible group="account" icon="photo" label="Profile picture">
            <p class="text-center">
              Beacon uses Gravatar for profile pictures.<br/>
              <a href="https://www.gravatar.com" target="_blank">Click here to set up a Gravatar account.</a>
            </p>
          </q-collapsible>
          <q-collapsible group="account" icon="import_contacts" label="Corrected addresses">
            <p class="text-center" v-if="!$store.state.user.correctedAddresses.length">
              You have no corrected addresses at this time
            </p>
            <table class="q-table responsive striped-even" v-if="$store.state.user.correctedAddresses.length">
              <thead>
                <tr>
                  <th>
                    Original
                  </th>
                  <th>
                    Corrected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="correction in $store.state.user.correctedAddresses" :key="correction._id">
                  <td data-th="Original">{{correction.original.address}}</td>
                  <td data-th="Corrected">{{correction.corrected.address}}</td>
                  <td>
                    <q-btn flat class="no-shadow text-center icon-button" color="negative" icon="ion-close-round" @click.prevent="deleteCorrectedAddress(correction)"></q-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </q-collapsible>
          <q-collapsible group="account" icon="ion-android-cancel" label="Delete account">
            <div class="text-center">
              <q-btn color="negative" @click.prevent="openDeleteAccountDialog">
                Delete account
              </q-btn>
            </div>
          </q-collapsible>
        </q-list>
        <q-inner-loading :visible="loading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </q-card>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QCard,
  QCardTitle,
  QField,
  QInput,
  QDatetime,
  QRadio,
  QList,
  QCollapsible,
  QInnerLoading,
  QSpinnerGears,
  Dialog
} from 'quasar'
import { required, email, sameAs, maxLength, minLength } from 'vuelidate/lib/validators'
import AuthService from 'services/authService.js'
import UserService from 'services/userService.js'
import Toast from 'mixins/Toast.js'
import Helper from 'mixins/Helper.js'

const touchMap = new WeakMap()

export default {
  name: 'account',
  mixins: [Toast, Helper],
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QField,
    QInput,
    QDatetime,
    QRadio,
    QList,
    QCollapsible,
    QInnerLoading,
    QSpinnerGears
  },
  data () {
    return {
      informationFormData: {
        userId: this.$store.state.user._id || '',
        firstName: this.$store.state.user.firstName || '',
        lastName: this.$store.state.user.lastName || '',
        gender: this.$store.state.user.gender || null,
        dateOfBirth: this.$store.state.user.dateOfBirth || ''
      },
      emailFormData: {
        userId: this.$store.state.user._id || '',
        email: this.$store.state.user.email || ''
      },
      passwordFormData: {
        userId: this.$store.state.user._id || '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      },
      originalInformationFormData: null,
      originalEmailFormData: null,
      originalPasswordFormData: null,
      emailErrorText: 'Please enter a valid email address',
      loading: false
    }
  },
  validations: {
    informationFormData: {
      firstName: {
        required,
        maxLength: maxLength(50)
      },
      lastName: {
        required,
        maxLength: maxLength(50)
      },
      dateOfBirth: {
        required,
        isInThePast (dateOfBirth) {
          let date = new Date(dateOfBirth)
          let now = new Date()
          now.setHours(0, 0, 0, 0)
          return (date < now)
        },
        isOlderThanEighteen (dateOfBirth) {
          let today = new Date()
          let dob = new Date(dateOfBirth)
          var age = today.getFullYear() - dob.getFullYear()
          var m = today.getMonth() - dob.getMonth()
          if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--
          }
          return age >= 18
        }
      }
    },
    emailFormData: {
      email: {
        required,
        email,
        maxLength: maxLength(100),
        isUnique (email) {
          if (email.trim() === '') return true
          this.emailErrorText = ''
          return new Promise((resolve, reject) => {
            AuthService.checkIfEmailIsUnique(email).then(response => {
              if (response.body) {
                this.emailErrorText = 'Please enter a valid email address'
              }
              else {
                this.emailErrorText = 'This email address is already in use'
              }
              resolve(response.body)
            }).catch(err => {
              reject(err.body.message)
              this.createToast('negative', err.body.message)
            })
          })
        }
      }
    },
    passwordFormData: {
      currentPassword: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(50)
      },
      newPassword: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(50)
      },
      newPasswordConfirmation: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(50),
        sameAsPassword: sameAs('newPassword')
      }
    }
  },
  methods: {
    updateUserInformation () {
      if (!this.loading) {
        this.loading = true
        UserService.updateUserInformation(this.informationFormData)
          .then(response => {
            this.loading = false
            this.originalInformationFormData = JSON.parse(JSON.stringify(this.informationFormData))
            this.$store.commit('updateUser', response.body)
            this.createToast('positive', 'Your information was successfully updated')
          })
          .catch(err => {
            this.loading = false
            this.createToast('negative', err.body.message)
          })
      }
    },
    updateUserEmail () {
      if (!this.loading) {
        this.loading = true
        UserService.updateUserEmail(this.emailFormData)
          .then(response => {
            this.loading = false
            this.originalEmailFormData = JSON.parse(JSON.stringify(this.emailFormData))
            this.$store.commit('updateUser', response.body)
            this.createToast('positive', 'Your email was successfully updated')
          })
          .catch(err => {
            this.loading = false
            this.createToast('negative', err.body.message)
          })
      }
    },
    updateUserPassword () {
      if (!this.loading) {
        this.loading = true
        UserService.updateUserPassword(this.passwordFormData)
          .then(response => {
            this.loading = false
            const passwordInputs = [...document.querySelectorAll('form[name="userPasswordForm"] input')]
            passwordInputs.map(input => { input.blur() })
            this.originalPasswordFormData = {}
            this.passwordFormData = {}
            this.$v.passwordFormData.$reset()
            this.$store.commit('updateUser', response.body)
            this.createToast('positive', 'Your password was successfully updated')
          })
          .catch(err => {
            this.loading = false
            this.createToast('negative', err.body.message)
          })
      }
    },
    delayTouch ($v) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
      }
      touchMap.set($v, setTimeout($v.$touch, 250))
    },
    openDeleteAccountDialog () {
      Dialog.create({
        title: 'Are you sure you want to delete your account?',
        message: 'This can never be undone and all of your data will be permanently deleted.',
        buttons: [
          'Cancel',
          {
            label: 'Delete account',
            color: 'negative',
            handler: () => {
              this.loading = true
              AuthService.deleteAccount({userId: this.$store.state.user._id})
                .then((response) => {
                  this.loading = false
                  if (response.body.extinguishSocketObj) {
                    this.$socket.emit('extinguishBeacon', response.body.extinguishSocketObj)
                  }
                  if (response.body.denySocketObj) {
                    this.$socket.emit('denyConnectionRequest', response.body.denySocketObj)
                  }
                  this.$cookie.delete('token')
                  this.$router.push('/')
                })
                .catch(() => {
                  this.loading = false
                  this.createToast('negative', 'Unable to delete your account at this time')
                })
            }
          }
        ]
      })
    },
    deleteCorrectedAddress (correction) {
      if (!this.loading) {
        this.loading = true
        let correctedObj = {
          userId: this.$store.state.user._id,
          correctedAddressId: correction._id
        }
        UserService.deleteCorrectedAddress(correctedObj)
          .then((response) => {
            this.loading = false
            if (response.body) {
              this.$store.commit('updateUser', response.body)
            }
          })
          .catch(() => {
            this.createToast('negative', 'Could not delete the corrected address at this time')
            this.loading = false
          })
      }
    }
  },
  mounted () {
    this.originalInformationFormData = JSON.parse(JSON.stringify(this.informationFormData))
    this.originalEmailFormData = JSON.parse(JSON.stringify(this.emailFormData))
    this.originalPasswordFormData = JSON.parse(JSON.stringify(this.passwordFormData))
  }
}
</script>

<style lang="stylus">
  .account-card
    &:not(:first-of-type)
      margin-top 2rem
    .account-card-title
      color: white
    form
      padding 0rem 1rem 1.5rem
      .q-field-label-inner
        width 100% !important
      .q-radio:not(:last-of-type)
        margin-bottom 0.25rem
      .q-option
        .q-option-label
          color rgba(0,0,0,0.54)
      .button-wrapper
        margin-top 1rem
</style>
