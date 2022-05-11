<template>
    <div class="row">
        <div class="col-5 pr-0">
            <div class="admin-login-inner d-flex align-items-center justify-content-center">
                <img src="images/logo-bg.png" alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-xl-4 col-lg-5 py-3 py-lg-0 col-md-6 my-auto ml-3">
            <div class="">
                <div class="admin-login-card w-100 p-5">
                    <div class="text-left">
                        <h4 class="medium clr-orange">Password Recovery</h4>
                        <hr class="blue_line bck-orange">
                        <ValidationObserver ref="forgetPasswordObserver" v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(emailVerify)">
                                <div class="md-form md-outline input-with-pre-icon">
                                    <i class="fas fa-envelope  input-prefix"></i>
                                    <ValidationProvider name="email" v-slot="{ errors }" rules="required|email">
                                        <input type="email" id="prefixInside2" class="form-control py-2"
                                            placeholder="Enter Email Address" name="email" v-model="email">
                                            <div class="text-danger">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                                <a href="javascript:void(0)"><button class="w-100 mt-2">Continue</button></a>

                            </form>
                        </ValidationObserver>
                        <div class="mt-5 text-center">
                            <a href="javascript:void(0)" class="medium clr_grey"><i
                                    class="fa fa-arrow-circle-left mr-2"></i> Back
                                To Website</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { methods } from '@/assets/cafe-alice/app-assets/vendors/js/extensions/underscore-min'
// import { defineComponent } from '@vue/composition-api'

export default {

    data: function (){
        return{
            email:""
        }
    }, 

    methods:{
        async emailVerify(){
            // console.log(this.email);
            let fd = new FormData();
            fd.append("email", this.email);
            // fd.append("password", this.password);
            let self = this;
            try {
                
                let response = await this.axios
                .post("api/email-verification", fd)
            // .then(function (response) {
                if(response.data.status){
                    // localStorage
                    this.$router.push({name : 'code-verification-form'});
                    console.log(response.data.status);
                }
                // return login page for tray again            
                } catch (error) {
                    
                    console.log(error);
                }
        }
    }

}
</script>
</script>