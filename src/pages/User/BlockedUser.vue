<!-- @format -->

<template>
  <!-- Basic form layout section start -->

  <div class="content-body">
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>

      <h3 class="pull-left bold uppercase black mt-2">Users</h3>
      <div class="clearfix"></div>
      <h3 class="pull-left p_lg medium black mt-2">Users Log</h3>
      <div
        class="d-flex mt-3 align-items-center justify-content-between flex-wrap"
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
        <div>
          <router-link :to="{ name: 'AddUser' }">
            <a href="javascript:void(0)"
              ><button class="px-3 py-0 h-45">Add User</button>
            </a>
          </router-link>
          <router-link :to="{ name: 'UserList' }">
            <a href="javascript:void(0)"
              ><button class="px-3 py-0 h-45 ml-1">Unblocked User</button>
            </a>
          </router-link>
          <input
            type="text"
            class="ml-1 px-1 h-45 py-0"
            name=""
            id=""
            placeholder="Enter Order Id"
          />
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="alert alert-primary mt-2" role="alert" v-if="notification">
        {{ msg }}
      </div>
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
                    <th class="d-grey bold">User Name</th>
                    <th class="d-grey bold">Email</th>
                    <th class="d-grey bold">Phone no</th>
                    <th class="d-grey bold">action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td class="py-0">{{ user.id }}</td>
                    <td class="py-0">
                      {{ user.first_name }} {{ user.last_name }}
                    </td>
                    <td class="py-0">{{ user.email }}</td>
                    <td class="py-0">{{ user.phone }}</td>
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
                              name: 'UserDetail',
                              params: { id: user.id },
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
                            href="javscript:void(0)"
                            data-toggle="modal"
                            data-target="#changestatus"
                            @click="blockUser(user.id)"
                            ><i class="fa fa-ban"></i>Unblock</a
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
      </div>
      <div class="clearfix"></div>
      <div
        class="modal fade"
        id="changestatus"
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
              <img src="images/motorcycle.png" alt="" class="img-fluid" />
              <h3 class="jost bold mt-1 clr-orange">Alert</h3>
              <p class="d-blue mt-1 medium">
                Status for Order 123 has been changed to Delivered
              </p>
              <div class="d-flex flex-wrap justify-content-center">
                <a href="orders.html"
                  ><button class="px-4 mx-1 py-1 mt-2">Got it</button></a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- add user form -->
        <div
          class="modal fade"
          id="addUserForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
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
  name: "user-list",
  data() {
    return {
      users: [],

      notification: false,
      msg: "",
    };
  },
  mounted() {
    this.fetch();
  },

  // watch:  {
  //   // Note: only simple paths. Expressions are not supported.

  // },

  // watch: function () {
  //   this.fetch();
  // },

  methods: {
    // openModel(id) {
    //   document.getElementById(id).modal("show");
    //   console.log(id);
    // },

    err(msg) {
      // alert(msg);
      this.notification = true;
      this.msg = msg;
    },

    async fetch() {
      try {
        let response = await this.axios.get("api/user/blocked");
        this.users = response.data.users;
        // console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },

    async blockUser(id) {
      try {
        let response = await this.axios.get(`api/user/block-user/${id}`);
        if (response.data.status) {
          this.fetch();
          this.err(response.data.message);
        } else {
          this.fetch();
          this.err(response.data.message);
        }
        console.log(response);
      } catch (error) {
        console.log();
      }
    },

    addUser() {
      // $("#addUserForm").modal("show");
      // console.log("hi i am from add user form");
    },

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

      // console.log(userActionCls_1.classList);
      // console.log(userActionCls_2.getAttribute);
      // console.log(userActionCls_3.classList);
    },
  },
};
</script>
