<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupAuth extends FormRequest
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
            'nombres' => 'required',
            'cuenta' => 'required|unique:usuarios',
            'email' => 'required',
            'password' => 'required|confirmed|min:6'
        ];
    }
    public function messages()
    {
        return [
            'nombres.required' => 'Los nombres son obligatorios',
            'cuenta.required' => 'La cuenta es obligatoria',
            'cuenta.unique' => 'Esta cuenta ya esta registrada',
            'email.required' => 'El correo electrónico es obligatorio',
            'password.required' => 'La contraseña es obligatoria',
            'password.confirmed' => 'Las contraseñas no coinciden',
            'password.min' => 'La contraseña debe teber al menos 6 caracteres'
        ];
    }
}
