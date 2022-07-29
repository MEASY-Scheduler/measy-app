<template>

  <!-- <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Register</h1>
                        <hr/>
                        <form action="javascript:void(0)" @submit="register" class="row" method="post">
                            <div class="form-group col-12">
                                <label for="name" class="font-weight-bold">Name</label>
                                <input type="text" name="name" v-model="user.name" id="name" placeholder="Enter name" class="form-control">
                            </div>
                            <div class="form-group col-12">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" name="email" v-model="user.email" id="email" placeholder="Enter Email" class="form-control">
                            </div>
                            <div class="form-group col-12">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" name="password" v-model="user.password" id="password" placeholder="Enter Password" class="form-control">
                            </div>
                            <div class="form-group col-12">
                                <label for="password_confirmation" class="font-weight-bold">Confirm Password</label>
                                <input type="password_confirmation" name="password_confirmation" v-model="user.password_confirmation" id="password_confirmation" placeholder="Enter Password" class="form-control">
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                    {{ processing ? "Please wait" : "Register" }}
                                </button>
                            </div>
                            <div class="col-12 text-center">
                                <label>Already have an account? <router-link :to="{name:'login'}">Login Now!</router-link></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

  <section class="">
    <div class="container text-center">

<<<<<<< HEAD
      <div class="row p-5 ">
        <div class="col-md-12 col-lg-8 offset-lg-2">
=======
          <div class="row p-5 ">
            <div class="col-md-12 col-lg-10 offset-lg-1">
>>>>>>> 5466708da27d5a5c260652b4ce3c92b931a3336c

          <h2 class="text-primary mb-5">Sign Up</h2>

<<<<<<< HEAD
          <div class="row border rounded border-primary p-5">

            <div class="text-danger" id="submission-errors"></div>

            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="First Name" id="first_name" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Last Name" id="last_name" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Email Address" id="email" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Occupation" id="occupation" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Job Title" id="job_title" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Organization" id="organization" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Phone Number" id="phone_number" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" placeholder="Cell Number" id="cell_number" />
            </div>
            <div class="col-12 col-lg-6  mb-4">
              <input class="form-control" type="password" placeholder="Password" id="password" />
            </div>
            <div class="col-12 col-lg-6  mb-5">
              <input class="form-control" type="password" placeholder="Confirm Password" id="confirm_password" />
            </div>
=======
                  <div class="row border rounded border-primary p-5">
                    
                    <div class="col-12 mb-2">
                      <div class="alert alert-danger" v-if="notifmsg">
                        <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                            <div v-for="(allErrors, idx) in errorArray" :key="idx">
                                <span class="">{{ allErrors}} </span>
                            </div>
                        </div>
                      </div>
                    </div>
                    


                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="First Name" v-model="user.firstname" id="first_name" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Last Name" v-model="user.lastname" id="last_name" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Email Address" v-model="user.email" id="email" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Occupation" v-model="user.occupation" id="occupation" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Job Title" v-model="user.job_title" id="job_title" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Organization" v-model="user.organization" id="organization" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Phone Number" v-model="user.phone" id="phone_number" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" placeholder="Cell Number"  id="cell_number" v-model="user.cell_phone_number" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" type="password" placeholder="Password" id="password" v-model="user.password" />
                    </div>
                    <div class="col-12 col-lg-6  mb-5">
                      <input class="form-control" type="password" placeholder="Confirm Password" id="confirm_password" v-model="user.password_confirmation" />
                    </div>
>>>>>>> 5466708da27d5a5c260652b4ce3c92b931a3336c

            <div class="col-12 mb-3">
              <p>By signing up, you agree to the <a href="#">terms and conditions</a> </p>
            </div>

<<<<<<< HEAD
            <div class="col-12 mb-3">
              <button class="btn btn-primary w-100" @click="signup" id="signup_button"> Sign Up </button>
            </div>
=======
                    <div class="col-12 mb-3">
                      <button class="btn btn-primary w-100" :disabled="processing" @click="register" id="signup_button"> {{ processing ? "Processing" : "Sign Up" }} </button>
                    </div>
                    
                    <div class="col-12 mt-2">
                      <p class="text-center">Or</p>
                    </div>
>>>>>>> 5466708da27d5a5c260652b4ce3c92b931a3336c

            <div class="col-12 mt-2">
              <p class="text-center">Or</p>
            </div>

            <div class="col-12 mb-4">
              <label>Already have an account? <router-link :to="{name:'login'}">Login Now!</router-link></label>
              <a href="/api/auth/google" class="social-button" id="google-connect"> <span>Signup with Google</span></a>
              <a href="#" class="social-button" id="microsoft-connect"> <span>Signup with Microsoft</span></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { mapActions } from 'vuex';


export default {
    name:'register',
    data(){
        return {
            user:{
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                password_confirmation:"",
                phone_no:"",
                cell_phone_no:"",
                occupation:"",
                job_title:"",
                organization:"",
            },
            notifmsg: '',
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'auth/login'
        }),
        async register(){
            this.processing = true;
            this.notifmsg = '';
            await axios.post(BASE_URL + '/api/auth/register', this.user).then(response=>{
              
                this.$router.push({ name: 'email-verification'});
                
                // this.signIn()
            }).catch(({response:{data}})=>{
                this.notifmsg = data.errors ?? data.message;
            }).finally(()=>{
                this.processing = false
            })
        },

    signup(){
    
      // toastr.info('Are you the 6 fingered man?')


    document.querySelector('#signup_button').innerHTML = 'Processing...';
    document.querySelector('#signup_button').setAttribute('disabled', 'true');

    let url = BASE_URL + '/api/auth/register';


    let formData = new FormData();
    formData.append('firstname', document.querySelector('#first_name').value);
    formData.append('lastname', document.querySelector('#last_name').value);
    formData.append('email', document.querySelector('#email').value);
    formData.append('password', document.querySelector('#password').value);
    formData.append('password_confirmation', document.querySelector('#confirm_password').value);
    formData.append('phone_no', document.querySelector('#phone_number').value);
    formData.append('cell_phone_no', document.querySelector('#cell_number').value);
    formData.append('occupation', document.querySelector('#occupation').value);
    formData.append('job_title', document.querySelector('#job_title').value);
    formData.append('organization', document.querySelector('#organization').value);
    
    


    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json',
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.errors){
        
        this.notifmsg = data.errors;

      }else{
        localStorage.setItem("app_token", data.data.token)
        this.signIn();
      }

    })
    .catch(err => console.log(err))
    .finally(() => {
      document.querySelector('#signup_button').innerHTML = 'Sign Up';
      document.querySelector('#signup_button').removeAttribute('disabled');

    });
  }
    }
}
</script>