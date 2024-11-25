/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProcessBar = () => {
  const steps = [
    {
      id: "01",
      icon: "bi bi-search",
      title: "Sourcing",
      description: "Fabrics and accessories from our trusted suppliers.",
    },
    {
      id: "02",
      icon: "bi bi-building",
      title: "Manufacturing",
      description: "We ensure optimum efficiency in garments production.",
    },
    {
      id: "03",
      icon: "bi bi-search",
      title: "Great Client Support",
      description: "Let's expand your business horizons together.",
    },
    
  ];

  return (
    <div className="container mx-auto pt-52">
      <div className="mb-[15px]">
        <h2 className="text-[48px] font-rajdhani font-bold text-black leading-[53px] uppercase text-center">
          Our Working Process!
        </h2>
      </div>
      <div className="flex justify-between items-center gap-8 flex-wrap">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center w-1/4 group"
          >
            <div className="relative text-[#FF902E] group-hover:text-[#2A37EA] p-4 rounded-full">
              <i className={`${step.icon} text-[40px]`}></i>
            </div>
            <h3 className="text-[20px] font-rajdhani font-bold mt-4 text-black">
              {step.title}
            </h3>
            <p className="text-[16px] font-rubik text-gray-500 mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessBar;
