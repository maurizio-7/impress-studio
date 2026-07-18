import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready To Upgrade Your Business?
          </h2>

          <p className="my-4 text-blue-100">
            Contact us today and create a professional brand customers trust.
          </p>

          <Link
            to="/contact"
            className="mt-4 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
