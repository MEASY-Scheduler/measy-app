@extends('front.layouts.app')

@section('content')

      <section class="pt-5">
        <div class="container text-center">

          <div class="row p-5 ">
            <div class="col-md-12 col-lg-8 offset-lg-2">

              <h2 class="text-primary mb-5">Sign Up</h2>

              <div class="" id="errors"></div>

                <form action="" method="">
                  <div class="row border rounded border-primary p-5">
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="First Name" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Last Name" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Occupation" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Job Title" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Organization" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Phone Number" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Cell Number" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Email Address" />
                    </div>
                    <div class="col-12 col-lg-6  mb-4">
                      <input class="form-control" required placeholder="Password" />
                    </div>
                    <div class="col-12 col-lg-6  mb-5">
                      <input class="form-control" required placeholder="Confirm Password" />
                    </div>

                    <div class="col-12 mb-3">
                      <p>By signing up, you agree to the <a href="#">terms and conditions</a> </p>
                    </div>

                    <div class="col-12 mb-3">
                      <button class="btn btn-primary w-100"> Sign Up </button>
                    </div>
                    
                    <div class="col-12 mt-2">
                      <p class="text-center">Or</p>
                    </div>

                    <div class="col-12 mb-4">
                        <a href="#" class="social-button" id="google-connect"> <span>Signup with Google</span></a>
                        <a href="#" class="social-button" id="microsoft-connect"> <span>Signup with Microsoft</span></a>
                    </div>
                  </div>
                </form>

            </div>
          </div>
        </div>
      </section>


     
    
@endsection