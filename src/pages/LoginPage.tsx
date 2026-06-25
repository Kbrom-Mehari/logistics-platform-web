import React, { useState } from 'react';

export default function LoginPage() {
    // 1. Local component state
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // 2. Dynamic event handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear errors when the user interacts with the form again
        if (authError) setAuthError('');
    };

    // 3. Form submission logic
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAuthError('');

        if (!credentials.email || !credentials.password) {
            setAuthError('Please enter both your email and password.');
            return;
        }

        setIsLoading(true);

        // Mocking an authentication API network request
        setTimeout(() => {
            setIsLoading(false);

            // Let's simulate a fake credential check for demonstration purposes
            if (credentials.email === 'user@example.com' && credentials.password === 'password123') {
                alert('Welcome back! Login successful. 🚀');
            } else {
                setAuthError('Invalid email or password. Please try again.');
            }
        }, 1200);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-md px-3 py-1">
                        <div className="text-2xl font-bold text-blue-600">LogiCare</div>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer transition-colors">
                            Create one
                        </a>
                    </p>
                </div>

                {/* Authentication Error Feedback */}
                {authError && (
                    <div role="alert" aria-live="assertive" className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700 border border-rose-100">
                        {authError}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={credentials.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-500 cursor-pointer transition-colors">
                  Forgot password?
                </a>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 select-none">
                                Remember me
                            </label>
                        </div>
                    </div>

                    {/* Submit Action */}
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            aria-busy={isLoading}
                            className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                  {/* Simple CSS Loading Spinner */}
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}