<!-- @format -->

<template>
  <div
    class="main-menu menu-fixed mt-2 menu-light black_bck menu-accordion"
    data-scroll-to-active="true"
  >
    <div class="main-menu-content">
      <ul
        class="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li
          v-for="(item, itemIndex) in SidebarItems"
          :key="itemIndex"
          class="nav-item mt-1"
          v-bind:class="
            item.child != undefined && item.child.length > 0 ? 'has-sub' : ''
          "
        >
          <router-link to="/admin/">
            <a href=""
              ><img v-bind:src="item.iconClasses" alt="" class="img-fluid" />
              <span class="menu-title ml-2" data-i18n="">
                {{ item.label }}</span
              ></a
            >
          </router-link>

          <ul v-if="item.child != undefined && item.child.length > 0">
            <li
              v-for="(ch_item, ch_itemIndex) in item.child"
              :key="ch_itemIndex"
            >
              <a href="dashboard.html"
                ><img
                  v-bind:src="ch_item.iconClasses"
                  alt=""
                  class="img-fluid"
                />
                <span class="menu-title ml-2" data-i18n="">{{
                  ch_item.label
                }}</span></a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SidebarItems from "./SidebarItems";
export default {
  data: () => ({
    SidebarItems,
  }),
};
</script>
