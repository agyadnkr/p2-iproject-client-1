<template>
  <button
    v-on="$listeners"
    class="w-15/24 self-center h-12 px-12 bg-red-600 text-lg text-white rounded-lg overflow-y-hidden"
  >
    <lottie-player
      class="object-contain h-28 -my-6"
      v-if="isLoading"
      src="https://assets9.lottiefiles.com/packages/lf20_szlepvdh.json"
      background="transparent"
      speed="1"
      style="width: 200; height: 200"
      loop
      autoplay
    ></lottie-player>
    <p v-if="!isLoading">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "ButtonSm",
  props: ["text", "isLoading"],
};
</script>

<style></style>
