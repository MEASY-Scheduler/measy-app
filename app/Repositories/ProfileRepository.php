<?php

namespace App\Repositories;

use App\Interfaces\ProfileRepositoryInterface;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use phpDocumentor\Reflection\PseudoTypes\PositiveInteger;

class ProfileRepository implements ProfileRepositoryInterface
{
    public function getUserProfile($currentLoggedInUser)
    {
        return $currentLoggedInUser->user();
    }

    public function editUserProfile(object $userdetails, $id)
    {
        $fields = $userdetails->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'occupation' => 'nullable|string',
            'job_title' => 'nullable|string',
            'organization' => 'nullable|string',
            'phone_no' => 'nullable|string',
            'cell_phone_no' => 'nullable|string',
        ]);

        $user = User::findOrFail($id)->update([

            'firstname' => $fields['firstname'],
            'lastname' => $fields['lastname'],
            'occupation' => $fields['occupation'],
            'job_title' => $fields['job_title'],
            'organization' => $fields['organization'],
            'phone_no' => $fields['phone_no'],
            'cell_phone_no' => $fields['cell_phone_no'],

        ]);

        return $user;

    }

    public function changeEmail(object $useremail, $id)
    {
        $fields = $useremail->validate([
            'email' => 'required|string|email|indisposable|unique:users'
        ]);

        User::where('id', $id)
            ->update([
                'email' => $fields['email'],
                'email_verified_at' => null,
            ]);

        // get the updated user instance
        $user = User::where('id', $id)->get();

        // log user out so they can log in again
        auth()->user()->tokens()->delete();

        // send a verification link to the user with their new email address
        event(new Registered($user));
        // return $user;
    }
}