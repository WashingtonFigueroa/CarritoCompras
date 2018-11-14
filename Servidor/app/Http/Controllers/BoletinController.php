<?php

namespace App\Http\Controllers;

use App\Boletin;
use App\Mail\BoletinMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BoletinController extends Controller
{
    public function index() {
        return response()->json(Boletin::orderBy('email')->get(), 200);
    }
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
        $boletines = Boletin::get();
        $emails = [];
        foreach ($boletines as $boletin) {
            array_push($emails, $boletin->email);
        }
        $envio = [
            'emails' => $emails,
            'asunto' => request()->input('asunto'),
            'mensaje' => request()->input('mensaje'),
        ];

        Mail::send(new BoletinMail($envio));
        return response()->json([
            'mensaje' => 'Boletin enviado correctamente'
        ], 200);
    }
}
