<!-- @format -->

<template>
  <div>
    <NavBar />
    <sidebar />
    <div class="app-content user-management content">
      <div class="content-wrapper">
        <div class="content-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../parts/nav.vue";
import Sidebar from "../../parts/Sidebar.vue";
export default {
  components: { NavBar, Sidebar },
};
</script>
