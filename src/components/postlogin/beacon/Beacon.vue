<template>
  <div>
    <p>
      Beacon!
    </p>
    <pre>
      {{this.$store.state.user.email}}
    </pre>
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  name: 'beacon',
  components: {
    QBtn,
    QIcon
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="stylus">

</style>
