<?php

namespace App\Http\Controllers;

use App\DescripcionProducto;
use Illuminate\Http\Request;

class DescripcionProductoController extends Controller
{
    public function index()
    {
        return response()->json(DescripcionProducto::orderBy('nombre')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(DescripcionProducto::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(DescripcionProducto::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $descripcion_producto = DescripcionProducto::find($id);
        $descripcion_producto->update($request->all());
        return response()->json($descripcion_producto, 200);
    }

    public function destroy($id)
    {
        $descripcion_producto = DescripcionProducto::find($id);
        $descripcion_producto->delete();
        return response()->json($descripcion_producto, 200);
    }
}
