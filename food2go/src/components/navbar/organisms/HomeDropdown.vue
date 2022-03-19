<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div class="relative inline-flex align-middle w-full">
        <button
          class="h-14 text-white bg-red-700 font-bold uppercase text-sm px-8 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 ease-linear transition-all duration-150 flex flex-row justify-center items-center gap-x-4"
          type="button"
          v-on:click="toggleDropdown()"
          ref="btnDropdownRef"
        >
          <i class="fa-solid fa-bars fa-xl"></i>
          <img
            src="https://i.pinimg.com/474x/76/94/84/769484dafbe89bf2b8a22379658956c4.jpg"
            alt=""
            class="h-8 w-8 rounded-full"
          />
        </button>
        <div
          v-bind:class="{
            hidden: !dropdownPopoverShow,
            block: dropdownPopoverShow,
          }"
          class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          style="min-width: 12rem"
          ref="popoverDropdownRef"
        >
          <router-link
            to="/register"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <i class="fa-solid fa-pen pr-2"></i>
            Sign Up
          </router-link>
          <router-link
            to="/login"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <i class="fa-solid fa-right-to-bracket pr-2"></i>
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "HomeDropdown",
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
