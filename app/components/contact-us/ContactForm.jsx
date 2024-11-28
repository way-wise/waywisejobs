import React from 'react'

export const ContactForm = () => {
  return (
    <div className="my-20">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold font-rajdhani uppercase mb-8 text-center text-black">
          Get In Touch
        </h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF902E] focus:border-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF902E] focus:border-transparent"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF902E] focus:border-transparent"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF902E] focus:border-transparent resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#2A37EA] text-white font-semibold rounded-lg hover:bg-[#2A37EA] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
