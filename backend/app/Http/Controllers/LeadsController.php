<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadsController extends Controller
{
    public function index()
    {
        return Lead::all();
    }

    public function createLead(Request $request)
    {
        $lead = Lead::create($request->all());
        return response()->json($lead, 201);
    }
}
