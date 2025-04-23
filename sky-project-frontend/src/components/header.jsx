import React from 'react';
import { ShoppingCart } from 'lucide-react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md p-4 px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo & Title */}
                <div className="flex items-center space-x-3">
                    <ShoppingCart className="w-8 h-8 text-yellow-400" />
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">My Store</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden sm:flex space-x-6 text-lg">
                    <a href="#" className="hover:text-yellow-400 transition duration-300">Home</a>
                    <a href="#" className="hover:text-yellow-400 transition duration-300">Shop</a>
                    <a href="#" className="hover:text-yellow-400 transition duration-300">About</a>
                    <a href="#" className="hover:text-yellow-400 transition duration-300">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
