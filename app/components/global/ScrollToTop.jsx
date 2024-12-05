"use client"

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed md:bottom-6 bottom-10 md:right-6 right-4 bg-[#FF902E] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#2A37EA] transition duration-300 z-[9999]"
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up text-[20px]"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
