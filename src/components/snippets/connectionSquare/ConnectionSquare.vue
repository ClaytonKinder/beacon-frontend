<template>
  <!--  -->
  <div class="connection-square text-center" v-if="connection" :class="{ 'map-modal': mapModal }">
    <img :src="connection.gravatar" class="circular profile" />
    <div class="connection-name">{{connection.name}}</div>
    <span class="connection-timestamp" v-if="!mapModal">{{ connection.created | moment('from', 'now') }}</span>
  </div>
</template>

<script>

export default {
  name: 'ConnectionSquare',
  props: ['connection', 'mapModal']
}
</script>

<style lang="stylus" scoped>
  @import '~variables';
  .connection-square
    padding 1rem 1.5rem
    color #0C0C0C
    transition all 0.3s
    &.map-modal
      padding 0
      font-size 0.85rem
    &:not(.map-modal)
      cursor pointer
      &:hover
        background $grey-3
    div.connection-name
      text-overflow ellipsis
      max-width 100%
      display block
      overflow hidden
    span.connection-timestamp
      color #757575
      font-size 90%
      margin-top 0.2rem
</style>
