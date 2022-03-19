<template>
  <div class="w-full min-h-screen bg-white flex flex-row">
    <div class="overflow-y-auto w-11/24 h-full flex flex-col">
      <div class="h-28 w-full mt-12">
        <p
          class="text-2xl"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Restaurant List
        </p>
      </div>
      <RestaurantCard
        v-for="location in restaurantData"
        :key="location.id"
        :location="location"
      ></RestaurantCard>
    </div>
    <div class="w-13/24 h-screen">
      <GoogleMaps></GoogleMaps>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMaps from "../components/googleMaps/Maps.vue";
import RestaurantCard from "../components/cards/RestaurantCard.vue"
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    GoogleMaps,
    RestaurantCard
  },
  computed: {
    ...mapState(["restaurantData"]),
  },
};
</script>
