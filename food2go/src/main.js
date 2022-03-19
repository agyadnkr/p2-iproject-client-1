import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/tailwind.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBjlQ0LbPIFIH3rExuCRIFoDifRyNAyenw",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
