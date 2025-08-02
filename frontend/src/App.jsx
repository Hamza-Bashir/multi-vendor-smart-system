import {Routes, Route} from "react-router-dom"
import RegisterPage from "./page/RegisterPage"
import LoginPage from "./page/LoginPage"
import VendorDashboard from "./Layout/VendorLayout"
import Overview from "./components/vendor/Overview"


const App = () => {
  return <>
  <Routes>
    <Route path="/"element={<RegisterPage/>} />
    <Route path="/signin" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/dashboard/vendor" element={<VendorDashboard/>}>
      <Route path="/dashboard/vendor" element={<Overview/>} />

    </Route>

  </Routes>
  
  </>
}

export default App