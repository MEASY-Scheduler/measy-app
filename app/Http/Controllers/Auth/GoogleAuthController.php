<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function redirect_to_google()
    {
        return Socialite::driver('google')->redirect();
        // return Socialite::driver('google')->stateless()->redirect();
    }

    public function google_callback()
    {
        try {

            $user = Socialite::driver('google')->user();

            $finduser = User::where('google_id', $user->id)->first();

            if($finduser){

                $token = $finduser->createToken('measyappproject2022')->plainTextToken;
                $user_and_token = [
                    $user,
                    $token
                ];

                return response([
                    'message' => 'Login with Google successfully!',
                    'user' => $user_and_token
                ], 200);

            }else{

                $new_user = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'google_id'=> $user->id
                ]);

                $token = $finduser->createToken('hfhfdjfjdfirhefndffgdjfd')->plainTextToken;
                $user_and_token = [
                    $new_user,
                    $token
                ];

                return response([
                    'message' => 'User Created Successfully!',
                    'user' => $user_and_token
                ], 201);

            }

        } catch (Exception $e) {

            return response([
                'message' => $e->getMessage()
            ], 422);
        }
    }
}
