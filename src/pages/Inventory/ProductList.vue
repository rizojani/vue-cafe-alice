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
      <div
        class="d-flex mt-1 align-items-center justify-content-between flex-wrap"
      >
        <div class="d-flex align-items-center flex-wrap">
          <p class="grey">Show</p>
          <select class="entry-select ml-1" name="" id="">
            <option value="">10</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
          <p class="grey ml-1">Entries</p>
        </div>
        <div class="d-flex align-items-center flex-wrap">
          <router-link :to="{ name: 'CreateProduct' }">
            <a href="javascript:void(0)"
              ><button class="px-2 h-45 py-0">Create Products</button></a
            >
          </router-link>
          <!-- <input
            type="text"
            class="ml-1 px-1 h-45 py-0"
            name=""
            id=""
            placeholder="Search"
          /> -->
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="alert mt-2" :class="color" role="alert" v-if="notification">
        {{ msg }}
      </div>
      <div class="clearfix"></div>
      <div class="card jost pad-20 mt-2 rounded-1">
        <div class="card-content collapse show">
          <div class="card-body table-responsive card-dashboard">
            <div class="clearfix"></div>
            <div class="clearfix"></div>

            <div class="">
              <table
                class="table text-center table-striped table-bordered zero-configuration"
              >
                <thead>
                  <tr>
                    <th class="d-grey bold">S.NO</th>
                    <th class="d-grey bold">Product name</th>
                    <th class="d-grey bold">price</th>
                    <th class="d-grey bold">status</th>
                    <th class="d-grey bold">added on</th>
                    <th class="d-grey text-center bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in products" :key="index">
                    <td class="py-0">{{ ++index }}</td>
                    <td class="py-0">{{ product.title }}</td>
                    <td class="py-0">{{ product.price }}</td>
                    <td class="py-0">
                      <i
                        class="fas fa-circle"
                        style="color: green; font-size: 14px"
                        v-if="product.status == 1"
                      ></i>
                      <i
                        class="fas fa-circle"
                        style="color: red; font-size: 14px"
                        v-else
                      ></i>
                    </td>
                    <td class="py-0">{{ product.created_at }}</td>
                    <td class="py-0">
                      <div
                        class="btn-group mr-1 mb-1"
                        :id="'userAction_1_' + product.id"
                      >
                        {{ product.id }}
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          :id="'userAction_2_' + product.id"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          @click="
                            addCls(
                              'userAction_1_' + product.id,
                              'userAction_2_' + product.id,
                              'userAction_3_' + product.id
                            )
                          "
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          :id="'userAction_3_' + product.id"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(-108px, 23px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <router-link
                            class="dropdown-item"
                            :to="{
                              name: 'ProductDetail',
                              params: { id: product.id },
                            }"
                          >
                            <i class="fa fa-eye"></i>View {{ product.id }}
                          </router-link>
                          <router-link
                            :to="{
                              name: 'EditeProduct',
                              params: { id: product.id },
                            }"
                          >
                            <a class="dropdown-item" href="javascript:void(0)"
                              ><i class="fa fa-trash"></i>Edit</a
                            >
                          </router-link>
                          <router-link
                            :to="{
                              name: 'ProductDetail',
                              params: { id: product.id },
                            }"
                          >
                            <a class="dropdown-item" href="javascript:void(0)"
                              ><i class="fas fa-pencil-alt"></i>Reviews</a
                            >
                          </router-link>
                          <a
                            class="dropdown-item"
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#inactivate"
                            @click="changeStatus(product.id)"
                            v-if="product.status == '1'"
                            ><i class="fa fa-circle"></i>Inactive</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#inactivate"
                            @click="changeStatus(product.id)"
                            v-else
                            ><i class="fa fa-circle"></i>Active</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="modal fade"
              id="inactivate"
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
                  <div class="px-3 pb-5 text-center">
                    <img src="images/alert.png" alt="" class="img-fluid" />
                    <h3 class="jost bold mt-1 clr-orange">Alert</h3>
                    <p class="d-blue mt-1 medium">
                      Are you sure you want to Inactivate this Product?
                    </p>
                    <div class="d-flex flex-wrap justify-content-center">
                      <a
                        href="#_"
                        data-toggle="modal"
                        data-target="#blockuseradded"
                        data-dismiss="modal"
                        aria-label="Close"
                        ><button class="px-4 mx-1 py-1 mt-2">Yes</button></a
                      >
                      <a href="#_" data-dismiss="modal" aria-label="Close"
                        ><button class="px-4 mx-1 py-1 mt-2">No</button></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    <!-- // Basic form layout section end -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkParams: "",

      testClass: "",
      notification: false,
      msg: "",
      color: "",

      products: [],
    };
  },

  mounted() {
    this.getProducts();

    this.checkParams = this.$route.params.msg;
    this.color = this.$route.params.color;
    // console.log("params value = " + this.checkParams);
    if (this.checkParams != undefined) {
      this.err(this.checkParams, this.color);
    }
  },

  methods: {
    err(msg, color) {
      // alert(msg + "class = " + color);

      this.notification = true;
      this.msg = msg;
      this.color = color; // alert-success - alert-danger
    },

    async changeStatus(id) {
      try {
        let response = await this.axios.get(
          `api/product-inventroy/status/${id}`
        );
        if (response.data.status) {
          this.err(response.data.message, "alert-success");
        } else {
          this.err(response.data.message, "alert-danger");
        }
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.getProducts();
    },

    async getProducts() {
      try {
        let response = await this.axios.get("api/product-inventroy");
        this.products = response.data.products;
        // console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },

    // @click="addCls()"
    addCls(id1, id2, id3) {
      let userActionCls_1 = document.getElementById(id1);
      let userActionCls_2 = document.getElementById(id2);
      let userActionCls_3 = document.getElementById(id3);

      if (!userActionCls_1.classList.contains("show")) {
        // this
        userActionCls_1.classList.add("show");
        userActionCls_2.setAttribute("aria-expanded", true);
        userActionCls_3.classList.add("show");
      } else {
        userActionCls_1.classList.remove("show");
        userActionCls_2.setAttribute("aria-expanded", false);
        userActionCls_3.classList.remove("show");
      }
    },
  },
};
</script>
