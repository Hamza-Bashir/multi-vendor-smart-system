import {Routes, Route} from "react-router-dom"
import RegisterPage from "./page/RegisterPage"
import LoginPage from "./page/LoginPage"
import VendorDashboard from "./Layout/VendorLayout"
import Overview from "./components/vendor/overview/Overview"
import Product from "./components/vendor/product/Product"


const App = () => {
  return <>
  <Routes>
    <Route path="/"element={<RegisterPage/>} />
    <Route path="/signin" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/dashboard/vendor" element={<VendorDashboard/>}>
      <Route path="/dashboard/vendor" element={<Overview/>} />
      <Route path="/dashboard/vendor/product" element={<Product />} />

    </Route>

  </Routes>
  
  </>
}

export default App