<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDescripcionProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('descripcion_productos', function (Blueprint $table) {
            $table->increments('descripcion_producto_id');
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')
                    ->references('producto_id')
                    ->on('productos')
                    ->onDelete('cascade');
            $table->string('nombre');
            $table->text('descripcion');
            $table->float('precio', 8, 2);
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
        Schema::dropIfExists('descripcion_productos');
    }
}
