import Vue from 'vue'

export default {
  severConnectionsToBeacon (data) {
    return Vue.http.post('connection/severconnectionstobeacon', data)
  },
  createConnectionRequest (data) {
    return Vue.http.post('connection/createconnectionrequest', data)
  },
  cancelConnectionRequest (data) {
    return Vue.http.post('connection/cancelconnectionrequest', data)
  },
  createConnectionObject (beacon, user, userPosition) {
    return {
      userId: user._id,
      beaconId: beacon._id,
      beaconOwnerId: beacon.author._id,
      beaconLat: beacon.position.lat,
      beaconLng: beacon.position.lng,
      userLat: userPosition.lat,
      userLng: userPosition.lng,
      ownerName: beacon.author.fullName,
      name: user.fullName,
      gravatar: user.gravatar
    }
  }
}
