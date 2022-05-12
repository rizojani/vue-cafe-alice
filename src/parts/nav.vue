<!-- @format -->

<template>
  <nav
    class="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top black_bck navbar-border"
  >
    <div class="navbar-wrapper">
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mobile-menu d-md-none mr-auto">
            <a
              class="nav-link nav-menu-main menu-toggle hidden-xs"
              href="javascript:void(0)"
              ><i class="ft-menu font-large-1"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" href="javascript:void(0)">
              <img
                class="brand-logo img-fluid logo ml-0"
                alt="stack admin logo"
                src="images/logo-bg.png"
              />
            </a>
          </li>
          <li class="nav-item d-md-none">
            <a
              class="nav-link open-navbar-container"
              data-toggle="collapse"
              data-target="#navbar-mobile"
              href="javascript:void(0)"
              ><i class="fa fa-ellipsis-v"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="navbar-container content">
        <div class="collapse navbar-collapse" id="navbar-mobile">
          <ul class="nav navbar-nav mr-auto float-left"></ul>
          <ul class="nav navbar-nav float-right">
            <li class="dropdown dropdown-user nav-item" id="addCls1">
              <a
                class="dropdown-toggle nav-link dropdown-user-link"
                href="javascript:void(0)"
                data-toggle="dropdown"
              >
                <span class="avatar avatar-online">
                  <img
                    src="images/portrait/small/avatar-s-1.png"
                    alt="avatar"
                  />
                </span>
                <!-- dropdown-user nav-item show, fas ml-1 fa-angle-down -->
                <span class="user-name"
                  >Jogn Max
                  <i class="fas ml-1 fa-angle-down" @click="addCls()"></i></span
              ></a>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link :to="{ name: 'my-profile' }">
                  <a class="dropdown-item" href="javascript:void(0)"
                    ><i class="fas fa-user-circle"></i>Profile</a
                  >
                </router-link>
                <a
                  class="dropdown-item"
                  href="javascript:void(0)"
                  data-toggle="modal"
                  data-target="#logout"
                  @click="logout()"
                  ><i class="fas fa-sign-out-alt"></i>Logout</a
                >
              </div>
            </li>
            <li class="nav-item d-none d-md-block">
              <a
                class="nav-link nav-menu-main menu-toggle hidden-xs"
                href="javascript:void(0)"
                v-on:click="sidbarTogal()"
                ><i class="ft-menu"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",

  methods: {
    addCls() {
      let getClassEl = document.getElementById("addCls1");
      let checkCls = getClassEl.classList.contains("show");
      if (checkCls) {
        getClassEl.classList.remove("show");
      } else {
        getClassEl.classList.add("show");
      }
      // console.log(getClassEl.classList);
    },

    // logout() {
    //   this.axios
    //     .post("api/logout")
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   console.log("logout me");
    // },

    async logout() {
      let response = await this.axios.post("api/logout");
      console.log(response);
      localStorage.removeItem("token");
      window.location.reload();
    },

    sidbarTogal() {
      //   alert("togal sid bar");
      let isExpanded = document.body.classList.contains("menu-expanded");
      console.log(isExpanded);
      if (isExpanded) {
        document.body.classList.remove("menu-expanded");
        //   document.body.removeClass("menu-expanded");
        document.body.classList.add("menu-collapsed");
      } else {
        document.body.classList.add("menu-expanded");
        document.body.classList.remove("menu-collapsed");
      }
    },
  },
};
</script>
