import { useNavigate } from "react-router-dom";
import React from "react";

function Logout() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = () => {
    alert("You have successfully logged out!");
    // Perform any additional logout logic here (e.g., clearing session data)
    navigate("/"); // Navigate to the login page or home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Thanks for Visiting!</h2>
        <p className="text-gray-700 mb-6">
          Follow my GitHub to see more projects and updates:
        </p>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mb-6 block"
        >
          https://github.com/your-github-username
        </a>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
