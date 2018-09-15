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
            ->where('nombre', 'like', '%'. $search . '%')
            ->orWhere('descripcion', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($tipousuarios, 200);
    }
    public function store(Request $request)
    {
        try{
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('productos');
                $producto = new Producto();
                $producto->categoria_id = $request->input('categoria_id');
                $producto->nombre = $request->input('nombre');
                $producto->descripcion = $request->input('descripcion');
                $producto->material = $request->input('material');
                $producto->color1 = $request->input('color1');
                $producto->color2 = $request->input('color2');
                $producto->imagen = $path_documento;
                $producto->save();
            }
            else{
                $producto = new Producto();
                $producto->categoria_id = $request->input('categoria_id');
                $producto->nombre = $request->input('nombre');
                $producto->descripcion = $request->input('descripcion');
                $producto->material = $request->input('material');
                $producto->color1 = $request->input('color1');
                $producto->color2 = $request->input('color2');
                $producto->imagen = "productos/log.png";
                $producto->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Producto guardado exitosamente',
                'producto' => $producto
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
    public function listar_descripcion_productos($producto_id) {
        $descripcion_productos = Producto::find($producto_id)->descripcionProductos()->paginate(10);
        return response()->json($descripcion_productos, 200);
    }
}
