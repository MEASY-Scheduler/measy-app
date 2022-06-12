<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterUserTest extends TestCase
{
    use RefreshDatabase;

    private $user;
    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }
    
    public function test_make_sure_a_user_can_register()
    {

        $response = $this->getJson(route('register'));

        $response->assertStatus(201);
    }

    public function test_make_sure_the_user_data_is_returned_after_registration()
    {
        $response = $this->getJson(route('register'));

        $this->assertEquals(1, count($response->json()));
    }

    public function test_make_sure_user_is_saved_in_the_database()
    {

        $response = $this->getJson(route('user.all'));

        $this->assertEquals(1, count($response->json()));
    }

    public function test_fetch_a_single_user()
    {

        $response = $this->getJson(route('user.show', $this->user->id))
            ->assertOk();

    }

    public function test_make_sure_a_single_user_is_returned()
    {

        $response = $this->getJson(route('user.show', $this->user->id));

        $this->assertEquals($response->json()['name'], $this->user->name);
    }

    public function test_save_new_user()
    {
        $data = [
            'name' =>'Ajibola Olaide',
            'email' => 'jb@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('Password!'),
            'remember_token' => Str::random(10),
            'phone_no' => 909993939,
            'cell_phone_no' => 894039483,
            'organization' => 'Microsoft',
            'job_title' => 'Project Manager',
            'occupation' => 'IT'
        ];

        $this->postJson(route('user.store'), $data)
            ->assertCreated();

        $this->assertDatabaseHas('users', $data);
    }
}
