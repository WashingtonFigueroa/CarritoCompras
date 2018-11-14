<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boletin extends Model
{
    protected $table = 'boletines';
    protected $primaryKey = 'boletin_id';
    protected $fillable = [
        'boletin_id',
        'email',
    ];
    protected $dates = ['deleted_at'];

}
