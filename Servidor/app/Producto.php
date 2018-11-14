<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model
{
    use SoftDeletes;
    protected $table = 'productos';
    protected $primaryKey = 'producto_id';
    protected $fillable = [
        'categoria_id',
        'nombre',
        'descripcion',
        'material',
        'color1',
        'color2',
        'imagen',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function listaDeseos() {
        return $this->hasMany(ListaDeseo::class, 'producto_id');
    }
    public function promociones() {
        return $this->hasMany(Promocion::class, 'producto_id');
    }
    public function categoria() {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }
    public function imagenes() {
        return $this->hasMany(Imagen::class, 'producto_id');
    }
    public function inventarios() {
        return $this->hasMany(inventario::class, 'producto_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->descripcionProductos()->delete();
            $parent->productos()->delete();
            $parent->inventarios()->delete();
        });
    }
}
