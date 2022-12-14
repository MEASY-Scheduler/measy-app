<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('{any}', function () {
//     return view('layouts.app');
// })->where('any', '.*');
// Pa$$w0rd!_2022

Route::get('axiostest', function () {
    return view('axiostest');
});


// Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/signin', [HomeController::class, 'signin'])->name('signin');
// Route::get('/signup', [HomeController::class, 'signup'])->name('signup');

Route::get('{any}', function () {
    return view('layouts.app');
})->where('any', '.*');
