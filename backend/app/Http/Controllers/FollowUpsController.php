<?php

namespace App\Http\Controllers;

use App\Events\FollowUpStatusChanged;
use App\Events\MissedNotifications;
use App\Models\FollowUp;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

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

        FollowUpStatusChanged::dispatch($followup);

        return response()->json($followup, 200);
    }

    public function getMissedNotifications()
    {
        $user = Auth::user();

        $notifications = $user->notifications->map(function ($notification) {
            return [
                'id' => $notification->id,
                'message' => "Follow up changed to missed",
                "read_at" => $notification->read_at,
                "created_at" => $notification->created_at
            ];
        });

        return response()->json(['data' => $notifications, "message" =>
        'User data retrieved successfully!']);
    }

    public function sendMessage(Request $request)
    {
        broadcast(new MissedNotifications($request->message))->toOthers();
        return response()->json(['message' => 'Message sent']);
    }
}
