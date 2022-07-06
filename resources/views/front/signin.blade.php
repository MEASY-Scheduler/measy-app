@extends('front.layouts.app')

@section('content')

      <section class="pt-5">
        <div class="container text-center">

          <div class="row p-5 ">
            <div class="col-md-12 col-lg-6 offset-lg-3">

              <h2 class="text-primary mb-5">Sign In</h2>

                
                  <div class="row border rounded border-primary p-5">
                
                    <div class="text-danger" id="submission-errors"></div>

                    <div class="col-12  mb-4">
                      <input class="form-control" required placeholder="Email" id="email" />
                    </div>

                    <div class="col-12 mb-4">
                      <input class="form-control" type="password" required placeholder="Password" id="password" />
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary w-100" id="signin_button" onclick="signin()"> Sign In </button>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <p class="text-center">Or</p>
                    </div>

                    <div class="col-12 mb-4">
                        <a href="#" class="social-button" id="google-connect"> <span>Signin with Google</span></a>
                        <a href="#" class="social-button" id="microsoft-connect"> <span>Signin with Microsoft</span></a>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>


<script>

  function signin(){
    
    document.querySelector('#signin_button').innerHTML = 'Processing...';
    document.querySelector('#signin_button').setAttribute('disabled', 'true');

    document.querySelector('#submission-errors').innerHTML = '';

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    let url = BASE_URL + '/api/user/login';

    fetch(url, {
      method: "POST",
      body: {
        
      },
      headers: {
        'Accept': 'application/json',
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        document.querySelector('#submission-errors').innerHTML = 'Invalid Credentials';
      }
    })
    .catch(err => console.log(err))
    .finally(() => {


      document.querySelector('#signin_button').innerHTML = 'Sign In';
      document.querySelector('#signin_button').removeAttribute('disabled');

      email = '';
      password = '';
    });
  }

</script>
     
    
@endsection