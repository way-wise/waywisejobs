    /* eslint-disable @next/next/no-img-element */
    /* eslint-disable react/jsx-no-undef */
    import React from 'react'
    import Link from 'next/link'

    export const ServiceCard = ({title, description, image, link}) => {

    return (
        <div className="bg-white group">
        <div className="group-hover:opacity-80 transition-all duration-300">
            <img
            src={image}
            alt="country"
            className="w-full h-full object-cover"
            />
        </div>
        <div className="px-[20px] pt-[20px] pb-[31px]">
            <h2 className="text-[20px] md:text-[48px] font-bold text-black uppercase font-rajdhani leading-[28px] md:leading-[61px] mb-[8px]">
            {title}
            </h2>
            <p className="text-[14px] md:text-[20px] font-rubik text-black leading-[24px] md:leading-[28px]">
            {description}
            </p>
        </div>
        <div className="mx-[20px] mb-[18px]">
            <Link
            href={link}
            className="flex items-center justify-center gap-[10px] bg-[#2A37EA] text-white md:text-[30px] text-[16px] font-bold font-rajdhani uppercase md:leading-[38px] leading-[24px] py-[13px] "
            >
            Explore
            <svg
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M2.29984 18.3333L0.666504 16.6999L14.1998 3.16659H6.49984V0.833252H18.1665V12.4999H15.8332V4.79992L2.29984 18.3333Z"
                fill="white"
                />
            </svg>
            </Link>
        </div>
        </div>
    );
    };

    export default ServiceCard;

