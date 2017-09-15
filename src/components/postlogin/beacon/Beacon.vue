<template>
  <div>
    <q-card class="beacon-card" color="white">
      <q-card-title class="uppercase beacon-card-title text-center block bg-primary">
        Light Beacon
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
        <colorpicker label="Color"></colorpicker>
        <q-field
          class="text-center toggle-field"
        >
          <q-toggle
            @change="lightBeacon"
            :disable="$v.formData.$invalid"
            v-model="formData.beaconLit"
          />
        </q-field>
      </form>
    </q-card>
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
  data () {
    return {
      formData: {
        name: 'Test Name',
        description: 'Test Description',
        color: null,
        beaconLit: this.$store.state.beaconLit,
        location: null
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
      if (this.formData.beaconLit && (this.$store.state.user.settings.playSound || false)) {
        document.getElementById('horn').play()
      }
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('changeColor', function (color) {
      vm.formData.color = color
    })
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        this.formData.location = position.coords
      }.bind(this))
    }
  }
}
</script>

<style lang="stylus" scoped>
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
