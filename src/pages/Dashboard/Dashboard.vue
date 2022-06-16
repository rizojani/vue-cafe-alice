<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12">
          <div class="clearfix"></div>

          <div class="row">
            <div class="col-xl-3 col-md-6 mt-3">
              <div class="dash-card-inner black h-100 py-2 px-1">
                <h3>Total Sales</h3>
                <div
                  class="d-flex flex-wrap justify-content-between align-items-center"
                >
                  <img src="images/bill.png" alt="" class="img-fluid mt-1" />
                  <h3 class="mt-1">{{ dashboardCount.totalSal }}</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mt-3">
              <div class="dash-card-inner black h-100 py-2 px-1">
                <h3>Total Orders</h3>
                <div
                  class="d-flex flex-wrap justify-content-between align-items-center"
                >
                  <img src="images/cart.png" alt="" class="img-fluid mt-1" />
                  <h3 class="mt-1">{{ dashboardCount.totalOrders }}</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mt-3 mx-auto">
              <div class="dash-card-inner black h-100 py-2 px-1">
                <h3>Total Products</h3>
                <div
                  class="d-flex flex-wrap justify-content-between align-items-center"
                >
                  <img src="images/boxes.png" alt="" class="img-fluid mt-1" />
                  <h3 class="mt-1">{{ dashboardCount.totalProducts }}</h3>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mt-3 mx-auto">
              <div class="dash-card-inner black h-100 py-2 px-1">
                <h3>Total Customers</h3>
                <div
                  class="d-flex flex-wrap justify-content-between align-items-center"
                >
                  <img src="images/users.png" alt="" class="img-fluid mt-1" />
                  <h3 class="mt-1">{{ dashboardCount.totalCustomers }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card pad-20 mt-2 rounded-0">
        <div class="card-content collapse show">
          <div class="card-body table-responsive card-dashboard">
            <h1 class="pull-left black bold mt-2">
              <i class="fas fa-chart-bar"></i> Sales Analytics
            </h1>
            <div class="bottom tickets mt-5">
              <div class="chart-main position-relative">
                <div class="row">
                  <div class="col-12 col-xl-11">
                    <div class="card-body">
                      <div
                        class="height-400 echart-container"
                        id="basic-column"
                      ></div>
                    </div>
                  </div>
                </div>
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
  data() {
    return {
      dashboardCount: {},
    };
  },
  mounted() {
    this.getCount();
  },
  methods: {
    async getCount() {
      try {
        let response = await this.axios.get("api/dashboard");
        // console.log(response);
        this.dashboardCount = response.data.message;
        // console.log(this.dashboardCount);
      } catch (error) {
        console.log("getCount");
        console.log(error);
      }
    },
  },
};
</script>
