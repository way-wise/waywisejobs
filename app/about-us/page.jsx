/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BreadcrumbSection from '../components/section/BreadcrumbSection';
import Card from '../components/global/card';
import Cta from '../components/global/Cta';
import CtaTwo from '../components/global/CtaTwo';
import List from '../components/global/List';
import BannerLine from '../../public/image/bannerline-1.png'
import Image from 'next/image';


const About = () => {
  const listData = [
    {
      title: "Quality Assurance",
    },
    {
      title: "Competitive Pricing",
    },
    {
      title: "Customer Support",
    },
    {
      title: "Sustainability",
    },
  ];

  const cardData = [
    {
      icon: "bi bi-person-arms-up",
      title: "Our Vision",
      description:
        "Become a leading trading company, known for quality, innovation, and customer-centric solutions, building lasting partnerships.",
    },
    {
      icon: "bi bi-people-fill",
      title: "Our Mission",
      description:
        "Deliver exceptional value to our customers by providing high-quality products and services, fostering innovation, and maintaining integrity in all our business practices.",
    },
  ];
  return (
    <main>
      <BreadcrumbSection  />

      <section className=" container mx-auto px-4 md:py-[64px] py-[30px] md:flex gap-[30px]">
        <div>
          <div className="md:mb-[30px] mb-[10px]">
            <h4 className="font-rajdhani font-bold md:text-[16px] text-[14px] leading-[29px] text-[#2A37EA] uppercase mb-[15px]">
              Get informed <span>-</span>
            </h4>
            <h2 className="font-rajdhani md:text-[48px] text-[20px] text-black leading-[53px] font-bold uppercase">
              Let’s Build Something Creative together
            </h2>
          </div>
          <div className="relative flex items-center gap-2 mb-[15px]">
            <div className="flex items-center gap-4 p-[40px] border border-solid border-[#2A37EA] rounded-[30px]">
              <i
                className="bi bi-truck"
                style={{ fontSize: "45px", color: "#FF902E" }}
              ></i>
              <p className="font-rajdhani font-bold text-[21px] leading-[30px] text-black">
                Your Trusted Partner in Garments Export
              </p>
            </div>
          </div>
          <div>
            <p className="text-[16px] leading-[26px] text-[#707070] md:mb-[15px] mb-[20px]">
              Way Wise Trading Limited has quickly established itself as a
              reliable partner for wholesalers and retailers. Our commitment to
              quality, timely delivery, and customer satisfaction has earned us
              a reputation for excellence in the industry.
            </p>
            <ul className="flex flex-col gap-[15px]">
              {listData.map((item, index) => (
                <List key={index} title={item.title} />
              ))}
            </ul>
          </div>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/portrait-indian-business-people-working-office-corporate-culture-law-firm-teamwork-concept_466689-15333.jpg?uid=P157340327&ga=GA1.1.989845833.1731762232&semt=ais_hybrid"
          alt=""
          className="md:w-[80%] w-full md:h-[700px] h-[300px] object-cover md:rounded-[30px] rounded-[10px] mt-[30px]"
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
      <div className='mb-[200px]'>
        <Cta />
        <CtaTwo />
      </div>
    </main>
  );
};

export default About;
