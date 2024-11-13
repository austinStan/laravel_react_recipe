<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/leads', [LeadsController::class, 'index']);
Route::post('/leads', [LeadsController::class, 'createLead']);

Route::get('/followups', [FollowUpsController::class, 'index']);
Route::post('/followups', [FollowUpsController::class, 'scheduleFollowUp']);
Route::get('/followups/{id}', [FollowUpsController::class, 'showFollowUp']);
Route::put('/followups/{id}/status', [FollowUpsController::class, 'updateFollowUpStatus']);
