<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>

      <h3 class="pull-left bold uppercase black mt-2">Products</h3>
      <div class="clearfix"></div>
      <h3 class="pull-left medium black p_lg mt-2 mb-0 pb-0">
        Category Management
      </h3>

      <div class="clearfix"></div>
      <p class="clr_grey medium mt-1 p_sm">Add Category</p>
      <div class="clearfix"></div>
      <ValidationObserver ref="addCategoryObserver" v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(AddCategory)"
          enctype="multipart/form-data"
          id="addCategoryForm"
        >
          <div class="card p-2 mt-1">
            <div class="row align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">
                  Category Name<span class="red">*</span>
                </p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <ValidationProvider
                  vid="name"
                  name="Category Name"
                  v-slot="{ errors }"
                  rules="required"
                >
                  <input type="text" class="w-100" v-model="name" />
                  <div class="text-danger">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3 align-items-center">
              <div class="col-sm-4 col-lg-3">
                <p class="black p_sm ml-1">Image<span class="red">*</span></p>
              </div>
              <div class="col-lg-4 col-sm-8">
                <img src="" id="myImage" style="height: auto; width: 10rem" />
                <div class="upload-btn-wrapper-1">
                  <a href="javascript:void(0)"
                    ><button class="btn-2 px-3">Upload</button></a
                  >
                  <input
                    requierd
                    type="file"
                    name="image"
                    id="image"
                    @change="getFile"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 mt-2 col-lg-3">
                <p class="black p_sm ml-1 mt-1">In Stock</p>
              </div>
              <div class="col-lg-4 mt-2 col-sm-8">
                <div class="d-flex align-items-center">
                  <ValidationProvider
                    vid="status"
                    name="status"
                    v-slot="{ errors }"
                    rules="required"
                  >
                    <input
                      type="radio"
                      name="status"
                      id=""
                      value="1"
                      v-model="status"
                    />
                    <label for="" class="mt-0 ml-1 p_sm">In Stock</label>
                    <input
                      type="radio"
                      class="ml-2"
                      name="status"
                      id=""
                      value="0"
                      v-model="status"
                    />
                    <label for="" class="mt-0 ml-1 p_sm">Out of Stock</label>
                    <div class="text-danger">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <a href="javascript:void(0)"
                  ><button class="px-5 mt-2 py-1">Add</button></a
                >
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>

      <div
        class="modal fade"
        id="logout"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <button
              type="button"
              class="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="px-2 pb-5 text-center">
              <img src="images/alert.png" alt="" class="img-fluid" />
              <h3 class="jost bold mt-1 clr-orange">Alert</h3>
              <p class="d-blue mt-1 medium">Are you sure you want to Logout?</p>
              <div class="d-flex flex-wrap justify-content-center">
                <a href="admin-login.html"
                  ><button class="px-4 mx-1 py-1 mt-2">Yes</button></a
                >
                <a href="#_"
                  ><button
                    class="px-4 mx-1 py-1 mt-2"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    No
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      image: "",
      status: "",
    };
  },
  methods: {
    getFile({ target: { files } }) {
      // alert("onchange");
      let image = URL.createObjectURL(files[0]);
      document.getElementById("myImage").setAttribute("src", image);
      this.image = files[0];
      // console.log(files[0]);
      // console.log(image);
    },

    async AddCategory() {
      try {
        let fd = new FormData();
        fd.append("name", this.name);
        fd.append("image", this.image);
        fd.append("status", this.status);
        let response = await this.axios.post("api/product-category/store", fd);

        if (response.data.status) {
          //   this.$router.push({ name: "products.index", params: { id: 1 } });
          // {name: 'products.index', params: { id: 1 }}
          this.$router.push({
            name: "CategoryList",
            params: { msg: response.data.message },
          });
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      console.log("add cat function");
    },
  },
};
</script>
