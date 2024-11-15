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
        $lead = FollowUp::create($request->all());
        return response()->json($lead, 201);
    }

    public function show($id)
    {
        return FollowUp::findOrFail($id);
    }

    public function updateFollowUpStatus(Request $request, $id)
    {
        $lead = FollowUp::findOrFail($id);
        $lead->update($request->all());
        return response()->json($lead, 200);
    }
}
