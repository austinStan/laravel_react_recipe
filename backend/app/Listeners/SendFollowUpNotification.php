<?php

namespace App\Listeners;

use App\Events\FollowUpStatusChanged;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendFollowUpNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(FollowUpStatusChanged $event): void
    {
        dd($event);
    }
}
