<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function __construct()   
    {
        $this->middleware('auth:sanctum')->except('register', 'login', 'forgot_password');
    }

    public function register(UserRequest $request)
    {
        $user = new User;

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone_no = $request->phone_no;
        $user->cell_phone_no = $request->cell_phone_no;
        $user->organization = $request->organization;
        $user->job_title = $request->job_title;
        $user->occupation = $request->occupation;

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

    public function forgot_password(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email'
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT ? back()->with(['status' => __($status)]) : back()->withErrors(['email' => __($status)]);
        // dd($request_status->title);
        // if($request_status)
        // {
        //     // dd($status);
        //     return "Email sent!";
        // }else {
        //     return "No user found!";
        // }

        // return response([
        //     'message' => "Sucess, a reset link has been sent your email address!"
        // ]);
        // return $request_status;

    }



}
