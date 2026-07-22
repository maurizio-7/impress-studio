import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Helping Zambian businesses build a{" "}
            <span className="text-brand-accent">digital presence.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            From professional business profiles and branding — including
            custom websites — to smart NFC and QR business cards, we help
            Zambian businesses get discovered, verified, and connected.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="px-8 py-4 btn-primary">
              Get A Free Quote
            </Link>

            <Link
              to="/portfolio"
              className="px-8 py-4 border border-white/40 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-brand-dark hover:-translate-y-0.5"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div
          className="
              rounded-3xl
              overflow-hidden
              shadow-2xl
            "
        >
          <img
            src={heroImage}
            alt="Person scanning a QR Code"
            className="w-full h-96 obect-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
