<template>
  <div class="relative-position">
    <q-window-resize-observable @resize="updateMapHeight" />
    <gmap-map
      ref="beaconMap"
      class="beaconMap"
      :center="mapOptions"
      :zoom="13"
      :options="controlOptions"
      map-type-id="terrain"
      v-bind:style="{height: mapHeight}"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :icon="m.icon"
        :opacity="m.opacity"
        :zIndex="m.zIndex"
        :title="m.title"
        :position="m.position"
        :clickable="true"
        @click="openMapModal(m)"
      ></gmap-marker>
    </gmap-map>
    <q-modal
      ref="mapModal"
      class="relative-position map-modal mobile-modal-padding footer-no-shadow"
      v-model="modalOpen"
      :content-css="{minWidth: '400px', minHeight: '400px'}"
    >
      <q-modal-layout
        v-if="selectedBeacon"
      >
        <q-toolbar
          slot="header"
          :style="{background: selectedBeacon.color}"
        >
          <div class="q-toolbar-title row justify-start align-center">
            <img class="circular profile on-left" :src="selectedBeacon.author.gravatar" />
            <div class="modal-header-name row items-center" :style="{color: checkLightOrDarkText()}">
              {{selectedBeacon.author.firstName}}
            </div>
          </div>
        </q-toolbar>
        <div v-if="connectionErrors.length">
          <div class="info-block negative" v-for="error, key in connectionErrors" :key="key">
            <q-icon name="fa-exclamation-circle"></q-icon>
            <div color="negative">{{error}}</div>
          </div>
        </div>
        <h6 class="text-center beacon-name">{{selectedBeacon.name}}</h6>
        <div class="modal-body">
          <div>
            <p>{{selectedBeacon.description}}</p>
          </div>
          <blockquote
            :class="getBeaconThemeColor(selectedBeacon)"
            v-if="selectedBeacon.address"
          >
            <small class="no-dash">{{selectedBeacon.address}}</small>
          </blockquote>
          <div class="beacon-tags">
            <q-chip class="beacon-tag on-left" :color="getBeaconThemeColor(selectedBeacon)" small v-for="tag in selectedBeacon.additionalSettings.tags" :key="tag">
              {{tag}}
            </q-chip>
          </div>
          <div>
            <div v-if="chunkedConnections.length < 2">
              <div class="row" v-for="(array, idx) in chunkedConnections" :key="idx">
                <connection-square class="col col-xs-4" v-for="connection in chunkedConnections[idx]" key="connection.userId" :map-modal="true" :connection="connection"></connection-square>
              </div>
            </div>
            <q-carousel dots v-if="chunkedConnections.length >=2" ref="connectionCarousel" class="connections-carousel">
              <div slot="slide" class="row" v-for="(array, idx) in chunkedConnections" :key="idx">
                <connection-square class="col col-xs-4" v-for="connection in chunkedConnections[idx]" key="connection.userId" :map-modal="true" :connection="connection"></connection-square>
              </div>
            </q-carousel>
          </div>
        </div>
        <q-toolbar class="bg-white" slot="footer">
          <div class="q-toolbar-title text-right">
            <q-btn flat color="primary" @click="closeMapModal">Close</q-btn>
            <q-btn
              v-if="showButtons('connect')"
              color="primary"
              @click="createConnectionRequest(selectedBeacon)"
            >
            Connect
            </q-btn>
            <form class="beacon-password-form" v-if="showButtons('connect-password')" ref="beaconPasswordForm" @submit.prevent="verifyBeaconPassword">
              <q-input
                v-model="beaconPassword"
                max-length="50"
                type="password"
                color="secondary"
                placeholder="Enter beacon password"
                inverted
                :after="[
                  {
                    icon: 'arrow_forward',
                    handler: verifyBeaconPassword
                  }
                ]"
              />
            </form>

            <q-btn
              v-if="showButtons('cancel-request')"
              color="negative"
              @click="cancelConnectionRequest($store.state.user.outgoingConnectionRequest)"
            >
            Cancel connection request
            </q-btn>
            <q-btn
              v-if="showButtons('disconnect')"
              color="negative"
              @click="disconnectFromBeacon(selectedBeacon)"
            >
            Disconnect
            </q-btn>
            <q-btn
              v-if="showButtons('extinguish')"
              color="negative"
              @click="extinguishBeacon(selectedBeacon)"
            >
            Extinguish
            </q-btn>
          </div>
        </q-toolbar>
      </q-modal-layout>
      <q-inner-loading class="modal-inner-loading" :visible="modalLoading">
        <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
      </q-inner-loading>
    </q-modal>
    <q-toolbar class="map-footer row justify-center items-center">
      <q-btn class="icon-button" flat icon="my_location" @click.prevent="centerMap()"></q-btn>
      <q-btn class="icon-button" flat icon="ion-refresh" @click.prevent="loadMap(null, false)"></q-btn>
    </q-toolbar>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="primary"></q-spinner-gears>
    </q-inner-loading>
  </div>
