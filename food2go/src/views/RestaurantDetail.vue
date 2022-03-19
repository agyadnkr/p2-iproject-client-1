<template>
  <div>
    <div class="w-full min-h-screen flex flex-col px-48">
      <div class="h-auto flex justify-center items-center">
        <div class="w-3/4 h-120 rounded-3xl pt-4">
          <img
            src="https://ik.imagekit.io/iqpgx3omg7kg/restaurant/Screenshot__1__LJRYXqZU_.png"
            class="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>

      <div
        class="py-12 w-20/24 self-center flex flex-row justify-center items-center"
      >
        <button
          :class="overviewColor"
          @click.prevent="currentPage = 'overview'"
        >
          Overview
        </button>
        <button :class="reviewColor" @click.prevent="currentPage = 'review'">
          Review
        </button>
        <button :class="photosColor" @click.prevent="currentPage = 'photos'">
          Photos
        </button>
      </div>

      <!-- Comment Section -->
      <CommentSection v-if="currentPage === 'review'"></CommentSection>

      <!-- Photo Section -->
      <PhotoSection v-if="currentPage === 'photos'"></PhotoSection>

      <!-- Detail Section -->
      <div class="h-auto mt-4 bg-blue-600 flex flex-row">
        <div class="w-1/2 h-120 bg-slate-400"></div>
        <div class="w-1/2 h-120 bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentSection from "../components/restaurantDetail/template/CommentSection.vue";
import PhotoSection from "../components/restaurantDetail/template/PhotoSection.vue";
export default {
  name: "RestaurantDetail",
  components: {
    CommentSection,
    PhotoSection
  },
  data() {
    return {
      currentPage: "overview",
    };
  },
  computed: {
    overviewColor() {
      if (this.currentPage === "overview") {
        return "font-bold text-red-500 w-1/3 border-b-2 border-slate-500 h-16";
      } else {
        return "w-1/3 border-b-2 text-black border-slate-500 h-16";
      }
    },
    reviewColor() {
      if (this.currentPage === "review") {
        return "font-bold text-red-500 w-1/3 border-b-2 border-slate-500 h-16";
      } else {
        return "w-1/3 border-b-2 text-black border-slate-500 h-16";
      }
    },
    photosColor() {
      if (this.currentPage === "photos") {
        return "font-bold text-red-500 w-1/3 border-b-2 border-slate-500 h-16";
      } else {
        return "w-1/3 border-b-2 text-black border-slate-500 h-16";
      }
    },
  },
};
</script>

<style></style>
