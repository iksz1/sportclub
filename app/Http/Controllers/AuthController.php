<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;
// use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    
    protected $registerRules = [
        'first_name' => 'required|string|min:3|max:40|regex:/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/u',
        'last_name' => 'required|string|min:3|max:40|regex:/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/u',
        'email' => 'required|string|email|max:64',
        'phone' => 'nullable|string|max:15|regex:/^\+?[0-9]+$/',
        'address' => 'nullable|string|max:128',
        'password' => 'required|string|min:6|max:255',
    ];

    protected $loginRules = [
        'email' => 'required|string|email|max:64',
        'password' => 'required|string|min:6|max:255',
    ];

    /**
     * Create a new user after a valid registration.
     *
     * @param  Request $request
     * @return App\User
     */
    protected function register(Request $request)
    {
        $this->validate($request, $this->registerRules);
        return User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'password' => Hash::make($request->password),
            'api_token' => Str::random(60),
        ]);
        // return response('registration successful', 200);
    }

    /**
     * Get an API token after successfull login
     * 
     * @param Request $request
     * @return App\User
     */
    protected function login(Request $request)
    {
        $this->validate($request, $this->loginRules);
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            return response($user->toJson());
        }
        return response()->json(['message' => 'Wrong email or password'], 400);
    }
}
