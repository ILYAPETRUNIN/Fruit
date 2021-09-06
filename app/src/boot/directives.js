import Vue from "vue";

import Ripple from "vue-ripple-directive";

export default function useDirectives() {
  Vue.directive("ripple", Ripple);
}
