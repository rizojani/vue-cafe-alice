<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <router-link :to="{ name: 'RiderList' }">
        <a href="javascript:void(0)">
          <h3 class="pull-left bold uppercase black mt-2">
            <i class="fas fa-angle-left"></i> Rider
          </h3>
        </a>
      </router-link>
      <div class="clearfix"></div>
      <div class="clearfix"></div>
      <div class="rider-img mt-2">
        <img
          :src="rider.url + '/storage/rider/images/' + rider.image"
          alt=""
          style="height: auto; width: 4rem"
        />
      </div>
      <h4 class="p_sm bold poppins mt-2 black lh">Name</h4>
      <p class="p_sm l-grey lh">{{ rider.first_name }} {{ rider.last_name }}</p>
      <h4 class="p_sm bold poppins mt-1 black lh">Phone no</h4>
      <p class="p_sm l-grey lh">{{ rider.phone }}</p>
      <h4 class="p_sm bold poppins mt-1 black lh">Email</h4>
      <p class="p_sm l-grey lh">{{ rider.email }}</p>
      <!-- <h4 class="p_sm bold poppins mt-1 black lh">Phone no</h4>
      <p class="p_sm l-grey lh">********</p> -->
      <!-- <a href=""><button class="px-2 py-1 mt-1">
                    <img src="images/bicycle.png" alt="" class="img-fluid" /> Assign The
                    Rider
                </button></a> -->
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rider: {},
    };
  },

  mounted() {
    // console.log("params value = " + this.$route.params.id);
    this.getRider();
  },
  methods: {
    async getRider() {
      try {
        let response = await this.axios.get(
          `api/admin-rider/rider-view/${this.$route.params.id}`
        );
        this.rider = response.data.rider;
        // console.log(this.rider);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
