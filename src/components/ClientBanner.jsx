import React from "react";

function ClientBanner() {
  const clients = [
    "Niza Homes",
    "Kwasha Agri",
    "Golden Flock",
    "Onani Investment",
  ];

  return (
    <section className="py-2 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-6">
            Trusted by businesses across Zambia
          </p>
          <div className="flex gap-16 animate-scroll whitespace-nowrap">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-2xl font-semibold text-brand-dark"
              >
                {client}
              </div>
            ))}

            {/* Duplicate for continuous animation */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="text-2xl font-semibold text-brand-dark"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientBanner;
