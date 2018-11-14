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

        \App\Usuario::create([
            'tipo_usuario' => 'administrador',
            'nombres' => 'Administrador General',
            'cuenta' => 'root',
            'password' => Hash::make('123456'),
            'puntos' => 0,
            'email' => 'mamanipozofrancojesus@gmail.com'
        ]);
        // $this->call(UsersTableSeeder::class);
    }
}
