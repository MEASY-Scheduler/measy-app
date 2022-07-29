<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function redirect_to_google()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function google_callback()
    {

        try {

            $user = Socialite::driver('google')->stateless()->user();
            $finduser = User::where('google_id', $user->id)->first();

            if($finduser){

                $token = $finduser->createToken('measyappproject2022')->plainTextToken;

                return response()->json([
                    'message' => 'Login with Google successfully!',
                    'user' => $user->user,
                    'token' => $token
                ], 200);

            }else{

                $new_user = User::create([
                'firstname' => $user->user['given_name'],
                'lastname' => $user->user['family_name'],
                'email' => $user->email,
                'password' => md5(rand(1, 10000)),
                'google_id'=> $user->user['id'],
                'email_verified_at' => $user->user['email_verified'] ? now() : null,
                ]);

                $token = $new_user->createToken('hfhfdjfjdfirhefndffgdjfd')->plainTextToken;

                return response()->json([
                    'message' => 'User Created Successfully!',
                    'user' => $new_user,
                    'token' => $token
                ], 201);

                if(!($user->user['email_verified']))
                {
                    event(new Registered($new_user));
                }

            }

        } catch (Exception $e) {

            return response([
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
