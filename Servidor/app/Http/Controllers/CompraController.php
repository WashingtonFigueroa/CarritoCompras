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

    public function detallesCompras($compra_id) {
        $detalles = DetalleCompra::join('inventarios', 'inventarios.inventario_id', '=', 'detalle_compras.inventario_id')
                                    ->join('productos.producto_id', '=', 'inventarios.producto_id')
                                    ->where('compra_id', $compra_id)
                                    ->selectRaw('detalle_compras.*, inventarios.*')
                                    ->get();
        return response()->json($detalles, 200);
    }
    public function uploadComprobante($compra_id) {
        $response = [
            'estado' => 'error'
        ];
        if (request()->hasFile('comprobante')){
            $comprobante_url = request()->file('comprobante')->store('comprobantes');
            $compra = Compra::find($compra_id);
            $compra->comprobante = $comprobante_url;
            $compra->estado = 'verificando comprobante';
            $compra->save();
            $response = [
                'estado' => 'exito'
            ];
        }
        return response()->json($response, 200);
    }
}
