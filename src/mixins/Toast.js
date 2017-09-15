import { Toast } from 'quasar'

export default {
  methods: {
    createToast: function (type, msg) {
      if (!msg) msg = 'Something went wrong!'
      Toast.create[type]({
        html: msg
      })
    }
  }
}
