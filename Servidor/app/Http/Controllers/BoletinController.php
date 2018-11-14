<?php

namespace App\Http\Controllers;

use App\Boletin;
use Illuminate\Http\Request;

class BoletinController extends Controller
{
    public function store() {
        $boletines = Boletin::where('email', \request()->input('email'))->count();
        $response = [];
        if ($boletines == 0) {
            $boletin = Boletin::create(request()->all());
            $response = [
                'estado' => 'exito',
                'mensaje' => $boletin->email . ' registrado exitosamente'
            ];
        } else {
            $response = [
                'estado' => 'error',
                'mensaje' => request()->input('email'). ' ya se encuentra registrado'
            ];
        }
        return response()->json($response, 201);
    }

    public function enviarBoletines() {

    }
}
