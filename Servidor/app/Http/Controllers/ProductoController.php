<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        return response()->json(Producto::with('categoria')
                                    ->orderBy('categoria_id')->paginate(10), 200);
    }
    public function lista_productos()
    {
        return response()->json(Producto::orderBy('categoria_id')->get(), 200);
    }

    public function buscar_productos() {
        $search = request()->input('search');
        $tipousuarios = Producto::with('categoria')
            ->where('material', 'like', '%'. $search . '%')
            ->orWhere('color', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($tipousuarios, 200);
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
