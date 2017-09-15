<template>
  <div>
    <q-card class="beacon-card">
      <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
        Activate Beacon
      </q-card-title>
      <form class="relative-position" name="beaconForm" @submit.prevent="lightBeacon">
        <q-field
          :error="$v.formData.name.$dirty && $v.formData.name.$invalid"
          error-label="Please enter a name for your beacon"
        >
          <q-input
            type="text"
            v-model.trim="formData.name"
            @blur="$v.formData.name.$touch()"
            float-label="Name"
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
            max-length="140"
            :max-height="100"
            :min-rows="4"
          />
        </q-field>
        <colorpicker v-on:colorChange="setColor()"></colorpicker>
        <q-field
          class="text-center toggle-field"
        >
          <q-toggle
            @change="lightBeacon"
            v-model="formData.beaconLit"
          />
        </q-field>
      </form>
    </q-card>
    <audio id="horn">
      <source src="statics/audio/horn.mp3" type="audio/mpeg">
    </audio>
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
  QToggle
} from 'quasar'
import { required, maxLength } from 'vuelidate/lib/validators'
import store from 'store'
import Colorpicker from 'components/snippets/colorpicker/Colorpicker'

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
    Colorpicker
  },
  computed: {
    style () {
      if (this.colors) return this.colors.hex
      return '#FFFFFF'
    },
    formData () {
      return {
        name: null,
        description: null,
        color: this.style,
        beaconLit: false
      }
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
    lightBeacon (e) {
      store.commit('updateBeaconLit', this.formData.beaconLit)
      if (this.formData.beaconLit) {
        document.getElementById('horn').play()
      }
    },
    setColor (colors) {
      this.colors = colors
    }
  }
}
</script>

<style lang="stylus">
  .beacon-card
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
