<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class inventario extends Model
{
    use SoftDeletes;
    protected $table = 'inventarios';
    protected $primaryKey = 'inventario_id';
    protected $fillable = [
        'producto_id',
        'talla',
        'stock',
        'precio',
        'puntos',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }

    public function detalleCompras() {
        return $this->hasMany(DetalleCompra::class, 'inventario_id');
    }
}
