import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-4 right-4 z-50
            flex items-center justify-center
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full bg-sky-500 text-white shadow-lg
            hover:bg-sky-600 transition
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
          "
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
