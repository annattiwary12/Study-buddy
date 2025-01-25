import React, { useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    exam: "UPSC",
    bio: "Looking for a study partner for UPSC prep.",
    photo: "https://via.placeholder.com/300x400", // Placeholder image
  },
  {
    id: 2,
    name: "Jane Smith",
    exam: "GRE",
    bio: "Preparing for GRE, loves solving quant problems.",
    photo: "https://via.placeholder.com/300x400", // Placeholder image
  },
  // Add more profiles here
];

const MatchingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [action, setAction] = useState(null); // For showing feedback

  const handleSwipe = (direction) => {
    setAction(direction === "right" ? "Matched!" : "Skipped!");
    if (direction === "right") {
      setMatches((prev) => [...prev, profiles[currentIndex]]);
    }
    setTimeout(() => {
      setAction(null); // Reset feedback message
      if (currentIndex < profiles.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 500);
  };

  const profile = profiles[currentIndex];

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-4">No more profiles to show!</h2>
        <p className="text-lg">You’ve gone through all profiles.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-400 to-blue-600">
      <div className="relative w-80 h-[450px] bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform duration-300">
        {/* Feedback Message */}
        {action && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full z-10">
            {action}
          </div>
        )}

        {/* Profile Photo */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-3/4 object-cover"
        />

        {/* Profile Details */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.exam}</p>
          <p className="mt-2 text-gray-500">{profile.bio}</p>
        </div>

        {/* Swipe Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
          <button
            onClick={() => handleSwipe("left")}
            className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transform hover:scale-110 transition duration-300"
          >
            <FaTimes size={20} />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transform hover:scale-110 transition duration-300"
          >
            <FaHeart size={20} />
          </button>
        </div>

        {/* Profile Counter */}
        <div className="absolute top-4 right-4 text-gray-700 text-sm bg-white bg-opacity-50 px-2 py-1 rounded">
          {currentIndex + 1} / {profiles.length}
        </div>
      </div>
    </div>
  );
};

export default MatchingPage;
