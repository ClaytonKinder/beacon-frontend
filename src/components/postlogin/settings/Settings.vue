<template>
  <div class="layout-padding row justify-center">
    <div class="postlogin-page-wrapper">
      <q-card class="settings-card relative-position" color="white">
        <q-card-title class="uppercase color-white text-center block bg-primary">
          Update Settings
        </q-card-title>
        <form class="relative-position" name="beaconForm" @submit.prevent="updateUserSettings">
          <q-field
            label="Play sound when lighting a beacon"
            :labelWidth="11"
          >
          <q-toggle
            v-model="formData.playSound"
          />
          </q-field>
          <q-field
            label="Unit of measurement"
            :labelWidth="11"
          >
          </q-field>
          <q-radio v-model="formData.unitOfMeasurement" val="miles" label="Miles" /><br/>
          <q-radio v-model="formData.unitOfMeasurement" val="kilometers" label="Kilometers" />
          <q-field
            label="Search radius"
            :labelWidth="11"
          >
          </q-field>
          <q-slider v-model="formData.searchRadius" :min="1" :max="30" :label="true" />
          <q-field
            label="Nearby beacon limit"
            :labelWidth="11"
          >
          </q-field>
          <q-slider v-model="formData.beaconLimit" :min="1" :max="100" :label="true" />
          <q-field
            :label="'Default beacon color (' + formData.defaultColor.toUpperCase() + ')'"
            :labelWidth="11"
          >
          </q-field>
          <div class="colorpicker-block">
            <div
              class="colorpicker-wrapper relative-position"
              v-bind:style="{background: formData.defaultColor + ' !important'}"
            >
              <input type="color" v-model="formData.defaultColor" class="full-width colorpicker" />
            </div>
          </div>
          <div class=" button-wrapper text-right">
            <q-btn color="primary" :disabled="areObjectsEqual(originalData, formData)">
              Update
            </q-btn>
          </div>
        </form>
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
  QToggle,
  QSlider,
  QRadio,
  QInnerLoading,
  QSpinnerGears
} from 'quasar'
import UserService from 'services/userService.js'
import Toast from 'mixins/Toast.js'

export default {
  name: 'Settings',
  mixins: [Toast],
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QField,
    QInput,
    QToggle,
    QSlider,
    QRadio,
    QInnerLoading,
    QSpinnerGears
  },
  data () {
    return {
      formData: this.$store.state.user.settings || {
        beaconLimit: 55,
        defaultColor: '#FF0000',
        playSound: false,
        unitOfMeasurement: 'miles',
        searchRadius: 15
      },
      originalData: null,
      loading: false
    }
  },
  methods: {
    updateUserSettings () {
      this.loading = true
      const obj = {
        userId: this.$store.state.user._id,
        settings: this.formData
      }
      UserService.updateUserSettings(obj)
        .then(response => {
          this.loading = false
          this.$store.commit('updateUser', response.body)
          this.originalData = JSON.parse(JSON.stringify(this.formData))
          this.createToast('positive', 'Your settings were successfully updated')
        })
        .catch(error => {
          this.loading = false
          this.createToast('negative', error.body.message)
        })
    },
    areObjectsEqual (obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2)
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('changeColorSettings', function (color) {
      vm.formData.defaultColor = color
    })
    this.$q.events.$once('changeColorSettings', function (color) {
      vm.originalData.defaultColor = color
    })
    this.originalData = JSON.parse(JSON.stringify(this.formData))
  }
}
</script>

<style lang="stylus">
  .settings-card
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
