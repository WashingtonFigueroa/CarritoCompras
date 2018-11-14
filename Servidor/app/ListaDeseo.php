<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ListaDeseo extends Model
{
    use SoftDeletes;
    protected $table = 'lista_deseos';
    protected $primaryKey = 'lista_deseo_id';
    protected $fillable= [
        'usuario_id',
        'producto_id',
    ];
    protected $dates = ['deleted_at'];

    public function usuario() {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
}
