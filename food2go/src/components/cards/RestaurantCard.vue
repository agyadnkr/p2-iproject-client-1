<template>
  <div>
    <button :class="cardColor" @click.prevent="centerToRestaurant">
      <div class="flex justify-center items-center w-2/6">
        <div class="w-full">
          <img
            :src="location.imgUrl"
            class="h-48 w-48 rounded-3xl object-cover py-4 px-4 ml-4"
          />
        </div>
      </div>
      <div class="flex flex-col w-full h-full relative">
        <div class="flex flex-row relative">
          <div
            class="w-5/6 text-md text-left px-8 flex pt-4"
            style="font-family: 'Encode Sans', sans-serif; font-weight: 600"
          >
            {{ location.name }}
          </div>
          <div class="absolute right-8 top-4 h-8 w-8">
            <button
              v-if="isLogged || currentUser.role === 'Customer'"
              @click.prevent="addToWishlistButton"
            >
              <i class="fa-solid fa-heart fa-xl hover:text-blue-500"></i>
            </button>
          </div>
        </div>
        <div class="w-16 h-1 border-t-2 mx-8 mt-2"></div>
        <div
          class="text-sm text-left mt-4 px-8 w-3/4"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 100"
        >
          {{ location.address }}
        </div>
        <div
          class="absolute bottom-4 left-8 h-8 w-full flex flex-row items-center gap-x-2 text-sm"
        >
          <i class="fa-solid fa-star text-red-600"></i>
          <p style="font-family: 'Encode Sans', sans-serif; font-weight: 600">
            {{ rating }}
          </p>
          <p style="font-family: 'Encode Sans', sans-serif; font-weight: 200">
            {{ review }}
          </p>
          <Button
            class="h-8 px-4 absolute bottom-0 right-16 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
            @click.prevent="$router.push(`/restaurants/${location.id}`)"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            See Detail
          </Button>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "RestaurantCard",
  props: ["location"],
  methods: {
    ...mapActions(["detailHandler", "addToWishlist"]),
    ...mapMutations(["SET_CENTER"]),
    centerToRestaurant() {
      const value = {
        lat: +this.location.lat,
        lng: +this.location.lng,
      };
      this.SET_CENTER(value);
    },
    addToWishlistButton() {
      this.addToWishlist(this.location.id);
    },
  },
  computed: {
    ...mapState(["center", "isLogged", "currentUser"]),
    rating() {
      if (this.location.avgRating) {
        return `${this.location.avgRating[0]}/5`;
      } else {
        return "";
      }
    },
    review() {
      if (this.location.reviewCount == 1) {
        return `(${this.location.reviewCount} Review)`;
      } else if (this.location.reviewCount > 0) {
        return `(${this.location.reviewCount} Reviews)`;
      } else {
        return "(No review yet)";
      }
    },
    cardColor() {
      if (
        this.location.lat == this.center.lat &&
        this.location.lng == this.center.lng
      ) {
        return "w-full h-48 border-t-2 flex flex-row bg-red-400 text-white";
      } else {
        return "w-full h-48 border-t-2 flex flex-row hover:bg-red-300 hover:text-slate-800";
      }
    },
  },
};
</script>

<style></style>
