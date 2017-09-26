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
  html
    max-width: 100vw
    overflow-x: hidden
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
  @media screen and (max-width: 768px)
    .modal.mobile-modal-padding
      .q-toolbar-title
        padding 0 1.5rem
      .modal-body
        padding 0 3rem
</style>
