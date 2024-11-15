<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
    }

    public function login(Request $request)
    {

        // Validate the request data
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Check if the credentials are correct
        $user = User::where('email', $validated['email'])->first();


        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'error' => 'Login credentials are invalid',
            ], 401);
        }

        // Generate access token
        $token = $user->createToken('Personal Access Client')->accessToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
        ]);
    }

    public function register(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create the user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        // Generate a token for the user
        $token = $user->createToken('Personal Access Client')->accessToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    // Handle Logout
    public function logout(Request $request)
    {
        // Revoke the token
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
