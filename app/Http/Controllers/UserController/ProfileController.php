<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\Interfaces\ProfileRepositoryInterface;

class ProfileController extends Controller
{
    private ProfileRepositoryInterface $profilerepository;

    public function __construct(ProfileRepositoryInterface $profilerepository)
    {
        $this->profilerepository = $profilerepository;
    }

    public function my_profile(Request $request) :JsonResponse
    {
        return response()->json([
            'data' => $this->profilerepository->getUserProfile($request)
        ]);
    }

    public function edit_profile(Request $request): JsonResponse
    {
        $id = auth()->user()->id;
        return response()->json([
            'messsage' => "User profile updated successfully!",
            'data' => $this->profilerepository->editUserProfile($request, $id)
        ]);
    }

    public function change_email(Request $request): JsonResponse
    {
        $id = auth()->user()->id;
        // $this->profilerepository->changeEmail($request, $id);
        return response()->json([
            'data' => $this->profilerepository->changeEmail($request, $id),
            'message' => 'Email updated successfully! please check your email for verification link and log in with your new email address'
        ]);
    }

    public function change_password(Request $request): JsonResponse
    {
        // dd($request);
        $id = auth()->user()->id;

        if($this->profilerepository->changePassword($request->oldPassword, $request->newPassword, $id)){

            return response()->json([
                'message' => "Password successfully changed!"
            ]);
        }else {
            return response()->json([
                'message' => "Whooops! something went wrong, Kindly ensure your old password is correct and your new password is 8characters long."
            ], 422);
        }
    }
}
