/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProcessBar = () => {
  const steps = [
    {
      id: "01",
      icon: "bi bi-file-earmark-text",
      title: "Submit Your Application"
    },
    {
      id: "02",
      icon: "bi bi-chat",
      title: "Personalized Consultation",
    },
    {
      id: "03",
      icon: "bi bi-passport",
      title: "Documentation & Visa Assistance",
    },
    {
      id: "04",
      icon: "bi bi-buildings-fill",
      title: "Job Placement",
    },
    {
      id: "05",
      icon: "bi bi-headset",
      title: "Ongoing Support",
    },
  ];

  return (
    <div className="md:pt-52 pt-[200px]">
      <div className="md:mb-[15px] mb-[5px]">
        <h2 className="md:text-[48px] text-[20px] font-rajdhani font-bold text-black leading-[53px] uppercase text-center">
          Our Working Process!
        </h2>
        <p className="text-[14px] md:text-[20px] font-rubik text-gray-500 text-center md:mt-[15px] mt-[10px]">
          {`Your Global Career Starts Here—Let Us Guide You Every Step of the Way!`}
        </p>
      </div>
      <div className="md:flex flex-wrap justify-center items-center gap-10 md:px-[150px] px-[20px] md:mt-[50px] mt-[30px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center w-full md:w-1/4 group"
          >
            <div className="relative text-gray-500 group-hover:text-[#2A37EA] p-4 rounded-full">
              <i className={`${step.icon} text-[40px]`}></i>
            </div>
            <h3 className="text-[20px] font-rajdhani font-bold mt-4 text-gray-500">
              {step.title}
            </h3>
          </div>
        ))}
      </div>

      {/* <div className='border-b border-gray-200 w-full mt-10'></div> */}
    </div>
  );
}

export default ProcessBar;
