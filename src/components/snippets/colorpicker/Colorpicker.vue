<template>
  <div>
    <q-field
      :label="label + ' (' + color.toUpperCase() + ')'"
      :labelWidth="11"
    >
    </q-field>
    <div class="colorpicker-block">
      <div
        class="colorpicker-wrapper relative-position"
        v-bind:style="{background: color + ' !important'}"
      >
        <input type="color" v-model="color" class="full-width colorpicker" />
      </div>
    </div>
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

export default {
  name: 'ColorPicker',
  props: ['label'],
  components: {
    QBtn,
    QIcon,
    QCard,
    QField,
    QInput,
    QModal
  },
  data () {
    return {
      color: this.$store.state.user.settings.defaultColor || '#FF0000'
    }
  },
  watch: {
    'color': function () {
      this.$q.events.$emit('changeColor', this.color)
    }
  },
  created () {
    setTimeout(() => {
      this.$q.events.$emit('changeColor', this.color)
    }, 1)
  }
}
</script>

<style lang="stylus">
  .colorpicker-block
    padding 1px
    background rgba(0,0,0,0.12)
    cursor pointer
  .colorpicker-wrapper
    height 40px
    cursor pointer
  .colorpicker
    cursor pointer
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    padding: 0
    padding-bottom 0
    border: 0
    opacity 0
    &:focus
      outline 0
</style>
