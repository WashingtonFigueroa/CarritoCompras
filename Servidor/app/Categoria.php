<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categoria extends Model
{
    use SoftDeletes;
    protected $table = 'categorias';
    protected $primaryKey = 'categoria_id';
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
    public function productos() {
        return $this->hasMany(Producto::class, 'categoria_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->productos()->delete();
        });
    }
}
