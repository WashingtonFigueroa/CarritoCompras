<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imagen extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_usuarios';
    protected $primaryKey = 'tipo_usuario_id';
    protected $fillable = [
        'descripcion_producto_id',
        'imagen',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
}
