<?php

namespace App\Http\Controllers;

use App\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{
    public function index()
    {
        return response()->json(Imagen::with('producto')->paginate(10), 200);
    }
    public function lista_articulos()
    {
        return response()->json(Imagen::orderBy('imagen_id')->get(), 200);
    }
    public function buscar_articulos() {
        $search = request()->input('search');
        $articulo = Imagen::with('producto')
            ->where('nombre', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($articulo, 200);
    }
    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $imagen = new Imagen();
            $imagen->descripcion_producto_id = $request->input('producto_id');
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
