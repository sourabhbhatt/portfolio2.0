import React from "react";

function Hero() {
  return (
    <section id="hero" className="text-center py-16 bg-blue-500 text-white">
      <h2 className="text-4xl font-bold">Hi, I'm Sam</h2>
      <p className="text-xl mt-4">A passionate React Native Developer</p>
      <button className="mt-6 px-6 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200">
        Download Resume
      </button>
    </section>
  );
}

export default Hero;
