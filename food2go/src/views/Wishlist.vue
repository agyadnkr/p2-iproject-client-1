<template>
  <div class="w-full min-h-screen flex flex-col">
    <div class="flex justify-center items-center py-12 mx-36 bg-red-600">
      <p
        class="text-3xl text-left"
        style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
      >
        My Wishlist
      </p>
    </div>
    <div
      class="mx-36 items-center justify-center h-auto grid grid-cols-5 gap-y-12 gap-x-4"
    >
      <WishlistCard
        v-for="wishlist in wishlistData"
        :key="wishlist.id"
        :wishlist="wishlist"
      ></WishlistCard>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import WishlistCard from "../components/cards/WishlistCard.vue";
export default {
  name: "Wishlist",
  components: {
    WishlistCard,
  },
  methods: {
    ...mapActions(["fetchWishlist"]),
  },
  computed: {
    ...mapState(["wishlistData"]),
  },
  created() {
    this.fetchWishlist();
  },
};
</script>

<style></style>
