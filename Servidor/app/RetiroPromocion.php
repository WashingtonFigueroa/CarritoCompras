<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RetiroPromocion extends Model
{
    protected $table = 'retiro_promociones';
    protected $primaryKey = 'retiro_promocion_id';
    protected $fillable = [
        'usuario_id',
        'promocion_id',
    ];
    protected $dates = ['deleted_at'];

    public function promocion() {
        return $this->belongsTo(Promocion::class, 'promocion_id');
    }

    public function usuario() {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

}
