import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md p-4 px-8 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <ShoppingCart className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">My Store</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-lg">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Shop
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden text-white focus:outline-none z-50">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Right Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6 space-y-6 text-lg font-medium flex flex-col items-start">
          <button onClick={toggleMenu} className="self-end text-transparent">
            <X size={24} />
          </button>
          <a href="#" onClick={toggleMenu} className="text-white hover:text-yellow-400">
            Home
          </a>
          <a href="#" onClick={toggleMenu} className="text-white hover:text-yellow-400">
            Shop
          </a>
          <a href="#" onClick={toggleMenu} className="text-white hover:text-yellow-400">
            About
          </a>
          <a href="#" onClick={toggleMenu} className="text-white hover:text-yellow-400">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
