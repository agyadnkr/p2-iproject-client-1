<template>
  <div>
    <gmap-map
      :zoom="16"
      :center="center"
      :options="options"
      style="width: 100%; height: 100vh"
    >
      <gmap-marker
        v-for="(loc, index) in locationMarkers"
        :key="index"
        :position="loc.position"
        :clickable="true"
        :draggable="false"
        @click="center = loc.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Maps",
  data() {
    return {
      options: {
        fullscreenControl: false,
      },
      // center: {
      //   lat: -7.759722999999999,
      //   lng: 110.3989719,
      // },
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    ...mapActions(["addLocationMarker", "initMarker", "fetchLocations"]),
    ...mapMutations(["SET_CENTER"]),
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    initialMarker(loc) {
      // console.log(loc, 'Di Viewss')
      this.initMarker(loc);
    },
  },
  computed: {
    ...mapState(["locationMarkers", "locPlaces", "existingPlace"]),
    center: {
      get() {
        return this.$store.state.center;
      },
      set(value) {
        this.SET_CENTER(value)
      }
    }
  },
};
</script>

<style></style>
