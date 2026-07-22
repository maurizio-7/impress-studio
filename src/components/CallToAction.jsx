import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-brand-interactive rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready To Upgrade Your Business?
          </h2>

          <p className="my-4 text-white/80">
            Contact us today and create a professional brand customers trust.
          </p>

          <Link
            to="/contact"
            className="mt-4 px-8 py-4 bg-white text-brand-interactive rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
