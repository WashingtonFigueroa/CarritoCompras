<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Promocion extends Model
{
    use SoftDeletes;
    protected $table = 'promociones';
    protected $primaryKey = 'promocion_id';
    protected $fillable = [
        'producto_id',
        'detalle',
        'puntos',
        'estado',
    ];
    protected $dates = ['deleted_at'];
    public function producto() {
        return $this->belongsTo(Producto::class, 'producto_id');
    }
    public function retiroPromociones() {
        return $this->hasMany(RetiroPromocion::class, 'promocion_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->retiroPromociones()->delete();
        });
    }
}
