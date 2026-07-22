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
      title: "Business Branding",
      description:
        "Build a stronger identity with professional visual assets and a custom-built website that help customers recognise and trust your business.",
      features: [
        "Brand identity design",
        "Website design & development",
        "Marketing assets",
        "Consistent visual style",
      ],
    },

    {
      title: "Digital Business Cards",
      description:
        "Modern business cards designed to make networking easier through NFC and QR code technology.",
      features: [
        "NFC-enabled solutions",
        "QR code integration",
        "Instant sharing",
        "Professional design",
      ],
    },
  ];

  return (
    <main>
      {/* Services */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-navy">
            Our Services
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-399 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-brand-navy">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-brand-orange font-bold text-lg">
                        ✓
                      </span>

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
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-navy">
            Why Your Business Needs A Strong Digital Identity
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Customers increasingly expect businesses to be easy to discover,
            trust and contact. We create professional tools that help your
            business make a stronger first impression.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div
              className="
              bg-gray-50
              p-8
              rounded-2xl
              hover:shadow-lg
              transition
            "
            >
              <h3 className="text-xl font-bold text-brand-navy">Build Trust</h3>

              <p className="mt-3 text-gray-600">
                Professional branding helps customers take your business
                seriously.
              </p>
            </div>

            <div
              className="
              bg-gray-50
              p-8
              rounded-2xl
              hover:shadow-lg
              transition
            "
            >
              <h3 className="text-xl font-bold text-brand-navy">Stand Out</h3>

              <p className="mt-3 text-gray-600">
                Create a memorable identity in a competitive market.
              </p>
            </div>

            <div
              className="
              bg-gray-50
              p-8
              rounded-2xl
              hover:shadow-lg
              transition
            "
            >
              <h3 className="text-xl font-bold text-brand-navy">
                Connect Faster
              </h3>

              <p className="mt-3 text-gray-600">
                Make it easier for customers to find and contact you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Our Process</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div
              className="
              bg-white/10
              backdrop-blur
              rounded-2xl
              p-8
              border
              border-white/10
            "
            >
              <span
                className="
                text-brand-yellow text-5xl font-bold
              "
              >
                {" "}
                01
              </span>
              <h3
                className="
              mt-4 
              text-brand-navy 
              text-xl 
              font-bold"
              >
                Consultation
              </h3>
              <p className="mt-3 text-gray-600">
                We understand your business and requirements.
              </p>
            </div>
            <div
              className="
              bg-white/10
              backdrop-blur
              rounded-2xl
              p-8
              border
              border-white/10
            "
            >
              <span
                className="
                text-brand-yellow text-5xl font-bold
              "
              >
                {" "}
                02
              </span>
              <h3
                className="
              mt-4 
              text-brand-navy 
              text-xl 
              font-bold"
              >
                Design
              </h3>
              <p className="mt-3 text-gray-600">
                We create solutions tailored to your brand.
              </p>
            </div>
            <div
              className="
              bg-white/10
              backdrop-blur
              rounded-2xl
              p-8
              border
              border-white/10
            "
            >
              <span
                className="
                text-brand-yellow text-5xl font-bold
              "
              >
                {" "}
                03
              </span>
              <h3
                className="
              mt-4 
              text-brand-navy 
              text-xl 
              font-bold"
              >
                Review
              </h3>
              <p className="mt-3 text-gray-600">
                You provide feedback and approve the design.
              </p>
            </div>
            <div
              className="
              bg-white/10
              backdrop-blur
              rounded-2xl
              p-8
              border
              border-white/10
            "
            >
              <span
                className="
                text-brand-yellow text-5xl font-bold
              "
              >
                {" "}
                04
              </span>
              <h3
                className="
              mt-4 
              text-brand-navy 
              text-xl 
              font-bold"
              >
                Delivery
              </h3>
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
