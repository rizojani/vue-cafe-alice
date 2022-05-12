<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <h3 class="pull-left bold uppercase black mt-2">Profile</h3>

      <div class="clearfix"></div>
      <h4 class="p_lg medium mt-1 poppins black lh">User Information</h4>
      <div class="clearfix"></div>
      <div class="alert alert-primary" role="alert" v-if="notification">
        {{ msg }}
      </div>
      <div class="clearfix"></div>

      <!-- @include('parts.msg') -->
      <ul class="nav nav-pills mt-1 mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active px-3"
            id="pills-account-tab"
            data-toggle="pill"
            href="javascript:void(0)"
            role="tab"
            aria-controls="pills-home"
            @click="account_tab()"
            >Account</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link px-3"
            id="pills-password-tab"
            data-toggle="pill"
            href="javascript:void(0)"
            role="tab"
            aria-controls="pills-profile"
            @click="password_tab()"
            >Password</a
          >
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-account"
          role="tabpanel"
          aria-labelledby="pills-account-tab"
        >
          <ValidationObserver
            ref="UpdateProfileObserver"
            v-slot="{ handleSubmit }"
          >
            <form @submit.prevent="handleSubmit(UpdateProfile)">
              <div class="row">
                <div class="col-lg-6">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-sm-4">
                      <p class="p_sm black medium">
                        First name<span class="red">*</span>
                      </p>
                    </div>
                    <div class="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                      <ValidationProvider
                        vid="first_name"
                        name="First Name"
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <input
                          type="text"
                          class="w-100"
                          name="first_name"
                          v-model="first_name"
                        />
                        <div class="text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-6">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-sm-4">
                      <p class="p_sm black medium">
                        Last name<span class="red">*</span>
                      </p>
                    </div>
                    <div class="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                      <ValidationProvider
                        vid="last_name"
                        name="Last Name"
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <input
                          type="text"
                          class="w-100"
                          name="last_name"
                          v-model="last_name"
                        />
                        <div class="text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-6">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-sm-4">
                      <p class="p_sm black medium">
                        Email<span class="red">*</span>
                      </p>
                    </div>
                    <div class="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                      <ValidationProvider
                        vid="email"
                        v-slot="{ errors }"
                        name="E-mail"
                        rules="required|email"
                      >
                        <input
                          type="email"
                          class="w-100"
                          name="email"
                          v-model="email"
                          disabled
                        />
                        <div class="text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-xl-3 offset-lg-4 offset-sm-4 mt-1">
                      <input type="hidden" name="id" />
                      <a href="javascript:void(0)"
                        ><button class="ml-1 px-3 h-45 py-0 mt-2" type="submit">
                          Save
                        </button></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div
          class="tab-pane fade"
          id="pills-password"
          role="tabpanel"
          aria-labelledby="pills-password-tab"
        >
          <ValidationObserver
            ref="ChangePasswordObserver"
            v-slot="{ handleSubmit }"
          >
            <form @submit.prevent="handleSubmit(ChangePassword)">
              <div class="row">
                <div class="col-lg-6">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-sm-4">
                      <p class="p_sm black medium">
                        New Password<span class="red">*</span>
                      </p>
                    </div>
                    <div class="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                      <ValidationProvider
                        vid="password"
                        name="Password"
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <input
                          type="password"
                          class="w-100"
                          name="password"
                          v-model="password"
                        />
                        <div class="text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col-lg-6">
                  <div class="row align-items-center">
                    <div class="col-xl-3 col-sm-4">
                      <p class="p_sm black medium">
                        Confirm New Password<span class="red">*</span>
                      </p>
                    </div>
                    <div class="col-sm-8 col-xl-8 mt-1 mt-sm-0">
                      <ValidationProvider
                        vid="password_confirmation"
                        name="Password Confirmation"
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <input
                          type="password"
                          class="w-100"
                          name="password_confirmation"
                          v-model="password_confirmation"
                        />
                        <div class="text-danger">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-xl-3 offset-lg-4 offset-sm-4 mt-1">
                      <a href="javascript:void(0)"
                        ><button class="ml-1 px-3 h-45 py-0 mt-2" type="submit">
                          Save
                        </button></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      notification: false,
      msg: "",
      user: {},

      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  //   mounted:{
  //       this.user_profile();
  //   },
  created() {
    this.user_profile();
  },
  methods: {
    err(msg) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
    },

    async user_profile() {
      try {
        let response = await this.axios.get("api/get-profile");
        this.user = response.data.user;
        this.first_name = response.data.user.first_name;
        this.last_name = response.data.user.last_name;
        this.email = response.data.user.email;
      } catch (error) {
        console.log(error);
      }
    },

    account_tab: function () {
      let addBtnCls = document.getElementById("pills-account-tab");
      if (!addBtnCls.classList.contains("active")) {
        addBtnCls.classList.add("active");
        document
          .getElementById("pills-password-tab")
          .classList.remove("active");
      }
      let element = document.getElementById("pills-account");
      let removeClsPassword = document.getElementById("pills-password");

      //   element.setAttribute("aria-selected", "true");
      if (!element.classList.contains("active")) {
        element.classList.add("active");
        element.classList.add("show");
        removeClsPassword.classList.remove("active");
        removeClsPassword.classList.remove("show");
      }
      //   console.log(element.classList);
    },

    password_tab: function () {
      //   console.log(this.pills_password_tab);
      let addBtnCls = document.getElementById("pills-password-tab");
      if (!addBtnCls.classList.contains("active")) {
        addBtnCls.classList.add("active");
        document.getElementById("pills-account-tab").classList.remove("active");
      }

      let element = document.getElementById("pills-password");
      let removeClsAccount = document.getElementById("pills-account");

      if (!element.classList.contains("active")) {
        element.classList.add("active");
        element.classList.add("show");
        removeClsAccount.classList.remove("active");
        removeClsAccount.classList.remove("show");
      }
    },

    async UpdateProfile() {
      try {
        let fd = new FormData();
        fd.append("first_name", this.first_name);
        fd.append("last_name", this.last_name);
        fd.append("email", this.email);

        let response = await this.axios.post("api/profile/update", fd);
        if (response.data.status) {
          this.err(response.data.message);
        }
        this.err(response.data.message);
        console.log(response);
      } catch (error) {
        let { data } = error.response;
        this.$refs.UpdateProfileObserver.setErrors(data);
      }
    },

    async ChangePassword() {
      try {
        let fd = new FormData();
        fd.append("password", this.password);
        fd.append("password_confirmation", this.password_confirmation);
        let response = await this.axios.post("api/profile/change-password", fd);
        if (response.data.status) {
          this.err(response.data.message);
        }
        this.err(response.data.message);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
