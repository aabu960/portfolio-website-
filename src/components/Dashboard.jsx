
 const Dashboard = () => {
  return (
    <div className="flex h-screen">
    

        {/* Content Section */}
        <div className="p-6 bg-light-gray flex-1">
          {/* Page Title */}
          <h2 className="text-3xl font-montserrat text-dark-gray mb-6">Overview</h2> 

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-3xl p-4 rounded-lg">
              <h3 className="text-lg text-slate-gray">Customers</h3>
              <p className="text-2xl font-palanquin text-dark-teal">1,245</p>
            </div>
            <div className="bg-white shadow-3xl p-4 rounded-lg">
              <h3 className="text-lg text-slate-gray">Products</h3>
              <p className="text-2xl font-palanquin text-dark-teal">524</p>
            </div>
            <div className="bg-white shadow-3xl p-4 rounded-lg">
              <h3 className="text-lg text-slate-gray">Sales</h3>
              <p className="text-2xl font-palanquin text-dark-teal">$24,582</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-3xl p-4 rounded-lg">
              <h3 className="text-lg font-montserrat text-dark-gray mb-4">Revenue</h3>
              {/* Insert Chart Here */}
              <div className="h-48 bg-pale-blue rounded"></div>
            </div>
            <div className="bg-white shadow-3xl p-4 rounded-lg">
              <h3 className="text-lg font-montserrat text-dark-gray mb-4">Performance</h3>
              {/* Insert Chart Here */}
              <div className="h-48 bg-pale-blue rounded"></div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default Dashboard;