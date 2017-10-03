var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAPS_API_KRY: '"AIzaSyAwwtBhx5Dl1zguEqBSxz3rU4IGHmbxG3I"',
  GEOLOCATION_API_KEY: '"AIzaSyDbinwqZDJHls3d9viPdbCGORHCSm-TBOg"',
  API_URL: '"http://192.168.0.4:7777/api/v1/"'
})
