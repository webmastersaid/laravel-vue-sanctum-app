<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;

class ShowController extends Controller
{
    public function __invoke()
    {
        $user = auth()->user();
        return new UserResource($user);
    }
}
