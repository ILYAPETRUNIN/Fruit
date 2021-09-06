import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

export default function usePlugins() {
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
