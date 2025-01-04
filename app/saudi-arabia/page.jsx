import React from "react";
import DetailCardServiceOne from "../components/global/DetailCardServiceOne";
import DetailCardServiceTwo from "../components/global/DetailCradServiceTwo";
import HeroSaudi from "@/image/hero/saudi.png";
import HeroImg from "../components/global/HeroImg";
import Cta from "../components/global/Cta";
import CtaTwo from "../components/global/CtaTwo";
import ServiceImgOne from "@/image/country-page/service-19.jpg";
import ServiceImgTwo from "@/image/country-page/service-20.jpg";
import ServiceImgThree from "@/image/country-page/service-21.jpg";
import ServiceImgFour from "@/image/country-page/service-22.jpg";
import ServiceImgFive from "@/image/country-page/service-23.jpg";
import ServiceImgSix from "@/image/country-page/service-24.jpg";

const SaudiArabia = () => {
  // const ServiceOne = {
  //   title: "Our Operations",
  //   description:
  //     "In Saudi Arabia, Way Wise Jobs focuses on key industries requiring skilled labor. We supply welders, electricians, and technicians for oil, gas, and energy projects. In construction and infrastructure, we provide skilled workers for large-scale projects, including urban development and transport networks. For the hospitality industry, we offer housekeeping and essential services to ensure excellent service delivery. Additionally, we recruit professionals for facility management, including maintenance, cleaning, and operational support, ensuring smooth facility operations.",
  //   image: ServiceImgOne.src,
  // };


  // const ServiceTwo = {
  //   title: "Oil, Gas & Energy",
  //   description:
  //     "We supply skilled professionals, including welders, electricians, and technicians, to support key projects in Saudi Arabia's oil, gas, and energy sectors. Our expertise helps drive efficiency and ensures the success of vital energy projects.",
  //   image: ServiceImgTwo.src,
  // };

  // const ServiceThree = {
  //   title: "Construction & Infrastructure",
  //   description:
  //     "Way Wise Jobs provides skilled workers for large-scale construction and infrastructure projects across Saudi Arabia. From urban development to transport networks, we help build the foundation for the country's continued growth and development.",
  //   image: ServiceImgThree.src,
  // };

  // const ServiceFour = {
  //   title: "Hospitality & Facility Management",
  //   description:
  //     "We specialize in supplying talent for the hospitality industry, offering essential services such as housekeeping to ensure the highest standards. Additionally, our facility management services support smooth operations through skilled professionals in maintenance, cleaning, and more.",
  //   image: ServiceImgFour.src,
  // };

  // const ServiceFive = {
  //   title: "Our Process",
  //   description:
  //     "Way Wise Jobs follows a structured recruitment and onboarding process in Saudi Arabia. We begin by conducting interviews and initial screening to identify qualified workers, followed by skill testing to ensure candidates meet industry standards. To prepare workers for the Saudi work environment, we offer training programs, including language courses. We facilitate employer visits and testing to ensure mutual satisfaction. Additionally, we manage compliance with labor laws and nationalization policies like Saudization, while arranging travel and onboarding logistics to ensure a smooth placement process.",
  //   image: ServiceImgFive.src,
  // };

  
  const ServiceOne = {
    title: "Our Operations",
    description:
      "In Saudi Arabia, Way Wise Jobs specializes in comprehensive hospitality staffing solutions. We excel in providing qualified professionals across hotel operations, including front desk management, concierge services, housekeeping, and food & beverage. Our facility management division ensures smooth property operations through skilled maintenance, technical, and security staff. We offer specialized training programs focused on hospitality excellence and cultural awareness. Additionally, we provide complete event management staffing, from planners to service personnel. Our structured recruitment process includes thorough screening, training, and seamless onboarding while ensuring compliance with local regulations like Saudization.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Hotel & Hospitality Services",
    description:
      "Way Wise Jobs specializes in providing comprehensive staffing solutions for Saudi Arabia's luxury hotel sector. We supply qualified professionals across all hotel operations including front desk management, concierge services, housekeeping supervision, food & beverage service, culinary teams, and executive management positions. Our candidates are carefully selected and trained to deliver exceptional guest experiences while maintaining the highest standards of hospitality.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Facility Management",
    description:
      "Our facility management services ensure smooth operations of hotels and commercial properties across Saudi Arabia. We provide skilled professionals in areas such as maintenance, technical services, cleaning operations, security management, and property administration. Our team ensures properties maintain peak operational efficiency while meeting all local regulations and international standards.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Staff Training & Development",
    description:
      "We offer specialized training programs designed specifically for the hospitality sector in Saudi Arabia. Our comprehensive training covers customer service excellence, cultural awareness, operational procedures, and management techniques. We ensure all staff are well-versed in both international hospitality standards and local customs, creating a workforce that excels in service delivery.",
    image: ServiceImgFour.src,
  };

  const ServiceFive = {
    title: "Event Management Services",
    description:
      "Way Wise Jobs provides specialized staffing solutions for events and conferences within the hospitality sector. From event planners and coordinators to service staff and technical support, we ensure every event is executed flawlessly. Our professionals are experienced in handling both intimate gatherings and large-scale corporate events in Saudi Arabia's premier venues.",
    image: ServiceImgFive.src,
  };

  const ServiceSix = {
    title: "Our Process",
    description:
      "Way Wise Jobs follows a structured recruitment and onboarding process in Saudi Arabia. We begin by conducting thorough interviews and screening to identify qualified hospitality professionals, followed by comprehensive skill assessments. Our preparation includes specialized training programs, including language and cultural orientation courses. We facilitate employer visits and practical evaluations to ensure mutual satisfaction. Additionally, we manage compliance with labor laws and nationalization policies like Saudization, while arranging travel and onboarding logistics to ensure a smooth placement process.",
    image: ServiceImgSix.src,
  };

  const HeroDataSaudi = {
    title2: "Saudi Arabia",
    image: HeroSaudi.src,
  };

  return (
    <main>
      <section className="md:mb-[78px] mb-[40px]">
        <HeroImg {...HeroDataSaudi} />
      </section>
      <section className="container mx-auto">
        <DetailCardServiceOne {...ServiceOne} />
        <DetailCardServiceTwo {...ServiceTwo} />
        <DetailCardServiceOne {...ServiceThree} />
        <DetailCardServiceTwo {...ServiceFour} />
        <DetailCardServiceOne {...ServiceFive} />
        <DetailCardServiceTwo {...ServiceSix} />
      </section>
      <div className="mb-[200px]">
        <Cta />
        <CtaTwo />
      </div>
    </main>
  );
};

export default SaudiArabia;
  

