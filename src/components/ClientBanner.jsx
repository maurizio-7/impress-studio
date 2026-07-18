import React from "react";

function ClientBanner() {
  const clients = [
    "Niza Homes",
    "Kwasha Agri",
    "Golden Flock",
    "Onani Investment",
  ];

  return (
    <section className="py-2 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">
            {clients.map((client, index) => (
              <div key={index} className="text-2xl font-semibold text-gray-400">
                {client}
              </div>
            ))}

            {/* Duplicate for continuous animation */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="text-2xl font-semibold text-gray-400"
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
