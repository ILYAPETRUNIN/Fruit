import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";

// import useDirectives from './boot/directives.js'
 import useComponents from './boot/components.js'

import './css/main.scss';

import vuetify from "./plugins/vuetify.js";

// useDirectives()
 useComponents()

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
