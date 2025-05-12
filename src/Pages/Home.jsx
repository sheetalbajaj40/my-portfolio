import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-blue-500 text-white text-center">
      <div>
        <h2 className="text-4xl font-bold mb-2">Hi, I'm Big Brother</h2>
        <p className="text-xl mb-4">Frontend Developer with a passion for creating sleek, responsive websites</p>
        <a href="#projects" className="bg-yellow-500 text-black py-2 px-6 rounded-lg">View My Projects</a>
      </div>
    </section>
  );
};

export default Home;
