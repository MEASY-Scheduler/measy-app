<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\Interfaces\AuthRepositoryInterface;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{

    private AuthRepositoryInterface $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function register(UserRequest $request): JsonResponse
    {
        return response()->json([
            'message' => "User Signup successfully!",
            'data' => $this->authRepository->register($request)
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        if(!($this->authRepository->login($request)))
        {
            return response()->json([
                'message' => "Whoops, that credentials does not match any of our records!",
            ], 400)->header('Content-Type', 'application/json');
        }

        return response()->json([
            'message' => "User logged in successfully!",
            'data' => $this->authRepository->login($request),
            ])->header('Content-Type', 'application/json');
    }

    public function logout(): JsonResponse
    {
        $this->authRepository->logout();
        return response()->json([
            'message' => "User logged out successfully!",
        ]);
    }

    public function forgot_password(Request $request): JsonResponse
    {
        return response()->json([
            'message' => $this->authRepository->forgot_password($request),
        ]);
    }



}
