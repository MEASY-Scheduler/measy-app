<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Poll>
 */
class PollFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // public $speakers = json_encode('jb@gb.com',
    //      'ajibola@gmail.com');
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'description' => $this->faker->sentence(),
            'agenda' => $this->faker->name(),
            'location' => Str::random(10),
            'main_stakeholders' => json_encode([
                'jb@jb.com',
                'ajibola@jb.com'
            ]),
            'other_stakeholders' => json_encode([
                'ridwan@gmail.com',
                'junior@ymail.com'
            ]),
            'meeting_start_range' => now(),
            'meeting_end_range' => now(),
            'duration' => '45mins',
            'no_of_entries' => 30,
            'deadline_date_for_response' => now(),
            'deadline_time_for_response' => '14:43:22',
            'speakers' => json_encode([
                'ay@gmail.com',
                'jogo@gmail.com'
            ]),
            'other_attendees' => json_encode([
                'jogo@gmail.com',
                'ss@gmail.com'
            ]),
            'event_start_date_range' => now(),
            'event_end_date_range' => now(),
            'user_id' => rand(1, 11)
        ];
    }
}
