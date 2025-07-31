import {Routes, Route} from "react-router-dom"
import RegisterPage from "./page/RegisterPage"
import LoginPage from "./page/LoginPage"

const App = () => {
  return <>
  <Routes>
    <Route path="/"element={<RegisterPage/>} />
    <Route path="/signin" element={<RegisterPage/>} />
    <Route path="/login" element={<LoginPage/>} />

  </Routes>
  
  </>
}

export default App