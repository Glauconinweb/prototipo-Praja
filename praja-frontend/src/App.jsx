import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Shops from "./pages/Shops.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
