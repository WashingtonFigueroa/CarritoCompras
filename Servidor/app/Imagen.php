<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imagen extends Model
{
    use SoftDeletes;
    protected $table = 'imagenes';
    protected $primaryKey = 'imagen_id';
    protected $fillable = [
        'producto_id',
        'imagen',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
}
