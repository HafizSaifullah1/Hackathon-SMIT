import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios'; // Import your API instance
import { Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    // State for form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Function to handle signup
    const handleSignup = async () => {
        const userData = { firstName, lastName, email, password };

        try {
            const response = await axios.post('/auth/signup', userData);
            console.log('User signed up successfully:', response.data);
            navigate('/Ladingpage');  // Navigate to the dashboard
        } catch (err) {
            setError('An error occurred during signup. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
            <div className="w-full max-w-sm bg-white shadow-2xl rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Your Account</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* First Name Input */}
                    <div className="mb-4 text-left">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4 text-left">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Doe"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-4 text-left">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="youremail@example.com"
                            className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-6 text-left">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                    </div>


                    {/* Signup Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-6 text-sm text-gray-700">
                    Already have an account?{' '}
                    <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-800">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
