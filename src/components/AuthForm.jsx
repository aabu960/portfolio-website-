import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import axios from 'axios';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('signin'); // Controls active form
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const [error, setError] = useState(''); // Store error messages
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        activeTab === 'signin'
          ? 'http://localhost:5000/auth/signin'
          : 'http://localhost:5000/auth/signup';
  
      const payload =
        activeTab === 'signin'
          ? { email: formData.email, password: formData.password }
          : formData;
  
      const response = await axios.post(url, payload);
  
      // If successful login, clear old data and store new token and role
      if (activeTab === 'signin') {
        const { token, role } = response.data; // Ensure backend sends role
        localStorage.clear();                 // Clear any existing tokens/roles
        localStorage.setItem('token', token); // Save the new token
        localStorage.setItem('role', role);   // Save the new role
  
        // Route based on role
        if (role === 'admin') {
          navigate('/admindashboard'); // Redirect to admin dashboard
        } else {
          navigate('/userdashboard'); // Redirect to user dashboard
        }
      } else {
        alert('Sign Up Successful. Please log in.');
        setActiveTab('signin'); // Switch to sign-in after successful sign-up
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred'); // Set error message
    }
  };
  

  const handleForgotPassword = () => {
    // Redirect to forgot password page
    navigate('/forgot-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === 'signin'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setError('');
              setActiveTab('signin');
            }}
          >
            Sign In
          </button>
          <button
            className={`flex-1 py-2 text-lg font-semibold ${
              activeTab === 'signup'
                ? 'border-b-2 border-green-500 text-green-500'
                : 'text-gray-500'
            }`}
            onClick={() => {
              setError('');
              setActiveTab('signup');
            }}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2
            className={`text-2xl font-bold text-center ${
              activeTab === 'signin' ? 'text-blue-500' : 'text-green-500'
            }`}
          >
            {activeTab === 'signin' ? 'Sign In' : 'Sign Up'}
          </h2>

          {activeTab === 'signup' && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className={`w-full py-2 ${
              activeTab === 'signin'
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-green-500 hover:bg-green-600'
            } text-white rounded-lg transition`}
          >
            {activeTab === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>

          {activeTab === 'signin' && (
            <div className="text-sm text-center mt-4">
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
