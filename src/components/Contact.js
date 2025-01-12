import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your message"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
