<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>

      <h3 class="pull-left bold uppercase black mt-2">Rider</h3>
      <div class="clearfix"></div>
      <div class="d-flex align-items-center mt-1 justify-content-between">
        <h3 class="pull-left medium p_lg black">Rider Log</h3>
        <router-link :to="{ name: 'BlockedRider' }">
          <a href="javascript:void(0)"
            ><button class="px-3 h-45 py-0">Block Rider</button></a
          >
        </router-link>
      </div>
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
                class="table table-striped table-bordered zero-configuration"
              >
                <thead>
                  <tr>
                    <th class="d-grey bold">S.NO</th>
                    <th class="d-grey bold">Rider name</th>
                    <th class="d-grey bold">status</th>
                    <th class="d-grey bold">Email</th>
                    <th class="d-grey bold">Phone no</th>
                    <th class="d-grey bold">Availability</th>
                    <th class="d-grey text-center bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(rider, riderIndex) in riders" :key="riderIndex">
                    <td class="py-0">{{ ++riderIndex }}</td>
                    <td class="py-0">
                      {{ rider.first_name }} {{ rider.last_name }}
                    </td>
                    <td class="py-0">
                      <i
                        class="fas fa-circle"
                        style="color: green; font-size: 14px"
                        v-if="rider.status == 1"
                      ></i>
                      <i
                        class="fas fa-circle"
                        style="color: red; font-size: 14px"
                        v-else
                      ></i>
                    </td>
                    <td class="py-0">{{ rider.email }}</td>
                    <td class="py-0">{{ rider.phone }}</td>
                    <td class="py-0">{{ rider.availability }}</td>
                    <td class="py-0">
                      <div class="btn-group mr-1 mb-1" id="userAction_1">
                        <button
                          type="button"
                          class="btn dropdown-toggle btn-drop-table btn-sm"
                          id="userAction_2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          @click="addCls()"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </button>

                        <div
                          class="dropdown-menu"
                          id="userAction_3"
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
                            :to="{
                              name: 'RiderDetail',
                              params: { id: rider.id },
                            }"
                          >
                            <a
                              class="dropdown-item uppercase"
                              href="javascript:void(0)"
                              ><i class="fa fa-eye"></i>View</a
                            >
                          </router-link>

                          <a
                            class="dropdown-item uppercase"
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#blockRider"
                            @click="changStatus(rider.id)"
                            ><i class="fa fa-ban"></i>Block</a
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
              id="blockRider"
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
                    <p class="d-blue mt-1 medium">
                      Are you sure you want to block this Rider?
                    </p>
                    <div class="d-flex flex-wrap justify-content-center">
                      <a
                        href="#_"
                        data-toggle="modal"
                        data-target="#riderBlocked"
                        data-dismiss="modal"
                        aria-label="Close"
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
            <div
              class="modal fade"
              id="riderBlocked"
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
                    <p class="d-blue mt-1 medium">Rider has been Blocked</p>
                    <div class="d-flex flex-wrap justify-content-center">
                      <a href="" data-dismiss="modal" aria-label="Close"
                        ><button class="px-4 mx-1 py-1 mt-2">Got It</button></a
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
  </div>
  <!-- // Basic form layout section end -->
</template>
<script>
export default {
  data() {
    return {
      notification: false,
      msg: "",
      color: "",
      riders: [],
    };
  },

  mounted() {
    this.getRiders();
  },

  methods: {
    async getRiders() {
      try {
        let response = await this.axios.get("api/admin-rider");
        if (response.data.status) {
          this.riders = response.data.riders;
          console.log(this.riders);
        }
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async changStatus(id) {
      try {
        let response = await this.axios.put(
          `api/admin-rider/block-rider/${id}`
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
      this.getRiders();
    },

    err(msg, color) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
      this.color = color; // alert-success - alert-danger
    },

    // @click="addCls()"
    addCls() {
      let userActionCls_1 = document.getElementById("userAction_1");
      let userActionCls_2 = document.getElementById("userAction_2");
      let userActionCls_3 = document.getElementById("userAction_3");

      if (!userActionCls_1.classList.contains("show")) {
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
