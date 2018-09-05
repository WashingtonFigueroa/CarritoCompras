<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->increments('compra_id');
            $table->integer('usuario_id')->unsigned();
            $table->foreign('usuario_id')
                    ->references('usuario_id')
                    ->on('usuarios')
                    ->onDelete('cascade');
            $table->date('fecha');
            $table->float('total', 8, 2);
            $table->string('direccion');
            $table->string('departamento');
            $table->string('ciudad');
            $table->string('telefono');
            $table->boolean('estado')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compras');
    }
}
