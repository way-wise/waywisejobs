import React from 'react'

const ExperienceSection = () => {
  return (
    <section className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-10'>
      <div className="container mx-auto">
        <div className="flex mt-[45px]">
          <div className="gap-4 mt-16">
            <h1 className="text-[92px] leading-[70px] font-rajdhani font-bold text-[#FF902E]">
              12
            </h1>
            <p className="text-[24px] leading-[24px] font-semibold font-rajdhani text-gray-600">
              Year of Experience
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#2A37EA] h-[865px] pt-[65px] pl-[45px] pb-[15px] flex flex-col">
              <h2 className="text-[47px] leading-[54px] font-rajdhani font-semibold uppercase text-start text-white ">
                We Provide Best Garment Products <br /> For Your Ultimate
                Success!
              </h2>
              <p className="w-full mt-auto text-[16px] font-medium text-white leading-[28px] font-rajdhani pl-[45px] pb-[64px]">
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
