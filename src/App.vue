<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { AddressbarColor } from 'quasar'
AddressbarColor.set('#027be3')
/*
 * Root component
 */
export default {}
</script>

<style lang="stylus">
  html
    max-width: 100vw
    overflow-x: hidden
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
