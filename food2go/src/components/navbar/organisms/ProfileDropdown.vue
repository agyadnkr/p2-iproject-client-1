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
          <img :src="imgUrl" alt="" class="h-8 w-8 rounded-full" />
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
            to="/profile/setting"
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <i class="fa-solid fa-gear pr-2"></i>
            Edit Profile
          </router-link>
          <button
            @click="logoutHandler"
            class="text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-blueGray-700 flex justify-start items-start"
          >
            <i class="fa-solid fa-right-to-bracket pr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import { mapMutations } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "ProfileDropdown",
  data() {
    return {
      dropdownPopoverShow: false,
      imgUrl: "",
    };
  },
  methods: {
    ...mapMutations(["SET_ISLOGGED", "SET_CURRENTUSER"]),
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
    logoutHandler() {
      localStorage.clear();
      this.SET_ISLOGGED(false);
      this.SET_CURRENTUSER({})
      Swal.fire({
        icon: "success",
        title: "Yeayy..",
        text: "Logout success!!",
      });
    },
  },
  created() {
    this.imgUrl = localStorage.getItem("userImage");
  },
};
</script>
