<template>
  <div id="app">
    <div
      class="w-full min-h-screen bg-gradient-to-b from-red-200 to-transparent via-transparent"
    >
      <Navbar></Navbar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import Navbar from "./components/navbar/templates/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapMutations(["SET_ISLOGGED", "SET_CURRENTUSER"]),
    ...mapActions(["fetchLocations"])
  },
  created() {
    this.fetchLocations();
    if (localStorage.getItem("access_token")) {
      this.SET_ISLOGGED(true);
      this.SET_CURRENTUSER({
        role: localStorage.getItem("userRole"),
        email: localStorage.getItem("userEmail"),
        imgUrl: localStorage.getItem("userImage"),
      })

    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
