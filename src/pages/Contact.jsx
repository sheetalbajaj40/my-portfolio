import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto max-w-4xl px-6">
        <h3 className="text-3xl font-extrabold mb-12 text-transparent bg-clip-text theme-gradient text-center">
          Get In Touch
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <div className="theme-card p-6 hover:shadow-lg transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
            <p className="text-gray-400">bajajsheetal40@gmail.com</p>
          </div>

          {/* Location Card */}
          <div className="theme-card p-6 hover:shadow-lg transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
            <p className="text-gray-400">Gurugram, India</p>
          </div>

          {/* Phone Card */}
          <div className="theme-card p-6 hover:shadow-lg transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
            <p className="text-gray-400">+91 (623) 961-2617</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
