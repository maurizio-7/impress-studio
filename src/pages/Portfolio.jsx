import React from "react";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";

function Portfolio() {
  const projects = [
    {
      title: "Poultry Farm Digital Profile",
      category: "Business Profile",
      description:
        "A professional digital profile designed to showcase services, location and customer contact details.",
      image: "/images/gfp.jpg",
    },

    {
      title: "Modern NFC Business Card",
      category: "Digital Business Card",
      description:
        "A smart business card solution allowing customers to instantly access business information through NFC and QR technology.",
      image: "/images/qrCode.jpg",
    },

    {
      title: "Farm Company Identity",
      category: "Business Branding",
      description:
        "A professional business identity package created to improve credibility and customer trust.",
      image: "/images/kwasha.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 px-6 bg-brand-navy">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Work
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Explore examples of the digital identities, business profiles and
            branding solutions we create for businesses.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="h-64 bg-brand-navy/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full 
                    h-full 
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className="
                    inline-block
                    bg-brand-yellow
                    text-brand-navy
                    font-semibold
                    text-xs
                    uppercase
                    tracking-wide
                    px-3
                    py-1
                    rounded-full
                  "
                  >
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-brand-navy">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-navy">
            Solutions We Create
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div
              className="
              bg-gray-50
              rounded-2xl
              p-8
              text-center
              hover:bg-white
              hover:shadow-xl
              transition
            "
            >
              <h3 className="font-bold text-brand-navy text-xl">
                Digital Profiles
              </h3>

              <p className="mt-2 text-gray-600">
                Professional business information pages.
              </p>
            </div>

            <div
              className="
              bg-gray-50
              rounded-2xl
              p-8
              text-center
              hover:bg-white
              hover:shadow-xl
              transition
            "
            >
              <h3 className="font-bold text-brand-navy text-xl">
                QR Solutions
              </h3>

              <p className="mt-2 text-gray-600">
                Simple ways for customers to connect.
              </p>
            </div>

            <div
              className="
              bg-gray-50
              rounded-2xl
              p-8
              text-center
              hover:bg-white
              hover:shadow-xl
              transition
            "
            >
              <h3 className="font-bold text-brand-navy text-xl">NFC Cards</h3>

              <p className="mt-2 text-gray-600">
                Modern networking technology.
              </p>
            </div>

            <div
              className="
              bg-gray-50
              rounded-2xl
              p-8
              text-center
              hover:bg-white
              hover:shadow-xl
              transition
            "
            >
              <h3 className="font-bold text-brand-navy text-xl">Branding</h3>

              <p className="mt-2 text-gray-600">
                Professional visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <CallToAction /> */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy">
            Let's Build a Digital Identity Your Customers Will Trust
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're launching a new business or improving an existing
            one, we'll help you create a professional presence that makes it
            easier for customers to discover, trust and connect with you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand-navy text-white rounded-xl font-bold hover:bg-brand-orange transition"
            >
              Get Your Free Quote
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 border-2 border-brand-navy text-brand-navy rounded-xl font-semibold hover:border-brand-orange hover:text-brand-orange
              "
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
