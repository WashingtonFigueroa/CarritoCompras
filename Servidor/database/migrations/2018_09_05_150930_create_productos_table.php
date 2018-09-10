<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->increments('producto_id');
            $table->integer('categoria_id')->unsigned();
            $table->foreign('categoria_id')
                    ->references('categoria_id')
                    ->on('categorias')
                    ->onDelete('cascade');
            $table->integer('stock')->unsigned();
            $table->string('material');
            $table->string('color');
            $table->string('largo');
            $table->string('ancho');
            $table->string('alto');
            $table->integer('puntos')->unsigned();
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
        Schema::dropIfExists('productos');
    }
}
