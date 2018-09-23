<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class TipoUsuario extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_usuarios';
    protected $primaryKey = 'tipo_usuario_id';
    protected $fillable = [
        'nombre',
        'descripcion',
        'estado'
    ];
    protected $dates = ['deleted_at'];
    public function usuarios() {
        return $this->hasMany(Usuario::class, 'tipo_usuario_id');
    }
    public function privilegios() {
        return $this->hasMany(Privilegio::class, 'tipo_usuario_id');
    }
    public static function boot()
    {
        parent::boot();
        self::deleting(function ($parent) {
            $parent->usuarios()->delete();
            $parent->privilegios()->delete();
        });
    }
}
