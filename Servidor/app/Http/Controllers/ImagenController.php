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
            ->where('producto_id', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($articulo, 200);
    }
    public function store(Request $request)
    {
        try{
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('imagenes');
                $img = new Imagen();
                $img->producto_id = $request->input('producto_id');
                $img->imagen = $path_documento;
                $img->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Imagen guardado exitosamente',
                'producto' => $img
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Imagen no guardado exitosamente',
                'error' => 'ups!'
            ], 500);
        }
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
    public function ver_imagen($id) {
        $imagen = Imagen::find($id);
        return response()->file(storage_path('app/' . $imagen->imagen));
    }
}
