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
        'inventario_id',
        'detalle',
        'puntos',
        'stock',
        'imagen',
        'estado',
    ];
    protected $dates = ['deleted_at'];
    public function inventario() {
        return $this->belongsTo(inventario::class, 'inventario_id');
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
