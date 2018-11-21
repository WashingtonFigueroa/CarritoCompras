<?php

namespace App\Http\Controllers;

use App\ListaDeseo;
use Illuminate\Http\Request;

class ListaDeseoController extends Controller
{
    public function index() {
        return response()->json(ListaDeseo::get(), 200);
    }
    public function store() {
        $usuario_id = request()->input('usuario_id');
        $producto_id = request()->input('producto_id');
        $lista_deseos = ListaDeseo::where('usuario_id', $usuario_id)->count();
        $response = null;
        if ($lista_deseos === 0) {
            ListaDeseo::create([
                'usuario_id' => $usuario_id,
                'producto_id' => $producto_id
            ]);
            $response = [
                'estado' => 'exito'
            ];
        } else {
            $response = [
                'estado' => 'error'
            ];
        }
        return response()->json($response, 201);
    }

    public function listaDeseos($usuario_id) {
        $listas = ListaDeseo::join('productos', 'productos.producto_id', '=', 'lista_deseos.producto_id')
                            ->where('usuario_id', $usuario_id)
                            ->selectRaw('productos.*, lista_deseos.lista_deseo_id')
                            ->get();
        return response()->json($listas, 200);
    }

    public function imagen($url) {
        return response()->file(storage_path('app/productos/' . $url));
    }

    public function destroy($lista_deseo_id) {
        ListaDeseo::destroy($lista_deseo_id);
        return response()->json(['mensaje' => 'Eliminado exitosamente'], 200);
    }
}
