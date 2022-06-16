<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <a href="javascript:void(0)" @click="$router.go(-1)">
        <h3 class="pull-left bold uppercase black mt-2">
          <i class="fas fa-angle-left"></i> Users
        </h3>
      </a>
      <div class="clearfix"></div>
      <div class="clearfix"></div>
      <div class="rider-img mt-2">
        <img
          :src="user.baseUrl + '/storage/prfile/images/' + user.image"
          alt=""
          class="rounded-circle mysize"
        />
      </div>
      <div class="col-12 px-0 col-lg-6">
        <div class="row">
          <div class="col-6">
            <h4 class="p_sm bold poppins mt-2 black lh">Name</h4>
            <p class="p_sm l-grey lh">
              {{ user.first_name }} {{ user.last_name }}
            </p>
          </div>
          <div class="col-6">
            <h4 class="p_sm bold poppins mt-2 black lh">Address</h4>
            <p class="p_sm l-grey uppercase lh">
              {{ user.address }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 px-0 col-lg-6">
        <div class="row">
          <div class="col-6">
            <h4 class="p_sm bold poppins mt-2 black lh">Phone no</h4>
            <p class="p_sm l-grey lh">{{ user.phone }}</p>
          </div>
          <div class="col-6">
            <h4 class="p_sm bold poppins mt-2 black lh">Card</h4>
            <p class="p_sm l-grey lh">{{ user.card }}</p>
          </div>
        </div>
      </div>
      <h4 class="p_sm bold poppins mt-1 black lh">Email</h4>
      <p class="p_sm l-grey lh">{{ user.email }}</p>
      <!-- <h4 class="p_sm bold poppins mt-1 black lh">Phone no</h4>
      <p class="p_sm l-grey lh">********</p> -->
      <!-- <div class="card poppins pad-20 mt-2 rounded-1">
        <div class="card-content collapse show">
          <div class="card-body table-responsive card-dashboard">
            <div class="clearfix"></div>
            <div class="clearfix"></div>

            <div class="">
              <table
                class="table table-striped table-bordered zero-configuration"
              >
                <thead>
                  <tr>
                    <th class="d-grey bold">S.NO</th>
                    <th class="d-grey bold">User Name</th>
                    <th class="d-grey bold">Email</th>
                    <th class="d-grey bold">Phone no</th>
                    <th class="d-grey bold">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-0">01</td>
                    <td class="py-0">Mark Carson</td>
                    <td class="py-0">mar.carson@gmail.com</td>
                    <td class="py-0">+1-541-754-3010</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div
                          class="dropdown-menu"
                          x-placement="bottom-start"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 21px, 0px);
                            top: 0px;
                            left: 0px;
                            will-change: transform;
                          "
                        >
                          <a
                            class="dropdown-item uppercase"
                            href="view-user.html"
                            ><i class="fa fa-eye"></i>View</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>
<script>
export default {
  name: "user-detail",

  data() {
    return {
      user_id: "",
      user: {},
    };
  },

  // mounted: function () {
  //   this.getUser();
  // },
  created() {
    this.user_id = this.$route.params.id;
    this.getUser();
    // alert(this.user_id);
  },
  methods: {
    async getUser() {
      try {
        let response = await this.axios.get(
          `api/user/view-user/${this.user_id}`
        );
        this.user = response.data.user;
        // console.log(this.user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.mysize {
  height: auto;
  width: 4.5rem;
}
</style>
