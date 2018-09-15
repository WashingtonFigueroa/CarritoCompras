<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventarios', function (Blueprint $table) {
            $table->increments('inventario_id');
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')
                ->references('producto_id')
                ->on('productos')
                ->onDelete('cascade');
            $table->string('talla')->nullable();
            $table->integer('stock')->unsigned()->nullable();
            $table->float('precio',8,2);
            $table->integer('puntos')->nullable();
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
        Schema::dropIfExists('inventarios');
    }
}
