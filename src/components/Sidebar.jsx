import { Link } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiUser, FiBox, FiUsers, FiCalendar, FiSun } from "react-icons/fi"; // Add FiCalendar here
import logo from "../assets/react.svg"; // Make sure to adjust the path to your logo

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} bg-dark-teal h-screen text-white transition-all duration-300`}>
      <div className="flex flex-col justify-between h-full w-full">
        {/* Hamburger Menu */}
        <button
          className="p-4 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo and Company Name */}
        <div className="flex flex-col items-center p-4 space-y-2">
          <img src={logo} alt="Company Logo" className="h-10 w-10 object-contain" />
          {isOpen && <span className="font-montserrat text-white">Company Name</span>}
        </div>

        {/* Navigation Links */}
        <div className="overflow-y-auto mt-8 flex-grow">
          <nav>
            <ul className="space-y-4">
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
                <Link to="/" className="flex items-center space-x-2">
                  <FiHome className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
                <span className="font-bold">PAGES</span>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/customers" className="flex items-center space-x-2">
                  <FiUsers className="h-5 w-5" />
                  <span>Customers</span>
                </Link>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/products" className="flex items-center space-x-2">
                  <FiBox className="h-5 w-5" />
                  <span>Products</span>
                </Link>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/employees" className="flex items-center space-x-2">
                  <FiUser className="h-5 w-5" />
                  <span>Employees</span>
                </Link>
              </li>

              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
                <span className="font-bold">APPS</span>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/kanban" className="flex items-center space-x-2">
                  <FiBox className="h-5 w-5" />
                  <span>Kanban</span>
                </Link>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/calendar" className="flex items-center space-x-2">
                  <FiCalendar className="h-5 w-5" />
                  <span>Calendar</span>
                </Link>
              </li>
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition ml-4">
                <Link to="/weather" className="flex items-center space-x-2">
                  <FiSun className="h-5 w-5" />
                  <span>Weather</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
