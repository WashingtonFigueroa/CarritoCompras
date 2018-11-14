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
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('celular');
            $table->string('direccion');
            $table->string('provincia');
            $table->string('canton');
            $table->string('calle_principal');
            $table->string('interseccion');
            $table->string('numero_domicilio');
            $table->string('referencia');
            $table->date('fecha');
            $table->float('total', 8, 2);
            $table->string('estado')->default('pendiente');
            $table->string('comprobante')->nullable();
            $table->string('numero_guia')->nullable();
            $table->integer('estrellas')->unsigned()->default(0);
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
