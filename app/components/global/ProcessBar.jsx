/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ProcessBar = () => {
  const steps = [
    {
      id: "01",
      icon: "bi bi-file-earmark-text",
      title: "Submit Your Application",
      description:
        "Share your resume and job preferences with us. Our team will evaluate your skills and match you with the best opportunities abroad.",
    },
    {
      id: "02",
      icon: "bi bi-clipboard-data",
      title: "Personalized Consultation",
      description:
        "Get expert guidance tailored to your career goals. We’ll discuss job options, countries, and the recruitment process in detail.",
    },
    {
      id: "03",
      icon: "bi bi-passport",
      title: "Documentation & Visa Assistance",
      description:
        "From gathering required documents to visa processing, we take care of every detail to ensure a hassle-free experience.",
    },
    {
      id: "04",
      icon: "bi bi-buildings-fill",
      title: "Job Placement",
      description:
        "Once everything is finalized, we assist with travel arrangements and ensure you’re ready for your new journey.",
    },
    {
      id: "05",
      icon: "bi bi-check-circle",
      title: "Ongoing Support",
      description:
        "Even after you’ve started your new job, we’re here to provide continuous support to ensure your success abroad.",
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

      {/* <div className='border-b border-gray-200 w-full mt-10'></div> */}
    </div>
  );
}

export default ProcessBar;
