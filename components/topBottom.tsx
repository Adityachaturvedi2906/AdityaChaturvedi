"use client"

import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export default function TopBottom() {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add a scroll event listener to control button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
     className={`fixed bottom-5 right-5 opacity-90 bg-gray-200 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer dark:bg-black ${showButton ? 'visible' : 'hidden' }`}
      onClick={scrollToTop}
	  title="Back to Top"
    >
      <BsArrowUp />
    </section>
  );
}
