import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              <a href="/">Impress Studio</a>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>

            <a href="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </a>

            <a href="/portfolio" className="text-gray-600 hover:text-blue-600">
              Portfolio
            </a>

            <a href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button
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
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
