<!-- @format -->

<template>
  <!-- Basic form layout section start -->
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
        <router-link to="admin/add-user">
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#addUserForm"
            ><button class="px-3 py-0 h-45">Add User</button>
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
                <tr>
                  <td class="py-0">01</td>
                  <td class="py-0">Mark Carson</td>
                  <td class="py-0">mar.carson@gmail.com</td>
                  <td class="py-0">+1-541-754-3010</td>
                  <!-- <td class="py-0">
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
                        >
                      </div>
                    </div>
                  </td> -->
                  <td class="py-0">
                    <span class="m-2">
                      <a href="product-category.html" class="pe-2"
                        ><button class="px-5 mt-2 py-1">Edite</button></a
                      >
                    </span>
                    <span class="m-2">
                      <a href="product-category.html" class="pe-2"
                        ><button class="px-5 mt-2 py-1">Delete</button></a
                      >
                    </span>
                    <span class="m-2">
                      <a href="product-category.html" class="pe-2"
                        ><button class="px-5 mt-2 py-1">Update</button></a
                      >
                    </span>
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
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
                        <a class="dropdown-item uppercase" href="view-user.html"
                          ><i class="fa fa-eye"></i>View</a
                        >
                        <a
                          class="dropdown-item uppercase"
                          href="#_"
                          data-toggle="modal"
                          data-target="#blockUser"
                          ><i class="fa fa-ban"></i>Block</a
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
</template>
<script>
export default {
  name: "user-list",
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      let response = await this.axios.get("/user");
      console.log(response);
    },
    addUser() {
      $("#addUserForm").modal("show");
      // console.log("hi i am from add user form");
    },
  },
};
</script>
