<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', [AuthenticatedSessionController::class, 'create'])
    ->middleware('guest')
    ->name('login');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/', function () {
    return redirect('/products');
});

Route::get('/products', [ProductController::class, 'index'])
    ->name('products.index');

Route::get('/products/create', [ProductController::class, 'create'])
    ->name('products.create');

Route::post('/products/store', [ProductController::class, 'store'])
    ->name('products.store');

Route::get('/products/{id}', [ProductController::class, 'edit'])
    ->name('products.edit');

Route::put('/products/{id}', [ProductController::class, 'update'])
    ->name('products.update');

Route::delete('/products/{id}', [ProductController::class, 'destroy'])
    ->name('products.destroy');

Route::get('/reports', [ReportController::class, 'index']);
Route::get('/reports/{date}', [ReportController::class, 'index']);
