<?php

namespace App\Events;

use App\Models\FollowUp;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;


class FollowUpStatusChanged implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $followUp;
    /**
     * Create a new event instance.
     */
    public function __construct(FollowUp $followUp)
    {
        $this->followUp = $followUp;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('notifications'),
        ];
    }

    public function broadcastAs()
    {
        return 'new.notification';
    }
}
