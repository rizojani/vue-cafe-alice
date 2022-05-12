/** @format */
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.baseURL =
  process.env.NODE_ENV == "production"
    ? "http://dev74.onlinetestingserver.com/cafe-alice"
    : "http://localhost:8000";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

Vue.use(VueAxios, axios);
