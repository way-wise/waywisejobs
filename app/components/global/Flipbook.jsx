"use client";

import React, { useState } from "react";
import Image from "next/image";
const Flipbook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open the popup */}
      <button
        onClick={togglePopup}
        className="flex items-center gap-3 bg-transparent border border-[#2A37EA] text-[#2A37EA] px-[20px] py-[10px] rounded-[5px] font-rajdhani text-[16px] leading-[28px] font-bold uppercase hover:bg-[#2A37EA] hover:text-white transition-all duration-300 group"
      >
        <Image
          src="/image/magazine.jpg"
          alt="flipbook"
          width={30}
          height={30}
          style={{border: "1px solid rgba(0, 0, 252, 0.5)", boxShadow: "1px 1px 1px rgba(0, 0, 252, 0.5)"}}
        />
        Company Profile{" "}
        {/* <span className="text-[20px] group-hover:translate-x-2 inline-block transition-transform duration-300">
          +
        </span> */}
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed bg-black/50 z-[1000] w-full h-screen top-0 left-0">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white w-4/5 h-4/5 rounded-lg overflow-hidden flex flex-col">
              {/* Close button */}
              <button
                onClick={togglePopup}
                className="self-end font-rajdhani font-bold text-[16px] leading-[28px] uppercase m-2.5 bg-red-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition-colors"
              >
                Close
              </button>

              {/* Flipbook Content */}
              <div className="overflow-auto h-full">
                {/* Replace with your flipbook component */}
                <iframe
                  src="https://heyzine.com/flip-book/22813621d6.html"
                  className="w-full h-full border-none"
                  title="Flipbook"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Flipbook;
