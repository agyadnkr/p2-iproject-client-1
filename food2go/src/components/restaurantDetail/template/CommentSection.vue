<template>
  <div class="w-full h-auto flex flex-col justify-center">
    <div
      class="relative h-auto w-3/4 self-center rounded-xl bg-red-400 py-8 shadow-2xl"
    >
      <div class="absolute top-4 left-24 h-24 w-24 rounded-full bg-black"></div>
      <div class="flex flex-col">
        <form class="flex flex-col gap-y-4" @submit.prevent="reviewSubmit">
          <div>
            <input
              v-model="review.rating"
              type="number"
              class="w-15/24 rounded-lg py-2 px-6"
              placeholder="Insert rating here (from 1 to 5)"
            />
          </div>
          <div>
            <textarea
              v-model="review.comment"
              cols="80"
              rows="5"
              placeholder="Insert your review here"
              class="px-6 py-4 rounded-xl"
            ></textarea>
          </div>
          <div class="w-15/24 py-2 border rounded-xl self-center">
            <input
              @change="onFileSelected"
              type="file"
              name="images"
              enctype="multipart/form-data"
              accept="image/jpg, image/jpeg, image/png"
              class="text-white py-2"
              multiple
            />
          </div>
          <ButtonSm :text="'Post Review'" :isLoading="isLoading"></ButtonSm>
        </form>
      </div>
    </div>

    <div
      v-for="review in reviewData"
      :key="review.id"
      class="relative h-48 w-3/4 self-center border border-slate-500 rounded-xl bg-white mt-4 py-4 shadow-xl"
    >
      <div class="absolute top-4 left-24 h-24 w-24 rounded-full bg-black">
        <img :src="review.User.imgUrl" class="rounded-full" />
      </div>
      <div class="flex flex-col text-lg text-left mx-56">
        <p class="font-bold">
          {{ review.User.username }} <i class="fa-solid fa-star pl-4"></i>
          {{ review.rating }}/5
        </p>
        <div class="py-4 px-4 h-32 overflow-y-scroll">
          <p class="text-md">{{ review.review }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonSm from "../../buttons/ButtonSm.vue";
export default {
  name: "CommentSection",
  components: {
    ButtonSm,
  },
  data() {
    return {
      review: {
        restaurantId: "",
        rating: "",
        comment: "",
        selectedFiles: [],
      },
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["reviewSubmitHandler", "fetchReview"]),
    onFileSelected(evt) {
      for (let i = 0; i < evt.target.files.length; i++) {
        this.review.selectedFiles.push(evt.target.files[i]);
      }
    },
    async reviewSubmit() {
      this.isLoading = true;
      await this.reviewSubmitHandler(this.review);
      this.isLoading = false;
      this.review.rating = "";
      this.review.comment = "";
      this.review.selectedFiles = [];
    },
  },
  computed: {
    ...mapState(["reviewData"]),
  },
  created() {
    this.review.restaurantId = this.$route.params.id;
    this.fetchReview(this.$route.params.id);
  },
};
</script>

<style></style>
