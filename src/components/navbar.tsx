import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-2 text-center">
      <div className="md:pr-16 md:pl-16 pl-4 pr-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <Link to="/">
              K<span className="text-accent">aa</span>d
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-md text-gray-200 hover:text-accent transition duration-300"
            >
              Home
            </Link>
            {/* <Link
              to="/dashboard"
              className="text-md text-gray-200 hover:text-accent transition duration-300"
            >
              Dashboard
            </Link> */}
            <Link
              to="/register"
              className="text-md text-gray-200 hover:text-accent transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-md text-gray-200 hover:text-accent transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle menu visibility
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden bg-primary text-white p-4 rounded-md shadow-lg">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="block text-md text-gray-200 hover:text-accent transition duration-300 mb-2"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="block text-md text-gray-200 hover:text-accent transition duration-300 mb-2"
            >
              Dashboard
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="block text-md text-gray-200 hover:text-accent transition duration-300"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
