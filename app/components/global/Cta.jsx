import React from 'react'


const Cta = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-rajdhani text-[16px] text-[#eb4438] leading-[28px] font-bold uppercase mb-[5px]">
            Get Informed -
          </h4>
          <h2 className="font-rajdhani text-[48px] text-[#0b2239] leading-[53px] font-bold uppercase">
            {`Let's Export Exclusive Quality`}
          </h2>
        </div>
        <button className="bg-transparent border border-[#0b2239] text-[#0b2239] px-[30px] py-[15px] rounded-[5px] font-rajdhani text-[16px] leading-[28px] font-bold uppercase hover:bg-[#0b2239] hover:text-white transition-all duration-300">
          <a href="#">Contact Us +</a>
        </button>
      </div>
    </div>
  );
}

export default Cta;
