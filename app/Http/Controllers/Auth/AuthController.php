<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{
    public function __construct()   
    {
        $this->middleware('auth')->except('logout');
    }

    public function register(UserRequest $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone_no = $request->phone_no ? $request->phone_no : null;
        $user->cell_phone_no = $request->cell_phone_no ? $request->cell_phone_no : null;
        $user->organization = $request->organization ?  $request->organization : null;
        $user->job_title = $request->job_title ? $request->job_title : null;
        $user->occupation = $request->occupation ? $request->occupation : null;

        $user->save();
        event(new Registered($user));

        $token = $user->createToken('measyappproject2022')->plainTextToken;

        $user_and_token = [
            $user,
            $token
        ];

        return response([
            "message" => "User created successfully!",
            "user" => $user_and_token
        ], 201);

    }

    public function show(User $user)
    {
        // $user = User::findOrFail($user);
        // dd($user);

        return response($user);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password))
        {
            return response([
                "message" => "Whoops! That credentials does not match any of our records!"
            ], 400);
        }

        $token = $user->createToken('measyappproject2022')->plainTextToken;

        $user_and_token = [
            $user,
            $token
        ];

        return response([
            "message" => "Login Successfully!",
            "token" => $user_and_token
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete;

        return response([
            "message" => "User logout successfully!"
        ], 200);
    }



}
