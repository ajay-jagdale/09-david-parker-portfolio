import React from 'react';
import img from '../assets/image.png';

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
    <div className="text-center p-6 md:p-12">
      <img
        src={img}
        alt="David Parker"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mx-auto mb-6 md:mb-8 shadow-xl border-4 border-sky-500/70 shadow-sky-500/30 object-cover"
        loading="lazy"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white">
        Hi, I'm <span className="text-blue-500">David Parker</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-bold uppercase">
        A Dedicated Front-End Web Developer
      </p>
      <p className="max-w-xl sm:max-w-2xl mx-auto text-gray-400 mb-10 text-base sm:text-lg">
        I specialize in building intuitive, high-performance, and responsive user interfaces that provide exceptional user experiences. Passionate about clean code and modern web technologies.
      </p>
    </div>
  </section>
);

export default Hero;