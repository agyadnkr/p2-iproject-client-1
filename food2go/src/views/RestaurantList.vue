<template>
  <div class="w-full min-h-screen bg-white flex flex-row">
    <div
      class="overflow-y-auto overflow-x-hidden w-11/24 h-screen flex flex-col ml-4 over"
    >
      <div
        class="h-14 w-full flex justify-start items-center py-12 px-8 border-t-2"
      >
        <p
          class="text-3xl text-left"
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
import RestaurantCard from "../components/cards/RestaurantCard.vue";
import { mapState } from "vuex";

export default {
  name: "RestaurantList",
  components: {
    GoogleMaps,
    RestaurantCard,
  },
  computed: {
    ...mapState(["restaurantData"]),
  },
};
</script>
