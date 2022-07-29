<?php

namespace App\Providers;

use App\Repositories\AuthRepository;
use App\Repositories\PollRepository;
use App\Repositories\ProfileRepository;
use Illuminate\Support\ServiceProvider;
use App\Interfaces\AuthRepositoryInterface;
use App\Interfaces\GoogleCalendarRepositoryInterface;
use App\Interfaces\PollRepositoryInterface;
use App\Interfaces\ProfileRepositoryInterface;
use App\Repositories\GoogleCalendarRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ProfileRepositoryInterface::class, ProfileRepository::class);
        $this->app->bind(PollRepositoryInterface::class, PollRepository::class);
        $this->app->bind(AuthRepositoryInterface::class, AuthRepository::class);
        $this->app->bind(GoogleCalendarRepositoryInterface::class, GoogleCalendarRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
