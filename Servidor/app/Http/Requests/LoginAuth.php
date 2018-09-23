<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginAuth extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'cuenta' => 'required',
            'password' => 'required|min:6'
        ];
    }

    public function messages()
    {
        return [
            'cuenta.required' => 'La cuenta es obligatoria',
            'password.required' => 'El password es obligatorio',
            'password.min' => 'El password debe tener al menos 6 caracteres'
        ];
    }
}
