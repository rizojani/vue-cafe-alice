/** @format */

import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
Vue.config.productionTip = false;
import $ from "jquery";
window.$ = $;
import "bootstrap";
// import "./axios.js";
require("./axios.js");

import "./assets/myjs";

import { ValidationObserver, ValidationProvider, extend } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

new Vue({
  router,
  render: (h) => h(App),
  components: {
    ValidationProvider,
  },
}).$mount("#app");
