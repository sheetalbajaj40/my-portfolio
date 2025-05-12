import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded" required></textarea>
          <button type="submit" className="bg-yellow-500 text-black py-2 px-6 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
