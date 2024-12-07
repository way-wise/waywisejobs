import React from "react";
import DetailCardServiceOne from "../components/global/DetailCardServiceOne";
import DetailCardServiceTwo from "../components/global/DetailCradServiceTwo";
import HeroSaudi from "@/image/hero/saudi.png";
import HeroImg from "../components/global/HeroImg";
import Cta from "../components/global/Cta";
import CtaTwo from "../components/global/CtaTwo";
import ServiceImgOne from "@/image/country-page/service-6.jpg";
import ServiceImgTwo from "@/image/country-page/Service-7.jpg";
import ServiceImgThree from "@/image/country-page/Service-8.jpg";
import ServiceImgFour from "@/image/country-page/Service-16.jpg";
import ServiceImgFive from "@/image/country-page/Service-5.jpg"

const SaudiArabia = () => {
  const ServiceOne = {
    title: "Our Operations",
    description:
      "In Saudi Arabia, Way Wise Jobs focuses on key industries requiring skilled labor. We supply welders, electricians, and technicians for oil, gas, and energy projects. In construction and infrastructure, we provide skilled workers for large-scale projects, including urban development and transport networks. For the hospitality industry, we offer housekeeping and essential services to ensure excellent service delivery. Additionally, we recruit professionals for facility management, including maintenance, cleaning, and operational support, ensuring smooth facility operations.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Oil, Gas & Energy",
    description:
      "We supply skilled professionals, including welders, electricians, and technicians, to support key projects in Saudi Arabia's oil, gas, and energy sectors. Our expertise helps drive efficiency and ensures the success of vital energy projects.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Construction & Infrastructure",
    description:
      "Way Wise Jobs provides skilled workers for large-scale construction and infrastructure projects across Saudi Arabia. From urban development to transport networks, we help build the foundation for the country's continued growth and development.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Hospitality & Facility Management",
    description:
      "We specialize in supplying talent for the hospitality industry, offering essential services such as housekeeping to ensure the highest standards. Additionally, our facility management services support smooth operations through skilled professionals in maintenance, cleaning, and more.",
    image: ServiceImgFour.src,
  };

  const ServiceFive = {
    title: "Our Process",
    description:
      "Way Wise Jobs follows a structured recruitment and onboarding process in Saudi Arabia. We begin by conducting interviews and initial screening to identify qualified workers, followed by skill testing to ensure candidates meet industry standards. To prepare workers for the Saudi work environment, we offer training programs, including language courses. We facilitate employer visits and testing to ensure mutual satisfaction. Additionally, we manage compliance with labor laws and nationalization policies like Saudization, while arranging travel and onboarding logistics to ensure a smooth placement process.",
    image: ServiceImgFive.src,
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
      </section>
      <div className="mb-[200px]">
        <Cta />
        <CtaTwo />
      </div>
    </main>
  );
};

export default SaudiArabia;
