// src/pages/AdminDashboard.jsx
import { FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/login-bg.jpg')` }}
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/4 lg:w-1/5 bg-white/10 backdrop-blur-md shadow-lg p-4 flex md:flex-col justify-baseline items-center md:items-start space-y-6">
        <div className="text-2xl font-bold text-white mr-15 mb-4">
          Sky Cosmetics
        </div>

        {/* Navigation Buttons */}
        <div className="flex md:flex-col gap-8 w-full mt-15">
          
          {/* Users Navigation button */}
          <Link to="/admin/users">
            <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50 cursor-pointer">
              <FaUsers /> Users
            </button>
          </Link>

          {/* Products Navigation button */}
          <Link to="/admin/products">
            <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50 cursor-pointer">
              <FaBoxOpen /> Products
            </button>
          </Link>

          {/* Orders Navigation button */}
          <Link to="/admin/orders">
            <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50 cursor-pointer">
              <FaShoppingCart /> Orders
            </button>
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 text-white backdrop-blur-sm bg-white/10">
        <h2 className="text-3xl font-semibold mb-4">Welcome, Admin!</h2>
        <Routes>
          <Route path="users" element={<h1>Admin Users</h1>} />
          <Route path="products" element={<h1>Admin Products</h1>} />
          <Route path="orders" element={<h1>Admin Orders</h1>} />
          <Route path="/" element={<h1>Welcome, Admin!</h1>} />
        </Routes>
      </div>
    </div>
  );
}
