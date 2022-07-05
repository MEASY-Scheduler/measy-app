<?php

namespace App\Repositories;

use App\Interfaces\ProfileRepositoryInterface;



class ProfileRepository implements ProfileRepositoryInterface
{
    public function getUserProfile($currentLoggedInUser)
    {
        return $currentLoggedInUser->user();
    }
}