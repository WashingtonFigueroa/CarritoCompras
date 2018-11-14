<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuth;
use App\Http\Requests\SignupAuth;
use App\Usuario;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(LoginAuth $request) {
        $credentials = $request->only('cuenta', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $usuario = Usuario::where('cuenta', $request->input('cuenta'))->first();

        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'token' => $token,
            'mensaje' => 'Bienvenido '. $usuario->cuenta
        ], 200);
    }
    public function signup(SignupAuth $request) {
        $data = $request->all();
        Usuario::create([
            'tipo_usuario' => 'cliente',
            'nombres' => $data['nombres'],
            'cuenta' => $data['cuenta'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'puntos' => 0
        ]);
        $credentials = [
            'cuenta' => $data['cuenta'],
            'password' => $data['password']
        ];
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $usuario = Usuario::where('cuenta', $data['cuenta'])->first();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'token' => $token,
            'mensaje' => 'Bienvenido '. $usuario->cuenta
        ], 200);
    }
    public function changePassword($usuario_id) {
        $current_password = request()->input('current_password');
        $new_password = request()->input('new_password');
        $confirmation_password = request()->input('confirmation_password');
        $usuario = Usuario::find($usuario_id);
        $response = null;
        if (Hash::check($current_password, $usuario->password)) {
            if ($new_password === $confirmation_password) {
                $usuario->password = Hash::make($new_password);
                $usuario->save();
                $response = [
                    "success" =>  true,
                    "message" => "Cambio de contraseña exitoso"
                ];
            } else {
                $response = [
                    "success" =>  false,
                    "message" => "La confirmación de la nueva contraseña no coincide"
                ];
            }
        } else {
            $response = [
                "success" =>  false,
                "message" => "La contraseña actual es incorrecta"
            ];
        }
        return response()->json($response, 200);
    }
}
