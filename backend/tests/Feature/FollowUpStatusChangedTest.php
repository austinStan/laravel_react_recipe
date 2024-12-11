<?php

namespace Tests\Feature;

use App\Events\FollowUpStatusChanged;
use App\Models\FollowUp;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class FollowUpStatusChangedTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }


    public function test_event_is_dispatched()
    {
        Event::fake();

        //$followUp = FollowUp::factory()->create();

        $followUp = FollowUp::findOrFail(1);

        // Trigger the event
        FollowUpStatusChanged::dispatch($followUp);

        // Assert the event was dispatched
        Event::assertDispatched(FollowUpStatusChanged::class, function ($event) {
            return $event->followUp;
        });
    }
}
