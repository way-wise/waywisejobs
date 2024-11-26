import React from 'react'

const ExperienceSection = () => {
  return (
    <section className='absolute md:top-0 left-1/2 -translate-x-1/2 w-full md:h-full z-10'>
      <div className="container mx-auto">
        <div className="md:flex md:mt-[45px] mt-[20px]">
          <div className="gap-4 mt-[1px] md:mb-8 mb-4">
            <h1 className="md:text-[92px] text-[60px] leading-[70px] font-rajdhani font-bold text-[#FF902E]">
              12
            </h1>
            <p className="text-[24px] leading-[24px] font-semibold font-rajdhani text-gray-600">
              Year of Experience
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#2A37EA] md:h-[865px] h-[650px] md:pt-[65px] pt-[40px] md:pl-[45px] pl-[20px] md:pb-[15px] pb-[10px] flex flex-col">
              <h2 className="md:text-[47px] text-[20px] leading-[54px] font-rajdhani font-semibold uppercase text-start text-white ">
                We Provide Best Garment Products <br /> For Your Ultimate
                Success!
              </h2>
              <p className="w-full mt-auto md:text-[16px] text-[14px] font-medium text-white leading-[28px] font-rajdhani md:pl-[45px] md:pb-[64px] ">
                We’re ready to discover and unlock your market.{" "}
                <a
                  href="#"
                  className="text-[#FF902E] font-bold uppercase relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF902E] after:transition-all after:duration-700 hover:after:w-full"
                >
                  Get In Touch +
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
