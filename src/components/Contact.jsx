import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons.jsx';

const Contact = () => (
  <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-sky-400">Get In Touch</h2>
      <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, front-end challenges, or opportunities to collaborate. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-5 sm:space-x-8">
        <a
          href="mailto:example@mail.com"
          className="text-slate-400 hover:text-sky-400 p-2 group transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 rounded-md"
          aria-label=""
        >
          <EmailIcon />
          <span className="sr-only">Email</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 p-2 group transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 rounded-md"
          aria-label=""
        >
          <GitHubIcon />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400 p-2 group transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30 rounded-md"
          aria-label=""
        >
          <LinkedInIcon />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;