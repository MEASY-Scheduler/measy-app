<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\UserController\PollController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\UserController\ProfileController;

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
Route::prefix('auth')->group(function() {

    Route::post('/register', [AuthController::class, 'register'])
        ->name('register');
    
    Route::post('/login', [AuthController::class, 'login'])
        ->name('login');

    Route::middleware('auth:sanctum')->get('/logout', [AuthController::class, 'logout'])
        ->name('logout');

    Route::get('/google', [GoogleAuthController::class, 'redirect_to_google'])
        ->name('auth.google');

    Route::get('/google/callback', [GoogleAuthController::class, 'google_callback'])
        ->name('auth.callback');

    Route::post('/forgot-password', [AuthController::class, 'forgot_password'])
        ->name('password.forgot');

    

});

Route::prefix('poll')->middleware(['auth:sanctum', 'auth.session'])->group(function() {
    Route::get('/all', [PollController::class, 'index'])
        ->name('mypoll');

    Route::post('/create', [PollController::class, 'store'])
        ->name('poll');

    Route::get('/{id}', [PollController::class, 'show'])
        ->name('view');

    Route::put('/edit/{id}', [PollController::class, 'update'])
        ->name('update');

    Route::delete('/delete/{id}', [PollCOntroller::class, 'destroy'])
        ->name('delete');
});

Route::prefix('user')->middleware(['auth.session', 'auth:sanctum'])->group(function() {
    
});

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::get('/email/verify', function() {
    return view('auth.verify-email');
})->middleware('auth')
->name('verification.notice');

 
Route::post('/email/verify/{id}/{hash}', function(EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])
->name('verification.verify');

 
Route::post('/email/verification-notification', function(Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])
->name('verification.send');
