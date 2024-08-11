'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Attempt to sign in using the credentials
        const result = await signIn('credentials', {
            redirect: true,
            callbackUrl: '/',
            username:email,
            password,
        });

        // Handle errors if needed (if using redirect: false)
        if (!result?.ok) {
            console.log('Sign-in failed');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="relative flex justify-center text-sm text-gray-500">
                    <span className="px-2 bg-white">or</span>
                </div>
                <div>
                    <button
                        type="button"
                        className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={async () => {
                            await signIn('google', {
                                redirect: true,
                                callbackUrl: '/',
                            });
                        }}
                    >
                        <div className="flex items-center justify-center">
                            <svg
                                className="w-5 h-5 mr-2"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47.532 24.552c0-1.678-.151-3.288-.434-4.823H24v9.11h13.256c-.574 3.027-2.238 5.587-4.754 7.292v6.064h7.668c4.493-4.14 7.062-10.23 7.062-17.643z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M24 48c6.426 0 11.813-2.14 15.75-5.793l-7.668-6.064c-2.13 1.43-4.824 2.292-8.082 2.292-6.213 0-11.467-4.198-13.347-9.826H3.81v6.25C7.748 43.042 15.367 48 24 48z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M10.653 28.61A14.747 14.747 0 019.3 24c0-1.597.274-3.145.765-4.61v-6.25H3.81A24 24 0 000 24c0 3.936.906 7.648 2.51 10.86l7.14-6.25z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M24 9.526c3.584 0 6.795 1.234 9.324 3.646l6.978-6.979C34.646 2.608 29.484 0 24 0 15.367 0 7.748 4.958 3.81 13.14l7.614 6.25C12.532 13.724 17.786 9.526 24 9.526z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Sign in with Google
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
