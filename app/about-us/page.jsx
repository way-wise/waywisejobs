/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BreadcrumbSection from '../components/section/BreadcrumbSection';
import Card from '../components/global/Card';
import Cta from '../components/global/Cta';
import CtaTwo from '../components/global/CtaTwo';
import List from '../components/global/List';
import FirstImg from '@/image/about-1.jpg'
import Link from 'next/link';

const About = () => {
  
  const listData = [
    {
      title: "International Job Placement",
    },
    {
      title: "Complete Recruitment Services",
    },
    {
      title: "Skill Development",
    },
  ];

  const cardData = [
    {
      icon: "bi bi-person-arms-up",
      title: "Our Vision",
      description:
        "To be a leading global recruitment partner, transforming careers and creating opportunities without boundaries.",
    },
    {
      icon: "bi bi-people-fill",
      title: "Our Mission",
      description:
        "To empower individuals by connecting them with rewarding jobs and supporting businesses in finding the best talent to achieve their goals.",
    },
  ];
  return (
    <main>
      <BreadcrumbSection />

      <section className=" container mx-auto px-4 lg:py-[64px] md:py-[40px] py-[30px] lg:flex gap-[30px]">
        <div>
          <div className="md:mb-[30px] mb-[10px]">
            <h4 className="font-rajdhani font-bold lg:text-[16px] md:text-[14px] text-[14px] leading-[29px] text-[#2A37EA] uppercase mb-[15px]">
              Get informed <span>-</span>
            </h4>
            <h2 className="font-rajdhani lg:text-[48px] md:text-[30px] text-[20px] text-black leading-[53px] font-bold uppercase">
              Let’s Build Something Creative together
            </h2>
          </div>
          <div className="relative flex items-center gap-2 mb-[15px] md:mb-[30px]">
            <Link
              href="/contact-us"
              className="flex items-center gap-4 p-[40px] border border-solid border-[#FF902E] rounded-[30px] hover:bg-[#FF902E] hover:text-white transition-all duration-300 hover:shadow-lg group"
            >
              <i
                className="bi bi-airplane text-[#FF902E] group-hover:text-white transition-all duration-300"
                style={{ fontSize: "45px" }}
              ></i>
              <p className="font-rajdhani font-bold text-[21px] leading-[30px] text-black group-hover:text-white">
                Your Dream Job is Just a Click Away
              </p>
            </Link>
          </div>
          <div>
            <p className="md:text-[20px] text-[14px] leading-[26px] text-black md:mb-[30px] mb-[20px]">
              Way-Wise Jobs, we specialize in connecting skilled professionals
              with life-changing opportunities abroad. As part of Way-Wise
              Trading, our mission is to bridge the gap between global talent
              demand and aspiring job seekers, ensuring a seamless path to
              international success.
            </p>
            <ul className="flex flex-col gap-[15px]">
              {listData.map((item, index) => (
                <List key={index} title={item.title} />
              ))}
            </ul>
          </div>
        </div>
        <img
          src={FirstImg.src}
          alt=""
          className="lg:w-[80%] w-full lg:h-[700px] md:h-[400px] h-[300px] object-cover lg:rounded-[30px] md:rounded-[20px] rounded-[10px] mt-[30px]"
        />
      </section>
      <section className=" bg-gray-100 md:mt-[100px] mt-[50px] md:space-y-10 space-y-5 md:pt-[100px] pt-[50px]">
        <div className="container mx-auto">
          <h2 className="font-rajdhani text-center md:text-[48px] text-[20px] text-black leading-[53px] font-bold uppercase pb-[30px]">
            We Give Top Production <br /> From Every Angle.
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {cardData.map((cardItem, index) => (
              <Card
                key={index}
                icon={cardItem.icon}
                title={cardItem.title}
                description={cardItem.description}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="mb-[200px]">
        <Cta />
        <CtaTwo />
      </div>
    </main>
  );
};

export default About;
