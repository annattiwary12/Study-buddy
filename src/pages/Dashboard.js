import React from 'react';
import { FaComments } from 'react-icons/fa'; // Importing the chat icon

const Dashboard = () => {
  const matchedProfiles = [
    { id: 1, name: 'John Doe', exam: 'UPSC' },
    { id: 2, name: 'Jane Smith', exam: 'GRE' },
    {id: 3, name :'Rohit',exam:'IPS'},
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Matched Profiles</h2>
      <ul className="space-y-2">
        {matchedProfiles.map((profile) => (
          <li
            key={profile.id}
            className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="text-gray-700">{profile.exam}</p>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition">
              <FaComments size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
