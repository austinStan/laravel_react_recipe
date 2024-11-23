<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\FollowUp;
use App\Policies\FollowUpPolicy;
use Carbon\Carbon;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        FollowUp::class => FollowUpPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        // Register Passport routes
        Passport::tokensExpireIn(Carbon::now()->addMinutes(60));
    }
}
