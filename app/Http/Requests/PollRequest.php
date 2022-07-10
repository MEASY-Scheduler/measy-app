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
            'agenda' => 'nullable|file|mimes:txt,doc,docx,pdf',
            'location' => 'required|string',
            'main_stakeholders' => 'required',
            'other_stakeholders' => 'required',
            'meeting_start_range' => 'required|string',
            'meeting_end_range' => 'required|string',
            'duration' => 'required|string',
            'no_of_entries' => 'required|string',
            'deadline_date_for_response' => 'required|string',
            'deadline_time_for_response' => 'required|string',
            'speakers' => 'required',
            'other_attendees' => 'required',
            'event_start_date_range' => 'required|string',
            'event_end_date_range' => 'required|string',
        ];
    }
}
