<!DOCTYPE html>


<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Free online meeting scheduling tool | {{ env('APP_NAME') }}</title>


    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('frontassets/assets')}}/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('frontassets/assets')}}/img/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('frontassets/assets')}}/img/favicons/favicon-16x16.png">
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('frontassets/assets')}}/img/favicons/favicon.png">
    <link rel="manifest" href="{{asset('frontassets/assets')}}/img/favicons/manifest.json">
    <meta name="msapplication-TileImage" content="{{asset('frontassets/assets')}}/img/favicons/mstile-150x150.png">
    <meta name="theme-color" content="#ffffff">

    <link href="http://fonts.cdnfonts.com/css/molle" rel="stylesheet">

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="{{asset('frontassets/assets')}}/css/theme.css" rel="stylesheet" />
    <link href="{{asset('frontassets/assets')}}/css/style.css" rel="stylesheet" />

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  </head>


  <body>

    <!-- ===============================================-->
    <!--    Main Content-->
    <!-- ===============================================-->
    <main class="main" id="top">
      
      @include('front.partials.navbar')


      @yield('content')

      @include('front.partials.footer')
    </main>
    <!-- ===============================================-->
    <!--    End of Main Content-->
    <!-- ===============================================-->


    <!-- ===============================================-->
    <!--    JavaScripts-->
    <!-- ===============================================-->
    <script src="{{asset('frontassets/vendors')}}//@popperjs/popper.min.js"></script>
    <script src="{{asset('frontassets/vendors')}}//bootstrap/bootstrap.min.js"></script>
    <script src="{{asset('frontassets/vendors')}}//is/is.min.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
    <script src="{{asset('frontassets/vendors')}}//fontawesome/all.min.js"></script>
    <script src="{{asset('frontassets/assets')}}/js/theme.js"></script>
    <script src="{{asset('frontassets/assets')}}/js/script.js"></script>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;family=Volkhov:wght@700&amp;display=swap" rel="stylesheet">
  </body>

</html>