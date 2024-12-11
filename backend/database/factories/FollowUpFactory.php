<?php

namespace Database\Factories;

use App\Models\FollowUp;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FollowUp>
 */
class FollowUpFactory extends Factory
{
    protected $model = FollowUp::class;

    public function definition()
    {
        return [
            'status' => "Completed", // Adjust this based on your FollowUp model attributes
            'lead_id' => 1,
            'scheduled_at' => Carbon::now()
        ];
    }
}
