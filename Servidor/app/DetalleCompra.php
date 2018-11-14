<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DetalleCompra extends Model
{
    use SoftDeletes;
    protected $table = 'detalle_compras';
    protected $primaryKey = 'detalle_compra_id';
    protected $fillable = [
        'inventario_id',
        'compra_id',
        'cantidad',
        'subtotal',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }

    public function compra() {
        return $this->belongsTo(Compra::class, 'compra_id');
    }

    public function inventario() {
        return $this->belongsTo(inventario::class, 'inventario_id');
    }
}
