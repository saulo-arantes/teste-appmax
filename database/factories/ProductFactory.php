<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $env = ['api', 'web'];
        $randomIndex = array_rand($env);

        return [
            'name'      => $this->faker->word(),
            'sku'       => Str::random(10),
            'quantity'  => random_int(1, 500),
            'addedVia'  => $env[$randomIndex]
        ];
    }
}
