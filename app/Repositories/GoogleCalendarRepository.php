<?php

namespace App\Repositories;

use Google_Client;
use Google_Service;
use GoogleCalendar;
use Google\Service\Calendar;
use Google_Service_Calendar;
use App\Interfaces\GoogleCalendarRepositoryInterface;
use Google\Client;

class GoogleCalendarRepository implements GoogleCalendarRepositoryInterface
{
    protected $client;

    public function __construct()
    {
        // $client = new Google_Client();
        // $client->setAuthConfig('client_secret.json');
        // $client->addScope(Google_Service_Calendar::CALENDAR);

        // $guzzleClient = new \GuzzleHttp\Client(array('curl' => array(CURLOPT_SSL_VERIFYPEER => false)));
        // $client->setHttpClient($guzzleClient);
        // $this->client = $client;
    }

    public function connect()
    {
        $client = new Client();
        $client->setAuthConfig(storage_path('app/client_secret.json'));
        // $client->addScope(Google_Service_Calendar::CALENDAR);
        $client->addScope(Calendar::CALENDAR);
        // $authUrl = $client->createAuthUrl();
        $service = new Google_Service_Calendar($client);

        $calendarId = 'primary';

        $results = $service->events->listEvents($calendarId);

        return $results->getItems();
    }
}

