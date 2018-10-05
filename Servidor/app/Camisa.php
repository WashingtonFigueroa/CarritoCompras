<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Camisa extends Model
{
    use SoftDeletes;
    protected $table = 'camisas';
    protected $primaryKey = 'camisa_id';
    protected $fillable = [
        'detalle',
        'imagen'
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
}
