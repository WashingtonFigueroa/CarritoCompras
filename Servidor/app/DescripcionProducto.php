<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DescripcionProducto extends Model
{
    use SoftDeletes;
    protected $table = 'descripcion_productos';
    protected $primaryKey = 'descripcion_producto_id';
    protected $fillable = [
        'producto_id',
        'nombre',
        'descripcion',
        'precio',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function detalleCompras() {
        return $this->hasMany(DetalleCompra::class, 'descripcion_producto_id');
    }
    public function imagenes() {
        return $this->hasMany(Imagen::class, 'descripcion_producto_id');
    }
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->detalleCompras()->delete();
            $parent->imagenes()->delete();
        });
    }
}
