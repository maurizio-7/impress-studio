import React from "react";
import CallToAction from "../components/CallToAction";

function Services() {
  const services = [
    {
      title: "Business Profiles",
      description:
        "Create a professional digital profile that showcases your business, services, products, contact information and key details in one place.",
      features: [
        "Professional company overview",
        "Services and product showcase",
        "Contact information",
        "Digital-ready format",
      ],
    },

    {
      title: "Digital Business Cards",
      description:
        "Modern business cards designed to make networking easier through QR codes and NFC technology.",
      features: [
        "QR code integration",
        "NFC-enabled solutions",
        "Instant sharing",
        "Professional design",
      ],
    },

    {
      title: "Business Branding",
      description:
        "Build a stronger identity with professional visual assets that help customers recognise and trust your business.",
      features: [
        "Brand identity design",
        "Business materials",
        "Marketing assets",
        "Consistent visual style",
      ],
    },

    {
      title: "Digital Presence Solutions",
      description:
        "Help your business become easier to discover and connect with through modern digital tools.",
      features: [
        "Online business information",
        "Digital contact solutions",
        "Customer accessibility",
        "Modern business tools",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Professional Digital Solutions For Growing Businesses
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We help businesses create a stronger identity with professional
            profiles, digital business cards, branding materials and modern
            solutions that make it easier for customers to connect with them.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-blue-600">✓</span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Your Business Needs A Strong Digital Identity
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Customers increasingly expect businesses to be easy to discover,
            trust and contact. We create professional tools that help your
            business make a stronger first impression.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">Build Trust</h3>

              <p className="mt-3 text-gray-600">
                Professional branding helps customers take your business
                seriously.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Stand Out</h3>

              <p className="mt-3 text-gray-600">
                Create a memorable identity in a competitive market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Connect Faster</h3>

              <p className="mt-3 text-gray-600">
                Make it easier for customers to find and contact you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Our Process</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl">01. Consultation</h3>
              <p className="mt-3 text-gray-600">
                We understand your business and requirements.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">02. Design</h3>
              <p className="mt-3 text-gray-600">
                We create solutions tailored to your brand.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">03. Review</h3>
              <p className="mt-3 text-gray-600">
                You provide feedback and approve the design.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">04. Delivery</h3>
              <p className="mt-3 text-gray-600">
                Receive your completed business assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <CallToAction /> */}
    </main>
  );
}

export default Services;
