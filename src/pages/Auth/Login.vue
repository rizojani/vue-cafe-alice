<!-- @format -->

<template>
  <div class="row">
    <div class="col-5 pr-0">
      <div
        class="admin-login-inner d-flex align-items-center justify-content-center"
      >
        <img src="images/logo-bg.png" alt="" class="img-fluid" />
      </div>
    </div>
    <div class="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
      <div class="">
        <div class="admin-login-card w-100 p-5">
          <!-- error message -->
          <div
            class="alert alert-dismissible fade show"
            role="alert"
            v-if="notification"
          >
            <strong></strong>{{ msg }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <!-- error message -->
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @input="err_msg = null" @submit.prevent="handleSubmit(login)">
              <div class="text-left">
                <h4 class="medium clr-orange">Login To Your Account</h4>
                <hr class="blue_line bck-orange" />
                <div class="md-form md-outline input-with-pre-icon">
                  <i class="fas fa-envelope input-prefix"></i>

                  <ValidationProvider
                    name="email"
                    v-slot="{ errors }"
                    rules="required|email"
                  >
                    <input
                      type="email"
                      id="prefixInside2"
                      class="form-control py-2"
                      name="email"
                      v-model="email"
                      placeholder="Enter Email Address"
                    />

                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="md-form md-outline input-with-pre-icon">
                  <i class="fas fa-lock input-prefix"></i>
                  <ValidationProvider
                    name="password"
                    v-slot="{ errors }"
                    rules="required"
                  >
                    <input
                      type="text"
                      id="prefixInside2"
                      name="password"
                      class="form-control py-2"
                      v-model="password"
                      placeholder="Enter Password"
                    />
                    <i class="fas fa-eye-slash hide-pass"></i>
                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      class="custom-check"
                      value="Remember me"
                    />
                    <label class="p_md l-grey ml-2" for="">Remember me</label>
                  </div>

                  <router-link :to="{ name: 'forget-password-form' }"
                    ><a href="javascript:void(0)" class="clr-orange"
                      >Forgot Password?</a
                    ></router-link
                  >
                </div>
                <a href="javascript:void(0)"
                  ><button class="w-100 mt-4">Login</button></a
                >
                <div class="mt-5 text-center">
                  <a href="#_" class="medium clr_grey"
                    ><i class="fa fa-arrow-circle-left mr-2"></i> Back To
                    Website</a
                  >
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notification: false,
      result: "",
      msg: "",
      email: "",
      password: "",
    };
  },

  methods: {
    err: function (result, msg) {
      this.notification = true;
      this.result = result;
      this.msg = msg;
      console.log(result, msg);
    },
    login() {
      let fd = new FormData();
      fd.append("email", this.email);
      fd.append("password", this.password);
      let self = this;
      this.axios
        .post("api/login", fd)
        .then(function (response) {
          // this.err(true, response.fail);
          // let data = response;
          if (response.data.token != undefined) {
            // window.location.replace("admin");
            window.location.reload();
            localStorage.setItem("token", response.data.token);
            // console.log(localStorage.getItem("token"));
          } else {
            console.log(response.data);
            // console.log();
            self.err("Fail", response.data.message);
            console.log(this.err_msg1);

            // this.msg = response.data.message;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
