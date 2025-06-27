import React from 'react';
import img from '/assets/image.png';

const About = () => (
  <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-800">
    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-blue-400">About Me</h2>

      {/* Two-column layout for image and intro text */}
      <div className="md:flex md:items-start md:gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Left Column: Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={img}
            alt="David Parker"
            className="rounded-full shadow-xl object-cover border-4 border-gray-700 
                       mx-auto w-60 h-60 
                       sm:w-64 sm:h-64 
                       md:w-full md:h-auto md:aspect-square md:max-w-[20rem] md:mx-0"
            loading="lazy"
          />
        </div>

        {/* Right Column: Text */}
        <div className="md:w-2/3">
          <div className="text-base sm:text-lg text-gray-300 space-y-6">
            <p>
              I'm David Parker, a passionate and motivated Front-End Developer with hands-on experience in building dynamic and responsive web applications using React.js, Next.js, JavaScript, and TailwindCSS. With a strong foundation in HTML5, CSS3, and modern design principles, I focus on creating clean, user-friendly interfaces that enhance the user experience.
            </p>
            <p>
              During my academic journey and internships, I developed real-world projects including an E-Commerce Website, Video Conferencing App, and Weather App, integrating APIs like Zegocloud and working with tools such as Firebase, MySQL, and GitHub. I’m continuously learning and experimenting to sharpen my skills and stay updated with the latest tech trends.
            </p>
            <p>
              I hold a BCA and am currently pursuing an MCA from The University of Delhi.
            </p>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <div className="mt-0"> {/* Adjusted top margin as mb from above div handles spacing */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12 text-gray-200">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-x-4 md:gap-y-5 md:max-w-4xl mx-auto"> {/* Adjusted md gaps */}
          {[
            'React.js',
            'Next.js',
            'Node.js',
            'Express.js',
            'JavaScript',
            'Bootstrap',
            'TailwindCSS',
            'Python',
            'MySQL',
            'Firebase',
            'Figma',
            'Git',
            'GitHub', 
          ].map((skill) => (
            <div
              key={skill}
              className="
                px-5 py-2.5
                rounded-full
                bg-gray-700
                border-2 border-sky-500
                text-sky-400
                font-medium text-sm sm:text-base
                cursor-default
                transition-all duration-300 ease-in-out
                hover:bg-sky-600 hover:text-white hover:border-sky-500
                hover:scale-105 hover:shadow-lg hover:shadow-sky-600/50
              "
              aria-label={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;