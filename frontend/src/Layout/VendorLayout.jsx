import { Outlet } from "react-router-dom"
import Dashboard from "../components/reuseable/Dashboard"
import Header from "../components/Header"

const VendorDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <Dashboard />
                </div>
                <div className="col-span-10 ml-10 p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default VendorDashboard
