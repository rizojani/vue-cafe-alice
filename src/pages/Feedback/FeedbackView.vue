<!-- @format -->

<template>
  <div class="content-body">
    <!-- Basic form layout section start -->
    <section id="configuration">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <router-link :to="{ name: 'FeedbackList' }">
        <a href="javascript:void(0)"
          ><h3 class="pull-left bold uppercase black mt-2">
            <i class="fas fa-angle-left"></i> feedback
          </h3></a
        >
      </router-link>
      <div class="clearfix"></div>
      <h3 class="pull-left medium p_lg black mt-2">Feedback Details</h3>
      <div class="clearfix"></div>
      <h4 class="p_sm medium poppins mt-2 black lh">Name*</h4>
      <p class="p_sm l-grey lh">{{ feedback.name }}</p>
      <h4 class="p_sm medium poppins mt-1 black lh">Email*</h4>
      <p class="p_sm l-grey lh">{{ feedback.email }}</p>
      <h4 class="p_sm medium poppins mt-1 black lh">Subject*</h4>
      <p class="p_sm l-grey lh">{{ feedback.subject }}</p>
      <h4 class="p_sm medium poppins mt-1 black lh">Message*</h4>
      <p class="p_sm l-grey lh">{{ feedback.message }}</p>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      feedback: {},
    };
  },
  mounted() {
    this.getFeedback(this.$route.params.id);
  },
  methods: {
    async getFeedback(id) {
      try {
        let response = await this.axios.get(`api/admin-feedback/details/${id}`);
        this.feedback = response.data.feedback;
        // console.log(this.feedback);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
