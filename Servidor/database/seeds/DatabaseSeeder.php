<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for($i = 0; $i < 3; $i++) {
            App\Categoria::create([
                'nombre' => $faker->word,
                'descripcion' => $faker->sentence
            ]);
        }
        $cliente = \App\TipoUsuario::create([
            'nombre' => 'Cliente',
            'descripcion' => 'Cliente de la tienda',
            'estado' => 'activo'
        ]);
        $root = \App\TipoUsuario::create([
            'nombre' => 'root',
            'descripcion' => 'Super Administrador',
            'estado' => 'activo'
        ]);
        \App\Usuario::create([
            'tipo_usuario_id' => $root->tipo_usuario_id,
            'nombres' => 'Administrador General',
            'cuenta' => 'root',
            'password' => Hash::make('123456'),
            'puntos' => 0
        ]);
        // $this->call(UsersTableSeeder::class);
    }
}
