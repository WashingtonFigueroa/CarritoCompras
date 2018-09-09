<?php

namespace App\Http\Controllers;

use App\RetiroPromocion;
use App\RetiroRetiroPromocion;
use Illuminate\Http\Request;

class RetiroRetiroPromocionController extends Controller
{
    public function index()
    {
        return response()->json(RetiroPromocion::with('usuario', 'promocion')->paginate(10), 200);
    }

    public function store(Request $request)
    {
        return response()->json(RetiroPromocion::create($request->all()), 201);
    }

    public function show($id)
    {
        return response()->json(RetiroPromocion::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $retiro_promocion = RetiroPromocion::find($id);
        $retiro_promocion->update($request->all());
        return response()->json($retiro_promocion, 200);
    }

    public function destroy($id)
    {
        $retiro_promocion = RetiroPromocion::find($id);
        $retiro_promocion->delete();
        return response()->json($retiro_promocion, 200);
    }
}
