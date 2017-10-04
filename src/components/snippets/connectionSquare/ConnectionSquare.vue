<template>
  <div class="connection-square text-center">
    <img :src="connection.gravatar" class="circular profile" />
    <div>{{connection.name}}</div>
    <span class="timestamp">{{ connection.created | moment('from', 'now') }}</span>
  </div>
</template>

<script>

export default {
  name: 'ConnectionSquare',
  props: ['connection']
}
</script>

<style lang="stylus" scoped>
  @import '~variables';
  .connection-square
    padding 1rem 1.5rem
    color #0C0C0C
    transition all 0.3s
    cursor pointer
    &:hover
      background $grey-3
    span.timestamp
      color #757575
      font-size 90%
      margin-top 0.2rem
</style>
