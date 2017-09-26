export default {
  methods: {
    doesObjectExist: function (obj) {
      if (!obj) return false
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return true
        }
      }
      return false
    }
  }
}
