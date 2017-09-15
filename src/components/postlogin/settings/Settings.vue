<template>
  <q-card class="settings-card relative-position" color="white">
    <q-card-title class="uppercase settings-card-title text-center block bg-primary">
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
      <colorpicker @blur="$v.formData.description.$touch()" label="Default beacon color"></colorpicker>
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
  QSlider,
  QRadio,
  QInnerLoading,
  QSpinnerGears
} from 'quasar'
import Colorpicker from 'components/snippets/colorpicker/Colorpicker'

export default {
  name: 'settings',
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QField,
    QInput,
    QModal,
    QToggle,
    QSlider,
    QRadio,
    QInnerLoading,
    QSpinnerGears,
    Colorpicker
  },
  data () {
    return {
      formData: this.$store.state.user.settings || {
        playSound: false,
        unitOfMeasurement: 'miles',
        searchRadius: 15,
        defaultColor: '#FF0000'
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
      this.$q.events.$emit('emitUpdateUserSettings', obj)
    },
    areObjectsEqual (obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2)
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('changeColor', function (color) {
      vm.formData.defaultColor = color
    })
    this.$q.events.$once('changeColor', function (color) {
      vm.originalData.defaultColor = color
    })
    this.$q.events.$on('loaded', function (loadedName, success) {
      if (loadedName === 'settingsForm') {
        vm.loading = false
      }
      if (success) {
        vm.originalData = JSON.parse(JSON.stringify(vm.formData))
      }
    })
    this.originalData = JSON.parse(JSON.stringify(this.formData))
  }
}
</script>

<style lang="stylus">
  .settings-card
    .settings-card-title
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
