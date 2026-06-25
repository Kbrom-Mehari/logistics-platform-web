import React, { useState } from 'react';

export default function SignupForm() {
    // 1. Single object state for all inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // State for tracking error messages
    const [error, setError] = useState('');
    // State for simulating a loading/submitting process
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 2. Unified change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear errors when the user starts typing again
        if (error) setError('');
    };

    // 3. Form submission handler
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        // Basic validation check
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Simulating an API call
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Account created successfully! 🎉');
            // Reset form
            setFormData({ username: '', email: '', password: '', confirmPassword: '' });
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-md px-3 py-1">
                        <div className="text-2xl font-bold text-blue-600">LogiCare</div>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
                    </p>
                </div>

                {/* Global Error Banner */}
                {error && (
                    <div role="alert" aria-live="assertive" className="rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-100">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md">
                        {/* Username Input */}
                        <div>
                            {/*<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">*/}
                            {/*    Username*/}
                            {/*</label>*/}
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all sm:text-sm"
                                placeholder="username"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            {/*<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">*/}
                            {/*    Email address*/}
                            {/*</label>*/}
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            {/*<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">*/}
                            {/*    Password*/}
                            {/*</label>*/}
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all sm:text-sm ${
                                    error && formData.password.length < 6 && formData.password.length > 0
                                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-100'
                                }`}
                                placeholder="Password"
                            />
                            {/* Password helper */}
                            {formData.password.length > 0 && formData.password.length < 6 && (
                                <p className="mt-1 text-xs text-red-600">Password must be at least 6 characters.</p>
                            )}
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full rounded-lg border px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all sm:text-sm ${
                                    formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword
                                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-100'
                                }`}
                                placeholder="Confirm password"
                            />
                            {/* Confirm password helper */}
                            {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (
                                <p className="mt-1 text-xs text-red-600">Passwords do not match.</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Creating account...' : 'Sign up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}