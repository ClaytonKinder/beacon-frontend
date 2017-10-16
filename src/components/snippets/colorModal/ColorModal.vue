<template>
  <div>
    <div
      class="colorpicker"
      v-bind:style="{background: finalColor + ' !important'}"
      @click.prevent="openColorModal"
      v-bind:class="{ disabled }"
    >
    </div>
    <q-modal class="footer-no-shadow mobile-modal-padding" ref="colorModal" :content-css="{minWidth: '400px', minHeight: '500px'}">
      <q-modal-layout class="colorModal">
        <q-toolbar
          slot="header"
        >
          <div class="q-toolbar-title">
            Select A Color
          </div>
        </q-toolbar>
        <div class="modal-body">
          <q-list>
            <q-collapsible
              v-for="(colorGroup, index) in allColors"
              :key="index"
              group="colors"
              :label="colorLabels[index]"
              class="colorpicker-wrapper"
              :opened="colorGroup.includes(selectedColor)"
            >
              <div
                v-for="(colorValue, idx) in colorGroup"
                :key="colorValue"
                v-bind:class="{ selected: colorValue === selectedColor }"
                class="colorpicker-block"
              >
                <div>
                  <div
                    class="colorpicker-color"
                    :for="colorValue"
                    v-bind:style="{ background: colorValue }"
                    @click="selectedColor = colorValue"
                  >
                  </div>
                  <q-icon name="ion-checkmark-circled" color="positive" size="2rem"></q-icon>
                </div>
              </div>
            </q-collapsible>
          </q-list>
        </div>
        <q-toolbar color="white" slot="footer">
          <div class="q-toolbar-title text-right">
            <q-btn @click.prevent="log">Log</q-btn>
            <q-btn flat color="primary" @click="$refs.colorModal.close()">Close</q-btn>
            <q-btn color="primary" @click="selectColor()">Update Settings</q-btn>
          </div>
        </q-toolbar>
      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import {
  QModal,
  QModalLayout,
  QToolbar,
  QBtn,
  QList,
  QCollapsible,
  QIcon
} from 'quasar'
export default {
  name: 'ColorModal',
  props: ['color', 'disabled'],
  components: {
    QModal,
    QModalLayout,
    QToolbar,
    QBtn,
    QList,
    QCollapsible,
    QIcon
  },
  data () {
    return {
      finalColor: null,
      selectedColor: null,
      allColors: null,
      colorLabels: [
        'Red',
        'Pink',
        'Purple',
        'Deep purple',
        'Indigo',
        'Blue',
        'Light blue',
        'Cyan',
        'Teal',
        'Green',
        'Light green',
        'Lime',
        'Yellow',
        'Amber',
        'Orange',
        'Deep orange',
        'Brown',
        'Gray',
        'Blue-gray'
      ],
      emits: {
        beacon: 'update-beacon-color',
        settings: 'update-settings-color'
      }
    }
  },
  methods: {
    openColorModal () {
      if (!this.disabled) {
        this.$refs.colorModal.open()
      }
    },
    selectColor () {
      // this.$emit(this.emits[this.parent], this.selectedColor)
      this.$emit('update:color', this.selectedColor)
      this.finalColor = this.selectedColor
      this.$refs.colorModal.close()
    },
    getJSON (path) {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('load', () => {
          if (request.status >= 200 && request.status < 400) {
            resolve(request.response)
          }
          else {
            reject(Error(request.statusText))
          }
        })

        request.addEventListener('error', () => {
          reject(Error('Could not get JSON'))
        })

        request.open('GET', path, true)
        request.send()
      }).then(JSON.parse).catch(error => {
        throw error
      })
    }
  },
  mounted () {
    this.finalColor = this.color
    this.selectedColor = this.color
    this.getJSON('assets/data/colors.json').then((response) => {
      this.allColors = response
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables';
  .colorpicker
    height 40px
    width 100%
    cursor pointer
    &.disabled
      cursor not-allowed
  .colorpicker-wrapper
    .q-item
      width 100%
    .colorpicker-block
      height 4rem
      width 4rem
      width 20%
      padding 0 0.25rem
      display inline-block
      > div
        display flex
        flex-wrap wrap
        justify-content center
        align-items center
        height 100%
        width 100%
      i
        overflow hidden
        position absolute
        z-index 50
        display none
        &:after
          content: ''
          height 75%
          width 75%
          background white
          z-index -1
          position absolute
          left 12.5%
          top 12.5%
          border-radius 50%
      &.selected
        .colorpicker-color
          opacity 0.75
        i
          display block
      .colorpicker-color
        cursor pointer
        display inline-block
        height 100%
        width 100%
</style>
