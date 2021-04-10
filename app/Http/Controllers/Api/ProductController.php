<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'success'   => true,
            'products'  => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => 'required|max:255',
            'sku'       => 'required|unique:products|max:255',
            'quantity'  => 'required|integer'
        ]);

        $product = Product::create([
            'name'      => $request->name,
            'sku'       => $request->sku,
            'quantity'  => $request->quantity,
            'addedVia'  => 'api'
        ]);

        if ($product) {
            return response()->json([
                'success' => true,
                'productId' => $product
            ]);
        }
    }
}
