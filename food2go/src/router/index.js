import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/restaurants",
    name: "RestaurantList",
    component: () => import("../views/RestaurantList"),
  },
  {
    path: "/wishlists",
    name: "Wishlist",
    component: () => import("../views/Wishlist"),
    beforeEnter: (to, from, next) => {
      if (
        !localStorage.getItem("access_token") ||
        localStorage.getItem("userRole") !== "Customer"
      ) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/restaurants/add",
    name: "AddRestaurant",
    beforeEnter: (to, from, next) => {
      if (
        !localStorage.getItem("access_token") ||
        localStorage.getItem("userRole") != "Owner"
      ) {
        next("/");
      } else {
        next();
      }
    },
    component: () => import("../views/AddRestaurant.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
