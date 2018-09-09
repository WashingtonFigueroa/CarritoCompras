<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRetiroPromocionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('retiro_promociones', function (Blueprint $table) {
            $table->increments('retiro_promocion_id');
            $table->integer('usuario_id')->unsigned();
            $table->foreign('usuario_id')
                ->references('usuario_id')
                ->on('usuarios')
                ->onDelete('cascade');
            $table->integer('promocion_id')->unsigned();
            $table->foreign('promocion_id')
                    ->references('promocion_id')
                    ->on('promociones')
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
        Schema::dropIfExists('retiro_promociones');
    }
}
