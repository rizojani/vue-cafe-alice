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
          <ValidationObserver
            ref="forgetPasswordObserver"
            v-slot="{ handleSubmit }"
          >
            <form @submit.prevent="handleSubmit(tokenVerification)">
              <div class="text-left">
                <h4 class="medium clr-orange">Password Recovery</h4>
                <hr class="blue_line bck-orange" />
                <div
                  class="alert alert-primary"
                  role="alert"
                  v-if="notification"
                >
                  {{ msg }}
                </div>

                <div class="md-form md-outline mb-0 input-with-pre-icon">
                  <ValidationProvider
                    name="code"
                    v-slot="{ errors }"
                    rules="required|integer"
                  >
                    <i class="fas fa-pencil-alt input-prefix"></i>
                    <input
                      type="text"
                      id="prefixInside2"
                      class="form-control py-2"
                      placeholder="Enter Verification Code"
                      name="token"
                      v-model="token"
                    />
                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <p class="l-grey text-center mt-3">
                  Did not receive email?
                  <a href="javascript:void(0)" class="clr-orange">
                    Send Again</a
                  >
                  30 sec
                </p>
                <a href="javascript:void(0)"
                  ><button class="w-100 mt-4">Continue</button></a
                >

                <div class="mt-3 text-center">
                  <a href="javascript:void(0)" class="medium clr_grey"
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
  data: function () {
    return {
      token: "",

      notification: false,
      msg: "",
    };
  },

  methods: {
    err(msg) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
    },

    async tokenVerification() {
      let self = this;
      let fd = new FormData();
      fd.append("email", localStorage.getItem("email"));
      fd.append("token", this.token);

      try {
        let response = await this.axios.post("api/token-verification", fd);
        // .then(function (response) {
        if (response.data.status) {
          this.err(response.data.message);
          this.$router.push({ name: "password-form" });
        } else {
          self.err(response.data.message);
        }
        // console.log();
        // console.log(response.data.status);
        // });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
