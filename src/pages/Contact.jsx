import React from "react";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-2">

      {/* Contact Form */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <h1 className="text-3xl font-bold mb-6">Let's Connect</h1>
        <form className="grid gap-4">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info & Social Links */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <p className="mb-2"><strong>Phone:</strong> 0411 310 896</p>
          <p className="mb-2"><strong>Email:</strong> sonishkhanal@gmail.com</p>
          <p className="mb-2"><strong>Location:</strong> Leanyer, NT, Australia</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex gap-4">
            <a href="https://github.com/Sonish1212" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/in/sonish-khanal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">LinkedIn</a>
            <a href="mailto:sonishkhanal@gmail.com" className="text-blue-600 hover:text-blue-800 font-semibold">Email</a>
          </div>
        </div>
      </div>

    </section>
  );
}
