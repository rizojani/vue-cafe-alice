<!-- @format -->

<template>
  <div class="row">
    <div class="col-5 pr-0">
      <div
        class="admin-login-inner d-flex align-items-center justify-content-center"
      >
        <img src="images/logo-bg.png" alt="" class="img-fluid" />
      </div>
    </div>
    <div class="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
      <div class="">
        <div class="admin-login-card w-100 p-5">
          <div class="text-left">
            <h4 class="medium clr-orange">Password Recovery</h4>
            <hr class="blue_line bck-orange" />

            <form>
              <div class="md-form md-outline mb-0 input-with-pre-icon">
                <i class="fas fa-pencil-alt input-prefix"></i>
                <input
                  type="text"
                  id="prefixInside2"
                  class="form-control py-2"
                  placeholder="Enter Verification Code"
                  name="code"
                  value=""
                />
              </div>
              <p class="l-grey text-center mt-3">
                Did not receive email?
                <a href="javascript:void(0)" class="clr-orange"> Send Again</a>
                30 sec
              </p>
              <a href="javascript:void(0)"
                ><button class="w-100 mt-4">Continue</button></a
              >
            </form>
            <div class="mt-3 text-center">
              <a href="javascript:void(0)" class="medium clr_grey"
                ><i class="fa fa-arrow-circle-left mr-2"></i> Back To Website</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
