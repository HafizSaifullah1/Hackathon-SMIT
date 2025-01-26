import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // Import your API instance
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth/login', { email, password });
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);  // Save token in localStorage
            navigate('/landingpage');  // Navigate to the LandingPage
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-700 p-6">
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2 text-left">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2 text-left">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-blue-600 font-medium hover:text-blue-800">
                        Sign Up here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
