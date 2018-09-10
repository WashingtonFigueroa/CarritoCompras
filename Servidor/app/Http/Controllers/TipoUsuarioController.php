<?php

namespace App\Http\Controllers;

use App\TipoUsuario;
use Illuminate\Http\Request;

class TipoUsuarioController extends Controller
{
    public function index()
    {
        return response()->json(TipoUsuario::orderBy('nombre')->paginate(10), 200);
    }

    public function lista_tipousuarios()
    {
        return response()->json(TipoUsuario::orderBy('nombre')->get(), 200);
    }

    public function buscar_tipousuarios() {
        $search = request()->input('search');
        $tipousuarios = TipoUsuario::where('nombre', 'like', '%'. $search . '%')
            ->orWhere('descripcion', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($tipousuarios, 200);
    }

    public function store(Request $request)
    {
        return response()->json(TipoUsuario::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(TipoUsuario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $tipo_usuario = TipoUsuario::find($id);
        $tipo_usuario->update($request->all());
        return response()->json($tipo_usuario, 200);
    }

    public function destroy($id)
    {
        $tipo_usuario = TipoUsuario::find($id);
        $tipo_usuario->delete();
        return response()->json($tipo_usuario, 200);
    }
}
