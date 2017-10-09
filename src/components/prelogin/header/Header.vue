<template>
  <q-toolbar slot="header">
    <q-toolbar-title>
      <a @click.prevent="$router.push('/')">Beacon</a>
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
import { QToolbar, QToolbarTitle } from 'quasar'

export default {
  name: 'PreloginHeader',
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

<style lang="stylus" scoped>
  .q-toolbar
    position absolute
    top 0
    width 100%
    background transparent
    a
      color white
      &:hover
        color white
</style>
