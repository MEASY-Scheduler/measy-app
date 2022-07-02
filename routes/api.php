<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\UserController\PollController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('user')->group(function() {

    Route::post('/register', [AuthController::class, 'register'])
        ->name('register');
    
    Route::get('/{user}', [AuthController::class, 'show'])
        ->name('show');
    
    Route::post('/login', [AuthController::class, 'login'])
        ->name('login');

    Route::get('/logout', [AuthController::class, 'logout'])
        ->name('logout');

    Route::get('/auth/google', [GoogleAuthController::class, 'redirect_to_google'])
        ->name('auth.google');

    Route::get('/auth/google/callback', [GoogleAuthController::class, 'google_callback'])
        ->name('auth.callback');

    Route::post('/forgot-password', [AuthController::class, 'forgot_password'])
        ->name('password.forgot');

});

Route::prefix('poll')->middleware(['auth:sanctum'])->group(function() {
    Route::get('/all', [PollController::class, 'index'])
        ->name('mypoll');
});

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::get('/email/verify', function() {
    return view('auth.verify-email');
})->middleware('auth')
->name('verification.notice');

 
Route::get('/email/verify/{id}/{hash}', function(EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])
->name('verification.verify');

 
Route::post('/email/verification-notification', function(Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])
->name('verification.send');


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
