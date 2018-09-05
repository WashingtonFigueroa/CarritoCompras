<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_compras', function (Blueprint $table) {
            $table->increments('detalle_compra_id');
            $table->integer('descripcion_producto_id')->unsigned();
            $table->foreign('descripcion_producto_id')
                    ->references('descripcion_producto_id')
                    ->on('descripcion_productos')
                    ->onDelete('cascade');
            $table->integer('compra_id')->unsigned();
            $table->foreign('compra_id')
                    ->references('compra_id')
                    ->on('compras')
                    ->onDelete('cascade');
            $table->integer('cantidad')->unsigned();
            $table->float('subtotal', 8, 2);
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
        Schema::dropIfExists('detalle_compras');
    }
}