</template>

<script>
import {
  QWindowResizeObservable,
  QModal,
  QModalLayout,
  QInput,
  QBtn,
  QIcon,
  QToolbar,
  QToolbarTitle,
  QChip,
  QTabs,
  QTab,
  QInnerLoading,
  QSpinnerGears,
  QCarousel,
  Dialog
} from 'quasar'
import BeaconService from 'services/beaconService'
import Toast from 'mixins/Toast.js'
import Helper from 'mixins/Helper.js'
import LocationService from 'services/locationService.js'
import ConnectionService from 'services/connectionService.js'
import ConnectionSquare from 'components/snippets/connectionSquare/ConnectionSquare'

function hexToRgb (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

export default {
  name: 'map',
  mixins: [Toast, Helper],
  components: {
    QWindowResizeObservable,
    QModal,
    QModalLayout,
    QInput,
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle,
    QChip,
    QTabs,
    QTab,
    QInnerLoading,
    QSpinnerGears,
    QCarousel,
    ConnectionSquare
  },
  data () {
    return {
      loading: false,
      modalLoading: false,
      distanceInfo: null,
      connectionErrors: [],
      beaconPassword: null,
      modalOpen: false,
      mapOptions: {
        lat: 0,
        lng: 0,
        unitOfMeasurement: this.$store.state.user.settings.unitOfMeasurement || 'miles',
        searchRadius: this.$store.state.user.settings.searchRadius || 15,
        beaconLimit: this.$store.state.user.settings.beaconLimit || 50,
        zoom: 13,
        user: this.$store.state.user || {}
      },
      selectedBeacon: null,
      markers: null,
      mapHeight: '400px',
      currentPosition: {
        lng: null,
        lat: null
      },
      controlOptions: {
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }
    }
  },
  computed: {
    chunkedConnections () {
      if (this.selectedBeacon && this.selectedBeacon.connections.length) {
        let connections = JSON.parse(JSON.stringify(this.selectedBeacon.connections))
        let arrays = []
        let size = 3
        while (connections.length > 0) {
          arrays.push(connections.splice(0, size))
        }
        return arrays
      }
      else {
        return []
      }
    }
  },
  methods: {
    showButtons (key) {
      if (key === 'connect') {
        return (
          !this.selectedBeacon.additionalSettings.password &&
          this.distanceInfo &&
          this.distanceInfo.canConnect &&
          this.$store.state.user.outgoingConnectionRequest.beaconId !== this.selectedBeacon._id &&
          this.$store.state.user.connectedTo.beaconId !== this.selectedBeacon._id &&
          !this.$store.state.user.beacon
        )
      }
      else if (key === 'connect-password') {
        return (
          this.selectedBeacon.additionalSettings.password &&
          this.distanceInfo &&
          this.distanceInfo.canConnect &&
          this.$store.state.user.outgoingConnectionRequest.beaconId !== this.selectedBeacon._id &&
          this.$store.state.user.connectedTo.beaconId !== this.selectedBeacon._id &&
          !this.$store.state.user.beacon
        )
      }
      else if (key === 'cancel-request') {
        return (
          this.$store.state.user.outgoingConnectionRequest.beaconId === this.selectedBeacon._id
        )
      }
      else if (key === 'disconnect') {
        return (
          this.$store.state.user.connectedTo.beaconId === this.selectedBeacon._id
        )
      }
      else if (key === 'extinguish') {
        return (
          this.$store.state.user.beacon &&
          this.$store.state.user.beacon._id === this.selectedBeacon._id
        )
      }
    },
    verifyBeaconPassword () {
      this.modalLoading = true
      let passwordObj = {
        beaconId: this.selectedBeacon._id,
        password: this.beaconPassword
      }
      BeaconService.verifyBeaconPassword(passwordObj)
        .then((response) => {
          this.modalLoading = false
          if (response.body) {
            this.createConnectionRequest(this.selectedBeacon)
          }
          else {
            this.createToast('negative', 'Incorrect password')
          }
        })
        .catch((error) => {
          this.modalLoading = false
          this.createToast('negative', error.body.message)
        })
    },
    disconnectFromBeacon (beacon) {
      this.modalLoading = true
      beacon.userId = this.$store.state.user._id
      if (!beacon.beaconId) {
        beacon.beaconId = beacon._id
      }
      ConnectionService.disconnectFromBeacon(beacon)
        .then((response) => {
          this.modalLoading = false
          this.$store.commit('updateUser', response.body)
          let socketObj = {
            toId: beacon.author._id,
            fromId: beacon.userId,
            fromName: beacon.name
          }
          this.$socket.emit('disconnectFromBeacon', socketObj)
          this.$refs.mapModal.close()
        })
        .catch((error) => {
          this.modalLoading = false
          this.createToast('negative', error.body.message)
        })
    },
    extinguishBeacon () {
      this.modalLoading = true
      let beacon = JSON.parse(JSON.stringify(this.$store.state.user.beacon))
      let extinguishObj = {
        beaconId: beacon._id,
        userId: beacon.author
      }
      BeaconService.extinguishBeacon(extinguishObj)
        .then(response => {
          this.modalLoading = false
          this.$store.commit('extinguishBeacon')
          this.$store.commit('updateUser', response.body)
          let socketObj = {
            toIds: beacon.connections.map((connection) => {
              return connection.userId
            }),
            fromId: beacon.author,
            fromName: this.$store.state.user.fullName
          }
          this.$socket.emit('extinguishBeacon', socketObj)
          this.loadMap()
          this.$refs.mapModal.close()
        })
        .catch(error => {
          this.beaconLit = !this.beaconLit
          this.modalLoading = false
          this.createToast('negative', error.body.message)
        })
    },
    checkConnectionErrors (beacon, distance) {
      this.connectionErrors = []
      if (!distance.canConnect) {
        this.connectionErrors.push('You must be within 250m to connect')
      }
    },
    setMapCenter (lng, lat) {
      let user = this.$store.state.user
      // If user has a beacon, center on that
      if (this.doesObjectExist(user.beacon) && !this.doesObjectExist(user.connectedTo)) {
        this.mapOptions.lng = user.beacon.location.coordinates[0]
        this.mapOptions.lat = user.beacon.location.coordinates[1]
      }
      // If user is connected to another beacon, center on that
      else if (this.doesObjectExist(user.connectedTo) && !this.doesObjectExist(user.beacon)) {
        this.mapOptions.lng = user.connectedTo.lng
        this.mapOptions.lat = user.connectedTo.lat
      }
      // If user does not have a beacon nor is connected to another beacon, center on their current // location
      else {
        this.mapOptions.lng = lng
        this.mapOptions.lat = lat
      }
    },
    centerMap () {
      let latLng = new google.maps.LatLng(this.mapOptions.lat, this.mapOptions.lng)
      this.$refs.beaconMap.panTo(latLng)
    },
    getBeaconThemeColor (beacon) {
      return (beacon.additionalSettings.password) ? 'secondary' : 'primary'
    },
    openMapModal (beacon) {
      this.modalLoading = true
      this.selectedBeacon = beacon
      this.modalOpen = true
      if (this.$refs.connectionCarousel) {
        this.$refs.connectionCarousel.goToSlide(0)
      }
      LocationService.getDistanceBetweenCoordinates(LocationService.createBeaconDistanceObject(beacon, this.currentPosition))
        .then((response) => {
          this.modalLoading = false
          this.distanceInfo = response.body
          this.checkConnectionErrors(beacon, this.distanceInfo)
        })
        .catch((error) => {
          this.modalLoading = false
          this.$refs.mapModal.close()
          this.createToast('negative', error.body.message)
        })
    },
    closeMapModal () {
      this.modalOpen = false
      this.$refs.mapModal.close()
    },
    createConnectionRequest (beacon) {
      this.modalLoading = true
      let connectionObj = ConnectionService.createConnectionObject(beacon, this.$store.state.user, this.currentPosition)
      // If user already has a connection request on another beacon, cancel that first
      if (this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest) && this.$store.state.user.outgoingConnectionRequest.beaconId !== beacon.beaconId) {
        let connectionRequest = JSON.parse(JSON.stringify(this.$store.state.user.outgoingConnectionRequest))
        ConnectionService.cancelConnectionRequest(this.$store.state.user.outgoingConnectionRequest)
          .then((response) => {
            let socketObj = {
              toId: connectionRequest.beaconOwnerId,
              fromId: connectionRequest.userId,
              fromName: connectionRequest.name
            }
            this.$socket.emit('cancelConnectionRequest', socketObj)
            ConnectionService.createConnectionRequest(connectionObj)
              .then((response) => {
                this.modalLoading = false
                this.$store.commit('updateUser', response.body)
                this.createToast('positive', 'Your connection request has been sent successfully')
                let socketObj = {
                  toId: response.body.outgoingConnectionRequest.beaconOwnerId,
                  fromId: response.body.outgoingConnectionRequest.userId,
                  fromName: response.body.outgoingConnectionRequest.name
                }
                this.$socket.emit('createConnectionRequest', socketObj)
                this.$refs.mapModal.close()
              })
              .catch((error) => {
                this.modalLoading = false
                this.createToast('negative', error.body.message)
              })
          })
          .catch((error) => {
            this.createToast('negative', error.body.message)
          })
      }
      // If user is already connected to another beacon, disconnect from that beacon first
      else if (this.doesObjectExist(this.$store.state.user.connectedTo) && this.$store.state.user.connectedTo.beaconId !== beacon.beaconId) {
        ConnectionService.disconnectFromBeacon(this.$store.state.user.connectedTo)
          .then((response) => {
            this.modalLoading = false
            this.$store.commit('updateUser', response.body)
            let socketObj = {
              toId: beacon.author._id,
              fromId: beacon.userId,
              fromName: beacon.name
            }
            this.$socket.emit('disconnectFromBeacon', socketObj)
            ConnectionService.createConnectionRequest(connectionObj)
              .then((response) => {
                this.modalLoading = false
                this.$store.commit('updateUser', response.body)
                this.createToast('positive', 'Your connection request has been sent successfully')
                let socketObj = {
                  toId: response.body.outgoingConnectionRequest.beaconOwnerId,
                  fromId: response.body.outgoingConnectionRequest.userId,
                  fromName: response.body.outgoingConnectionRequest.name
                }
                this.$socket.emit('createConnectionRequest', socketObj)
                this.$refs.mapModal.close()
              })
              .catch((error) => {
                this.modalLoading = false
                this.createToast('negative', error.body.message)
              })
          })
          .catch((error) => {
            this.modalLoading = false
            this.createToast('negative', error.body.message)
          })
      }
      else {
        ConnectionService.createConnectionRequest(connectionObj)
          .then((response) => {
            this.modalLoading = false
            this.$refs.mapModal.close()
            this.$store.commit('updateUser', response.body)
            this.createToast('positive', 'Your connection request has been sent successfully')
            let socketObj = {
              toId: response.body.outgoingConnectionRequest.beaconOwnerId,
              fromId: response.body.outgoingConnectionRequest.userId,
              fromName: response.body.outgoingConnectionRequest.name
            }
            this.$socket.emit('createConnectionRequest', socketObj)
          })
          .catch((error) => {
            this.modalLoading = false
            this.createToast('negative', error.body.message)
          })
      }
    },
    cancelConnectionRequest (connectionRequest) {
      this.modalLoading = true
      ConnectionService.cancelConnectionRequest(connectionRequest)
        .then((response) => {
          this.modalLoading = false
          this.$store.commit('updateUser', response.body)
          let socketObj = {
            toId: connectionRequest.beaconOwnerId,
            fromId: connectionRequest.userId,
            fromName: connectionRequest.name
          }
          this.$socket.emit('cancelConnectionRequest', socketObj)
          this.$refs.mapModal.close()
        })
        .catch((error) => {
          this.modalLoading = false
          this.createToast('negative', error.body.message)
        })
    },
    checkLightOrDarkText () {
      let rgb = hexToRgb(this.selectedBeacon.color)
      let C = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255]
      C.forEach((c) => {
        if (c <= 0.03928) {
          c = c / 12.92
        }
        else {
          c = Math.pow((c + 0.055) / 1.055, 2.4)
        }
      })
      let l = 0.2126 * C[0] + 0.7152 * C[1] + 0.0722 * C[2]
      return (l > 0.179) ? '#0C0C0C' : '#FFF'
    },
    updateMapHeight () {
      let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let headerHeight = 122 // Header height stays consistent
      let footerHeight = 50 // Footer height stays consistent
      this.mapHeight = windowHeight - headerHeight - footerHeight + 'px'
      this.$refs.beaconMap.resizePreserveCenter()
    },
    generateMarkerSize (c, w = 21, h = 34) {
      let multiplier = 1
      if (c > 0 && c <= 10) {
        multiplier = 1.05
      }
      else if (c > 10 && c <= 25) {
        multiplier = 1.15
      }
      else if (c > 25 && c <= 100) {
        multiplier = 1.25
      }
      else if (c > 100) {
        multiplier = 1.35
      }
      return new google.maps.Size(w * multiplier, h * multiplier)
    },
    getCurrentLocation (vm) {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (response) => {
              resolve({
                body: {
                  accuracy: response.coords.accuracy,
                  location: {
                    lat: response.coords.latitude,
                    lng: response.coords.longitude
                  }
                }
              })
            },
            (error) => {
              if (!vm.$cookie.get('has-seen-geolocation-alert')) {
                let message = ''
                if (error.code === 1) {
                  message = 'It is HIGHLY recommended to allow your browser to access geolocation. If you choose not to allow access, your location will be far less accurate. Access to geolocation can be changed at any time in your browser settings.'
                }
                else {
                  message = 'We were unable to get your location through geolocation. Your location will be less accurate because of this.'
                }
                Dialog.create({
                  title: 'Warning',
                  message: message,
                  buttons: [
                    {
                      label: 'Confirm',
                      handler () {
                        LocationService.getCurrentPosition()
                          .then((response) => {
                            vm.$cookie.set('has-seen-geolocation-alert', true)
                            resolve(response)
                          })
                          .catch((error) => {
                            reject(error)
                          })
                      }
                    }
                  ]
                })
              }
              else {
                LocationService.getCurrentPosition()
                  .then((response) => {
                    resolve(response)
                  })
                  .catch((error) => {
                    reject(error)
                  })
              }
            },
            {
              enableHighAccuracy: true
            }
          )
        }
        else {
          LocationService.getCurrentPosition()
            .then((response) => {
              resolve(response)
            })
            .catch((error) => {
              reject(error)
            })
        }
      })
    },
    loadMap (vue, centerAfterwards = true) {
      let vm = this || vue
      vm.loading = true
      this.getCurrentLocation(vm)
        .then((response) => {
          vm.markers = []
          vm.setMapCenter(response.body.location.lng, response.body.location.lat)
          vm.currentPosition.lng = vm.mapOptions.lng
          vm.currentPosition.lat = vm.mapOptions.lat
          BeaconService.getNearbyBeacons(vm.mapOptions).then(response => {
            let bounds = new google.maps.LatLngBounds()
            if (response.body.length) {
              response.body.map(marker => {
                let position = {
                  lng: marker.location.coordinates[0],
                  lat: marker.location.coordinates[1]
                }
                let protocol = (process.env.NODE_ENV === 'development') ? 'http' : 'https'
                let icon = {
                  url: protocol + '://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + marker.color.replace(/^#/, ''),
                  scaledSize: vm.generateMarkerSize(marker.connections.length),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(10, 34)
                }
                marker.icon = icon
                marker.opacity = (marker.author._id === vm.$store.state.user._id) ? 0.3 : 1
                marker.zIndex = (marker.author._id === vm.$store.state.user._id) ? 10 : 2
                marker.title = (marker.author._id === vm.$store.state.user._id) ? 'Your beacon' : marker.author.firstName
                bounds.extend(position)
                marker.position = position
              })
              bounds.extend(vm.currentPosition)
              vm.markers = response.body
            }
            else {
              bounds.extend(vm.currentPosition)
            }
            if (centerAfterwards) {
              vm.$refs.beaconMap.fitBounds(bounds)
            }
            if (!vm.doesObjectExist(vm.$store.state.user.beacon) && !vm.doesObjectExist(vm.$store.state.user.connectedTo)) {
              let mapMarker = (vm.$store.state.user.gender === 'female') ? 'femaleMapMarker' : 'maleMapMarker'
              if (!vm.markers) {
                vm.markers = []
              }
              if (!vm.markers.some((marker) => {
                return marker.icon === `${process.env.SITE_URL}/assets/images/${mapMarker}.png`
              })) {
                vm.markers.unshift({
                  position: {
                    lng: vm.mapOptions.lng,
                    lat: vm.mapOptions.lat
                  },
                  icon: `${process.env.SITE_URL}/assets/images/${mapMarker}.png`,
                  opacity: 1,
                  zIndex: 1,
                  title: 'You'
                })
              }
            }
            vm.loading = false
          }).catch(() => {
            vm.loading = false
            vm.createToast('negative', 'Could not populate map at this time')
          })
        })
        .catch(() => {
          vm.loading = false
          this.createToast('negative', 'Could not populate map at this time')
        })
    }
  },
  mounted () {
    this.$q.events.$on('emitResizeMap', (animationLength = 300) => {
      if (this.$refs.beaconMap) {
        setTimeout(this.$refs.beaconMap.resizePreserveCenter, animationLength)
      }
    })
    this.loadMap(this)
  }
}
</script>

<style lang="stylus">
  .beaconMap
    width: 100%
    height: 400px
  .map-modal
    .beacon-name
      padding-top 1rem
    .beacon-tags
      margin-bottom 0.5rem
      .beacon-tag
        margin-bottom 0.5rem
    .beacon-password-form
      display inline-block
    .connections-carousel
      height 110px
      .q-carousel-track
        height auto
        > div
          padding 0
          min-height 0
  .map-footer
    height 50px
    padding 0
    .q-btn
      flex 1
      height 100%
</style>
