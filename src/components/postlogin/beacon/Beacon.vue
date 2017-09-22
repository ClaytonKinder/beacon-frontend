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
          <!-- <colorpicker
            :isDisabled="formData.beaconLit"
            label="Color"
            origin="beaconForm"
          ></colorpicker> -->
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
  QToggle,
  QInnerLoading,
  QSpinnerGears
} from 'quasar'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'Beacon',
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QField,
    QInput,
    QModal,
    QToggle,
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
        author: this.$store.state.user._id
      },
      loading: false,
      locationAllowed: true
    }
  },
  validations: {
    formData: {
      name: {
        required
      },
      description: {
        required,
        maxLength: maxLength(140)
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
    openNavigator () {
      console.log('Opening navigator!')
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
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        this.locationAllowed = true
        this.formData.location.coordinates[0] = position.coords.longitude
        this.formData.location.coordinates[1] = position.coords.latitude
      }.bind(this), function (err) {
        if (err.code === err.PERMISSION_DENIED) {
          this.locationAllowed = false
        }
      }.bind(this), {
        enableHighAccuracy: true
      })
    }
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
  .q-toggle
    transform scale(3)
</style>
