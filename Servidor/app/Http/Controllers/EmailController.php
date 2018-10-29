<?php

namespace App\Http\Controllers;

use App\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function index()
    {
        return response()->json(Email::orderBy('email_id')->paginate(10), 200);
    }
    public function lista_emails()
    {
        return response()->json(Email::orderBy('email_id')->get(), 200);
    }
    public function buscar_emails() {
        $search = request()->input('search');
        $email = Email::orderBy('email_id')
            ->where('email', 'like', '%'. $search . '%')
            ->paginate(10);
        return response()->json($email, 200);
    }
    public function store(Request $request)
    {
        $email = Email::create($request->all());
        return response()->json($email, 201);
    }

    public function show($id)
    {
        return response()->json(Email::find($id), 200);
    }

    public function update(Request $request, $id)
    {
    }
    public function destroy($id)
    {
        $email = Email::find($id);
        $email->delete();
        return response()->json($email, 200);
    }

}
