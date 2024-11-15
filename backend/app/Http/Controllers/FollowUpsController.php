<?php

namespace App\Http\Controllers;

use App\Models\FollowUp;
use Illuminate\Http\Request;

class FollowUpsController extends Controller
{
    public function index()
    {
        return FollowUp::with("lead")->get();
    }

    public function scheduleFollowUp(Request $request)
    {
        $followup = FollowUp::create($request->all());
        return response()->json($followup, 201);
    }

    public function showFollowUp($id)
    {
        return FollowUp::with("lead")->findOrFail($id);
    }

    public function updateFollowUpStatus(Request $request, $id)
    {
        $followup = FollowUp::findOrFail($id);
        $followup->update($request->all());
        return response()->json($followup, 200);
    }
}
