 const Navbar = () => {
    return (
      <div className="flex items-center justify-between bg-light-gray shadow-3xl px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-montserrat text-dark-gray">CRM Dashboard</h1>
  
        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-white-400 px-4 py-2 rounded-md text-sm focus:outline-none"
          />
          {/* User Profile */}
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
        </div>
      </div>
    );
  };
  
  export default Navbar;