import React from 'react'

const ExperienceSection = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full 2xl:h-screen md:h-full h-[650px] z-10">
      <div className="container mx-auto">
        <div className="md:flex md:mt-[45px] mt-[20px]">
          <div className="gap-4 mt-[1px] md:mb-8 mb-4">
            <h1 className="lg:text-[92px] md:text-[60px] text-[40px] leading-[70px] font-rajdhani font-bold text-[#2A37EA]">
              12
            </h1>
            <p className="lg:text-[24px] md:text-[20px] text-[16px] leading-[24px] font-semibold font-rajdhani text-gray-600">
              Year of Experience
            </p>
          </div>
          <div className="w-full">
            <div className="bg-gray-200 2xl:h-screen md:h-[800px] h-[650px] md:pt-[65px] pt-[40px] md:pl-[45px] pl-[20px] md:pb-[15px] pb-[10px] flex flex-col">
              <h2 className="lg:text-[47px] md:text-[30px] text-[20px] leading-[54px] font-rajdhani font-semibold uppercase text-start  ">
                Ready to take the first step? Reach out to us now and unlock
                your future!
              </h2>
              <p className="w-full mt-auto text-[20px] font-medium text-[#2A37EA] leading-[28px] text-center font-rajdhani md:pl-[45px] md:pb-[64px] ">
                We’re ready to discover and unlock your market.{" "}
                <a
                  href="/contact-us"
                  className="text-[#2A37EA]  font-bold uppercase relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#2A37EA] after:transition-all after:duration-700 hover:after:w-full"
                >
                  Get In Touch +
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
