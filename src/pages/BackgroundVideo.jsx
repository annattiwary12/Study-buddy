import React from 'react';
import backgroundVideo from './assets/background.mp4';

const VideoBackgroundLayout = ({ children }) => {
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
        aria-label="Background video of study space"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoBackgroundLayout;
