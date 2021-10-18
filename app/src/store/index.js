import Vue from "vue";
import Vuex from "vuex";

import main from "./main/index.js";
import filter from "./filter/index.js";
import products from "./products/index.js";
import blog from "./blog/index.js";
import auth from "./auth/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    main,
    filter,
    blog,
    auth
  },
});
