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
Route::post('signup', 'AuthController@signup');

Route::resource('tipo_usuarios', 'TipoUsuarioController', ['except' => ['create', 'edit']]);
Route::post('buscar_tipousuarios','TipoUsuarioController@buscar_tipousuarios');
Route::get('lista_tipousuarios','TipoUsuarioController@lista_tipousuarios');

Route::resource('usuarios', 'UsuarioController', ['only' => ['index', 'store', 'destroy']]);

Route::resource('privilegios', 'PrivilegioController', ['except' => ['create', 'edit']]);
//rutas categoria
Route::resource('categorias', 'CategoriaController', ['except' => ['create', 'edit', 'update']]);
Route::post('buscar_categorias','CategoriaController@buscar_categorias');
Route::post('modificar_categoria/{id}','CategoriaController@update');
Route::get('filtrar_productos_categoria/{categoria_id}/{ordenar_por}','CategoriaController@filtrar_productos');
Route::get('buscar_productos_categoria/{categoria_id}/{nombre}','CategoriaController@buscar_productos');
Route::get('lista_categorias','CategoriaController@lista_categorias');
//rutas productos
Route::resource('productos', 'ProductoController', ['except' => ['create', 'edit','update']]);
Route::post('modificar_productos/{id}','ProductoController@update');
Route::post('buscar_productos','ProductoController@buscar_productos');
Route::get('lista_productos','ProductoController@lista_productos');

Route::resource('descripcion_productos', 'DescripcionProductoController', ['except' => ['create', 'edit']]);
Route::resource('compras', 'CompraController', ['except' => ['create', 'edit']]);
Route::resource('detalle_compras', 'DetalleCompraController', ['except' => ['create', 'edit']]);
//rutas imagen articulo
Route::resource('articulos', 'ImagenController', ['except' => ['create', 'edit', 'update']]);
Route::post('modificar_articulos/{id}','ImagenController@update');
Route::post('buscar_articulos','ImagenController@buscar_articulos');
Route::get('lista_articulos','ImagenController@lista_articulos');
//promociones
Route::resource('promociones', 'PromocionController', ['except' => ['create', 'edit','update']]);
Route::post('modificar_promociones/{id}','PromocionController@update');
Route::post('buscar_promociones','PromocionController@buscar_promociones');
Route::get('lista_promociones','PromocionController@lista_promociones');
// Rutas Manillas
Route::resource('manillas', 'ManillaController', ['except' => ['create', 'edit','update']]);
Route::post('modificar_manillas/{id}','ManillaController@update');
Route::post('buscar_manillas','ManillaController@buscar_manillas');
Route::get('lista_manillas','ManillaController@lista_manillas');
Route::get('tipo_manillas/{tipo}', 'ManillaController@tipo_manillas');
// Rutas Camisas
Route::resource('camisas', 'CamisaController', ['except' => ['create', 'edit','update']]);
Route::post('modificar_camisas/{id}','CamisaController@update');
Route::post('buscar_camisas','CamisaController@buscar_camisas');
Route::get('lista_camisas','CamisaController@lista_camisas');
Route::get('tipo_camisas/{detalle}', 'CamisaController@tipo_camisas');
//Rutas Inventario
Route::resource('inventarios', 'InventarioController', ['except' => ['create', 'edit']]);
Route::post('buscar_inventario','InventarioController@buscar_inventario');
Route::get('lista_inventario','InventarioController@lista_inventario');

Route::resource('retiro_promociones', 'RetiroPromocionController', ['except' => ['create', 'edit']]);

/*custom controllers*/
Route::get('listar_descripcion_productos/{producto_id}', 'ProductoController@listar_descripcion_productos');
Route::post('buscar_descripcion_productos', 'DescripcionProductoController@buscar_descripcion_productos');

Route::get('productos_categoria/{categoria_id}', 'CategoriaController@productos');

/*show images*/
Route::get('ver_imagen_categoria/{id}', 'CategoriaController@ver_imagen');
Route::get('ver_imagen_producto/{id}', 'ProductoController@ver_imagen');
Route::get('ver_imagen_articulo/{id}', 'ImagenController@ver_imagen');
Route::get('ver_imagen_manilla/{id}', 'ManillaController@ver_imagen');
Route::get('ver_imagen_camisa/{id}', 'CamisaController@ver_imagen');
Route::get('ver_imagen_promocion/{id}', 'PromocionController@ver_imagen');

/*mis compras*/
Route::resource('compras', 'CompraController');
Route::get('mis-compras/{usuario_id}', 'CompraController@misCompras');
