import Vue from "vue";

export default function useComponents() {
  Vue.component("AppButton", require("@/core/button.vue").default);
}
