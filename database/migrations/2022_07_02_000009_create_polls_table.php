<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('polls', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description');
            $table->string('agenda');
            $table->string('location');
            $table->json('main_stakeholders');
            $table->json('other_stakeholders');
            $table->timestamp('meeting_start_range');
            $table->timestamp('meeting_end_range');
            $table->string('duration');
            $table->string('no_of_entries');
            $table->timestamp('deadline_date_for_response');
            $table->string('deadline_time_for_response');
            $table->json('speakers');
            $table->json('other_attendees');
            $table->timestamp('event_start_date_range');
            $table->timestamp('event_end_date_range');
            $table->bigInteger('user_id');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('polls');
    }
};
