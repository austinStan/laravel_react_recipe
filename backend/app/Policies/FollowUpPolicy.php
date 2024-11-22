<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class FollowUpPolicy
{
    public function updateFollowUpStatus(User $user)
    {
        return $user->role === "Admin" || $user->role === "Sales Manager"
            ? Response::allow()
            : Response::deny('You cannot update a follow up.contact administrator');
    }
}
