<?php

namespace App\Http\Controllers;

use App\Promocion;
use Illuminate\Http\Request;

class PromocionController extends Controller
{
    public function index()
    {
        return response()->json(Promocion::orderBy('detalle')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(Promocion::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(Promocion::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $promocion = Promocion::find($id);
        $promocion->update($request->all());
        return response()->json($promocion, 200);
    }

    public function destroy($id)
    {
        $promocion = Promocion::find($id);
        $promocion->delete();
        return response()->json($promocion, 200);
    }
}
