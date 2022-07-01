<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name' => 'required|string',
            'email' => 'required|string|email|indisposable|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'phone_no' => 'nullable|string',
            'cell_phone_no' => 'nullable|string',
            'organization' => 'nullable|string',
            'job_title' => 'nullable|string',
            'occupation' => 'nullable|string'
        ];
    }
}
