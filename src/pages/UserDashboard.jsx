import React from "react";
import { useNavigate } from 'react-router-dom';const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear token and role
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <p>Welcome, User! Here you can view your personal information and tasks.</p>
      {/* Add more user-specific features */}
      <ul className="list-disc mt-4">
        <li>View Profile</li>
        <li>Manage Tasks</li>
        <li>Settings</li>

        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

      </ul>
    </div>
  );
};

export default UserDashboard;
