<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    public function index() {
        return response()->json(Usuario::where('cuenta', '<>', 'root')
                                ->orderBy('nombres')
                                ->paginate(10), 200);
    }
    public function show($id) {
        $usuario = Usuario::find($id);
        return response()->json($usuario, 200);
    }
    public function store() {
        $usuario = new Usuario();
        $usuario->fill(request()->all());
        $usuario->password = Hash::make(request()->input('password'));
        $usuario->save();
        return response()->json($usuario, 201);
    }
    public function update($id) {
        $usuario = Usuario::find($id);
        $usuario->nombres = request()->input('nombres');
        $usuario->cuenta = request()->input('cuenta');
        $usuario->save();
        return response()->json($usuario, 200);
    }
    public function destroy($id) {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json('Usuario ' , $usuario->nombres . ' eliminado exitosamente', 200);
    }
}
