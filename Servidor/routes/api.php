<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('login', 'AuthController@login');
Route::resource('usuarios', 'UsuarioController', ['only' => ['index', 'store', 'destroy']]);
Route::resource('tipo_usuarios', 'TipoUsuarioController', ['except' => ['create', 'edit']]);
Route::resource('privilegios', 'PrivilegioController', ['except' => ['create', 'edit']]);
Route::resource('categorias', 'CategoriaController', ['except' => ['create', 'edit']]);
Route::resource('productos', 'ProductoController', ['except' => ['create', 'edit']]);
Route::resource('descripcion_productos', 'DescripcionProductoController', ['except' => ['create', 'edit']]);
Route::resource('compras', 'CompraController', ['except' => ['create', 'edit']]);
Route::resource('detalle_compras', 'DetalleCompraController', ['except' => ['create', 'edit']]);
Route::resource('imagenes', 'ImagenController', ['except' => ['create', 'edit']]);
Route::resource('promociones', 'PromocionController', ['except' => ['create', 'edit']]);
Route::resource('retiro_promociones', 'RetiroPromocionController', ['except' => ['create', 'edit']]);
