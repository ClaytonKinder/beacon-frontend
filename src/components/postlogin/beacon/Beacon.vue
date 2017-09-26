<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <q-card class="beacon-card" color="white" v-if="locationAllowed">
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
      <q-card class="beacon-card no-location" v-if="!locationAllowed">
        <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
          <i class="icon ion-flame"></i>
          <h6>Beacon needs your current location</h6>
        </q-card-title>
        <div class="no-location-main">
          <p class="text-center">
            Please allow your browser access to your location in order to continue
          </p>
        </div>
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
                :error="$v.additionalSettings.beaconPassword.$dirty && $v.additionalSettings.beaconPassword.$invalid"
                error-label="Password must be at least 8 characters long"
              >
                <q-input
                  type="password"
                  v-model.trim="additionalSettings.beaconPassword"
                  @blur="$v.additionalSettings.beaconPassword.$touch()"
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
  QSpinnerGears
} from 'quasar'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import LocationService from 'services/locationService.js'

export default {
  name: 'Beacon',
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
    QSpinnerGears
  },
  data () {
    return {
      formData: {
        name: '',
        description: '',
        color: this.$store.state.user.settings.defaultColor || '#FF0000',
        beaconLit: (this.$store.state.user.beacon !== null),
        location: {
          type: 'Point',
          coordinates: []
        },
        author: this.$store.state.user._id,
        additionalSettings: null
      },
      additionalSettings: {
        beaconPassword: null,
        ageRange: {
          min: 18,
          max: 100
        },
        genderRestriction: null,
        tags: []
      },
      loading: false,
      locationAllowed: true
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
      }
    },
    additionalSettings: {
      beaconPassword: {
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
    toggleBeacon (e) {
      this.loading = true
      if (this.formData.beaconLit) {
        if (this.$store.state.user.settings.playSound || false) {
          document.getElementById('horn').play()
        }
        this.$q.events.$emit('emitLightBeacon', this.formData)
      }
      else {
        this.$q.events.$emit('emitExtinguishBeacon', this.formData.author)
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
    }
  },
  mounted () {
    const vm = this
    if (this.$store.state.user.beacon) {
      this.formData = this.$store.state.user.beacon
      this.formData.beaconLit = true
    }
    this.$q.events.$on('loaded', function (loadedName) {
      if (loadedName === 'beaconForm') {
        vm.loading = false
      }
    })
    LocationService.getCurrentPosition().then(function (response) {
      vm.locationAllowed = true
      vm.formData.location.coordinates[0] = response.body.location.lng
      vm.formData.location.coordinates[1] = response.body.location.lat
    }).catch(function () {
      vm.locationAllowed = false
    })
  }
}
</script>

<style lang="stylus" scoped>
  .beacon-card
    &.no-location
      i
        font-size 4rem
      .no-location-main
        padding 1rem 0
    .beacon-card-title
      color: white
    form
      padding 0rem 1rem 1.5rem
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
