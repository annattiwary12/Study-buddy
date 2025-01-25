import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import backgroundVideo from '../assets/background.mp4'; // Import the video
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate('/login'); // Navigate to the login page on button click
  };

  return (
    <main className="home-container">
      {/* Background Video */}
      <video
        className="home-video"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        onError={() => console.error('Error loading video')}
      />
      
    
      <header className="home-content">
        <h1 className="text-4xl font-bold mb-4">Welcome to Study Buddy</h1>
        <p className="text-lg mb-6">Connect and collaborate with students preparing for competitive exams.</p>
        
    
        <button
          className="home-button"
          onClick={handleGetStartedClick}
          aria-label="Navigate to login page"
        >
          Get Started
        </button>
      </header>
    </main>
  );
};

export default Home;
