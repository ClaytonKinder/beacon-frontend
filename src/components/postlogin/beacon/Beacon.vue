<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <!-- Light/Extinguish beacon card -->
      <q-card class="beacon-card" color="white" v-if="checkExistence(user, ['outgoingConnectionRequest'], true) && checkExistence(user, ['connectedTo'], true)">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          {{ formData.beaconLit ? 'Extinguish' : 'Light' }} Beacon
        </q-card-title>
        <form class="relative-position" name="beaconForm" @submit.prevent>
          <q-field
            :error="$v.formData.name.$dirty && $v.formData.name.$invalid"
            error-label="Please enter a name for your beacon"
          >
            <q-input
              type="text"
              max-length="100"
              v-model.trim="formData.name"
              @blur="$v.formData.name.$touch()"
              float-label="Name"
              :disable="formData.beaconLit"
            />
          </q-field>
          <q-field
            :error="$v.formData.description.$dirty && $v.formData.description.$invalid"
            error-label="Please enter a description for your beacon with a maximum length of 140 characters"
          >
            <q-input
              type="textarea"
              v-model.trim="formData.description"
              @blur="$v.formData.description.$touch()"
              float-label="Description"
              :disable="formData.beaconLit"
              max-length="140"
              :max-height="100"
              :min-rows="4"
            />
          </q-field>
          <q-field
            :error="$v.formData.address.$dirty && $v.formData.address.$invalid"
            error-label="Please enter an address for your beacon"
          >
            <q-input
              type="text"
              max-length="100"
              :value="formData.address"
              :loading="addressLoading"
              :stack-label="$store.state.user.settings.showBeaconAddress ? 'Address' : 'Address (will not be visible to others)'"
              disable
            />
            <small class="incorrect-address">
              <a @click.prevent="openIncorrectAddressDialog()">Incorrect address?</a>
            </small>
          </q-field>
          <q-field
            :label="'Color (' + formData.color.toUpperCase() + ')'"
            :labelWidth="11"
          >
          </q-field>
          <div class="colorpicker-block" v-bind:class="{ disabled: formData.beaconLit }">
            <div
              class="colorpicker-wrapper relative-position"
              v-bind:style="{background: formData.color + ' !important'}"
            >
              <input type="color" :disabled="formData.beaconLit" v-model="formData.color" class="full-width colorpicker" />
            </div>
          </div>
          <div class="additional-settings-wrapper text-center">
            <a @click.prevent="$refs.additionalSettingsModal.open()">Additional settings</a>
          </div>
          <q-field
            class="text-center toggle-field"
          >
            <q-toggle
              @change="toggleBeacon"
              :disable="$v.formData.$invalid"
              v-model="formData.beaconLit"
            />
          </q-field>
          <q-inner-loading :visible="loading">
            <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
          </q-inner-loading>
        </form>
      </q-card>
      <!-- Awaiting connection approval card -->
      <q-card class="beacon-card" v-if="checkExistence(user, ['outgoingConnectionRequest']) &&  checkExistence(user, ['beacon'], true)">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          Awaiting Connection Approval
        </q-card-title>
        <div class="connection-body text-center">
          <div>
            <q-spinner color="primary" :size="50" />
          </div>
          <div class="connection-text">
            You are currently waiting to be approved by {{ $store.state.user.outgoingConnectionRequest.ownerName }}
          </div>
          <q-btn color="primary" @click.prevent="cancelConnectionRequest($store.state.user.outgoingConnectionRequest)">Cancel connection request</q-btn>
        </div>
      </q-card>
      <!-- Connected to card -->
      <q-card class="beacon-card" v-if="checkExistence(user, ['outgoingConnectionRequest'], true) && checkExistence(user, ['connectedTo']) && checkExistence(user, ['beacon'], true)">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          Connected!
        </q-card-title>
        <div class="connection-body text-center">
          <div class="connection-text">
            <!-- You are connected to the beacon of {{$store.state.user.connectedTo.ownerName}} -->
            You are connected to {{generatePossessive($store.state.user.connectedTo.ownerName)}} beacon
          </div>
          <q-btn color="primary" @click.prevent="disconnectFromBeacon($store.state.user.connectedTo)">Disconnect</q-btn>
        </div>
      </q-card>
      <!-- Connections card -->
      <q-card class="beacon-card connection-card relative-position" color="white" v-if="checkExistence(user, ['beacon'])">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          Connections
        </q-card-title>
        <q-search v-if="checkExistence(user, ['beacon', 'connections'])" class="no-margin" color="primary" inverted v-model="search" />
        <div class="row" v-if="checkExistence(user, ['beacon', 'connections'])">
          <connection-square class="col col-lg-4 col-sm-6 col-xs-12" v-for="connection in getSlice(filteredConnections)" key="connection.userId" :connection="connection" @click.native="openRemoveConnectionDialog(connection)"></connection-square>
        </div>
        <div class="text-center" v-if="checkExistence(user, ['beacon', 'connections'])">
          <q-pagination v-model="page" :min="minPages" :max="maxPages" />
        </div>
        <div class="text-center no-connections" v-if="checkExistence(user, ['beacon', 'connections'], true)">
          You have no connections at this time
        </div>
        <q-inner-loading :visible="loading">
          <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
        </q-inner-loading>
      </q-card>
      <q-modal class="footer-no-shadow additional-settings-modal mobile-modal-padding" ref="additionalSettingsModal" :content-css="{minWidth: '400px', minHeight: '500px'}">
        <q-modal-layout class="additionalSettingsModal">
          <q-toolbar
            slot="header"
          >
            <div class="q-toolbar-title">
              Additional Settings
            </div>
          </q-toolbar>
          <div class="modal-body">
            <form name="additionalSettingsForm">
              <q-field
                label="Appear to"
                :labelWidth="11"
              >
              </q-field>
              <q-radio v-model="additionalSettings.genderRestriction" :val="null" label="Everyone" :disable="formData.beaconLit" /><br/>
              <q-radio v-model="additionalSettings.genderRestriction" val="maleOnly" label="Males only" :disable="formData.beaconLit" /><br/>
              <q-radio v-model="additionalSettings.genderRestriction" val="femaleOnly" label="Females only" :disable="formData.beaconLit" />

              <q-field
                :label="'Age Range (' + additionalSettings.ageRange.min + ' to ' + additionalSettings.ageRange.max + ')'"
                :labelWidth="11"
              >
              </q-field>
              <q-range
                v-model="additionalSettings.ageRange"
                :min="18"
                :max="100"
                label
                :disable="formData.beaconLit"
              />
              <q-field
                :error="$v.additionalSettings.password.$dirty && $v.additionalSettings.password.$invalid"
                error-label="Password must be at least 8 characters long"
              >
                <q-input
                  type="password"
                  v-model.trim="additionalSettings.password"
                  @blur="$v.additionalSettings.password.$touch()"
                  float-label="Connection password"
                  :disable="formData.beaconLit"
                />
              </q-field>
              <q-field
                :error="checkTagErrors()"
                error-label="There is a maximum of 5 tags consisting of 20 characters each"
              >
                <q-chips-input :disable="formData.beaconLit" v-model="additionalSettings.tags" float-label="Enter up to 5 tags" />
              </q-field>
            </form>
          </div>
          <q-toolbar color="white" slot="footer">
            <div class="q-toolbar-title text-right">
              <q-btn flat color="primary" @click="$refs.additionalSettingsModal.close()">Close</q-btn>
              <q-btn color="primary" @click="updateAdditionalSettings(), $refs.additionalSettingsModal.close()" :disable="$v.additionalSettings.$invalid || formData.beaconLit">Update Settings</q-btn>
            </div>
          </q-toolbar>
        </q-modal-layout>
      </q-modal>
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
  QModal,
  QModalLayout,
  QRadio,
  QRange,
  QToggle,
  QToolbar,
  QChipsInput,
  QInnerLoading,
  QSpinnerGears,
  QSpinner,
  QSearch,
  QPagination,
  Dialog
} from 'quasar'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import LocationService from 'services/locationService.js'
import ConnectionService from 'services/connectionService.js'
import BeaconService from 'services/beaconService.js'
import Toast from 'mixins/Toast.js'
import Helper from 'mixins/Helper.js'
import ConnectionSquare from 'components/snippets/connectionSquare/ConnectionSquare'

