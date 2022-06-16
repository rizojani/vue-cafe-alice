<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <ValidationObserver
        ref="UpdateProductProviderObserver"
        v-slot="{ handleSubmit }"
      >
        <form
          @submit.prevent="handleSubmit(UpdateProduct)"
          enctype="multipart/form-data"
          id="addProductForm"
        >
          <h3 class="pull-left bold uppercase black mt-2">Products</h3>
          <div class="clearfix"></div>
          <h3 class="pull-left bold black mt-2 mb-0 pb-0">Add New Product</h3>
          <div class="clearfix"></div>
          <p class="clr_grey medium mt-3 p_sm">Basic Image</p>
          <div class="clearfix"></div>

          <div class="row">
            <div class="upload-btn-wrapperr m-1">
              <div class="position-relative">
                <img
                  :src="url + '/storage/product/images/' + old_basic_image"
                  alt="....."
                  class="imgSiz"
                  id="basic_image"
                />
              </div>
            </div>
            <div class="upload-btn-wrapperr m-1">
              <div class="position-relative">
                <button class="btn-upload">
                  <img src="" id="basic_image" class="imgSiz" />
                  <i class="fas fa-plus-circle"></i>
                </button>
                <!-- <ValidationProvider
                vid="basic_image"
                name="Basic Image"
                v-slot="{ errors }"
                rules="required"
              > -->
                <input
                  type="file"
                  name="basic_image"
                  @change="getFile('basic_image')"
                  accept="image/*"
                />
                <!-- <div class="text-danger">{{ errors[0] }}</div>
              </ValidationProvider> -->
              </div>
            </div>
          </div>

          <div class="clearfix"></div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="d-flex mt-3 justify-content-between">
                <p class="clr_grey medium p_sm">Secondary Image</p>
                <!-- <a href="#_" class="clr-orange">Add Another</a> -->
              </div>
              <div class="d-flex flex-wrap flex-lg-nowrap">
                <div
                  class="product-img ml-1 mt-1"
                  v-for="(image, imgIndex) in sec_img"
                  :key="imgIndex"
                  :id="'id_' + image.id"
                >
                  <img
                    :src="url + '/storage/product/images/' + image.name"
                    alt="....."
                    class="imgSiz"
                    v-if="image.basic != 1"
                  />
                  <!-- <img src="images/product-2.png" alt="" /> -->
                  <i
                    class="fa fa-trash clr-orange"
                    v-if="image.basic != 1"
                    @click="deleteImg(image.id)"
                  ></i>
                </div>
              </div>
              <div class="d-flex flex-wrap flex-lg-nowrap">
                <div class="upload-btn-wrapperr mt-1 ml-1">
                  <div class="position-relative">
                    <button class="btn-upload">
                      <img src="" id="sec_img_1" class="imgSiz" />
                      <i class="fas fa-plus-circle"></i>
                    </button>
                    <input
                      type="file"
                      name="sec_img_1"
                      @change="getFile('sec_img_1')"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div class="upload-btn-wrapperr mt-1 ml-1">
                  <div class="position-relative">
                    <button class="btn-upload">
                      <img src="" id="sec_img_2" class="imgSiz" />
                      <i class="fas fa-plus-circle"></i>
                    </button>

                    <input
                      type="file"
                      name="sec_img_2"
                      accept="image/*"
                      @change="getFile('sec_img_2')"
                    />
                  </div>
                </div>
                <div class="upload-btn-wrapperr mt-1 ml-1">
                  <div class="position-relative">
                    <button class="btn-upload">
                      <img src="" id="sec_img_3" class="imgSiz" />
                      <i class="fas fa-plus-circle"></i>
                    </button>
                    <input
                      type="file"
                      name="sec_img_3"
                      @change="getFile('sec_img_3')"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 class="bold grey_bck p-1 mt-3">Create Category</h4>
          <div class="row align-items-center">
            <div class="col-sm-4 mt-2 col-lg-3">
              <p class="black p_sm ml-1">
                Select Category <sup class="red">*</sup>
              </p>
            </div>
            <div class="col-lg-4 mt-2 col-sm-8">
              <!-- {{ categories }} -->
              <select class="form-control form-control-sm" v-model="category">
                <option
                  v-for="(category, catIndex) in categories"
                  :key="catIndex"
                  :value="category.id"
                  :selected="category.id == check_cate ? true : false"
                >
                  {{ category.name }}
                </option>

                <!-- <option
                  v-for="(category, catIndex) in categories"
                  :key="catIndex"
                  :id="id_ + catIndex"
                >
                  {{ category.name }}
                </option> -->
                <!-- <option></option>
                <option></option> -->
              </select>
            </div>
          </div>
          <h4 class="bold grey_bck p-1 mt-4">Description</h4>
          <div class="row align-items-center">
            <div class="col-sm-4 mt-2 col-lg-3">
              <p class="black p_sm ml-1">Title</p>
            </div>
            <div class="col-lg-4 mt-2 col-sm-8">
              <ValidationProvider
                vid="title"
                name="title"
                v-slot="{ errors }"
                rules="required"
              >
                <input type="text" name="title" v-model="title" class="w-100" />
                <div class="text-danger">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-4 mt-1 col-lg-3">
              <p class="black p_sm ml-1">Price</p>
            </div>
            <div class="col-lg-4 mt-1 col-sm-8">
              <ValidationProvider
                vid="price"
                name="price"
                v-slot="{ errors }"
                rules="required|numeric"
              >
                <input type="text" name="price" class="w-100" v-model="price" />
                <div class="text-danger">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-4 mt-1 col-lg-3">
              <p class="black p_sm ml-1">Description</p>
            </div>
            <div class="col-lg-4 mt-1 col-sm-8">
              <ValidationProvider
                vid="description"
                name="Description"
                v-slot="{ errors }"
                rules="required"
              >
                <input type="text" class="w-100" v-model="description" />
                <div class="text-danger">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-sm-4 mt-2 col-lg-3">
              <p class="black p_sm ml-1">Status</p>
            </div>
            <div class="col-lg-4 d-flex align-items-center mt-2 col-sm-8">
              <ValidationProvider
                vid="status"
                name="Status"
                v-slot="{ errors }"
                rules="required"
              >
                <input
                  type="radio"
                  name="status"
                  value="1"
                  id=""
                  v-model="status"
                />
                <label for="" class="mt-0 ml-1 p_sm">In-stock</label>
                <input
                  type="radio"
                  class="ml-2"
                  value="0"
                  name="status"
                  v-model="status"
                />
                <label for="" class="mt-0 ml-1 p_sm">Out-stock</label>
                <div class="text-danger">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <a href="javascript:void(0)"
              ><button class="px-2 mt-5 py-1">Update Product</button></a
            >
          </div>
        </form>
      </ValidationObserver>
    </section>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      categories: [],

      //   form fileds
      old_basic_image: "",
      basic_image: "",
      sec_img: [],
      files: [],
      sec_img_1: "",
      sec_img_2: "",
      sec_img_3: "",
      category: "",
      check_cate: "",
      title: "",
      price: "",
      description: "",
      status: "",
      url: "",
    };
  },

  created() {
    // this.getFile();
    this.getProduct(this.$route.params.id);
    this.getCategory();
  },

  methods: {
    async deleteImg(id) {
      try {
        let response = await this.axios.delete(`api/image/delete/${id}`);
        if (response.data.status) {
          document.getElementById("id_" + id).remove();
        }
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async getProduct(id) {
      try {
        let response = await this.axios.get(`api/product-inventroy/?id=${id}`);
        let product = response.data.products[0];

        this.old_basic_image = product.cover_image.name;
        this.sec_img = product.images;
        // this.basic_image = product.cover_image.name;
        this.category = product.category_id;
        this.check_cate = product.category_id;
        // console.log("check cat : " + this.check_cate);
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
        this.status = product.status;
        this.url = product.url;
        // document.getElementById('bas').setAttribute('src', )

        console.log(product);
      } catch (error) {
        console.log(error);
      }
    },
    getFile(id) {
      let image = URL.createObjectURL(event.target.files[0]);
      //   let myVar = ["sec_img"];
      let file = event.target.files[0];
      if (id != "basic_image") {
        this.files.push(file);
      } else {
        this.basic_image = file;
      }

      document.getElementById(id).setAttribute("src", image);
    },
    async getCategory() {
      try {
        let response = await this.axios.get("api/product-category");
        this.categories = response.data.category;
        // console.log(response.data.category);
      } catch (error) {
        console.log(error);
      }

      //   console.log("getCategory function check");
    },

    async UpdateProduct() {
      try {
        console.log(this.files);
        let fd = new FormData();

        fd.append("basic_image", this.basic_image);
        this.files.forEach(function (image, index) {
          fd.append("sec_img[" + index + "]", image);
        });
        fd.append("category", this.category);
        fd.append("title", this.title);
        fd.append("price", this.price);
        fd.append("description", this.description);
        fd.append("status", this.status);
        fd.append("id", this.$route.params.id);

        let response = await this.axios.post(
          "api/product-inventroy/update",
          fd
        );

        console.log(response);

        if (response.data.status) {
          this.$router.push({
            name: "ProductList",
            params: { msg: response.data.message, color: "alert-success" },
          });
        } else {
          this.$router.push({
            name: "ProductList",
            params: { msg: response.data.message, color: "alert-danger" },
          });
        }

        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.imgSiz {
  height: auto;
  width: 10rem;
}
</style>
