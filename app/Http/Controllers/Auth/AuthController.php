<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class AuthController extends Controller
{

    public function register(UserRequest $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->phone_no = $request->phone_no ? $request->phone_no : '';
        $user->cell_phone_no = $request->cell_phone_no ? $request->cell_phone_no : '';
        $user->organization = $request->organization ?  $request->organization : '';
        $user->job_title = $request->job_title ? $request->job_title : '';
        $user->occupation = $request->occupation ? $request->occupation : '';

        $user->save();
        event(new Registered($user));

        $token = $user->createToken('measyappproject2022')->plainTextToken;

        $user_and_token = [
            $user,
            $token
        ];

        return response($user_and_token, 201);

    }

    public function show(User $user)
    {
        // $user = User::findOrFail($user);
        // dd($user);

        return response($user);
    }

    public function email_verify()
    {
        return view('auth.verify-email');
    }

    public function email_verify_hash(EmailVerificationRequest $request)
    {
        $request->fulfill();
 
        return redirect('/home');
    }

    public function email_verification_notice(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
 
        return back()->with('message', 'Verification link sent!');
    }

}
