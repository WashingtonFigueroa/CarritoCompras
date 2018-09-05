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
        'descripcion_producto_id',
        'compra_id',
        'cantidad',
        'subtotal',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function descripcionProducto() {
        return $this->belongsTo(DescripcionProducto::class, 'descripcion_producto_id');
    }
    public function compra() {
        return $this->belongsTo(Compra::class, 'compra_id');
    }
}
