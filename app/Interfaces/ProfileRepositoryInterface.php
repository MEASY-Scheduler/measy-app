<?php

namespace App\Interfaces;

interface ProfileRepositoryInterface
{
    public function getUserProfile(object $currentLoggedInUser);
}
