<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
        ]);

        // Check if the credentials are correct
        $user = User::where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Generate access token
        $token = $user->createToken('recipe')->accessToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
        ]);
    }

    // Handle Logout
    public function logout(Request $request)
    {
        // Revoke the token
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
