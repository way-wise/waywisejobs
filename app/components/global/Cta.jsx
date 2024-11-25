import React from 'react'


const Cta = () => {
  return (
    <section className="bg-gray-100 py-[150px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-rajdhani text-[16px] text-[#2A37EA] leading-[28px] font-bold uppercase mb-[5px]">
              Get Informed -
            </h4>
            <h2 className="font-rajdhani text-[48px] text-black leading-[53px] font-bold uppercase">
              {`Let's Export Exclusive Quality`}
            </h2>
          </div>
          <button className="bg-transparent border border-[#2A37EA] text-[#2A37EA] px-[30px] py-[15px] rounded-[5px] font-rajdhani text-[16px] leading-[28px] font-bold uppercase hover:bg-[#2A37EA] hover:text-white transition-all duration-300">
            <a href="#">Contact Us +</a>
          </button>
        </div>
        <p className="text-[16px] font-medium text-black leading-[28px] font-rajdhani text-center mt-[90px]">
          Don’t hesitate, contact us for better help and services.{" "}
          <a
            href="#"
            className="text-[#2A37EA] font-bold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#2A37EA] after:transition-all after:duration-700 hover:after:w-full"
          >
            VIEW MORE SERVICES +
          </a>
        </p>
      </div>
    </section>
  );
}

export default Cta;
