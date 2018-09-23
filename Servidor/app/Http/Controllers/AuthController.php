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

        $usuario = Usuario::join('tipo_usuarios', 'usuarios.tipo_usuario_id', 'tipo_usuarios.tipo_usuario_id')
            ->where('cuenta', $request->input('cuenta'))
            ->select('usuarios.*', 'tipo_usuarios.nombre as tipo_usuario')
            ->first();

        $privilegios = TipoUsuario::find($usuario->tipo_usuario_id)
            ->privilegios()
            ->orderBy('ruta')
            ->get();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'privilegios' => $privilegios,
            'token' => $token,
            'mensaje' => 'Bienvenido '. $usuario->cuenta
        ], 200);
    }
    public function signup(SignupAuth $request) {
        $data = $request->all();
        $cliente_id = TipoUsuario::where('nombre', 'cliente')->first()->tipo_usuario_id;
        Usuario::create([
            'tipo_usuario_id' => $cliente_id,
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

        $usuario = Usuario::join('tipo_usuarios', 'usuarios.tipo_usuario_id', 'tipo_usuarios.tipo_usuario_id')
            ->where('cuenta', $data['cuenta'])
            ->select('usuarios.*', 'tipo_usuarios.nombre as tipo_usuario')
            ->first();

        $privilegios = TipoUsuario::find($usuario->tipo_usuario_id)
            ->privilegios()
            ->orderBy('ruta')
            ->get();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'privilegios' => $privilegios,
            'token' => $token,
            'mensaje' => 'Bienvenido '. $usuario->cuenta
        ], 200);
    }
}
