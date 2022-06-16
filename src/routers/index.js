/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Admin Admin Dashboard
import AdminDashboard from "../pages/Dashboard/Dashboard.vue";

// products
import ProductList from "../pages/Inventory/ProductList.vue";
import ProductDetail from "../pages/Inventory/ProductDetail.vue";
import CreateProduct from "../pages/Inventory/CreateProduct.vue";
import EditeProduct from "../pages/Inventory/EditProduct.vue";

// Category
import CategoryList from "../pages/ProductCategory/CategoryList.vue";
import AddCategory from "../pages/ProductCategory/AddCategory.vue";
import EditCategory from "../pages/ProductCategory/EditCategory.vue";

// User Packeges
import UserList from "../pages/User/listing.vue";
import UserDetail from "../pages/User/details.vue";
import AddUser from "../pages/User/AddUser.vue";
import BlockedUser from "../pages/User/BlockedUser.vue";

// Rider Packeges

import RiderList from "../pages/Rider/RiderList.vue";
import RiderDetail from "../pages/Rider/RiderDetail.vue";
import BlockedRider from "../pages/Rider/BlockedRider.vue";

// Feedback

import FeedbackList from "../pages/Feedback/FeedbackList.vue";
import FeedbackDetail from "../pages/Feedback/FeedbackView.vue";

// Auth Pkg
import AdminLogin from "../pages/Auth/Login.vue";
import ForgetPassword from "../pages/Auth/ForgetPassword.vue";
import CodeVerificationForm from "../pages/Auth/CodeVerificationForm.vue";
import PasswordForm from "../pages/Auth/PasswordForm.vue";

// profile pake
import MyProfile from "../pages/Profile/MyProfile.vue";

import AdminLayout from "../components/Layout/Admin";
import AuthLayout from "../components/Layout/FullPage";
import islogindIn from "./islogindIn";
// import { component } from "vue/types/umd";

// import { component } from "vue/types/umd";
const router = new VueRouter({
  mode: "history",

  routes: [
    // Dashboard routes
    {
      path: "/dashboard",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "AdminDashboard",
          component: AdminDashboard,
          meta: {
            auth: true,
          },
        },
      ],
    },
    // Category
    {
      path: "/product-category",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "CategoryList",
          component: CategoryList,
          meta: {
            auth: true,
          },
        },
        {
          path: "/add-category",
          name: "AddCategory",
          component: AddCategory,
          meta: {
            auth: true,
          },
        },
        {
          path: "/edit-category/:id",
          name: "EditCategory",
          component: EditCategory,
          meta: {
            auth: true,
          },
        },
      ],
    },
    // Product Inventory Routes
    {
      path: "/product-inventory",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "ProductList",
          component: ProductList,
          meta: {
            auth: true,
          },
        },
        {
          path: "detail/:id",
          name: "ProductDetail",
          component: ProductDetail,
          meta: {
            auth: true,
          },
        },
        {
          path: "/create-product",
          name: "CreateProduct",
          component: CreateProduct,
          meta: {
            auth: true,
          },
        },
        {
          path: "edite-product/:id",
          name: "EditeProduct",
          component: EditeProduct,
          meta: { auth: true },
        },
      ],
    },

    // user Routes
    {
      path: "/user",
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

        {
          path: "blocked-user",
          name: "BlockedUser",
          component: BlockedUser,
          meta: {
            auth: true,
          },
        },
      ],
    },

    // Rider
    {
      path: "/Rider",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "RiderList",
          component: RiderList,
          meta: {
            auth: true,
          },
        },

        {
          path: "/details/:id",
          name: "RiderDetail",
          component: RiderDetail,
          meta: {
            auth: true,
          },
        },

        {
          path: "blocked",
          name: "BlockedRider",
          component: BlockedRider,
          meta: {
            auth: true,
          },
        },
      ],
    },

    // Feedback ROutes
    {
      path: "/feedback",
      component: AdminLayout,
      children: [
        {
          path: "/",
          name: "FeedbackList",
          component: FeedbackList,
          meta: { auth: true },
        },
        {
          path: "details/:id",
          name: "FeedbackDetail",
          component: FeedbackDetail,
          meta: { auth: true },
        },
      ],
    },
    // profile routes
    {
      path: "/profile",
      component: AdminLayout,
      children: [
        {
          path: "/",
          component: MyProfile,
          name: "my-profile",
          meta: { auth: true },
        },
      ],
    },
    // Auth routes
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
          path: "password-form",
          component: PasswordForm,
          name: "password-form",
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
      return next({ name: "AdminDashboard" });
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
