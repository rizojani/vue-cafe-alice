/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import UserList from "../User/listing.vue";
import UserDetail from "../User/details.vue";
import AddUser from "../User/AddUser.vue";
import AdminLogin from "../pages/Auth/Login.vue";
import ForgetPassword from "../pages/Auth/ForgetPassword.vue";
import CodeVerificationForm from "../pages/Auth/CodeVerificationForm.vue";
import AdminLayout from "../components/Layout/Admin";
import AuthLayout from "../components/Layout/FullPage";
import islogindIn from "./islogindIn";
const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/admin",
      component: AdminLayout,

      children: [
        {
          path: "/",
          name: "UserList",
          component: UserList,
          meta: {
            auth: true,
          },
        },

        {
          path: "user-details/:id",
          name: "UserDetail",
          component: UserDetail,
          meta: {
            auth: true,
          },
        },
        {
          path: "add-user",
          name: "AddUser",
          component: AddUser,
          meta: {
            auth: true,
          },
        },
      ],
    },

    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "",
          component: AdminLogin,
          name: "login",
          meta: { auth: false },
        },

        {
          path: "forgeten-password-form",
          component: ForgetPassword,
          name: "forget-password-form",
          meta: { auth: false },
        },
        {
          path: "code-verification-form",
          component: CodeVerificationForm,
          name: "code-verification-form",
          meta: { auth: false },
        },
        {
          path: "/logout",
        },
      ],
    },
  ],
});
// console.log(islogindIn.isLogedIn + "   testing token");
router.beforeEach((to, from, next) => {
  if (islogindIn.isLogedIn) {
    if (!to.meta.auth) {
      return next({ name: "UserList" });
    }
    return next();
  }
  // console.log(islogindIn.isLogedIn);
  if (!islogindIn.isLogedIn) {
    if (!to.meta.auth) {
      return next();
    }
    return next({ name: "login" });
  }
  // console.log(islogindIn.isLogedIn);
});

export default router;
