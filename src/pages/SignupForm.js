import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import './signup.css'; // Iport your CSS file

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Form validations...
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must include at least one letter, one number, and one special character.');
      return;
    }

    setIsLoading(true);
    try {
      console.log('User Signed Up:', { username, password });
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setSuccessMessage('Sign up successful! You can now log in.');

      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      setError('An error occurred during sign-up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <video
        className="video-background"
        src={`${process.env.PUBLIC_URL}/assets/background.mp4`}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <form
        className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full z-10 relative"
        onSubmit={handleSignup}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        {successMessage && (
          <div className="text-green-500 text-sm mb-4">{successMessage}</div>
        )}

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

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
