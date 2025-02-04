<?php

namespace App\Listeners;

use App\Events\FollowUpStatusChanged;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;


class SendFollowUpNotification implements ShouldQueue
{

    use InteractsWithQueue;
    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(FollowUpStatusChanged $event)
    {
        // dd($event);
        // Log::info('Follow up status updated:', [$status]);
        // Send welcome email logic
        // dd($event);
        $followUp = $event->followUp;
        $status =  $followUp->status;
        // Now you have the status
        \Log::info('Follow up status updated:', [$status]);
        // $this->status = $event->status;
        // $user->notify(new FollowUpStatusChanged());
    }
}
