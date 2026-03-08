import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        
        <Sidebar />

        <div style={{ flex: 1 }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;