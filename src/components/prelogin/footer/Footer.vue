<template>
  <q-toolbar class="bg-primary" slot="footer">
    <q-toolbar-title class="text-center">
      <span slot="subtitle">Copyright © {{new Date().getFullYear()}} <a class="footer-link" href="http://claytonkinder.com" target="_blank">Clayton Kinder</a></span>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
import { QToolbar, QToolbarTitle } from 'quasar'

export default {
  name: 'PreloginFooter',
  components: {
    QToolbar,
    QToolbarTitle
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .footer-link
    color white
    text-decoration underline
    &:hover
      color white
</style>
