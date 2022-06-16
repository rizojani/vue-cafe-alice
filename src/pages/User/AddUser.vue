<!-- @format -->

<template>
  <div class="content-body">
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <h3 class="pull-left bold uppercase black mt-2">Add User</h3>
      <div class="clearfix"></div>

      <div class="alert alert-primary" role="alert" v-if="notification">
        {{ msg }}
      </div>
      <div class="clearfix"></div>

      <!-- <h3 class="pull-left medium black p_lg mt-2 mb-0 pb-0">
      Category Management
    </h3> -->
      <!-- <div class="clearfix"></div>
    <p class="clr_grey medium mt-1 p_sm">Add Category</p>
    <div class="clearfix"></div> -->
      <ValidationObserver ref="addUserObserver" v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(addUser)"
          enctype="multipart/form-data"
          id="addUserForm"
        >
          <div class="card p-2 mt-1">
            <div class="row align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">
                  First Name<span class="red">*</span>
                </p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  vid="first_name"
                  name="first name"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    class="w-100"
                    name="frist_name"
                    v-model="first_name"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">
                  Last Name<span class="red">*</span>
                </p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="last_name"
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
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Email<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  vid="email"
                  name="email"
                  v-slot="{ errors }"
                  rules="required|email"
                >
                  <input
                    type="email"
                    class="w-100"
                    name="email"
                    v-model="email"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">
                  Password<span class="red">*</span>
                </p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="password"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    class="w-100"
                    name="password"
                    v-model="password"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">
                  Confirm Password<span class="red">*</span>
                </p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="password_confirmation"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    class="w-100"
                    name="password_confirmation"
                    v-model="password_confirmation"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Phone<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="phone"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    class="w-100"
                    name="phone"
                    v-model="phone"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Card<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="card"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input type="text" class="w-100" name="card" v-model="card" />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Image<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <!-- <ValidationProvider
                name="image"
                v-slot="{ errors }"
                rules="required"
              > -->
                <input
                  type="file"
                  class="w-100"
                  name="image"
                  id="image"
                  @change="getFile"
                />
                <!-- <div class="text-danger">{{ errors[0] }}</div> -->
                <!-- </ValidationProvider> -->
              </div>
            </div>
            <div class="row mt-2 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Address<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  name="address"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input
                    type="text"
                    class="w-100"
                    name="address"
                    v-model="address"
                  />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <!-- <div class="row mt-3 align-items-center">
            <div class="col-sm-4 col-lg-3">
              <p class="black p_sm ml-1"><span class="red">*</span></p>
            </div>
            <div class="col-lg-4 col-sm-8">
              <div class="upload-btn-wrapper-1">
                <a href=""><button class="btn-2 px-3">Upload</button></a>
                <input type="file" name="myfile" />
              </div>
            </div>
          </div> -->
            <div class="row mt-2">
              <div class="col-sm-4 mt-2 col-lg-3">
                <!-- <p class="black p_sm ml-1 mt-1">Gender</p> -->
              </div>
              <div class="col-lg-4 mt-2 col-sm-8">
                <a href="javascript:void(0)"
                  ><button class="px-5 mt-2 py-1">Add</button></a
                >
                <span class="m-2">
                  <a href="product-category.html" class="pe-2"
                    ><button class="px-5 mt-2 py-1">Cancel</button></a
                  >
                </span>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </section>
  </div>
</template>
<script>
// import {
//   first,
//   forEach,
// }
// from "@/assets/cafe-alice/app-assets/vendors/js/extensions/underscore-min";
export default {
  name: "add-user",

  data: function () {
    return {
      notification: false,
      msg: "",

      userData: [],
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      card: "",
      image: "",
      address: "",

      err_message: [],

      // "first_name" => 'required|alpha',
      // "last_name" => "nullable",
      // "email"=> "required|email|unique:users",
      // "password" => "required|confirmed",
      // 'phone' => "required",
      // 'card' => "required",
      // 'image' => "required",
      // 'address' => 'required',
    };
  },

  mounted() {},

  methods: {
    getFile({ target: { files } }) {
      // alert("onchange");
      let image = URL.createObjectURL(files[0]);
      this.image = files[0];
      // console.log(files[0]);
      // console.log(image);
    },

    // setErr(property, val) {
    //   // property = val;
    //   console.log(property);
    // },

    addUser: function () {
      console.log(this.first_name);
      let fd = new FormData();
      fd.append("first_name", this.first_name);
      fd.append("last_name", this.last_name);
      fd.append("email", this.email);
      fd.append("password", this.password);
      fd.append("password_confirmation", this.password_confirmation);
      fd.append("card", this.card);
      fd.append("phone", this.phone);
      fd.append("image", this.image);
      fd.append("address", this.address);

      let self = this;
      this.axios
        .post("api/register", fd)
        .then(function (response) {
          // console.log(message);
          if (response.data.boole) {
            document.getElementById("addUserForm").reset();
            self.notification = true;
            self.msg = response.data.success;
          } else {
          }
          // console.log(response.data.boole);
          // console.log(JSON.parse());
        })
        .catch(function (error) {
          // error.response.data.forEach((item) => console.log(item));
          if (error.response) {
            let { data } = error.response;
            // console.log(self.$refs.addUserObserver);
            self.$refs.addUserObserver.setErrors(data);
          }
          // self.err_message = error.response.data;
          // console.log(self.err_message);

          // console.log(error.response.data);
        });
    },
  },
};

// login() {
//   let fd = new FormData();
//   fd.append("email", this.email);
//   fd.append("password", this.password);
//   let self = this;
//   this.axios
//     .post("api/login", fd)
//     .then(function (response) {
//       // this.err(true, response.fail);
//       // let data = response;
//       if (response.data.token != undefined) {
//         // window.location.replace("admin");
//         window.location.reload();
//         localStorage.setItem("token", response.data.token);
//         // console.log(localStorage.getItem("token"));
//       } else {
//         console.log(response.data);
//         // console.log();
//         self.err("Fail", response.data.message);
//         console.log(this.err_msg1);

//         // this.msg = response.data.message;
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// },
</script>
