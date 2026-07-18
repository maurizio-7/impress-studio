import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Restaurant Digital Profile",
      category: "Business Profile",
      description:
        "A professional digital profile designed to showcase menu, services, location and customer contact details.",
      image: "/images/restaurant-profile.jpg",
    },

    {
      title: "Modern NFC Business Card",
      category: "Digital Business Card",
      description:
        "A smart business card solution allowing customers to instantly access business information through NFC and QR technology.",
      image: "/images/nfc-card.jpg",
    },

    {
      title: "Construction Company Identity",
      category: "Business Branding",
      description:
        "A professional business identity package created to improve credibility and customer trust.",
      image: "/images/construction-brand.jpg",
    },

    {
      title: "Retail Business Showcase",
      category: "Digital Presence",
      description:
        "A digital solution helping customers discover products, services and contact information quickly.",
      image: "/images/retail-profile.jpg",
    },

    {
      title: "Professional Service Profile",
      category: "Business Profile",
      description:
        "A clean and professional profile designed for service-based businesses.",
      image: "/images/service-profile.jpg",
    },

    {
      title: "Small Business Branding Package",
      category: "Brand Design",
      description:
        "A collection of visual assets designed to create a consistent business identity.",
      image: "/images/branding-package.jpg",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Work
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Explore examples of the digital identities, business profiles and
            branding solutions we create for businesses.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="h-64 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-blue-600 font-semibold text-sm">
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Solutions We Create
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="font-bold">Digital Profiles</h3>

              <p className="mt-2 text-gray-600">
                Professional business information pages.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="font-bold">QR Solutions</h3>

              <p className="mt-2 text-gray-600">
                Simple ways for customers to connect.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="font-bold">NFC Cards</h3>

              <p className="mt-2 text-gray-600">
                Modern networking technology.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="font-bold">Branding</h3>

              <p className="mt-2 text-gray-600">
                Professional visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Want Your Business To Look This Professional?
          </h2>

          <p className="mt-4 text-blue-100">
            Let's create a digital identity that helps customers discover and
            trust your business.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
