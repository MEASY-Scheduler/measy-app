@extends('front.layouts.app')

@section('content')

      <section class="pt-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-md-start text-center py-6">
              <h1 class="mb-4 fs-12 fw-bold">Scheduling <br/> Made Easy</h1>
              <p class="mb-6 lead text-secondary">Measy is the fastest and easiest way to schedule anything  from meetings to the next great collaboration.</p>
              <div class="text-center text-md-start"><a class="btn btn-warning me-3 btn-lg btn-block" href="#!" role="button">Get started</a></div>
            </div>
            <div class="col-md-6 text-end"><img class="pt-7 pt-md-0 img-fluid" src="{{asset('frontassets/assets')}}/img/hero/hero-img.jpg" alt="" /></div>
          </div>
        </div>
      </section>


      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-3 pt-md-3 mb-6" id="feature">

        <div class="bg-holder z-index--1 bottom-0 d-none d-lg-block" style="background-image:url({{asset('frontassets/assets')}}/img/category/shape.png);opacity:.5;">
        </div>
        <!--/.bg-holder-->

        <div class="container">
          <h1 class="fs-9 fw-bold mb-4 text-center"> Professionals of all types <br class="d-none d-xl-block" />get more done with Measy</h1>
          <p class="text-center">Get any kind of  work or client meeting booked, fast.</p>
          
          <div class="row mt-5">
              <div class="tabs">
                <div class="tab-button-outer">
                  <ul id="tab-button">
                    <li><a href="#board-meetings">Board Meetings</a></li>
                    <li><a href="#group-meeting">Group Meeting</a></li>
                    <li><a href="#enterprise-scheduling">Enterprise Scheduling</a></li>
                    
                  </ul>
                </div>
                <div class="tab-select-outer">
                  <select id="tab-select">
                    <option value="#board-meetings">Board Meetings</option>
                    <option value="#group-meeting">Group Meeting</option>
                    <option value="#enterprise-scheduling">Enterprise Scheduling</option>
                  </select>
                </div>

                <div id="board-meetings" class="tab-contents">
                  
                  <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 p-5">
                      <h3 class="text-white" style="font-size: 32px; font-weight: 500; line-height: 1.5;">Meet with candidates faster, <br/> stay in your own workflow.</h3>
                    </div>
                    <div class="col-md-12 col-lg-6">
                      <img src="{{asset('frontassets/assets/img/board-meetings.png')}}" class="w-100" />
                    </div>
                  </div>

                </div>
                <div id="group-meeting" class="tab-contents">
                  <h2>Tab 2</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam consequuntur, esse provident impedit minima porro! Laudantium laboriosam culpa quis fugiat ea, architecto velit ab, deserunt rem quibusdam voluptatum.</p>
                </div>
                <div id="enterprise-scheduling" class="tab-contents">
                  <h2>Tab 3</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos aliquam consequuntur, esse provident impedit minima porro! Laudantium laboriosam culpa quis fugiat ea, architecto velit ab, deserunt rem quibusdam voluptatum.</p>
                </div>
              </div>
          </div>

          <div class="row gx-5" style="margin-top: 150px;">
            
            <div class="col-lg-4 col-sm-6 mb-2"> 

              <div class="features-container" >
                <img class="features-image" src="https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg?w=826&t=st=1656347221~exp=1656347821~hmac=269389586fce4f444b825819837c586dc3bf24f5d0f9343af744dae4e5d38495" alt="Feature" />
                <h4 class="features-title">Groups </h4>
                <p class="features-description">Keep your calender in order and book meetings with clients and faster</p>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 mb-2"> 
              <div class="features-container" >
                <img class="features-image" src="https://img.freepik.com/free-photo/young-businesswoman-with-co-workers_1098-1776.jpg?t=st=1656348480~exp=1656349080~hmac=b98168df824ae6ca4b6914ae8d0819c205016707b9dc18ec7400d0b970ae37ce&w=826" width="75" alt="Feature" />
                <h4 class="features-title">Teams</h4>
                <p class="features-description">Add team mates  to invites booking
                  pages and used shared calenders </p>
              </div>
            </div>
            
            <div class="col-lg-4 col-sm-6 mb-2" >

              <div class="features-container" >
              <img class="features-image" src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?t=st=1656348526~exp=1656349126~hmac=e5e8e0e566d9a01a80959e322d7564834fe43bf5879bddffab1a186bea4e127f&w=996" width="75" alt="Feature" />
                <h4 class="features-title">Enterprise</h4>
                <p class="features-description">Manage  your entire organization’s
                      scheduling  needs securely </p>

              </div>
            </div>
          </div>
          <div class="text-center "><a class="btn btn-warning features-sign-up" href="#!" role="button">SIGN UP NOW</a></div>
        </div><!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->


      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-5" id="marketing">

        <div class="container">
          <h1 class="fw-bold fs-6 mb-3 text-center">Made to collaborate with  your tools, too</h1>
          <p class="mb-6 text-secondary text-center">Measy can unite directly with your favourite app</p>
          <div class="row gx-1" style="margin-top: 80px;">
            
            <div class="col-lg-4 col-sm-6 mb-2"> 

                <div style="border: 5px solid #0F68D8; border-radius: 30px;">
                    <img class="mb-3 ms-n3 mx-auto" src="{{asset('frontassets/assets/img/zoom.png')}}" alt="Feature" width="200" />
                </div>
            </div>
            
            <div class="col-lg-4 col-sm-6 mb-2" style=""> 
              <img class="mb-3 ms-n3 mx-auto" src="{{asset('frontassets/assets/img/meet.png')}}" alt="Feature" width="300" />
            </div>
            
            <div class="col-lg-4 col-sm-6 mb-2"> 
              <img class="mb-3 ms-n3 mx-auto" src="{{asset('frontassets/assets/img/teams.png')}}" alt="Feature" width="300" />
            </div>
            

          </div>
        </div><!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pb-2 pb-lg-5">

        <div class="container">
          <div class="row border-top border-top-secondary pt-7">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1"><img class="mb-4" src="{{asset('frontassets/assets')}}/img/logo.svg" width="184" alt="" /></div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p class="fs-2 mb-lg-4">Quick Links</p>
              <ul class="list-unstyled mb-0">
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">About us</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Blog</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Contact</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">FAQ</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
              <p class="fs-2 mb-lg-4">Legal stuff</p>
              <ul class="list-unstyled mb-0">
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Disclaimer</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Financing</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Privacy Policy</a></li>
                <li class="mb-1"><a class="link-900 text-secondary text-decoration-none" href="#!">Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
              <p class="fs-2 mb-lg-4">
                knowing you're always on the best energy deal.</p>
              <form class="mb-3">
                <input class="form-control" type="email" placeholder="Enter your phone Number" aria-label="phone" />
              </form>
              <button class="btn btn-warning fw-medium py-1">Sign up Now</button>
            </div>
          </div>
        </div><!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="text-center py-0">

        <div class="container">
          <div class="container border-top py-3">
            <div class="row justify-content-between">
              <div class="col-12 col-md-auto mb-1 mb-md-0">
                <p class="mb-0">&copy; 2022 Your Company Inc </p>
              </div>
              <div class="col-12 col-md-auto">
                <p class="mb-0">
                  Made with<span class="fas fa-heart mx-1 text-danger"> </span>by <a class="text-decoration-none ms-1" href="https://themewagon.com/" target="_blank">ThemeWagon</a></p>
              </div>
            </div>
          </div>
        </div><!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->


    
@endsection