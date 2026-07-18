function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Let's Build Your Business Identity
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Tell us about your business and we'll get back to you with a
            personalised solution.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Tell Us About Your Project
            </h2>

            <p className="mt-6 text-gray-600">
              Complete the form and we'll contact you within 24 hours to discuss
              your project and recommend the best solution.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>

                <p className="text-gray-600">info@impressstudio.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📱 WhatsApp</h3>

                <p className="text-gray-600">+260 763 955 838</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📍 Location</h3>

                <p className="text-gray-600">Lusaka, Zambia</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="James Banda"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Business Name</label>

                <input
                  type="text"
                  placeholder="ABC Construction Ltd"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Email Address</label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Phone Number</label>

                <input
                  type="tel"
                  placeholder="+260 XXX XXX XXX"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Which service are you interested in?
                </label>

                <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Select a service</option>
                  <option>Business Profile</option>
                  <option>Digital Business Card</option>
                  <option>NFC Business Card</option>
                  <option>QR Code Solution</option>
                  <option>Branding</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Tell us about your project
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us what you're looking for..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
