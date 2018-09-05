<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        return response()->json(Producto::orderBy('material')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(Producto::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(Producto::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);
        $producto->update($request->all());
        return response()->json($producto, 200);
    }

    public function destroy($id)
    {
        $producto = Producto::find($id);
        $producto->delete();
        return response()->json($producto, 200);
    }
}
