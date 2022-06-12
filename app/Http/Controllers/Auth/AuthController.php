<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;

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
    }

    public function show(User $user)
    {
        // $user = User::findOrFail($user);
        // dd($user);

        return response($user);
    }

}
