<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'agenda',
        'location',
        'main_stakeholders',
        'other_stakeholders',
        'meeting_start_range',
        'meeting_end_range',
        'duration',
        'no_of_entries',
        'deadline_date_for_response',
        'deadline_time_for_response',
        'speakers',
        'other_attendees',
        'event_start_date_range',
        'event_end_date_range',
        'user_id',

    ];

    protected $cast = [
        'main_stakeholders' => 'array',
        'other_stakeholders' => 'array',
        'speakers' => 'array',
        'other_attendees' => 'array',
    ];
}
