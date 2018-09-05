<?php

namespace App\Http\Controllers;

use App\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{
    public function index()
    {
        return response()->json(Imagen::with('descripcionProducto')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $imagen = new Imagen();
            $imagen->descripcion_producto_id = $request->input('descripcion_producto_id');
            $imagen->imagen = $request->file('imagen')->store('imagenes');
            $imagen->save();
        }
        return response()->json($imagen, 201);
    }

    public function show($id)
    {
        return response()->json(Imagen::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $imagen = Imagen::find($id);
        $imagen->update($request->all());
        return response()->json($imagen, 200);
    }

    public function destroy($id)
    {
        $imagen = Imagen::find($id);
        $imagen->delete();
        return response()->json($imagen, 200);
    }
}
