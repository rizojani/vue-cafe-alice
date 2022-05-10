<!-- @format -->

<template>
  <section id="configuration">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <h3 class="pull-left bold uppercase black mt-2">Add User</h3>
    <div class="clearfix"></div>
    <!-- <h3 class="pull-left medium black p_lg mt-2 mb-0 pb-0">
      Category Management
    </h3> -->
    <!-- <div class="clearfix"></div>
    <p class="clr_grey medium mt-1 p_sm">Add Category</p>
    <div class="clearfix"></div> -->
    <div class="card p-2 mt-1">
      <div class="row align-items-center">
        <div class="col-sm-4 col-lg-3">
          <p class="black p_sm ml-1">First Name<span class="red">*</span></p>
        </div>
        <div class="col-lg-4 col-sm-8">
          <input type="text" class="w-100" />
        </div>
      </div>
      <div class="row mt-2 align-items-center">
        <div class="col-sm-4 col-lg-3">
          <p class="black p_sm ml-1">Last Name<span class="red">*</span></p>
        </div>
        <div class="col-lg-4 col-sm-8">
          <input type="text" class="w-100" />
        </div>
      </div>
      <div class="row mt-2 align-items-center">
        <div class="col-sm-4 col-lg-3">
          <p class="black p_sm ml-1">Phone<span class="red">*</span></p>
        </div>
        <div class="col-lg-4 col-sm-8">
          <input type="text" class="w-100" />
        </div>
      </div>
      <div class="row mt-2 align-items-center">
        <div class="col-sm-4 col-lg-3">
          <p class="black p_sm ml-1">Address<span class="red">*</span></p>
        </div>
        <div class="col-lg-4 col-sm-8">
          <input type="text" class="w-100" />
        </div>
      </div>
      <!-- <div class="row mt-3 align-items-center">
        <div class="col-sm-4 col-lg-3">
          <p class="black p_sm ml-1"><span class="red">*</span></p>
        </div>
        <div class="col-lg-4 col-sm-8">
          <div class="upload-btn-wrapper-1">
            <a href=""><button class="btn-2 px-3">Upload</button></a>
            <input type="file" name="myfile" />
          </div>
        </div>
      </div> -->
      <div class="row mt-2">
        <div class="col-sm-4 mt-2 col-lg-3">
          <p class="black p_sm ml-1 mt-1">Gender</p>
        </div>
        <div class="col-lg-4 mt-2 col-sm-8">
          <div class="d-flex align-items-center">
            <input type="radio" name="stock" id="" />
            <label for="" class="mt-0 ml-1 p_sm">Male</label>
            <input type="radio" class="ml-2" name="stock" id="" />
            <label for="" class="mt-0 ml-1 p_sm">Female</label>
          </div>
          <a href="product-category.html"
            ><button class="px-5 mt-2 py-1">Add</button></a
          >
          <span class="m-2">
            <a href="product-category.html" class="pe-2"
              ><button class="px-5 mt-2 py-1">Cancel</button></a
            >
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "add-user",
};
</script>
