<?php

namespace App\Listeners;

use App\Events\FollowUpStatusChanged;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendFollowUpNotification
{



    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(FollowUpStatusChanged $event)
    {

        // $user = User::all();
        // dd($event);
        return "test";

        // $this->status = $event->status;

        // $user->notify(new FollowUpStatusChanged());
    }
}
