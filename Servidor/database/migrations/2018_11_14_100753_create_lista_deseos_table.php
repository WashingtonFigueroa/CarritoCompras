<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListaDeseosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lista_deseos', function (Blueprint $table) {
            $table->increments('lista_deseo_id');
            $table->integer('usuario_id')->unsigned();
            $table->integer('producto_id')->unsigned();
            $table->foreign('usuario_id')
                    ->references('usuario_id')
                    ->on('usuarios')
                    ->onDelete('cascade');
            $table->foreign('producto_id')
                    ->references('producto_id')
                    ->on('productos')
                    ->onDelete('cascade');
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
        Schema::dropIfExists('lista_deseos');
    }
}
