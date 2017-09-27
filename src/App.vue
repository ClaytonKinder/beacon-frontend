<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { AddressbarColor } from 'quasar'
AddressbarColor.set('#0050b0')
export default {}
</script>

<style lang="stylus">
  @import '~variables'
  html
    max-width 100vw
    width 100%
    overflow hidden
  body
    height 100%
    position fixed
    overflow-y scroll
  .color-white
    color white
  .modal-inner-loading
    z-index 10000
  .icon-button
    i.on-left
      margin-right 0
    i.on-right
      margin-left 0
  .modal
    .q-slider.with-padding
      padding-top 0
  .circular
    border-radius 50%
    &.profile
      height 3rem
      width 3rem
  .modal.footer-no-shadow
    .layout-footer
      box-shadow none
  .info-block
    padding 0.5rem 0.25rem
    display flex
    justify-content flex-start
    align-items center
    background $primary
    color white
    &:not(:first-of-type)
      margin-top 0.5rem
    &.negative
      background $negative
    .q-icon
      height 100%
      width 15%
      font-size 1.4rem
    div
      width 85%
  @media screen and (max-width: 768px)
    .modal.mobile-modal-padding
      .q-toolbar-title
        padding 0 1.5rem
      .modal-body
        padding 0 3rem
</style>
