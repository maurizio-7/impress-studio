import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              <Link to="/">Kulani</Link>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>

            <Link to="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>

            <Link to="/portfolio" className="text-gray-600 hover:text-blue-600">
              Portfolio
            </Link>

            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="
          hidden md:block
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          transition
        "
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
