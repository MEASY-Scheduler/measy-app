<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Password;
use App\Interfaces\AuthRepositoryInterface;

class AuthRepository implements AuthRepositoryInterface
{
    public function register(object $credentials)
    {
        $user = new User;

        $user->firstname = $credentials->firstname;
        $user->lastname = $credentials->lastname;
        $user->email = $credentials->email;
        $user->password = bcrypt($credentials->password);
        $user->phone_no = $credentials->phone_no;
        $user->cell_phone_no = $credentials->cell_phone_no;
        $user->organization = $credentials->organization;
        $user->job_title = $credentials->job_title;
        $user->occupation = $credentials->occupation;

        $user->save();
        event(new Registered($user));

        $token = $user->createToken('measyappproject2022')->plainTextToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    public function login(object $credentials)
    {
        $fields = $credentials->validate([
            'email' => 'required|email|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if(!$user || !Hash::check($fields['password'], $user->password))
        {
            return false;
        }

        $token = $user->createToken('measyappproject2022')->plainTextToken;

        return [
            "user" => $user,
            "token" => $token
        ];
    }

    public function logout()
    {
        return auth()->user()->tokens()->delete();
    }

    public function forgot_password(object $email)
    {
         $email->validate([
            'email' => 'required|string|email'
        ]);

        $status = Password::sendResetLink(
            $email->only('email')
        );

        return $status === Password::RESET_LINK_SENT ? back()->with(['status' => __($status)]) : back()->withErrors(['email' => __($status)]);
    }
}
