<template>
  <div :class="navbarColor">
    <div class="w-full h-full flex flex-row justify-between px-72">
      <div class="w-1/6 flex justify-start items-center">
        <router-link
          class="text-3xl text-slate-900 border-0"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
          to="/"
          >Food 2 Go</router-link
        >
      </div>

      <div
        id="nav"
        class="w-1/2 h-full flex flex-row justify-center items-center gap-x-16"
      >
        <router-link
          to="/restaurants"
          class="text-lg text-slate-100 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Restaurant List
        </router-link>
        <router-link
          v-if="currentUser.role == 'Owner'"
          to="/restaurants/add"
          class="text-lg text-slate-900 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Add Restaurant
        </router-link>
        <router-link
          v-if="currentUser.role == 'Customer'"
          to="/wishlists"
          class="text-lg text-slate-900 hover:text-red-600"
          style="font-family: 'Encode Sans', sans-serif; font-weight: 700"
        >
          Wishlist
        </router-link>
      </div>

      <div class="w-1/6 h-full flex justify-center items-center">
        <HomeDropdown v-if="!isLogged"></HomeDropdown>
        <ProfileDropdown v-if="isLogged"></ProfileDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeDropdown from "../organisms/HomeDropdown.vue";
import ProfileDropdown from "../organisms/ProfileDropdown.vue";
export default { 
  name: "Navbar",
  components: {
    HomeDropdown,
    ProfileDropdown,
  },
  computed: {
    ...mapState(["isLogged", "currentUser"]),
    navbarColor() {
      if (this.$route.name === "RestaurantList") {
        return "h-20 w-full bg-white"
      } else {
        return "h-20 w-full"
      }
    }
  },
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #252b31;
}

#nav a:hover {
  font-weight: bold;
  color: #ee544a;
}

#nav a.router-link-exact-active {
  color: #e42828;
}
</style>
