<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Manilla extends Model
{
    use SoftDeletes;
    protected $table = 'manillas';
    protected $primaryKey = 'manilla_id';
    protected $fillable = [
        'tipo',
        'imagen'
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
}
