import React, { useState } from "react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { EmailIcon, PhoneIcon, LocationIcon, CheckIcon } from "../components/icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      const response = await fetch(`${apiUrl}/api/enquiries`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);

      setError("Something went wrong. Please try again or contact us directly");
    }
  }

  return (
    <main>
      <Seo
        title="Contact | Kuleni"
        description="Get in touch with Kuleni for a free quote on business profiles, branding, custom websites, or NFC/QR digital business cards."
      />
      {/* Hero */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Let's Build Your Business Identity
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Tell us about your business and we'll get back to you with a
            personalised solution.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <Reveal>
<section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-hover mb-3">
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold text-brand-dark">
              Tell Us About Your Project
            </h2>

            <p className="mt-6 text-gray-600">
              Complete the form and we'll contact you within 24 hours to discuss
              your project and recommend the best solution.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <EmailIcon />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </p>
                  <p className="text-brand-dark font-medium">info@kuleni.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <PhoneIcon />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    WhatsApp
                  </p>
                  <p className="text-brand-dark font-medium">+260 763 955 838</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <LocationIcon />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Location
                  </p>
                  <p className="text-brand-dark font-medium">Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckIcon />

                <h2 className="mt-6 text-3xl font-bold text-brand-dark">
                  Thank You!
                </h2>

                <p className="mt-4 text-gray-600">
                  We have received your enquiry and will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="James Banda"
                      className="w-full border border-[#948878] rounded-xl px-4 py-3 text-brand-dark placeholder:text-[#6b6560] focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                      Business Name
                    </label>

                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="ABC Construction Ltd"
                      className="w-full border border-[#948878] rounded-xl px-4 py-3 text-brand-dark placeholder:text-[#6b6560] focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border border-[#948878] rounded-xl px-4 py-3 text-brand-dark placeholder:text-[#6b6560] focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+260 XXX XXX XXX"
                      className="w-full border border-[#948878] rounded-xl px-4 py-3 text-brand-dark placeholder:text-[#6b6560] focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Which service are you interested in?
                  </label>

                  <div className="relative">
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none border border-[#948878] rounded-xl px-4 py-3 pr-10 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                    >
                      <option value="" disabled hidden>
                        Select a service
                      </option>
                      <option>Business Profile</option>
                      <option>Business Branding</option>
                      <option>Digital Business Card</option>
                      <option>Multiple Services</option>
                    </select>

                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Tell us about your project
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us what you're looking for..."
                    className="w-full border border-[#948878] rounded-xl px-4 py-3 text-brand-dark placeholder:text-[#6b6560] focus:outline-none focus:ring-2 focus:ring-brand-interactive focus:border-brand-interactive transition-colors duration-200"
                  ></textarea>
                </div>

                {error && (
                  <div
                    className="
                  bg-red-50
                  border
                  border-red-600
                  text-red-600
                  px-4
                  py-4
                  rounded-xl
                  "
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  )}
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
</Reveal>
    </main>
  );
}

export default Contact;
