<?php

namespace App\Http\Controllers;

use App\Compra;
use App\Usuario;
use Illuminate\Http\Request;

class CompraController extends Controller
{
    public function index()
    {
        $compras = Compra::with('detalleCompras')
                            ->orderBy('fecha', 'desc')
                            ->where('estado', true)
                            ->paginate(10);
        return response()->json($compras, 200);
    }

    public function store(Request $request)
    {
        return response()->json(Compra::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(Compra::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $compra = Compra::find($id);
        $compra->update($request->all());
        return response()->json($compra, 200);
    }

    public function destroy($id)
    {
        $compra = Compra::find($id);
        $compra->delete();
        return response()->json($compra, 200);
    }

    public function misCompras($usuario_id) {
        $mis_compras = Usuario::find($usuario_id)->compras()->orderBy('created_at', 'desc')->get();
        return response()->json($mis_compras, 200);
    }
}
