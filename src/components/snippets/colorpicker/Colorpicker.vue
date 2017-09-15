<template>
  <div>
    <q-field
      :label="'Color (' + colors.hex + ')'"
    >
    </q-field>
    <q-btn
      outline
      @click.prevent="$refs.colorpickerModal.open()"
      class="block full-width colorpicker-button relative-position"
      v-bind:style="{background: style + ' !important'}"
    >

    </q-btn>
    <q-modal
      minimized
      class="colorpicker-modal"
      ref="colorpickerModal"
    >
      <chrome v-model="colors" @change-color="colorChange"></chrome>
    </q-modal>
  </div>
</template>

<script>
import {
  QBtn,
  QIcon,
  QCard,
  QField,
  QInput,
  QModal
} from 'quasar'
import { Chrome } from 'vue-color'

export default {
  name: 'ColorPicker',
  components: {
    QBtn,
    QIcon,
    QCard,
    QField,
    QInput,
    QModal,
    Chrome
  },
  data () {
    return {
      colors: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    }
  },
  computed: {
    style () {
      return this.colors.hex
    },
    formData () {
      return {
        name: null,
        description: null,
        color: this.style
      }
    }
  },
  methods: {
    colorChange (val) {
      this.colors = val
      this.$emit('colorChange', this.colors)
    }
  },
  created () {
    this.colorChange(this.colors)
  }
}
</script>

<style lang="stylus">
  .colorpicker-button
    border-color rgba(0,0,0,0.12) !important
  .colorpicker-modal
    .modal-content
      min-width auto !important
</style>
