import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-brand-yellow">
              <Link to="/">Kuleni</Link>
            </h2>

            <p className="mt-4 text-gray-200">
              Helping businesses create a professional digital identity through
              modern branding solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-gray-200">
              <li>Business Profiles</li>

              <li>Digital Business Cards</li>

              <li>QR Code Solutions</li>

              <li>Branding Design</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow">Company</h3>

            <ul className="mt-4 space-y-3 text-gray-200">
              <li>
                <Link to="/services" className="hover:text-brand-yellow">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-yellow">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-yellow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow">Contact</h3>

            <ul className="mt-4 space-y-3 text-gray-200">
              <li>Lusaka, Zambia</li>

              <li>info@kuleni.com</li>

              <li>+260 763 955 838</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex justify-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Kuleni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
