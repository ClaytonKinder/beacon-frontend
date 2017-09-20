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
        @click="clickBeacon(m)"
      ></gmap-marker>
    </gmap-map>
  </div>

</template>

<script>
import {
  QWindowResizeObservable
} from 'quasar'
import BeaconService from 'services/beaconService'
import Toast from 'mixins/Toast.js'

export default {
  name: 'map',
  mixins: [Toast],
  components: {
    QWindowResizeObservable
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
        zoom: 13
      },
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
    clickBeacon (beacon) {
      console.log('Clicked beacon: ', beacon)
    },
    updateMapHeight () {
      let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let headerHeight = 122 // Header height stays consistent
      this.mapHeight = windowHeight - headerHeight + 'px'
      this.$refs.beaconMap.resizePreserveCenter()
    }
  },
  mounted () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let beacon = this.$store.state.user.beacon
        this.locationAllowed = true
        this.mapOptions.lng = (beacon) ? beacon.location.coordinates[0] : position.coords.longitude
        this.mapOptions.lat = (beacon) ? beacon.location.coordinates[1] : position.coords.latitude
        BeaconService.getNearbyBeacons(this.mapOptions).then(response => {
          let bounds = new google.maps.LatLngBounds()
          response.body.map(marker => {
            let position = {
              lng: marker.location.coordinates[0],
              lat: marker.location.coordinates[1]
            }
            marker.icon = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + marker.color.replace(/^#/, ''), new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34))
            marker.opacity = (marker.author._id === this.$store.state.user._id) ? 0.5 : 1
            marker.zIndex = (marker.author._id === this.$store.state.user._id) ? 10 : 1
            marker.title = (marker.author._id === this.$store.state.user._id) ? 'Your beacon' : ''
            bounds.extend(position)
            marker.position = position
          })
          this.$refs.beaconMap.fitBounds(bounds)
          this.markers = response.body
        }).catch(error => {
          this.createToast('negative', error.body.message)
        })
      }.bind(this), function (err) {
        if (err.code === err.PERMISSION_DENIED) {
          this.locationAllowed = false
        }
      }.bind(this), {
        enableHighAccuracy: true
      })
    }
  }
}
</script>

<style lang="stylus">
  .beaconMap
    width: 100%
    height: 400px
</style>
