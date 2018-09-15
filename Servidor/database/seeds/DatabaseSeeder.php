<?php

use Illuminate\Database\Seeder;

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

        for($i = 0; $i < 10; $i++) {
            App\Categoria::create([
                'nombre' => $faker->word,
                'descripcion' => $faker->sentence
            ]);
        }
        // $this->call(UsersTableSeeder::class);
    }
}
