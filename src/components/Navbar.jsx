import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Recruitr</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Jobs</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <User className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Jobs</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <div className="flex items-center space-x-4 mt-2">
            <User className="text-gray-600" />
            <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
              Login
            </button>
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
