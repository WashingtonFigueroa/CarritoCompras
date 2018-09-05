<?php

namespace App\Http\Controllers;

use App\DetalleCompra;
use Illuminate\Http\Request;

class DetalleCompraController extends Controller
{
    public function index()
    {
        return response()->json(DetalleCompra::with('descripcionProducto', 'compra')->orderBy('cantidad')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(DetalleCompra::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(DetalleCompra::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $detalle_compra = DetalleCompra::find($id);
        $detalle_compra->update($request->all());
        return response()->json($detalle_compra, 200);
    }

    public function destroy($id)
    {
        $detalle_compra = DetalleCompra::find($id);
        $detalle_compra->delete();
        return response()->json($detalle_compra, 200);
    }
}
