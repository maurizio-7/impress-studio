import React from "react";
import Hero from "../components/Hero";
import ClientBanner from "../components/ClientBanner";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div>
      <Hero />
      <ClientBanner />

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-navy">
            Our Services
          </h2>

          <p className="mt-4 text-center text-gray-500">
            Professional branding solutions designed for growing businesses.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-brand-navy">
                Business Profiles
              </h3>

              <p className="mt-3 text-gray-600">
                Showcase your company professionally with a digital profile that
                explains your services, products and contact details.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-brand-navy">
                Business Branding
              </h3>

              <p className="mt-3 text-gray-600">
                Improve your business identity with professional designs and a
                custom website that build trust with customers.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-brand-navy">
                Digital Business Cards
              </h3>

              <p className="mt-3 text-gray-600">
                Modern business cards with NFC and QR code technology that make
                sharing your details effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-navy text-center">
            Why Choose Us?
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="font-bold text-xl">Professional Design</h3>
              <p className="mt-2 text-gray-600">
                Premium designs that make your business look credible.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-xl">Affordable</h3>
              <p className="mt-2 text-gray-600">
                Solutions created for small businesses.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-xl">Fast Delivery</h3>
              <p className="mt-2 text-gray-600">
                Receive your professional assets quickly.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-xl">Custom Solutions</h3>
              <p className="mt-2 text-gray-600">
                Designed around your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-navy">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-brand-yellow font-bold text-4xl">01</span>
              <h3 className="mt-3 font-bold text-brand-navy text-xl">
                Contact Us
              </h3>
              <p className="text-gray-600">Tell us about your business.</p>
            </div>

            <div>
              <span className="text-brand-yellow font-bold text-4xl">02</span>
              <h3 className="mt-3 font-bold text-brand-navy text-xl">Design</h3>
              <p className="text-gray-600">
                We create your professional assets.
              </p>
            </div>

            <div>
              <span className="text-brand-yellow font-bold text-4xl">03</span>
              <h3 className="mt-3 font-bold text-brand-navy text-xl">Review</h3>
              <p className="text-gray-600">You provide feedback.</p>
            </div>

            <div>
              <span className="text-brand-yellow font-bold text-4xl">04</span>
              <h3 className="mt-3 font-bold text-brand-navy text-xl">
                Delivery
              </h3>
              <p className="text-gray-600">Receive your finished materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <CallToAction /> */}
    </div>
  );
}

export default Home;
