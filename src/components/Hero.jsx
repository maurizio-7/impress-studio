import React from "react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Helping Zambian businesses build a digital presence.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            From professional profiles and smart QR cards to business guides and
            digital signatures, we help Zambian businesses get discovered,
            verified, and connected.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">
              Get A Free Quote
            </button>

            <button className="px-8 py-4 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100">
              View Our Work
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
          <p className="text-gray-500">Business Branding Mockup</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
