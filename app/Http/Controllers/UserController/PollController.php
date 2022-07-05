<?php

namespace App\Http\Controllers\UserController;

use App\Models\Poll;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\PollRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class PollController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $polls = $request->user()->polls;

        return response($polls);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PollRequest $request)
    {       
        $polls = $request->all();

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
        $poll->user_id = $polls['user_id'];

        $filename = '';
        if($request->hasFile('agenda')){
            // $filename = $request->title . time() . $request->agenda->extension();
            // $request->file->move(public_path('agenda'), $filename);
            // Storage::disk('local')->putFile('agenda', $filename);
            $poll_image = $request->file('agenda');
            $name = $request->first_name . time() . strtolower($poll_image->getClientOriginalExtension());
            $loc = 'polls/agenda/';
            $filename = $loc . $name;
            $poll_image->move($loc, $name);
            $poll->agenda = $filename;
        }
        
        $poll->save();

        return response($poll, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $poll = Poll::findOrFail($id);

        return response($poll);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PollRequest $request, $id)
    {
        $old_image = $request->old_image;
        $poll_image = $request->file('agenda');

        if($poll_image)
        {
            $filename = $request->first_name . time() . strtolower($poll_image->getClientOriginalExtension());
            $loc = 'polls/agenda/';
            $final_img = $loc . $filename;
            $poll_image->move($loc, $filename);

            unlink($old_image);
            $poll = Poll::findOrFail($id)
                ->update([
                    'title' => $request->title,
                    'description' => $request->description,
                    'location' => $request->location,
                    'agenda' => $final_img,
                    'main_stakeholders' => json_encode($request->main_stakeholders),
                    'other_stakeholders' => json_encode($request->other_stakeholders),
                    'meeting_start_range' => $request->meeting_start_range,
                    'meeting_end_range' => $request->meeting_end_range,
                    'duration' => $request->duration,
                    'no_of_entries' => $request->no_of_entries,
                    'deadline_date_for_response' => $request->deadline_date_for_response,
                    'deadline_time_for_response' => $request->deadline_time_for_response,
                    'speakers' => json_encode($request->speakers),
                    'other_attendees' => json_encode($request->other_attendees),
                    'event_start_date_range' => $request->event_start_date_range,
                    'event_end_date_range' => $request->event_end_date_range,
                    'user_id' => $request->user()->id,
                ]);

            return response([
                "message" => "Poll edited successfully, with a different agenda!"
            ], 201);
        }else{
            $poll = Poll::findOrFail($id)
                ->update([
                    'title' => $request->title,
                    'description' => $request->description,
                    'location' => $request->location,
                    'main_stakeholders' => json_encode($request->main_stakeholders),
                    'other_stakeholders' => json_encode($request->other_stakeholders),
                    'meeting_start_range' => $request->meeting_start_range,
                    'meeting_end_range' => $request->meeting_end_range,
                    'duration' => $request->duration,
                    'no_of_entries' => $request->no_of_entries,
                    'deadline_date_for_response' => $request->deadline_date_for_response,
                    'deadline_time_for_response' => $request->deadline_time_for_response,
                    'speakers' => json_encode($request->speakers),
                    'other_attendees' => json_encode($request->other_attendees),
                    'event_start_date_range' => $request->event_start_date_range,
                    'event_end_date_range' => $request->event_end_date_range,
                    'user_id' => $request->user()->id,
                ]);

            return response([
                "message" => "Poll edited successfully, with the same agenda!"
            ], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $poll = Poll::findOrFail($id)
            ->delete();

        return response([
            "message" => "Poll deleted successfully!"
        ]);

    }
}
