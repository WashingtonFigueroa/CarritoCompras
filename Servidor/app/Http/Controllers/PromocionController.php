<?php

namespace App\Http\Controllers;

use App\Promocion;
use Illuminate\Http\Request;

class PromocionController extends Controller
{
    public function index()
    {
        return response()->json(Promocion::with('inventario')
                                        ->orderBy('promocion_id')->paginate(10), 200);
    }

    public function lista_promociones()
    {
        return response()->json(Promocion::with('inventario')
                                            ->orderBy('promocion_id')->get(), 200);
    }

    public function buscar_promociones() {
        $search = request()->input('search');
        $promocion = Promocion::with('inventario')
            ->where('detalle', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($promocion, 200);
    }

    public function store(Request $request)
    {
        try{
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('promociones');
                $promocion = new Promocion();
                $promocion->inventario_id = $request->input('inventario_id');
                $promocion->detalle = $request->input('detalle');
                $promocion->puntos = $request->input('puntos');
                $promocion->stock = $request->input('stock');
                $promocion->imagen = $path_documento;
                $promocion->estado = $request->input('estado');
                $promocion->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Promocion guardado exitosamente',
                'producto' => $promocion
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Promocion no guardado',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function show($id)
    {
        return response()->json(Promocion::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        try{
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('promociones');
                $promocion = Promocion::find($id);
                $promocion->inventario_id = $request->input('inventario_id');
                $promocion->detalle = $request->input('detalle');
                $promocion->puntos = $request->input('puntos');
                $promocion->stock = $request->input('stock');
                $promocion->imagen = $path_documento;
                $promocion->estado = $request->input('estado');
                $promocion->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Promocion actualizado exitosamente',
                'producto' => $promocion
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Promocion no guardado',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $promocion = Promocion::find($id);
        $promocion->delete();
        return response()->json($promocion, 200);
    }

    public function ver_imagen($id) {
        $imagen = Promocion::find($id);
        return response()->file(storage_path('app/' . $imagen->imagen));
    }
}
