/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BreadcrumbSection from '../components/section/BreadcrumbSection';
import Card from '../components/global/card';
import Cta from '../components/global/Cta';

const About = () => {
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
      <BreadcrumbSection />

      <section className=" container max-w-[1200px] mx-auto px-4 py-[15px] flex gap-[30px]">
        <div>
          <div className="mb-[30px]">
            <h4 className="font-rajdhani font-bold text-[16px] leading-[29px] text-[#ee2524] uppercase mb-[15px]">
              Get informed <span>-</span>
            </h4>
            <h2 className="font-rajdhani text-[48px] text-[#0b2239] leading-[53px] font-bold uppercase">
              Let’s Build Something Creative together
            </h2>
          </div>
          <div className="flex items-center gap-2 mb-[15px]">
            <div className="flex items-center gap-4 p-[40px] border border-solid border-[#0b2239] rounded-[30px]">
              <i
                class="bi bi-truck"
                style={{ fontSize: "45px", color: "#ee2524" }}
              ></i>
              <p className="font-rajdhani font-bold text-[21px] leading-[30px] text-[#0b2239]">
                Your Trusted Partner in Garments Export
              </p>
            </div>
          </div>
          <div>
            <p className="text-[16px] leading-[26px] text-[#707070] mb-[15px]">
              Way Wise Trading Limited has quickly established itself as a
              reliable partner for wholesalers and retailers. Our commitment to
              quality, timely delivery, and customer satisfaction has earned us
              a reputation for excellence in the industry.
            </p>
            <ul className="flex flex-col gap-[15px]">
              <li className="flex items-center gap-2">
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "#ee2524" }}
                ></i>
                <p className="font-medium font-rubik text-[16px] text-[#0b2239]">
                  Quality Assurance
                </p>
              </li>
              <li className="flex items-center gap-2">
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "#ee2524" }}
                ></i>
                <p className="font-medium font-rubik text-[16px] text-[#0b2239]">
                  Competitive Pricing
                </p>
              </li>
              <li className="flex items-center gap-2">
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "#ee2524" }}
                ></i>
                <p className="font-medium font-rubik text-[16px] text-[#0b2239]">
                  Customer Support
                </p>
              </li>
              <li className="flex items-center gap-2">
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "#ee2524" }}
                ></i>
                <p className="font-medium font-rubik text-[16px] text-[#0b2239]">
                  Sustainability
                </p>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/portrait-indian-business-people-working-office-corporate-culture-law-firm-teamwork-concept_466689-15333.jpg?uid=P157340327&ga=GA1.1.989845833.1731762232&semt=ais_hybrid"
          alt=""
          className="w-[80%] h-[700px] object-cover rounded-[30px]"
        />
      </section>
      <section className=" bg-gray-100 mt-[100px] space-y-10 py-[100px]">
        <div className="container max-w-[1200px] mx-auto">
          <h2 className="font-rajdhani text-center text-[48px] text-[#0b2239] leading-[53px] font-bold uppercase pb-[30px]">
            We Give Top Production <br /> From Every Angle.
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {cardData.map((cardItem, index) => (
              <Card
                key={index}
                icon={cardItem.icon}
                title={cardItem.title}
                description={cardItem.description}
              />
            ))}
          </div>
          <div className="mt-[100px]">
            <Cta  />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
