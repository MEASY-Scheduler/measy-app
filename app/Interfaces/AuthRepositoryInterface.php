<?php

namespace App\Interfaces;

interface AuthRepositoryInterface{
    public function login(object $credentials);

    public function register(object $credentials);

    public function logout();

    public function forgot_password(object $email);
}