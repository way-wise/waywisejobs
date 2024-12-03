import React from 'react'
import { ServiceCard } from '@/app/components/countries-we-serve/ServiceCard'
import CtaTwo from '../components/global/CtaTwo'
import UsaImg from '@/image/UsaImg.png'
import HeroImg from '../components/global/HeroImg'
import KoreaImg from '@/image/KoreaImg.png'
import CanadaImg from '@/image/CaImg.png'
import UaeImg from '@/image/UaeImg.png'
import SaudiImg from '@/image/SaudiImg.png'
import heroImage from '@/image/HeroImg-1.png'



const CountriesWeServe = () => {

  const HeroDataServe = {
    title1: "Our team operates across",
    title2: "5 countries worldwide.",
    image: heroImage.src,
  }

  const ServiceCardData = [
    {
      title: "United States",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: UsaImg.src,
      link: "/united-states",
    },
    {
      title: "South Korea",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: KoreaImg.src,
      link: "/south-korea",
    },
    {
      title: "United Arab Emirates",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: UaeImg.src,
      link: "/united-arab-emirates",
    },
    {
      title: "Saudi Arabia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: SaudiImg.src,
      link: "/saudi-arabia",
    },
    {
      title: "Canada",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: CanadaImg.src,
      link: "/canada",
    },
  ];
  return (
    <main className="bg-[#F5F5F5]">
      <section className="md:mb-[100px] mb-[50px] ">
        <HeroImg {...HeroDataServe} />
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[50px]">
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
