import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-yellow-500 transition duration-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 rounded-lg border-2 border-gray-700 focus:outline-none focus:border-yellow-500 transition duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold text-lg w-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
