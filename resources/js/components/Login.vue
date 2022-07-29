<template>
    <section class="pt-3">
        <div class="container">

          <div class="row p-5 ">
            <div class="col-md-12 col-lg-6 offset-lg-3">

              <h2 class="text-primary mb-5 text-center">Sign In</h2>

                
                  <div class="row border rounded border-primary p-5">
                
                    <div class="text-danger my-3" id="submission-errors"></div>

                    <div class="col-12  mb-4">
                        <label for="email" class="font-weight-bold">Email</label>
                      <input type="text" v-model="auth.email" name="email" id="email" class="form-control">
                    </div>

                    <div class="col-12 mb-4">
                        <label for="password" class="font-weight-bold">Password</label>
                        <input type="password" v-model="auth.password" name="password" id="password" class="form-control">
                    </div>

                    <div class="col-12">
                      <button type="submit" :disabled="processing" @click="login" class="btn btn-primary w-100">
                            {{ processing ? "Please wait" : "Sign In" }}
                        </button>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <p class="text-center">Or</p>
                    </div>

                    <div class="col-12 mb-4">
                        <a href="/api/auth/google" class="social-button" id="google-connect"> <span>Signin with Google</span></a>
                        <a href="#" class="social-button" id="microsoft-connect"> <span>Signin with Microsoft</span></a>
                    </div>

                    <div class="col-12 text-center">
                        <label>Don't have an account? <router-link :to="{name:'register'}">Signup Now</router-link></label>
                    </div>
                  </div>

            </div>
          </div>
        </div>
    </section>
    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"login",
    data(){
        return {
            auth:{
                email:"",
                password:""
            },
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async login(){
            document.querySelector('#submission-errors').innerHTML = '';

            this.processing = true
            let url = BASE_URL + '/api/auth/login';
            await axios.get('/sanctum/csrf-cookie')
            await axios.post(url, this.auth).then(({data})=>{

                localStorage.setItem("app_token", data.data.token)

                this.signIn()
            }).catch(({response:{data}})=>{
                document.querySelector('#submission-errors').innerHTML = data.message;
            }).finally(()=>{
                this.processing = false
            })
        },
    }
}
</script>