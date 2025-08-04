import {Link} from "react-router-dom" 

const Dashboard = ({dashboardLink}) => {
    return (
      <div className="bg-white shadow h-screen p-5 border-r w-64 fixed top-0 right-0 left-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Vendor Panel</h2>
        
        <nav className="space-y-3">
         {dashboardLink.map((lin, index) => (
            <Link to={lin.path}>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
               {lin.label}
            </button>
            </Link>
         ))}
          
{/*           
          <Link to="/dashboard/vendor/product">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
             Products
          </button>
          </Link>
          
          <Link to="/dashboard/vendor/category">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
             Categories
          </button>
          </Link>
          
          <Link to="/dashboard/vendor/order">
          <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium transition">
             Orders
          </button>
          </Link> */}
          
        </nav>
      </div>
    );
  };
  
  export default Dashboard;
  