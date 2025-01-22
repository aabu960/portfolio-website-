import { useState } from "react";

 const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} bg-dark-teal h-screen text-white transition-all duration-300`}>
      <div className="flex flex-col justify-between h-full">
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

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="space-y-4">
            <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
              <a href="#">Dashboard</a>
            </li>
            <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
              <a href="#">Pages</a>
            </li>
            <li className="text-sm font-montserrat text-light-gray hover:text-highlight-yellow transition">
              <a href="#">Apps</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

};

export default Sidebar ;