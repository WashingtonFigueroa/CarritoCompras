<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imagen extends Model
{

    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
}
