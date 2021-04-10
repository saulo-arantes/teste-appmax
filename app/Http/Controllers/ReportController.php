<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index(Request $request)
    {
        $queryDate = $request?->date ?? now();

        $deleted = Product::where([
                ['deleted_at', '>',date('Y-m-d', strtotime($queryDate))],
                ['deleted_at', '<',date('Y-m-d', strtotime($queryDate . ' +1 day'))]
            ])
            ->withTrashed()
            ->get();

        $added = Product::where([
            ['created_at', '>',date('Y-m-d', strtotime($queryDate))],
            ['created_at', '<',date('Y-m-d', strtotime($queryDate . ' +1 day'))]
        ])->get();

        $lowQuantity = Product::where('quantity', '<', 100)
            ->get();

        return Inertia::render('Reports/Reports', [
            'deleted'       => $deleted,
            'added'         => $added,
            'lowQuantity'   => $lowQuantity,
        ]);
    }
}
