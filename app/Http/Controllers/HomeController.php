<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){

        return view('front.home');
    }

    public function signin(){

        return view('front.signin');
    }

    public function signup(){

        return view('front.signup');
    }
}
