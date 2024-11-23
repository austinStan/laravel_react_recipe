<?php

namespace App\Http\Controllers;

use App\Models\FollowUp;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $this->authorize('updateFollowUpStatus', $followup);
        $followup->update($request->all());
        return response()->json($followup, 200);
    }
}
