<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuth;
use App\Http\Requests\SignupAuth;
use App\TipoUsuario;
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
}
