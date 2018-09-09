<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuth;
use App\TipoUsuario;
use App\Usuario;
use Illuminate\Http\Request;
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
            'mensaje' => 'Usuario '. $usuario->cuenta .' autenticado exitosamente'
        ], 200);
    }
}
