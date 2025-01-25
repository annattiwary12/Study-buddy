import React from 'react';

// Remove this if unused
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
    <ul className="flex space-x-4">
      <li><a href="/" className="hover:text-yellow-400">Home</a></li>
      <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
      <li><a href="/dashboard" className="hover:text-yellow-400">Dashboard</a></li>
      <li><a href="/profile" className="hover:text-yellow-400">Profile</a></li>
      <li><a href="/matching" className="hover:text-yellow-400">Matching</a></li>
      <li><a href="/chat" className="hover:text-yellow-400">Chat</a></li>
    </ul>
  </nav>
  
  );
};

export default Navbar;
