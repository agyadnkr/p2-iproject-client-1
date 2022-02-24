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
      <div class="h-96 w-full px-2 py-2">
        <div class="h-full w-full rounded-xl flex flex-col shadow-lg">
          <div class="h-3/4">
            <img
              src="https://ik.imagekit.io/iqpgx3omg7kg/restaurant/Screenshot__1__LJRYXqZU_.png"
              class="object-cover h-full w-full rounded-xl"
            />
          </div>
          <div class="h-1/4 flex flex-row">
            <div
              class="flex flex-col text-left text-slate-900 pl-4 pt-2 gap-y-4"
            >
              <p
                class="text-md text-left"
                style="font-family: 'Encode Sans', sans-serif; font-weight: 600"
              >
                Space Coffee Roastery
              </p>
              <p
                class="text-sm text-left"
                style="font-family: 'Encode Sans', sans-serif; font-weight: 600"
              >
                <i class="fa-solid fa-star text-red-600"></i>
                Rating
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="h-80 w-full border px-2 py-2 bg-slate-400">
        <div class="h-full w-full bg-red-500"></div>
      </div>
      <div class="h-80 w-full border px-2 py-2 bg-slate-400">
        <div class="h-full w-full bg-red-500"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wishlist",
};
</script>

<style></style>
