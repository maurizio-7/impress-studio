import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-brand-navy shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-white">
              <Link to="/">Kulani</Link>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-brand-yellow">
              Home
            </Link>

            <Link to="/services" className="text-white hover:text-brand-yellow">
              Services
            </Link>

            <Link
              to="/portfolio"
              className="text-white hover:text-brand-yellow"
            >
              Portfolio
            </Link>

            <Link to="/contact" className="text-white hover:text-brand-yellow">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
