import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-700 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
        <button
          onClick={goHome}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
