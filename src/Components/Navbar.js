import React, { useState } from "react";

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* User Information */}
        <div className="flex items-center gap-2">
          {data.avatar_url && (
            <img
              src={data.avatar_url}
              alt={`${data.name || "User"}'s avatar`}
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
          )}
          <span className="text-black font-medium">
            Welcome, {data.name || "Guest"}
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggle}
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col space-y-4 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0 lg:items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#logout"
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
