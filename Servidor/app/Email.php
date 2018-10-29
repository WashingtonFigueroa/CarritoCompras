<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Email extends Model
{
    use SoftDeletes;
    protected $table = 'emails';
    protected $primaryKey = 'email_id';
    protected $fillable = [
        'email'
    ];
    protected $hidden = [];
    protected $dates = ['deleted_at'];
}
