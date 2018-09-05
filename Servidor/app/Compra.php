<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Compra extends Model
{
    use SoftDeletes;
    protected $table = 'compras';
    protected $primaryKey = 'compra_id';
    protected $fillable = [
        'usuario_id',
        'fecha',
        'total',
        'direccion',
        'departamento',
        'ciudad',
        'telefono',
        'estado',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function detalleCompras() {
        return $this->hasMany(DetalleCompra::class, 'compra_id');
    }
    public function usuario() {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->detalleCompras()->delete();
        });
    }
}
