import React, { useState } from "react";

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
      {/* Hero */}
      <section className="bg-brand-navy py-24 px-6">
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
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-brand-navy">
              Tell Us About Your Project
            </h2>

            <p className="mt-6 text-gray-600">
              Complete the form and we'll contact you within 24 hours to discuss
              your project and recommend the best solution.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <h3 className="font-semibold text-lg">📧 Email</h3>

                <p className="text-gray-600">info@kulani.com</p>
              </div>

              <div className="flex items-start gap-4">
                <h3 className="font-semibold text-lg">📱 WhatsApp</h3>

                <p className="text-gray-600">+260 763 955 838</p>
              </div>

              <div className="flex items-start gap-4">
                <h3 className="font-semibold text-lg">📍 Location</h3>

                <p className="text-gray-600">Lusaka, Zambia</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  text-4xl
                   "
                >
                  ✅
                </div>

                <h2 className="text-3xl font-bold text-brand-navyå">
                  Thank You!
                </h2>

                <p className="mt-4 text-gray-600">
                  We have received your enquiry and will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="James Banda"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Business Name
                  </label>

                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="ABC Construction Ltd"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+260 XXX XXX XXX"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Which service are you interested in?
                  </label>

                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  >
                    <option value="" disabled hidden>
                      Select a service
                    </option>
                    <option>Business Profile</option>
                    <option>Business Branding</option>
                    <option>Digital Business Card</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-brand-navy mb-2">
                    Tell us about your project
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us what you're looking for..."
                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition"
                  ></textarea>
                </div>

                {error && (
                  <div
                    className="
                  bg-brand-coral/10
                  border
                  border-brand-coral 
                  text-brand-coral
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
                  className="w-full bg-brand-yellow text-brand-navy py-4 rounded-lg font-semibold hover:bg-brand-orange transition"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
