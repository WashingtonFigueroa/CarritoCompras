<?php

namespace App\Http\Controllers;

use App\Compra;
use App\DetalleCompra;
use App\inventario;
use App\Usuario;
use Illuminate\Http\Request;

class CompraController extends Controller
{
    public function index()
    {
        $compras = Compra::with('detalleCompras')
                            ->orderBy('fecha', 'desc')
                            ->where('estado', true)
                            ->paginate(10);
        return response()->json($compras, 200);
    }

    public function store(Request $request)
    {
        $compra = Compra::create($request->all());
        $cartItems = $request->input('cart_items');
        $puntos = 0;
        foreach ($cartItems['items'] as $cartItem) {
            $puntos += $cartItem['puntos'];
            $detalle_compra = [
                'inventario_id' => $cartItem['inventario_id'],
                'compra_id' => $compra->compra_id,
                'cantidad' => $cartItem['cantidad'],
                'subtotal' => $cartItem['cantidad'] * $cartItem['precio']
            ];
            DetalleCompra::create($detalle_compra);
            $inventario = inventario::find($cartItem['inventario_id']);
            $inventario->stock = $inventario->stock - $cartItem['cantidad'];
            $inventario->save();
        }
        $usuario = Usuario::find($compra->usuario_id);
        $usuario->puntos = $usuario->puntos + $puntos;
        $usuario->save();
        return response()->json([
            'compra' => $compra,
            'usuario' => $usuario
        ], 201);
    }

    public function show($id)
    {
        return response()->json(Compra::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $compra = Compra::find($id);
        $compra->update($request->all());
        return response()->json($compra, 200);
    }

    public function destroy($id)
    {
        $compra = Compra::find($id);
        $compra->delete();
        return response()->json($compra, 200);
    }

    public function misCompras($usuario_id) {
        $mis_compras = Usuario::find($usuario_id)->compras()->orderBy('created_at', 'desc')->get();
        return response()->json($mis_compras, 200);
    }
}
