<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        return response()->json(Categoria::orderBy('nombre')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(Categoria::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(Categoria::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);
        $categoria->update($request->all());
        return response()->json($categoria, 200);
    }

    public function destroy($id)
    {
        $categoria = Categoria::find($id);
        $categoria->delete();
        return response()->json($categoria, 200);
    }
}