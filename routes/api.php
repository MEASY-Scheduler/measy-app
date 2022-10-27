<?php

use App\Models\User;
use Microsoft\Graph\Graph;
use Microsoft\Graph\Model;
use Illuminate\Http\Request;
use Spatie\GoogleCalendar\Event;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\UserController\PollController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\UserController\ProfileController;
use App\Http\Controllers\Calendars\GoogleCalendarController;

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
Route::get('/myevents', function(){
    $events = Event::get();

    dd($events);
});
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

    Route::get('/microsoft', function() {
       $url = 'https://login.microsoftonline.com/' . env('TENANT_ID') . '/oauth2/v2.0/token';
       $guzzle = new \GuzzleHttp\Client();
        // dd(env('GRAPH_USER_SCOPES'));
        $token = json_decode($guzzle->post($url, [
            'form_params' => [
                'client_id' => env('CLIENT_ID'),
                'client_secret' => env('CLIENT_SECRET'),
                'scope' => env('GRAPH_USER_SCOPES'),
                'grant_type' => 'client_credentials',
            ],
        ])->getBody()->getContents());
    // return Socialite::driver('graph')->redirect();

        dd($token->access_token);
    });

    Route::get('/me', function() {
        $accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InlPMGpjbnE4S3NjTjFCdHVxQ2NXckNoLXlsNjhPekpscjJLaFNXQUVCV0UiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lODBjMGMyYS0zYjY1LTQzM2ItOTQ1ZS1iMDA2ZjBiZTQ1OWUvIiwiaWF0IjoxNjYxOTQ5MzI1LCJuYmYiOjE2NjE5NDkzMjUsImV4cCI6MTY2MTk1MzIyNSwiYWlvIjoiRTJaZ1lNZ3QrbWUrUTFlVHJYbnF0NzBxSDU0OUJBQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJNZWFzeSBBcHAiLCJhcHBpZCI6IjcyMTAwNDVmLTAyNmUtNGQ3Mi1iN2EwLTFkZjg4ODVjODhjYSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2U4MGMwYzJhLTNiNjUtNDMzYi05NDVlLWIwMDZmMGJlNDU5ZS8iLCJpZHR5cCI6ImFwcCIsIm9pZCI6ImE5MGQzN2U5LWFiOWUtNDg1MC04YmUzLTY4OTc0M2JkNzBlYyIsInJoIjoiMC5BWGtBS2d3TTZHVTdPME9VWHJBRzhMNUZuZ01BQUFBQUFBQUF3QUFBQUFBQUFBQ1VBQUEuIiwic3ViIjoiYTkwZDM3ZTktYWI5ZS00ODUwLThiZTMtNjg5NzQzYmQ3MGVjIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFGIiwidGlkIjoiZTgwYzBjMmEtM2I2NS00MzNiLTk0NWUtYjAwNmYwYmU0NTllIiwidXRpIjoiVVl0T0hyMWhuMGVkQzRwUXRnQWZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMDk5N2ExZDAtMGQxZC00YWNiLWI0MDgtZDVjYTczMTIxZTkwIl0sInhtc190Y2R0IjoxNjUwMzYxMzE4fQ.APRaZnYn1CDrEc10Y41EIeCI2h6K0RyKA1I9XqfAWoj9EoJa8w_WwCFPdzyjEwrd5hL-YA3lSO5mx2tcJ1JDFmHyn0cJyBoYlKtleUVV8GEQA345xjbE5E2JuZHVOTMh1H1Vq4vC1GoB4LQNyevune3duO7Wr9EhDm3GH5t7cZW7l6ofqUlOK8ybVWrlvD-VycF6mehzeSC5xB2xvlaERuF6nmeso0ijAgEh_OER6DuAU8DVulOKhXa3HGq6GfTDOa1xan5cKwr3k6cEsoJz2gmruHLzlCgDcMtRbAZDQdtzjfPxtsZoCJViWaCqWRkGO6ev2ZPmCLj3qmY1aJszDw';

        $graph = new Graph();
        $graph->setAccessToken($accessToken);

        $user = $graph->createRequest("GET", "/me")
        ->setReturnType(Model\User::class)
            ->execute();

        echo "Hello, I am {$user->getGivenName()}.";
    });


    

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

Route::prefix('user')->middleware(['auth:sanctum', 'auth.session'])->group(function() {
    Route::get('/me', [ProfileController::class, 'my_profile'])
        ->name('me');

    Route::put('/edit_profile', [ProfileController::class, 'edit_profile'])
        ->name('edit_profile');

    Route::put('/change_email', [ProfileController::class, 'change_email'])
        ->name('change_email');

    Route::get('/connect_google_calendar', [GoogleCalendarController::class, 'connect'])
        ->name('connect_google_calendar');

    Route::get('/get_user_event', [GoogleCalendarController::class, 'event'])
        ->name('user_event');

    Route::get('/account_settings', [ProfileController::class, 'account_settings'])
        ->name('/account_settings');

    Route::post('/update_settings', [ProfileController::class, 'update_settings'])
        ->name('update_settings');

    Route::post('/change_password', [ProfileController::class, 'change_password'])
        ->name('/change_password');
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
 
    return redirect('/');
})->middleware(['auth', 'signed'])
->name('verification.verify');

 
Route::post('/email/verification-notification', function(Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth:sanctum', 'throttle:6,1'])
->name('verification.send');
