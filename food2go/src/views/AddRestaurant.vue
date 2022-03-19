<template>
  <div id="LocationAddForm" class="w-screen min-h-screen flex flex-row">
    <div class="w-5/12 h-screen flex flex-col">
      <div
        class="bg-white border rounded-2xl shadow-xl h-auto w-3/4 ml-24 mt-4"
      >
        <div class="my-16">
          <p
            class="text-4xl px-6"
            style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
          >
            Add Restaurant
          </p>
        </div>
        <label>
          <p
            class="text-left text-lg mx-20"
            style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
          >
            Find Location
          </p>
          <gmap-autocomplete
            class="w-10/12 py-4 px-4 mt-2 mb-2 border rounded-md text-lg"
            @place_changed="initialMarker"
          ></gmap-autocomplete>
        </label>
        <div class="grid grid-cols-1 mt-2 place-items-center">
          <div class="w-full flex-flex-col mt-2">
            <p
              class="text-left text-lg py-4 mx-20"
              style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
            >
              Description
            </p>
            <textarea
              cols="20"
              rows="6"
              v-model="description"
              type="text"
              class="w-10/12 h-36 py-6 px-4 text-lg border rounded-md"
              placeholder="Input description here"
            />
          </div>
          <div class="w-full flex-flex-col mt-2">
            <p
              class="text-left text-lg py-4 mx-20"
              style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
            >
              Name
            </p>
            <textarea
              cols="20"
              rows="6"
              v-model="existingPlace.name"
              type="text"
              placeholder="Restaurant name will be displayed here"
              class="w-10/12 h-36 py-6 px-4 text-lg border rounded-md"
              readonly
            />
          </div>
          <div class="w-full flex-flex-col mt-2">
            <p
              class="text-left text-lg py-4 mx-20"
              style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
            >
              Address
            </p>
            <textarea
              cols="20"
              rows="6"
              v-model="existingPlace.formatted_address"
              type="text"
              placeholder="Restaurant address will be displayed here"
              class="w-10/12 h-36 py-6 px-4 text-lg border rounded-md"
              readonly
            />
          </div>
          <div class="w-full flex-flex-col mt-4">
            <p
              class="text-left text-lg py-4 mx-20"
              style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
            >
              Add Image
            </p>
            <input
              @change="onFileSelected"
              name="image"
              enctype="multipart/form-data"
              type="file"
              accept="image/*"
              class="w-10/12 h-10 pt-4 pb-12 px-4 text-xl border rounded-md"
              placeholder="Input image here"
            />
          </div>
          <ButtonMd
            @click="addLocationSubmit"
            :text="'Add Location'"
            :isLoading="isLoading"
          >
          </ButtonMd>
        </div>
      </div>
    </div>
    <div
      class="w-7/12 mt-4 mr-16 min-h-screen flex justify-center items-center bg-red-500 rounded-3xl object-contain"
    >
      <gmap-map
        :zoom="16"
        :center="center"
        :options="options"
        style="width: 100%; height: 100%"
      >
        <gmap-marker
          v-for="(loc, index) in locationMarkers"
          :key="index"
          :position="loc.position"
          :clickable="true"
          :draggable="true"
          @click="center = loc.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import ButtonMd from "../components/buttons/ButtonMd.vue";

export default {
  name: "AddRestaurant",
  components: {
    ButtonMd,
  },
  data() {
    return {
      // option for google maps display
      options: {
        fullscreenControl: false,
      },
      selected: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["addLocationMarker", "initMarker", "fetchLocations"]),
    ...mapMutations(["SET_CENTER", "SET_DESCRIPTION"]),
    async addLocationSubmit() {
      this.isLoading = true;
      const response = await this.addLocationMarker();
      this.isLoading = false;
      if (response) {
        this.$router.push({ name: "Home" });
      }
    },
    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        const marker = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
        this.SET_CENTER(marker);
      });
    },
    initialMarker(loc) {
      this.initMarker(loc);
    },
    onFileSelected(event) {
      // console.log(event)
      this.selectedFile = event.target.files[0];
      // console.log(this.selectedFile)
      this.$store.commit("SET_SELECTED_FILE", event.target.files[0]);
    },
  },
  computed: {
    ...mapState(["center", "locationMarkers", "locPlaces", "existingPlace"]),
    description: {
      get() {
        return this.existingPlace.description;
      },
      set(value) {
        this.SET_DESCRIPTION(value);
      },
    },
  },
  mounted() {
    this.locateGeoLocation();
    this.fetchLocations();
  },
};
</script>

<style></style>
