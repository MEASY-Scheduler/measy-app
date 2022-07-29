<?php

namespace App\Interfaces;


interface ProfileRepositoryInterface
{
    public function getUserProfile(object $currentLoggedInUser);

    public function editUserProfile(object $userdetails, $id);

    public function changeEmail(object $useremail, $id);

    public function changePassword(object $oldPassword, object $newPassword, $id);
}
