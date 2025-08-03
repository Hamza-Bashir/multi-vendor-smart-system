import { Routes, Route } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import VendorDashboard from "./Layout/VendorLayout";
import Overview from "./components/vendor/overview/Overview";
import Product from "./components/vendor/product/Product";
import Category from "./components/vendor/category/Category";
import Order from "./components/vendor/order/Order";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/signin" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/vendor" element={<VendorDashboard />}>
          <Route index element={<Overview />} />
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
