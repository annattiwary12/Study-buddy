import React, { useState } from 'react';
import backgroundVideo from '../assets/background.mp4'; // Importing the background video
import './Home.css';
const ResetPassword = () => {
  const [username, setUsername] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handles the reset password form submission
  const handleReset = async (e) => {
    e.preventDefault();

    // Validate password length
    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, securityAnswer, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset successfully!');
        setUsername('');
        setSecurityAnswer('');
        setNewPassword('');
      } else {
        setMessage(data.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }

    // Reset the message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className="relative h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <div className="relative flex items-center justify-center h-full bg-opacity-50 bg-gray-800 z-10">
        <form
          className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full"
          onSubmit={handleReset}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

          {/* Display success or error message */}
          {message && (
            <div
              className={`text-sm mb-4 ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}
            >
              {message}
            </div>
          )}

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Security Answer Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Security Question</label>
            <input
              type="text"
              placeholder="Your answer to the security question"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* New Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="Enter a new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
