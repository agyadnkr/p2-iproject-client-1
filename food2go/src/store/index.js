import Vue from "vue";
import Vuex from "vuex";
import { mainApi, restaurantApi, wishlistApi } from "../apis";
// import axios from "axios";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    currentUser: {
      imgUrl: "",
      email: "",
      role: "",
    },
    restaurantData: [],
    restaurantDetail: {},
    reviewData: [],
    imageData: [],
    wishlistData: [],
    center: {
      lat: -7.759722999999999,
      lng: 115.3989719,
    },
    locationMarkers: [],
    locPlaces: [],
    existingPlace: {},
    selectedFile: null,
  },
  mutations: {
    SET_CURRENTUSER(state, payload) {
      state.currentUser = payload;
    },
    SET_ISLOGGED(state, payload) {
      state.isLogged = payload;
    },
    FETCH_RESTAURANTDATA(state, payload) {
      state.restaurantData = payload;
    },
    FETCH_REVIEWDATA(state, payload) {
      state.reviewData = payload;
    },
    FETCH_IMAGEDATA(state, payload) {
      state.imageData = payload;
    },
    FETCH_WISHLISTDATA(state, payload) {
      state.wishlistData = payload;
    },
    ADD_LOCATION_MARKER(state, payload) {
      state.locationMarkers.push({ position: payload });
    },
    SET_EXISTINGPLACE(state, payload) {
      state.existingPlace = payload;
    },
    SET_CENTER(state, payload) {
      state.center = payload;
    },
    SET_SELECTED_FILE(state, payload) {
      state.selectedFile = payload;
    },
    SET_DESCRIPTION(state, payload) {
      state.existingPlace.description = payload;
    },
  },
  actions: {
    async registerHandler(context, user) {
      try {
        await mainApi.post("/register", user);
        Swal.fire({
          icon: "success",
          title: "Yeayy..",
          text: "Register success!!",
        });

        return true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    async loginHandler({ commit }, user) {
      try {
        const response = await mainApi.post("/login", user);

        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("userRole", response.data.role);
        localStorage.setItem("userImage", response.data.imgUrl);

        const payload = {
          email: response.data.email,
          role: response.data.role,
          imgUrl: response.data.imgUrl,
        };

        commit("SET_CURRENTUSER", payload);
        commit("SET_ISLOGGED", true);

        Swal.fire({
          icon: "success",
          title: "Yeayy..",
          text: "Login success!!",
        });

        return true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    async addToWishlist({ dispatch }, id) {
      try {
        await wishlistApi.post(
          `/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Added to Your Wishlist",
        });

        dispatch("fetchLocations");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    async removeWishlist(context, id) {
      try {
        
      } catch (error) {
        
      }
    },
    initMarker({ commit }, loc) {
      commit("SET_EXISTINGPLACE", loc);
    },
    async fetchWishlist({ commit }) {
      try {
        const response = await wishlistApi.get("/", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        commit("FETCH_WISHLISTDATA", response.data.Restaurants);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
    async fetchLocations({ commit }) {
      try {
        const result = await restaurantApi.get("/");

        result.data.forEach((el) => {
          const markers = {
            lat: +el.lat,
            lng: +el.lng,
          };

          commit("ADD_LOCATION_MARKER", markers);
        });
        commit("FETCH_RESTAURANTDATA", result.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response,
        });
      }
    },
    async addLocationMarker({ state, commit, dispatch }) {
      try {
        if (state.existingPlace) {
          const marker = {
            lat: state.existingPlace.geometry.location.lat(),
            lng: state.existingPlace.geometry.location.lng(),
          };

          commit("ADD_LOCATION_MARKER", marker);
          commit("ADD_LOCPLACES", state.existingPlace);
          commit("SET_CENTER", marker);

          const fd = new FormData();
          fd.append("image", state.selectedFile, state.selectedFile.name);
          fd.append("name", state.existingPlace.name);
          fd.append("address", state.existingPlace.formatted_address);
          fd.append("description", state.existingPlace.description);
          fd.append("lat", state.existingPlace.geometry.location.lat());
          fd.append("lng", state.existingPlace.geometry.location.lng());
          fd.append("mapsUrl", state.existingPlace.geometry.location.lng());
          console.log(fd);

          await restaurantApi.post("/", fd, {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          });
          commit("SET_EXISTINGPLACE", {});
          dispatch("fetchLocations");

          Swal.fire({
            icon: "success",
            title: "Yeayy..",
            text: "You have add a marker!!",
          });
          return true;
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
  modules: {},
});
