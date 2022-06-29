@extends('front.layouts.app')

@section('content')

      <section class="pt-5">
        <div class="container text-center">

          <div class="row p-5 ">
            <div class="col-md-12 col-lg-6 offset-lg-3">

              <h2 class="text-primary mb-5">Sign In</h2>

                <form action="" method="">
                  <div class="row border rounded border-primary p-5">
                    <div class="col-12  mb-4">
                      <input class="form-control" required placeholder="Email" />
                    </div>

                    <div class="col-12 mb-4">
                      <input class="form-control" required placeholder="Password" />
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary w-100"> Sign In </button>
                    </div>
                    
                    <div class="col-12 mt-3">
                      <p class="text-center">Or</p>
                    </div>

                    <div class="col-12 mb-4">
                        <a href="#" class="social-button" id="google-connect"> <span>Signin with Google</span></a>
                        <a href="#" class="social-button" id="microsoft-connect"> <span>Signin with Microsoft</span></a>
                    </div>
                  </div>
                </form>

            </div>
          </div>
        </div>
      </section>


     
    
@endsection