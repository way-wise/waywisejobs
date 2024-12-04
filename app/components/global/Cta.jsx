import React from 'react'


const Cta = () => {
  return (
    <section className="bg-gray-100 md:py-[150px] py-[50px]">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div>
            <h4 className="font-rajdhani md:text-[16px] text-[14px] text-[#2A37EA] leading-[28px] font-bold uppercase mb-[5px]">
              Get Informed -
            </h4>
            <h2 className="font-rajdhani md:text-[48px] text-[20px] text-black leading-[53px] font-bold uppercase">
              {`Unlock Your Potential, Work Without Borders!`}
            </h2>
          </div>
          <button className="bg-transparent border border-[#2A37EA] text-[#2A37EA] px-[30px] py-[15px] rounded-[5px] font-rajdhani text-[16px] leading-[28px] font-bold uppercase hover:bg-[#2A37EA] hover:text-white transition-all duration-300">
            <a href="/contact-us">Contact Us +</a>
          </button>
        </div>

        <p className="text-[16px] font-medium text-black leading-[28px] font-rajdhani text-center md:mt-[90px] mt-[50px] flex flex-col md:flex-row md:justify-center md:items-center">
          Don’t hesitate, contact us for better help and services.{" "}
          <a
            href="/countries-we-serve"
            className="text-[#FF902E] font-bold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF902E] after:transition-all after:duration-700 hover:after:w-full"
          >
            VIEW MORE SERVICES +
          </a>
        </p>
      </div>
    </section>
  );
}

export default Cta;
