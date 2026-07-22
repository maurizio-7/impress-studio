import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full bg-brand-dark shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-white">
              <Link to="/">Kuleni</Link>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:text-brand-interactive transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (desktop only) */}
          <Link to="/contact" className="hidden md:inline-flex btn-primary">
            Get A Free Quote
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-white p-2"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark shadow-xl border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-brand-interactive transition-colors duration-200 py-1"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
