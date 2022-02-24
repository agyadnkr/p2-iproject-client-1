<template>
  <div class="h-96 w-full px-2 py-2">
    <div class="h-full w-full rounded-xl flex flex-col shadow-lg">
      <div class="h-3/4">
        <img
          src="https://ik.imagekit.io/iqpgx3omg7kg/restaurant/Screenshot__1__LJRYXqZU_.png"
          class="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div class="h-1/4 flex flex-row">
        <div class="flex flex-col text-left text-slate-900 pl-4 pt-2 gap-y-4">
          <p
            class="text-md text-left"
            style="font-family: 'Encode Sans', sans-serif; font-weight: 600"
          >
            {{ wishlist.name }}
          </p>
          <button
          @click="removeButton"
            class="h-8 w-36 px-4 text-sm text-center text-white hover:text-slate-900 bg-red-600 hover:bg-red-400 rounded-lg"
            style="font-family: 'Encode Sans', sans-serif; font-weight: 600"
          >
            <i class="fa-solid fa-heart-crack mr-2"></i>
            Remove
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishlistCard",
  props: ["wishlist"],
  methods: {
    removeButton() {
      
    }
  }
};
</script>

<style></style>
