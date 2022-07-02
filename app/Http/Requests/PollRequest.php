<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PollRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'agenda' => 'required|file|mimes:csv,txt,doc,docx,pdf',
            'location' => 'required|string',
            'main_stakeholders' => 'required|json',
            'other_stakeholders' => 'required|json',
            'meeting_start_range' => 'required|timezone',
            'meeting_end_range' => 'required|timezone',
            'duration' => 'required|string',
            'no_of_entries' => 'required|string',
            'deadline_date_for_response' => 'required|timezone',
            'deadline_time_for_response' => 'required|string',
            'speakers' => 'required|json',
            'other_attendees' => 'required|json',
            'event_start_date_range' => 'required|timezone',
            'event_end_date_range' => 'required|timezone',
            'user_id' => 'required|integer',
        ];
    }
}
