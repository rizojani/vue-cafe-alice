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
          :id="item.label + '_id'"
          @click="showCls(item.label)"
        >
          <router-link :to="{ name: item.name }">
            <a href="javascript:void(0)"
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
              v-bind:class="item.name"
            >
              <router-link :to="{ name: ch_item.name }">
                <a href="javascript:void(0)"
                  ><img
                    v-bind:src="ch_item.iconClasses"
                    alt=""
                    class="img-fluid"
                  />
                  <span class="menu-title ml-2" data-i18n="">{{
                    ch_item.label
                  }}</span></a
                >
              </router-link>
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

  methods: {
    showCls(id) {
      let new_id = id + "_id";
      let item = document.getElementById(new_id);
      // console.log(item.classList.contains("open"));
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        // console.log(item.classList);
      } else {
        let checkCls = document.getElementsByClassName("has-sub");
        for (let index = 0; index < checkCls.length; index++) {
          if (checkCls[index].classList.contains("open")) {
            checkCls[index].classList.remove("open");
          }
        }
        item.classList.add("open");
      }
    },
  },
};
</script>
