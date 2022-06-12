<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        
    }

    public function show(User $user)
    {
        // $user = User::findOrFail($user);
        // dd($user);

        return response($user);
    }

}
