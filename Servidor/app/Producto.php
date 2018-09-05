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
        'stock',
        'material',
        'color',
        'largo',
        'ancho',
        'alto',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function descripcionProductos() {
        return $this->hasMany(DescripcionProducto::class, 'producto_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->descripcionProductos()->delete();
        });
    }
}
