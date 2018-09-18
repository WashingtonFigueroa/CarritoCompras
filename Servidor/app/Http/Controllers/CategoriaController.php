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

    public function lista_categorias()
    {
        return response()->json(Categoria::orderBy('nombre')->get(), 200);
    }

    public function buscar_categorias() {
        $search = request()->input('search');
        $categoria = Categoria::where('nombre', 'like', '%'. $search . '%')
            ->orWhere('descripcion', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($categoria, 200);
    }

    public function store(Request $request)
    {
        try{
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('categorias');
                $categoria = new Categoria();
                $categoria->nombre = $request->input('nombre');
                $categoria->descripcion = $request->input('descripcion');
                $categoria->imagen = $path_documento;
                $categoria->save();
            }
            else{
                $categoria = new Categoria();
                $categoria->nombre = $request->input('nombre');
                $categoria->descripcion = $request->input('descripcion');
                $categoria->imagen = "productos/log.png";
                $categoria->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Producto guardado exitosamente',
                'producto' => $categoria
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Producto no guardado exitosamente',
                'error' => 'ups!'
            ], 500);
        }
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

    public function productos($categoria_id) {
        $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->with('categoria')
                                ->orderBy('nombre')
                                ->get();
        return response()->json($productos, 200);
    }

    public function filtrar_productos($categoria_id, $ordenar_por) {
        $productos = [];
        switch($ordenar_por) {
            case 'nombre_asc':
                $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->with('categoria')
                                ->orderBy('nombre', 'asc')
                                ->get();
                break;
            case 'nombre_desc':
                $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->with('categoria')
                                ->orderBy('nombre', 'desc')
                                ->get();
                break;
            case 'fecha_asc':
                $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->with('categoria')
                                ->orderBy('updated_at', 'asc')
                                ->get();
                break;
            case 'fecha_desc':
                $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->with('categoria')
                                ->orderBy('updated_at', 'desc')
                                ->get();
                break;
        }
        return response()->json($productos, 200);
    }

    public function buscar_productos($categoria_id, $nombre) {
        $productos = Categoria::find($categoria_id)
                                ->productos()
                                ->where('nombre', 'like', '%'. $nombre .'%')
                                ->get();
        return response()->json($productos, 200);
    }


    public function ver_imagen($id) {
        $categoria = Categoria::find($id);
        return response()->file(storage_path('app/' . $categoria->imagen));
    }

}
