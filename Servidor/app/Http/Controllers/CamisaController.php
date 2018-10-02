<?php

namespace App\Http\Controllers;

use App\Camisa;
use Illuminate\Http\Request;

class CamisaController extends Controller
{
    public function index()
    {
        return response()->json(Camisa::orderBy('camisa_id')->paginate(10), 200);
    }
    public function lista_manillas()
    {
        return response()->json(Camisa::orderBy('camisa_id')->get(), 200);
    }
    public function buscar_manillas() {
        $search = request()->input('search');
        $camisa = Camisa::orderBy('camisa_id')
            ->where('detalle', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($camisa, 200);
    }
    public function store(Request $request)
    {
        try{
            $camisa = new Camisa();
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('camisas');
                $camisa->detalle = $request->input('detalle');
                $camisa->imagen = $path_documento;
                $camisa->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Camisa guardado exitosamente',
                'producto' => $camisa
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Camisa no guardada',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function show($id)
    {
        return response()->json(Camisa::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        try{

            if ($request->hasFile('imagen')){
                $camisa = Camisa::find($id);
                $path_documento = $request->file('imagen')->store('camisas');
                $camisa->detalle = $request->input('detalle');
                $camisa->imagen = $path_documento;
                $camisa->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Camisa actualizado exitosamente',
                'producto' => $camisa
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Camisa no actualizado',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $imagen = Camisa::find($id);
        $imagen->delete();
        return response()->json($imagen, 200);
    }
    public function ver_imagen($id) {
        $imagen = Camisa::find($id);
        return response()->file(storage_path('app/' . $imagen->imagen));
    }

    public function tipo_manillas($tipo) {
        $manillas = Camisa::where('tipo', $tipo)->get();
        return response()->json($manillas, 200);
    }
}
