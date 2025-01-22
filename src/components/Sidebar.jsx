import { useState } from "react";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineShoppingBag, HiOutlineUsers, HiOutlineCalendar, HiOutlineCloud, HiOutlineCog } from "react-icons/hi"; // Import Heroicons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex ${isOpen ? "w-64" : "w-20"} bg-dark-teal h-screen text-white transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col justify-between h-full w-full">
        {/* Hamburger Menu */}
        <button
          className="p-4 text-white focus:outline-none absolute top-4 left-4 md:hidden"
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

        {/* Sidebar Content */}
        <div className="flex flex-col justify-between h-full w-full mt-12">
          {/* Dashboard Link */}
          <nav className="mt-8 px-4">
            <ul className="space-y-4">
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                <HiOutlineHome className="h-5 w-5 mr-2" />
                <a href="#">Dashboard</a>
              </li>

              {/* Pages Section */}
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex flex-col">
                {/* Title (not a link) */}
                <span className="text-sm font-semibold text-white mt-4">Pages</span>
                <ul className="space-y-2 ml-4 mt-2">
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineUsers className="h-5 w-5 mr-2" />
                    <a href="#">Customers</a>
                  </li>
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineShoppingBag className="h-5 w-5 mr-2" />
                    <a href="#">Products</a>
                  </li>
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineUsers className="h-5 w-5 mr-2" />
                    <a href="#">Employees</a>
                  </li>
                </ul>
              </li>

              {/* Apps Section */}
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex flex-col">
                {/* Title (not a link) */}
                <span className="text-sm font-semibold text-white mt-4">Apps</span>
                <ul className="space-y-2 ml-4 mt-2">
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineCloud className="h-5 w-5 mr-2" />
                    <a href="#">Kanban</a>
                  </li>
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineCalendar className="h-5 w-5 mr-2" />
                    <a href="#">Calendar</a>
                  </li>
                  <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                    <HiOutlineCloud className="h-5 w-5 mr-2" />
                    <a href="#">Weather</a>
                  </li>
                </ul>
              </li>

              {/* Settings Link */}
              <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition flex items-center">
                <HiOutlineCog className="h-5 w-5 mr-2" />
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
