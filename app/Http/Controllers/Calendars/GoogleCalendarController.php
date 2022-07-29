<?php

namespace App\Http\Controllers\Calendars;

use Illuminate\Support\Carbon;
use Spatie\GoogleCalendar\Event;
use App\Http\Controllers\Controller;
use App\Interfaces\GoogleCalendarRepositoryInterface;

class GoogleCalendarController extends Controller
{
    private GoogleCalendarRepositoryInterface $googlecalendarrepository;

    public function __construct(GoogleCalendarRepositoryInterface $googlecalendarrepository)
    {
        $this->googlecalendarrepository = $googlecalendarrepository;
    }


    public function connect()
    {
        $url = $this->googlecalendarrepository->connect();

        return response()->json([
            $url
        ]);
    }

    public function event()
    {
        $event = new Event;

        $event->name = 'A new event';
        $event->startDateTime = Carbon::now();
        $event->endDateTime = Carbon::now()->addHour();

        $event->save();

        // return $event;
        // $event = Event::get();

        return $event;
    }
}

?>