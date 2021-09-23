import Vue from "vue";
import Vuex from "vuex";
import main from "./main/index.js";
import filter from "./filter/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    main,
    filter
  },
});
