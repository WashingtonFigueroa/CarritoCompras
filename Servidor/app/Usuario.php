<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

    protected $primaryKey = 'usuario_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tipo_usuario', 'nombres', 'cuenta', 'password', 'puntos',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function retiroPromociones() {
        return $this->hasMany(RetiroPromocion::class, 'usuario_id');
    }
    public function compras() {
        return $this->hasMany(Compra::class, 'usuario_id');
    }
}
