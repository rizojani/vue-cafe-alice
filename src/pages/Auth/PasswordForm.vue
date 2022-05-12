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
          <div class="text-left">
            <h4 class="medium clr-orange">Password Recovery</h4>
            <hr class="blue_line bck-orange" />
            <div class="alert alert-primary" role="alert" v-if="notification">
              {{ msg }}
            </div>
            <ValidationObserver
              ref="UpdatePasswordObserver"
              v-slot="{ handleSubmit }"
            >
              <form @submit.prevent="handleSubmit(updatePassword)">
                <div class="md-form md-outline input-with-pre-icon">
                  <i class="fas fa-key input-prefix"></i>
                  <ValidationProvider
                    vid="password"
                    name="Password"
                    v-slot="{ errors }"
                    rules="required"
                  >
                    <input
                      type="password"
                      class="form-control py-2"
                      placeholder="Enter New Password"
                      name="password"
                      v-model="password"
                    />
                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <i class="fas fa-eye-slash hide-pass"></i>
                </div>

                <div class="md-form md-outline input-with-pre-icon">
                  <i class="fas fa-key input-prefix"></i>
                  <ValidationProvider
                    vid="password_confirmation"
                    name="Password Confirmation"
                    v-slot="{ errors }"
                    rules="required"
                  >
                    <input
                      type="password"
                      class="form-control py-2"
                      placeholder="Retype Password"
                      name="password_confirmation"
                      v-model="password_confirmation"
                    />
                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <i class="fas fa-eye-slash hide-pass"></i>
                </div>

                <a href="javascript:void(0)"
                  ><button class="w-100 mt-2">Update</button></a
                >
              </form>
            </ValidationObserver>
            <div class="mt-4 text-center">
              <a href="javascript:void(0)" class="medium clr_grey"
                ><i class="fa fa-arrow-circle-left mr-2"></i> Back To Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      notification: false,
      msg: "",

      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    err(msg) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
    },

    async updatePassword() {
      let fd = new FormData();
      fd.append("email", localStorage.getItem("email"));
      fd.append("password", this.password);
      fd.append("password_confirmation", this.password_confirmation);

      try {
        let response = await this.axios.post("api/update-password", fd);
        console.log(response);
        if (response.data.status) {
          this.err(response.data.message);
          this.$router.push({ name: "login" });
        } else {
          self.err(response.data.message);
        }
      } catch (error) {
        console.log(error);
        if (error.response) {
          let { data } = error.response;
          this.$refs.UpdatePasswordObserver.setErrors(data);
        }
      }

      console.log(
        "tesinting " + this.password + " " + this.password_confirmation
      );
    },
  },
};
</script>

<!-- if (error.response) {
            let { data } = error.response;
            // console.log(self.$refs.addUserObserver);
            self.$refs.addUserObserver.setErrors(data);
          } -->
