<?php

namespace App\Http\Controllers;

use App\Manilla;
use Illuminate\Http\Request;

class ManillaController extends Controller
{
    public function index()
    {
        return response()->json(Manilla::orderBy('manilla_id')->paginate(10), 200);
    }
    public function lista_manillas()
    {
        return response()->json(Manilla::orderBy('manilla_id')->get(), 200);
    }
    public function buscar_manillas() {
        $search = request()->input('search');
        $manilla = Manilla::orderBy('manilla_id')
            ->where('tipo', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($manilla, 200);
    }
    public function store(Request $request)
    {
        try{
            $manilla = new Manilla();
            if ($request->hasFile('imagen')){
                $path_documento = $request->file('imagen')->store('manillas');
                $manilla->tipo = $request->input('tipo');
                $manilla->imagen = $path_documento;
                $manilla->save();
            }
            return response()->json([
                'title' => 'Exito',
                'message' => 'Manilla guardado exitosamente',
                'producto' => $manilla
            ], 201);

        }catch (\Exception $e) {
            return response()->json([
                'title' => 'Error',
                'message' => 'Manilla no guardada',
                'error' => 'ups!'
            ], 500);
        }
    }

    public function show($id)
    {
        return response()->json(Manilla::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $imagen = Manilla::find($id);
        $imagen->update($request->all());
        return response()->json($imagen, 200);
    }

    public function destroy($id)
    {
        $imagen = Manilla::find($id);
        $imagen->delete();
        return response()->json($imagen, 200);
    }
    public function ver_imagen($id) {
        $imagen = Manilla::find($id);
        return response()->file(storage_path('app/' . $imagen->imagen));
    }
}
