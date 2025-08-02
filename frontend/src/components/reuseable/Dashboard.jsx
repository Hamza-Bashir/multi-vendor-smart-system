const Dashboard = () => {
    return (
      <div className="bg-white shadow h-screen p-5 border-r w-64">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Vendor Panel</h2>
        
        <nav className="space-y-3">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
            📊 Overview
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
            🛒 Products
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
            🗂️ Categories
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
            📦 Orders
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
            📈 Sales Report
          </button>
        </nav>
      </div>
    );
  };
  
  export default Dashboard;
  