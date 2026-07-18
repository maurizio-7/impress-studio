import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import ClientBanner from "../components/ClientBanner";

function Home() {
  return (
    <div>
      <Hero />
      <ClientBanner />

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Professional branding solutions designed for growing businesses.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Business Profiles</h3>

              <p className="mt-3 text-gray-600">
                Showcase your company professionally with a digital profile that
                explains your services, products and contact details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Digital Business Cards</h3>

              <p className="mt-3 text-gray-600">
                Modern business cards with QR codes and NFC technology that make
                sharing your details effortless.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Branding Solutions</h3>

              <p className="mt-3 text-gray-600">
                Improve your business identity with professional designs that
                build trust with customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Why Choose Us?
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-xl">Professional Design</h3>
              <p className="mt-2 text-gray-600">
                Premium designs that make your business look credible.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Affordable</h3>
              <p className="mt-2 text-gray-600">
                Solutions created for small businesses.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Receive your professional assets quickly.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Custom Solutions</h3>
              <p className="mt-2 text-gray-600">
                Designed around your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">How It Works</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-blue-600 font-bold text-3xl">01</span>
              <h3 className="mt-3 font-bold">Contact Us</h3>
              <p className="text-gray-600">Tell us about your business.</p>
            </div>

            <div>
              <span className="text-blue-600 font-bold text-3xl">02</span>
              <h3 className="mt-3 font-bold">Design</h3>
              <p className="text-gray-600">
                We create your professional assets.
              </p>
            </div>

            <div>
              <span className="text-blue-600 font-bold text-3xl">03</span>
              <h3 className="mt-3 font-bold">Review</h3>
              <p className="text-gray-600">You provide feedback.</p>
            </div>

            <div>
              <span className="text-blue-600 font-bold text-3xl">04</span>
              <h3 className="mt-3 font-bold">Delivery</h3>
              <p className="text-gray-600">Receive your finished materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready To Upgrade Your Business?
          </h2>

          <p className="mt-4 text-blue-100">
            Contact us today and create a professional brand customers trust.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
