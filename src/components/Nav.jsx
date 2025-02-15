import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Abdulai Abu
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4">
          <a href="#home" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
