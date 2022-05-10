/** @format */
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL =
  process.env.NODE_ENV == "production"
    ? "http://dev74.onlinetestingserver.com/cafe-alice"
    : "http://localhost:8000/";
Vue.use(VueAxios, axios);
