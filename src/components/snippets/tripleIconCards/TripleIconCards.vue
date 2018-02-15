<template>
  <div class="prelogin-info-row row lg-gutter no-vert-gutter">
    <q-window-resize-observable @resize="equalizeHeight" />
    <div class="col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin">
      <q-card class="info-card">
        <q-card-media class="info-icon text-center block bg-primary">
          <slot name="card1-icon"></slot>
        </q-card-media>
        <q-card-title class="info-title text-center block bg-primary">
          <slot name="card1-title"></slot>
        </q-card-title>
        <q-card-main class="info-text row justify-center">
          <p class="col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10">
            <slot name="card1-text"></slot>
          </p>
        </q-card-main>
      </q-card>
    </div>
    <div class="col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin">
      <q-card class="info-card">
        <q-card-media class="info-icon text-center block bg-secondary">
          <slot name="card2-icon"></slot>
        </q-card-media>
        <q-card-title class="info-title text-center block bg-secondary">
          <slot name="card2-title"></slot>
        </q-card-title>
        <q-card-main class="info-text row justify-center">
          <p class="col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10">
            <slot name="card2-text"></slot>
          </p>
        </q-card-main>
      </q-card>
    </div>
    <div class="col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin">
      <q-card class="info-card">
        <q-card-media class="info-icon text-center block bg-tertiary">
          <slot name="card3-icon"></slot>
        </q-card-media>
        <q-card-title class="info-title text-center block bg-tertiary">
          <slot name="card3-title"></slot>
        </q-card-title>
        <q-card-main class="info-text row justify-center">
          <p class="col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10">
            <slot name="card3-text"></slot>
          </p>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import {
  QCard,
  QCardMedia,
  QCardTitle,
  QCardMain,
  QWindowResizeObservable,
  debounce
} from 'quasar'

export default {
  name: 'TripleIconCards',
  components: {
    QCard,
    QCardMedia,
    QCardTitle,
    QCardMain,
    QWindowResizeObservable
  },
  data () {
    return {}
  },
  methods: {
    equalizeHeight: debounce(() => {
      let elements = document.querySelectorAll('.info-card')
      if (!elements) return
      Array.from(elements).forEach((x = HTMLElement) => {
        x.style.height = 'initial'
      })
      const elementHeights = Array.from(elements)
        .map(x => x.getBoundingClientRect().height)
      const maxHeight = elementHeights.reduce((prev, curr) => {
        return curr > prev ? curr : prev
      }, 0)
      Array.from(elements)
        .forEach(function (x = HTMLElement) { x.style.height = `${maxHeight}px` })
    }, 100)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables';
  .prelogin-info-row
    margin-top 100px
    padding 0 2rem
    .info-card
      background white
      margin-bottom 4rem
      .info-icon
        padding-top 0.5rem
        font-size 4rem
        color: $white
      .info-title
        color: $white
        padding-bottom 0.5rem
      .info-text
        margin-top 1rem
</style>
