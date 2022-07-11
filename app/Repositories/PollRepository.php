<?php

namespace App\Repositories;

use App\Http\Requests\PollRequest;
use App\Models\Poll;
use Illuminate\Http\Request;
use App\Interfaces\PollRepositoryInterface;

class PollRepository implements PollRepositoryInterface
{
    public function index()
    {

        return auth()->user()->polls;
    }

    public function show($id)
    {
        return Poll::findOrFail($id);
    }

    public function destroy($id)
    {
        $poll = Poll::where('user_id', $id);
        if($poll)
        {
            Poll::findOrFail($id)->delete();
        }else{
            return false;
        }
    }

    public function create(object $polldetails)
    {
        $polls = $polldetails->all();

        $poll = new Poll();

        $poll->title = $polls['title'];
        $poll->description = $polls['description'];
        $poll->location = $polls['location'];
        $poll->main_stakeholders = json_encode($polls['main_stakeholders']);
        $poll->other_stakeholders = json_encode($polls['other_stakeholders']);
        $poll->meeting_start_range = $polls['meeting_start_range'];
        $poll->meeting_end_range = $polls['meeting_end_range'];
        $poll->duration = $polls['duration'];
        $poll->no_of_entries = $polls['no_of_entries'];
        $poll->deadline_date_for_response = $polls['deadline_date_for_response'];
        $poll->deadline_time_for_response = $polls['deadline_time_for_response'];
        $poll->speakers = json_encode($polls['speakers']);
        $poll->other_attendees = json_encode($polls['other_attendees']);
        $poll->event_start_date_range = $polls['event_start_date_range'];
        $poll->event_end_date_range = $polls['event_end_date_range'];
        // $poll->user_id = $polls['user_id'];
        $poll->user_id = auth()->user()->id;

        $filename = '';
        if($polldetails->hasFile('agenda')){
            $poll_image = $polldetails->file('agenda');
            $name = $polldetails->first_name . time() . strtolower($poll_image->getClientOriginalExtension());
            $loc = 'polls/agenda/';
            $filename = $loc . $name;
            $poll_image->move($loc, $name);
            $poll->agenda = $filename;
        }
        
        $poll->save();

        return $poll;

    }

    public function update(object $polldetails, $id)
    {
        $old_image = $polldetails->old_image;
        $poll_image = $polldetails->file('agenda');

        if($poll_image)
        {
            $filename = $polldetails->first_name . time() . strtolower($poll_image->getClientOriginalExtension());
            $loc = 'polls/agenda/';
            $final_img = $loc . $filename;
            $poll_image->move($loc, $filename);

            unlink($old_image);
            $poll = Poll::findOrFail($id)
                ->update([
                    'title' => $polldetails->title,
                    'description' => $polldetails->description,
                    'location' => $polldetails->location,
                    'agenda' => $final_img,
                    'main_stakeholders' => json_encode($polldetails->main_stakeholders),
                    'other_stakeholders' => json_encode($polldetails->other_stakeholders),
                    'meeting_start_range' => $polldetails->meeting_start_range,
                    'meeting_end_range' => $polldetails->meeting_end_range,
                    'duration' => $polldetails->duration,
                    'no_of_entries' => $polldetails->no_of_entries,
                    'deadline_date_for_response' => $polldetails->deadline_date_for_response,
                    'deadline_time_for_response' => $polldetails->deadline_time_for_response,
                    'speakers' => json_encode($polldetails->speakers),
                    'other_attendees' => json_encode($polldetails->other_attendees),
                    'event_start_date_range' => $polldetails->event_start_date_range,
                    'event_end_date_range' => $polldetails->event_end_date_range,
                    'user_id' => auth()->user()->id,
                ]);

            return "Poll edited successfully, with a different agenda!";
        }else{
            $poll = Poll::findOrFail($id)
                ->update([
                    'title' => $polldetails->title,
                    'description' => $polldetails->description,
                    'location' => $polldetails->location,
                    'main_stakeholders' => json_encode($polldetails->main_stakeholders),
                    'other_stakeholders' => json_encode($polldetails->other_stakeholders),
                    'meeting_start_range' => $polldetails->meeting_start_range,
                    'meeting_end_range' => $polldetails->meeting_end_range,
                    'duration' => $polldetails->duration,
                    'no_of_entries' => $polldetails->no_of_entries,
                    'deadline_date_for_response' => $polldetails->deadline_date_for_response,
                    'deadline_time_for_response' => $polldetails->deadline_time_for_response,
                    'speakers' => json_encode($polldetails->speakers),
                    'other_attendees' => json_encode($polldetails->other_attendees),
                    'event_start_date_range' => $polldetails->event_start_date_range,
                    'event_end_date_range' => $polldetails->event_end_date_range,
                    'user_id' => auth()->user()->id,
                ]);

            return "Poll edited successfully! with the same agenda";
        }
    }
}