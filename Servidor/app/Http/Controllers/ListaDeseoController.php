<?php

namespace App\Http\Controllers;

use App\ListaDeseo;
use Illuminate\Http\Request;

class ListaDeseoController extends Controller
{
    public function store() {
        $usuario_id = request()->input('usuario_id');
        $producto_id = request()->input('producto_id');
        $lista_deseos = ListaDeseo::where('usuario_id', $usuario_id)->count();
        $lista_deseo = null;
        if ($lista_deseos > 0) {
            $lista_deseo = ListaDeseo::create(request()->all());
        }
        return response()->json($lista_deseo, 201);
    }

    public function listaDeseos($usuario_id) {
        $listas = ListaDeseo::join('productos', 'productos.producto_id', '=', 'lista_deseos.producto_id')
                            ->where('usuario_id', $usuario_id)
                            ->selectRaw('productos.*')
                            ->get();
        return response()->json($listas, 200);
    }
}
