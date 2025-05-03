// src/pages/AdminDashboard.jsx
import { FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";

export default function AdminPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/login-bg.jpg')` }}>
            {/* Sidebar */}
            <div className="w-full md:w-1/4 lg:w-1/5 bg-white/10 backdrop-blur-md shadow-lg p-4 flex md:flex-col justify-baseline items-center md:items-start space-y-6">
                <div className="text-2xl font-bold text-white mr-15 mb-4">Sky Cosmetics</div>
                <div className="flex md:flex-col gap-8 w-full mt-15">
                    <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50" >
                        <FaUsers /> Users
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50">
                        <FaBoxOpen /> Products
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-pink-300 transition  bg-white/20 rounded-xl shadow-md p-2 w-full hover:bg-black/50">
                        <FaShoppingCart /> Orders
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 text-white backdrop-blur-sm bg-white/10">
                <h2 className="text-3xl font-semibold mb-4">Welcome, Admin!</h2>
                <p>This is your dashboard. Choose a menu to manage Users, Products, or Orders.</p>

                {/* Example Section */}
                <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-4 bg-white/20 rounded-xl shadow-md  hover:bg-black/50">📦 Product Overview</div>
                    <div className="p-4 bg-white/20 rounded-xl shadow-md  hover:bg-black/50">👥 User Activity</div>
                    <div className="p-4 bg-white/20 rounded-xl shadow-md  hover:bg-black/50">🛒 Order Stats</div>
                </div>
            </div>
        </div>
    );
}
