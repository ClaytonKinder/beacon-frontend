<template>
  <div>
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
      class="map-modal mobile-modal-padding footer-no-shadow"
      :content-css="{minWidth: '400px', minHeight: '350px'}"
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
        <h6 class="text-center beacon-name">{{selectedBeacon.name}}</h6>
        <div class="modal-body">
          <div>
            <p class="text-center">{{selectedBeacon.description}}</p>
          </div>
          <div class="beacon-tags">
            <q-chip class="beacon-tag on-left" color="primary" square small v-for="tag in selectedBeacon.additionalSettings.tags" :key="tag">
              {{tag}}
            </q-chip>
          </div>
        </div>
        <q-toolbar class="bg-white" slot="footer">
          <div class="q-toolbar-title text-right">
            <q-btn flat color="primary" @click="$refs.mapModal.close()">Close</q-btn>
            <q-btn color="primary" @click="connectToBeacon()">Connect</q-btn>
          </div>
        </q-toolbar>
      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import {
  QWindowResizeObservable,
  QModal,
  QModalLayout,
  QBtn,
  QIcon,
  QToolbar,
  QChip
} from 'quasar'
import BeaconService from 'services/beaconService'
import Toast from 'mixins/Toast.js'
import LocationService from 'services/locationService.js'

function hexToRgb (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

export default {
  name: 'map',
  mixins: [Toast],
  components: {
    QWindowResizeObservable,
    QModal,
    QModalLayout,
    QBtn,
    QIcon,
    QToolbar,
    QChip
  },
  data () {
    return {
      locationAllowed: true,
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
      controlOptions: {
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }
    }
  },
  methods: {
    openMapModal (beacon) {
      this.selectedBeacon = beacon
      this.$refs.mapModal.open()
    },
    connectToBeacon () {
      console.log('Connecting to: ', this.selectedBeacon)
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
      this.mapHeight = windowHeight - headerHeight + 'px'
      this.$refs.beaconMap.resizePreserveCenter()
    }
  },
  mounted () {
    const vm = this
    this.$q.events.$on('emitResizeMap', function () {
      if (vm.$refs.beaconMap) {
        setTimeout(vm.$refs.beaconMap.resizePreserveCenter, 300)
      }
    })
    LocationService.getCurrentPosition().then(function (response) {
      let beacon = vm.$store.state.user.beacon
      vm.locationAllowed = true
      vm.mapOptions.lng = (beacon) ? beacon.location.coordinates[0] : response.body.location.lng
      vm.mapOptions.lat = (beacon) ? beacon.location.coordinates[1] : response.body.location.lat
      BeaconService.getNearbyBeacons(vm.mapOptions).then(response => {
        let bounds = new google.maps.LatLngBounds()
        response.body.map(marker => {
          let position = {
            lng: marker.location.coordinates[0],
            lat: marker.location.coordinates[1]
          }
          marker.icon = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + marker.color.replace(/^#/, ''), new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34))
          marker.opacity = (marker.author._id === vm.$store.state.user._id) ? 0.5 : 1
          marker.zIndex = (marker.author._id === vm.$store.state.user._id) ? 10 : 1
          marker.title = (marker.author._id === vm.$store.state.user._id) ? 'Your beacon' : marker.author.firstName
          bounds.extend(position)
          marker.position = position
        })
        vm.$refs.beaconMap.fitBounds(bounds)
        vm.markers = response.body
      }).catch(error => {
        vm.createToast('negative', error.body.message)
      })
    }).catch(function () {
      vm.locationAllowed = false
    })
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
    .beacon-tag
      margin-bottom 0.5rem
</style>
