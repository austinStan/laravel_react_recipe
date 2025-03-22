<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class LeadsController extends Controller
{
    public function index()
    {
        return Lead::all();
    }

    public function createLead(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => ['required', 'string'],
                'email' => ['required', 'email', Rule::unique('leads', 'email')],
                'phone' => ['required', Rule::unique('leads', 'phone')],
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422); // Use 422 for validation errors
            }

            $lead = Lead::create($validator->validated()); // Use validated data

            return response()->json($lead, 201); // 201 for successful creation

        } catch (Exception $e) {
            // Log the exception for debugging purposes.
            Log::error('Lead creation failed: ' . $e->getMessage());

            return response()->json(['error' => 'An unexpected error occurred.'], 500); // More user-friendly error
        }
    }
}
