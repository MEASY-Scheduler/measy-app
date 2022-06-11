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
        Schema::table('users', function (Blueprint $table) {
            $table->string('occupation')
            ->nullable()
            ->after('email_verified_at');

            $table->string('job_title')
            ->nullable()
            ->after('occupation');

            $table->string('organization')
            ->nullable()
            ->after('job_title');

            $table->string('phone_no')
                ->nullable()
                ->after('email');

            $table->string('cell_phone_no')
            ->after('phone_no')
            ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('occupation', 'job_title', 'cell_phone_no', 'phone_no', 'organization');
        });
    }
};
