@extends('front.layouts.app')

@section('content')

      <section class="pt-5">
        <div class="container text-center">

          <div class="row p-5 ">
            <div class="col-md-12 col-lg-8 offset-lg-2">

              <h2 class="text-primary mb-5">Sign Up</h2>

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
                      <input class="form-control" placeholder="Cell Number"  id="cell_number" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" type="password" placeholder="Password" id="password" />
                    </div>
                    <div class="col-12 col-lg-6  mb-5">
                      <input class="form-control" type="password" placeholder="Confirm Password" id="confirm_password" />
                    </div>

                    <div class="col-12 mb-3">
                      <p>By signing up, you agree to the <a href="#">terms and conditions</a> </p>
                    </div>

                    <div class="col-12 mb-3">
                      <button class="btn btn-primary w-100" onclick="signup()" id="signup_button"> Sign Up </button>
                    </div>
                    
                    <div class="col-12 mt-2">
                      <p class="text-center">Or</p>
                    </div>

                    <div class="col-12 mb-4">
                        <a href="#" class="social-button" id="google-connect"> <span>Signup with Google</span></a>
                        <a href="#" class="social-button" id="microsoft-connect"> <span>Signup with Microsoft</span></a>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>



<script>

  function signup(){
    
    document.querySelector('#signup_button').innerHTML = 'Processing...';
    document.querySelector('#signup_button').setAttribute('disabled', 'true');

    document.querySelector('#submission-errors').innerHTML = '';

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let all_errors = [];

    let url = BASE_URL + '/api/user/register';


    let formData = new FormData();
    formData.append('first_name', document.querySelector('#first_name').value);
    formData.append('last_name', document.querySelector('#last_name').value);
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
      if(data.errors){
        let data_errors = data.errors;

        for(key in data_errors){
          all_errors.push(`<p>${data_errors[key][0]}</p>`);
          
        };
      }

      console.log(data);
    })
    .catch(err => console.log(err))
    .finally(() => {

      console.log(all_errors);

      document.querySelector('#submission-errors').innerHTML = all_errors.join("");

      document.querySelector('#signup_button').innerHTML = 'Sign Up';
      document.querySelector('#signup_button').removeAttribute('disabled');

      email = '';
      password = '';
    });
  }

</script>


     
    
@endsection