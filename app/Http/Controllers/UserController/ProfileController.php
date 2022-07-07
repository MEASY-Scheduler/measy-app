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

    public function user(Request $request) :JsonResponse
    {
        return response()->json([
            'data' => $this->profilerepository->getUserProfile($request)
        ]);
    }

    // public function edit_profile(UserRequest $request, $id)
    // {
        
    // }
}
