import axios from "axios";

const origin = "http://localhost:3000";
// const origin = "https://p2-food2go-server.herokuapp.com"

const mainApi = axios.create({
  baseURL: origin,
});

const restaurantApi = axios.create({
  baseURL: `${origin}/restaurants`,
});

const reviewApi = axios.create({
  baseURL: `${origin}/reviews`,
});

const profileApi = axios.create({
  baseURL: `${origin}/profile`,
});

const wishlistApi = axios.create({
  baseURL: `${origin}/wishlists`,
});

export { mainApi, restaurantApi, reviewApi, profileApi, wishlistApi };
