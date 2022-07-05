<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface PollRepositoryInterface
{
    public function index();

    public function show($id);

    public function destroy($id);

    public function create(object $polldetails);

    public function update(object $polldetails, $id);
}