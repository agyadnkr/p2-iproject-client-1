<template>
  <div class="w-full h-screen grid grid-cols-5 bg-slate-500 gap-y-4 gap-x-2">
    <div class="w-full h-44 bg-blue-600">
      <img
        v-for="image in imageData"
        :key="image.id"
        :src="image.imgUrl"
        class="object-cover h-full"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "PhotoSection",
  methods: {
    ...mapActions(["fetchImages"]),
  },
  computed: {
    ...mapState(["imageData"]),
  },
  created() {
    this.fetchImages(this.$route.params.id);
  },
};
</script>

<style></style>
