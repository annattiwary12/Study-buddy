import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam'; // Import react-webcam

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [exam, setExam] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);  // State to store the captured image

  // Declare the webcamRef using useRef
  const webcamRef = useRef(null);

  // Handle webcam capture
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();  // Capture the image
    setImage(imageSrc);  // Save the captured image in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, exam, bio, image });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Profile Form</h2>

        {/* Name input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Enter your name"
          />
        </div>

        {/* Exam input */}
        <div className="mb-4">
          <label className="block text-gray-700">Exam</label>
          <input
            type="text"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Enter the exam you're preparing for"
          />
        </div>

        {/* Bio input */}
        <div className="mb-4">
          <label className="block text-gray-700">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Write a short bio"
          />
        </div>

        {/* Webcam Capture Section */}
        <div className="mb-4 text-center">
          <h3 className="text-xl mb-2">Face Verification</h3>
          <Webcam
            audio={false}
            height="auto"
            ref={webcamRef}  // Pass webcamRef to the Webcam component
            width="100%"
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "user" }}
          />
          <button
            type="button"
            onClick={captureImage}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Capture Image
          </button>
        </div>

        {/* Display captured image */}
        {image && (
          <div className="mb-4 text-center">
            <img src={image} alt="Captured" className="w-24 h-24 rounded-full mx-auto" />
          </div>
        )}

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
