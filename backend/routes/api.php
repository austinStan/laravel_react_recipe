<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowUpsController;
use App\Http\Controllers\LeadsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route for logging in

use Laravel\Passport\Http\Controllers\AccessTokenController;
use Laravel\Passport\Http\Controllers\TransientTokenController;

Route::post('/oauth/token', [AccessTokenController::class, 'issueToken'])
    ->middleware('throttle');
Route::post('/oauth/token/refresh', [TransientTokenController::class, 'refresh'])
    ->middleware('throttle');

Route::post('/login', [AuthController::class, 'login'])->name("login");


Route::middleware('auth:api')->group(function () {
    Route::get('/register', [AuthController::class, 'index']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/leads', [LeadsController::class, 'createLead']);
    Route::get('/leads', [LeadsController::class, 'index']);
    Route::get('/followups', [FollowUpsController::class, 'index']);

    Route::post('/followups', [FollowUpsController::class, 'scheduleFollowUp']);
    Route::get('/followups/notifications', [FollowUpsController::class, 'getMissedNotifications']);


    Route::get('/followups/{id}', [FollowUpsController::class, 'showFollowUp']);
    Route::patch('/followups/{id}/status', [FollowUpsController::class, 'updateFollowUpStatus']);




    Route::post('/logout', [AuthController::class, 'logout']);
});
