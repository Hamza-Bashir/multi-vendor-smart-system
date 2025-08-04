import { Outlet } from "react-router-dom"
import Dashboard from "../components/reuseable/Dashboard"
import Header from "../components/Header"

const VendorDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <Dashboard dashboardLink={[
                        { label: "Overview", path: "/dashboard/vendor" },
                        { label: "Categories", path: "/dashboard/vendor/category" },
                        { label: "Products", path: "/dashboard/vendor/product" },
                        { label: "Orders", path: "/dashboard/vendor/order" },
                        {label : "Notification", path: "/dashboard/vendor/notification"}
                    ]} />
                </div>
                <div className="col-span-10 ml-10 p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default VendorDashboard
