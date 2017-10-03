/* eslint no-eval: 0 */

export default {
  methods: {
    doesObjectExist (obj) {
      if (!obj) return false
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return true
        }
      }
      return false
    },
    checkExistence (baseObj, pathArr, checkForNonexistence = false) {
      // Return false if object does not exist
      if (!this.doesObjectExist(baseObj)) return false
      let build = 'baseObj'
      let bool = () => {
        let val = !checkForNonexistence
        pathArr.forEach((e, i) => {
          build += `['${e}']`
          try {
            eval(build)
            if (eval(build) === undefined) {
              throw new Error()
            }
            // If we are on the last loop, do additional parsing based on whether the property
            // is an object, a string, an array, etc.
            if (i === pathArr.length - 1) {
              if (typeof eval(build) === 'object') {
                // If property is an array
                if (Array.isArray(eval(build))) {
                  if (eval(build).length === 0) {
                    throw new Error()
                  }
                }
                // If property is an object
                else {
                  if (!this.doesObjectExist(eval(build))) {
                    throw new Error()
                  }
                }
              }
              else if (typeof eval(build) === 'boolean') {
                if (!eval(build)) {
                  throw new Error()
                }
              }
            }
          }
          catch (e) {
            val = checkForNonexistence
            return val
          }
        })
        return val
      }

      return bool()
    }
  }
}
