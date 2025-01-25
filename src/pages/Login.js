import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';

import './Home.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill in both fields');
      return;
    }

    setIsLoading(true);

    try {
      console.log('User Logged In:', { username, password });
      setTimeout(() => {
        alert('Login successful!');
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <form
          className="p-6 shadow-lg rounded-lg max-w-md w-full"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <div className="mb-4">
            <label className="block text-gray-200">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-200">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>

          {/* Forgot Password and Sign Up Links */}
          <div className="flex justify-between mt-4 text-sm text-white">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