export default {
  name: 'Beacon',
  mixins: [Toast, Helper],
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QField,
    QInput,
    QModal,
    QModalLayout,
    QRadio,
    QRange,
    QToggle,
    QToolbar,
    QChipsInput,
    QInnerLoading,
    QSpinnerGears,
    QSpinner,
    QSearch,
    QPagination,
    ConnectionSquare
  },
  data () {
    return {
      formData: {
        name: '',
        description: '',
        color: this.$store.state.user.settings.defaultColor || '#FF0000',
        beaconLit: this.doesObjectExist(this.$store.state.user.beacon),
        location: {
          type: 'Point',
          coordinates: []
        },
        address: '',
        author: this.$store.state.user._id,
        additionalSettings: null
      },
      additionalSettings: (this.$store.state.user.beacon && this.$store.state.user.beacon.additionalSettings) || {
        password: null,
        ageRange: {
          min: 18,
          max: 100
        },
        genderRestriction: null,
        tags: []
      },
      connectedBeacon: null,
      search: '',
      page: 1,
      limit: 12,
      minPages: 1,
      loading: false,
      addressLoading: false
    }
  },
  computed: {
    user () {
      return (this.$store.state.user) ? this.$store.state.user : false
    },
    connections () {
      if (this.checkExistence(this.$store.state.user, ['beacon', 'connections'])) {
        return this.$store.state.user.beacon.connections
      }
      else {
        return []
      }
    },
    filteredConnections () {
      return this.connections.filter(connection => {
        return connection.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    skip () {
      return (this.page * this.limit) - this.limit
    },
    maxPages () {
      return Math.ceil(this.filteredConnections.length / this.limit)
    }
  },
  validations: {
    formData: {
      name: {
        required,
        maxLength: maxLength(100)
      },
      description: {
        required,
        maxLength: maxLength(140)
      },
      address: {
        required,
        maxLength: maxLength(100)
      }
    },
    additionalSettings: {
      password: {
        minLength: minLength(8)
      },
      tags: {
        maxLength: maxLength(5),
        $each: {
          maxLength: maxLength(20)
        }
      }
    }
  },
  methods: {
    getSlice (arr) {
      if (this.page === 1) {
        return arr.slice(0, 10)
      }
      else {
        return arr.slice(this.skip, this.skip + this.limit)
      }
    },
    openRemoveConnectionDialog (connection) {
      Dialog.create({
        title: `Disconnect ${connection.name} from your beacon?`,
        buttons: [
          'Cancel',
          {
            label: 'Confirm',
            handler: () => {
              this.loading = true
              ConnectionService.removeConnection(connection)
                .then((response) => {
                  this.loading = false
                  this.$store.commit('updateBeacon', response.body)
                  let socketObj = {
                    toId: connection.userId,
                    toName: connection.name,
                    fromId: connection.beaconOwnerId,
                    fromName: connection.ownerName
                  }
                  this.$socket.emit('removeConnection', socketObj)
                })
                .catch((error) => {
                  this.loading = false
                  this.createToast('negative', error.body.message)
                })
            }
          }
        ]
      })
    },
    disconnectFromBeacon (beacon) {
      this.loading = true
      ConnectionService.disconnectFromBeacon(beacon)
        .then((response) => {
          this.loading = false
          this.$store.commit('updateUser', response.body)
          let socketObj = {
            toId: beacon.beaconOwnerId,
            fromId: beacon.userId,
            fromName: beacon.name
          }
          this.$socket.emit('disconnectFromBeacon', socketObj)
        })
        .catch((error) => {
          this.loading = false
          this.createToast('negative', error.body.message)
        })
    },
    toggleBeacon () {
      this.loading = true
      this.formData.userId = this.$store.state.user._id
      if (this.formData.beaconLit) {
        if (this.$store.state.user.settings.playBeaconSound || false) {
          document.getElementById('horn').play()
        }
        BeaconService.lightBeacon(this.formData)
          .then(response => {
            this.loading = false
            this.$store.commit('updateUser', response.body)
            this.$store.commit('updateBeacon', response.body.beacon)
          })
          .catch(error => {
            this.formData.beaconLit = false
            this.loading = false
            this.createToast('negative', error.body.message)
          })
      }
      else {
        let beacon = JSON.parse(JSON.stringify(this.$store.state.user.beacon))
        let extinguishObj = {
          beaconId: beacon._id,
          userId: beacon.author
        }
        BeaconService.extinguishBeacon(extinguishObj)
          .then(response => {
            this.loading = false
            this.$store.commit('extinguishBeacon')
            this.$store.commit('updateUser', response.body)
            let socketObj = {
              toIds: beacon.connections.map((connection) => {
                return connection.userId
              }),
              fromId: beacon.author,
              fromName: this.$store.state.user.fullName
            }
            this.$socket.emit('extinguishBeacon', socketObj)
          })
          .catch(error => {
            this.formData.beaconLit = true
            this.loading = false
            this.createToast('negative', error.body.message)
          })
      }
    },
    updateAdditionalSettings () {
      this.formData.additionalSettings = this.additionalSettings
    },
    checkTagErrors () {
      if (this.$v.additionalSettings.tags.$dirty && this.$v.additionalSettings.tags.$invalid) return true
      for (var i = 0; i < 5; i++) {
        if (this.$v.additionalSettings.tags.$each[i]) {
          if (this.$v.additionalSettings.tags.$each[i].$invalid) return true
        }
      }
      return false
    },
    cancelConnectionRequest (data) {
      ConnectionService.cancelConnectionRequest(data)
        .then((response) => {
          this.$store.commit('updateUser', response.body)
          let socketObj = {
            toId: data.beaconOwnerId,
            fromId: data.userId,
            fromName: data.name
          }
          this.$socket.emit('cancelConnectionRequest', socketObj)
        })
        .catch((error) => {
          this.createToast('negative', error.body.message)
        })
    },
    openIncorrectAddressDialog () {
      Dialog.create({
        title: `Incorrect address?`,
        message: `
          <div>
          Try these steps:
          </div>
          <ol>
            <li>
              Verify that your internet connection is wireless. Wired connections are FAR less accurate. Use Wi-fi or mobile data for best results.
            </li>
            <li>
              After verifying that your internet connection is wireless, make sure that your device has a clear path to either your router or a nearby cell tower. Try to avoid being underground or within thick walls.
            </li>
          </ol>
        `,
        buttons: [
          'Close'
        ]
      })
    },
    getCurrentLocation (vm) {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (response) => {
              resolve({
                body: {
                  accuracy: response.coords.accuracy,
                  location: {
                    lat: response.coords.latitude,
                    lng: response.coords.longitude
                  }
                }
              })
            },
            (error) => {
              if (!vm.$cookie.get('has-seen-geolocation-alert')) {
                let message = ''
                if (error.code === 1) {
                  message = 'It is HIGHLY recommended to allow your browser to access geolocation. If you choose not to allow access, your location will be far less accurate. Access to geolocation can be changed at any time in your browser settings.'
                }
                else {
                  message = 'We were unable to get your location through geolocation. Your location will be less accurate because of this.'
                }
                Dialog.create({
                  title: 'Warning',
                  message: message,
                  buttons: [
                    {
                      label: 'Confirm',
                      handler () {
                        LocationService.getCurrentPosition()
                          .then((response) => {
                            vm.$cookie.set('has-seen-geolocation-alert', true)
                            resolve(response)
                          })
                          .catch((error) => {
                            reject(error)
                          })
                      }
                    }
                  ]
                })
              }
              else {
                LocationService.getCurrentPosition()
                  .then((response) => {
                    resolve(response)
                  })
                  .catch((error) => {
                    reject(error)
                  })
              }
            },
            {
              enableHighAccuracy: true
            }
          )
        }
        else {
          LocationService.getCurrentPosition()
            .then((response) => {
              resolve(response)
            })
            .catch((error) => {
              reject(error)
            })
        }
      })
    }
  },
  mounted () {
    this.loading = true
    this.addressLoading = true
    if (this.doesObjectExist(this.$store.state.user.beacon)) {
      this.formData = this.$store.state.user.beacon
      this.formData.beaconLit = true
    }
    this.getCurrentLocation(this).then((response) => {
      this.formData.location.coordinates[0] = response.body.location.lng
      this.formData.location.coordinates[1] = response.body.location.lat
      let geocodingObj = {
        lat: response.body.location.lat,
        lng: response.body.location.lng,
        userId: this.$store.state.user._id
      }
      this.loading = false
      LocationService.getAddressFromCoordinates(geocodingObj)
        .then((response) => {
          if (!this.checkExistence(this.$store.state.user, ['beacon', 'address'])) {
            this.formData.address = response.body
          }
          else {
            this.formData.address = this.$store.state.user.beacon.address
          }
          this.addressLoading = false
        })
        .catch((error) => {
          this.createToast('negative', error.body.message)
          this.addressLoading = false
        })
    }).catch(function (error) {
      this.loading = false
      this.createToast('negative', error.body.message)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .beacon-card
    .beacon-card-title
      color: white
    form
      padding 0rem 1rem 1.5rem
    .connection-body
      padding 1rem
    .connection-text
      padding 1rem 0
    &.connection-card
      margin-top 3rem
      .no-connections
        color: #0C0C0C
        padding 1rem
  .toggle-field
    padding-top 2rem
    padding-bottom 1rem
  .additional-settings-wrapper
    padding-top 1rem
  .q-toggle
    transform scale(3)
  .additional-settings-modal
    .modal-body
      overflow-x hidden
    .q-slider
      max-width 98%
</style>
