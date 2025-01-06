import React from "react";
import { ServiceCard } from "@/app/components/countries-we-serve/ServiceCard";
import CtaTwo from "../components/global/CtaTwo";
import UsaImg from "@/image/UsaImg.png";
import HeroImg from "../components/global/HeroImg";
import KoreaImg from "@/image/KoreaImg.png";
import CanadaImg from "@/image/CaImg.png";
import UaeImg from "@/image/UaeImg.png";
import SaudiImg from "@/image/SaudiImg.png";
import heroImage from "@/image/HeroImg-1.png";

export const ServiceCardData = [
  {
    title: "United States",
    description:
      "Way Wise Jobs connects U.S. companies with skilled talent in technology, healthcare, construction, and finance, offering tailored staffing solutions.",
    image: UsaImg.src,
    link: "/united-states",
    id: "north-america"
  },
  {
    title: "South Korea",
    description:
      "We supply South Korea with skilled talent in technology, manufacturing, finance, and education to help businesses stay competitive.",
    image: KoreaImg.src,
    link: "/south-korea",
    id: "asia"
  },
  {
    title: "United Arab Emirates",
    description:
      "Way Wise Jobs connects UAE businesses with skilled professionals in construction, hospitality, finance, and engineering, sourcing global talent to support trade and development.",
    image: UaeImg.src,
    link: "/united-arab-emirates",
    id: "middle-east"
  },
  {
    title: "Saudi Arabia", 
    description:
      "We specialize in providing highly qualified hotel and hospitality staff for Saudi Arabia's growing tourism sector, helping deliver world-class guest experiences.",
    image: SaudiImg.src,
    link: "/saudi-arabia",
    id: "middle-east"
  },
  {
    title: "Canada",
    description:
      "We provide qualified manpower for IT, healthcare, engineering, and skilled trades, ensuring the right fit for Canadian employers.",
    image: CanadaImg.src,
    link: "/canada",
    id: "north-america"
  },
];

const CountriesWeServe = () => {
  const HeroDataServe = {
    title1: "Our team operates across",
    title2: "5 countries worldwide.",
    image: heroImage.src,
  };

  return (
    <main className="bg-[#F5F5F5]">
      <section className="md:mb-[100px] mb-[50px] h-full">
        <HeroImg {...HeroDataServe} />
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
          {ServiceCardData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </section>
      <div className="mt-[50px] mb-[200px]">
        <CtaTwo />
      </div>
    </main>
  );
};

export default CountriesWeServe;
