<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>

      <div class="clearfix"></div>
      <router-link :to="{ name: 'ProductList' }">
        <a href="javascript:void(0)">
          <h3 class="pull-left bold uppercase black mt-2">
            <i class="fas fa-angle-left"></i> Products
          </h3>
        </a>
      </router-link>
      <div class="clearfix"></div>
      <h4 class="pull-left medium p_lg black mt-2">Product Detail</h4>
      <div class="clearfix"></div>
      <div class="alert mt-2" :class="color" role="alert" v-if="notification">
        {{ msg }}
      </div>
      <div class="clearfix"></div>
      <div class="row">
        <div class="col-xl-2 col-md-3">
          <img
            :src="
              product.url +
              '/storage/product/images/' +
              product.cover_image.name
            "
            alt=""
            class="img-fluid mt-1"
          />
          <div class="d-flex">
            <img
              v-for="(image, index) in product.images"
              :key="index"
              :src="product.url + '/storage/product/images/' + image.name"
              alt=""
              class="img-fluid"
              style="height: 3rem"
            />
          </div>
        </div>
        <div class="mt-2 col-lg-2 col-md-3">
          <h4 class="p_sm black bold">Product name:</h4>
          <h4 class="p_sm black bold mt-1">In Stock:</h4>
          <h4 class="p_sm black bold mt-1">Sold:</h4>
        </div>
        <div class="mt-2 col-lg-2 col-md-3">
          <h4 class="p_sm l-grey bold">{{ product.title }}</h4>
          <h4 class="p_sm l-grey bold mt-1">
            {{ product.status == 1 ? "Available" : "Sold out" }}
          </h4>
          <h4 class="p_sm l-grey bold mt-1">{{ product.price }}</h4>
          <!-- <h4 class="p_sm l-grey bold mt-1">Medium</h4> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10">
          <h4 class="p_sm mt-2 black bold">Product Specifications:</h4>
          <h4 class="p_sm lh l-grey mt-1">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip Ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </h4>
        </div>
      </div>
      <div class="row align-items-center mt-2">
        <p class="p_md clr-orange medium ml-1">(2.9/5)</p>
        <div class="rating ml-1">
          <input type="radio" id="star5" name="rating" value="5" /><label
            for="star5"
            title="Meh"
            >5 stars</label
          >
          <input type="radio" id="star4" name="rating" value="4" /><label
            for="star4"
            title="Kinda bad"
            >4 stars</label
          >
          <input type="radio" id="star3" name="rating" value="3" /><label
            for="star3"
            title="Kinda bad"
            >3 stars</label
          >
          <input type="radio" id="star2" name="rating" value="2" /><label
            for="star2"
            title="Sucks big tim"
            >2 stars</label
          >
          <input type="radio" id="star1" name="rating" value="1" /><label
            for="star1"
            title="Sucks big time"
            >1 star</label
          >
        </div>
      </div>
      <div class="row align-items-center">
        <p class="p_md clr-orange ml-1">{{ product.five_star }}</p>
        <div class="ml-2">
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
        </div>
        <div class="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div class="progress">
            <div
              class="progress-bar bck-orange"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <p class="p_md clr-orange ml-1">{{ product.four_star }}</p>
        <div class="ml-2">
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="far fa-star l-grey"></i>
        </div>
        <div class="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div class="progress">
            <div
              class="progress-bar bck-orange"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <p class="p_md clr-orange ml-1">{{ product.three_star }}</p>
        <div class="ml-2">
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
        </div>
        <div class="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div class="progress">
            <div
              class="progress-bar bck-orange"
              role="progressbar"
              style="width: 60%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <p class="p_md clr-orange ml-1">{{ product.two_star }}</p>
        <div class="ml-2">
          <i class="fas fa-star clr-orange"></i>
          <i class="fas fa-star clr-orange"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
        </div>
        <div class="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div class="progress">
            <div
              class="progress-bar bck-orange"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <p class="p_md clr-orange ml-1">{{ product.one_star }}</p>
        <div class="ml-2">
          <i class="fas fa-star clr-orange"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
          <i class="far fa-star l-grey"></i>
        </div>
        <div class="col-xl-3 mt-1 ml-2 col-lg-4 col-sm-7">
          <div class="progress">
            <div
              class="progress-bar bck-orange"
              role="progressbar"
              style="width: 20%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <h4 class="p_sm mt-2 black bold">Reviews</h4>
      <hr />
      <!-- <div class="reviews-card p-2">
        <div class="row">
          <div class="col-xl-6 col-lg-7">
            <div class="media">
              <img src="images/review-1.png" alt="" class="img-fluid" />
              <div class="media-body ml-1">
                <h5 class="mt-0 p_sm bold black">Mark Carson</h5>
                <div class="mt-2">
                  <i class="fas fa-star clr-orange"></i>
                  <i class="fas fa-star clr-orange"></i>
                  <i class="fas fa-star clr-orange"></i>
                  <i class="fas fa-star clr-orange"></i>
                  <i class="far fa-star l-grey"></i>
                </div>
                <p class="clr_grey lh medium p_sm">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip Ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in.
                </p>
                <p class="p_sm clr_grey mt-1">10-25-2020</p>
              </div>
            </div>
          </div>
          <div class="offset-xl-4 mt-1 offset-lg-2 col-lg-2">
            <a href="" data-toggle="modal" data-target="#productDel"
              ><button class="px-3 py-1">Delete</button></a
            >
          </div>
        </div>
      </div> -->
      <div class="reviews-card mb-lg-5 mt-1 p-2">
        <div
          class="row"
          v-for="(review, index) in product.reviews"
          :key="index"
        >
          <div class="col-xl-6 col-lg-7">
            <div class="media">
              <img
                :src="
                  product.url + '/storage/prfile/images/' + review.user.image
                "
                alt=""
                class="img-fluid"
                style="height: 3rem"
              />
              <div class="media-body ml-1">
                <h5 class="mt-0 p_sm bold black">
                  {{ review.user.first_name }} {{ review.user.last_name }}
                </h5>
                <div class="mt-2">
                  <i
                    class="fas fa-star"
                    v-for="star in 5"
                    :key="star"
                    :class="star < review.star ? 'clr-orange' : 'l-grey'"
                  ></i>
                  <!-- <i class="fas fa-star clr-orange"></i>
                  <i class="far fa-star l-grey"></i>
                  <i class="far fa-star l-grey"></i>
                  <i class="far fa-star l-grey"></i> -->
                </div>
                <p class="clr_grey lh medium p_sm">{{ review.comment }}.</p>
                <p class="p_sm clr_grey mt-1">{{ review.created_at }}</p>
              </div>
            </div>
          </div>
          <div class="offset-xl-4 mt-1 offset-lg-2 col-lg-2">
            <a
              href="javascript:void(0)"
              data-toggle="modal"
              data-target="#productDel"
              ><button class="px-3 py-1" @click="deleteReview(review.id)">
                Delete
              </button></a
            >
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
      notification: false,
      msg: "",
      color: "",
      product: {},
      product_id: "",
    };
  },

  created() {
    this.product_id = this.$route.params.id;
    this.getProduct();
  },

  methods: {
    err(msg, color) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
      this.color = color; // alert-success - alert-danger
    },

    async deleteReview(id) {
      try {
        let response = await this.axios.get(
          `api/product-reviews/delete-review/${id}`
        );
        if (response.data.status) {
          this.err(response.data.message, "alert-success");
        } else {
          this.err(esponse.data.message, "alert-danger");
          // this.msg = response.data.message;
        }
        this.getProduct();
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
      // console.log(id);
    },

    async getProduct() {
      try {
        let response = await this.axios.get(
          `api/product-inventroy/details/${this.product_id}`
        );
        this.product = response.data.product;
        // console.log(this.product);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
