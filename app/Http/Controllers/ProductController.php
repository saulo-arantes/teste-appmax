<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Error;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::all()->map(function ($product) {
                return [
                    'id'        => $product->id,
                    'name'      => $product->name,
                    'sku'       => $product->sku,
                    'quantity'  => $product->quantity,
                    'addedVia'  => 'web'
                ];
            }),
            'createUrl' => URL::route('products.create'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Products/Create');
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

        Product::create([
            'name'      => $request->name,
            'sku'       => $request->sku,
            'quantity'  => $request->quantity,
            'addedVia'  => 'web'
        ]);

        return Redirect::route('products.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Inertia::render('Products/Edit', [
            'product' => Product::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'      => 'required|max:255',
            'sku'       => 'required|unique:products,sku,'.$id.'|max:255',
            'quantity'  => 'required|integer'
        ]);

        Product::find($id)
            ->update($request->only(['name', 'sku', 'quantity']));

        return Redirect::route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::find($id)->update(['removedVia' => 'web']);
        Product::destroy($id);

        return Redirect::route('products.index');
    }
}
