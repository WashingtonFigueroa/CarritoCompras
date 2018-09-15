<?php

namespace App\Http\Controllers;

use App\inventario;
use Illuminate\Http\Request;

class InventarioController extends Controller
{
    public function index()
    {
        return response()->json(inventario::with('producto')
            ->orderBy('inventario_id')->paginate(10), 200);
    }

    public function lista_inventario()
    {
        return response()->json(inventario::orderBy('inventario_id')->get(), 200);
    }

    public function buscar_inventario() {
        $search = request()->input('search');
        $inventario = inventario::with('producto')
            ->join('productos', 'productos.producto_id', 'inventarios.producto_id')
            ->whereNull('productos.deleted_at')
            ->orWhere('productos.nombre', 'like', '%'. $search . '%')
            ->where('inventario.talla', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($inventario, 200);
    }

    public function store(Request $request)
    {
        return response()->json(inventario::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(inventario::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $inventario = inventario::find($id);
        $inventario->update($request->all());
        return response()->json($inventario, 200);
    }

    public function destroy($id)
    {
        $inventario = inventario::find($id);
        $inventario->delete();
        return response()->json($inventario, 200);
    }
}
