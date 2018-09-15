<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePromocionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promociones', function (Blueprint $table) {
            $table->increments('promocion_id');
            $table->integer('inventario_id')->unsigned();
            $table->foreign('inventario_id')
                ->references('inventario_id')
                ->on('inventarios')
                ->onDelete('cascade');
            $table->text('detalle');
            $table->integer('puntos')->unsigned();
            $table->integer('stock')->unsigned();
            $table->string('imagen')->nullable();
            $table->boolean('estado');
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
        Schema::dropIfExists('promociones');
    }
}
