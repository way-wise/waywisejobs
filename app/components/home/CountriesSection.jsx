import React from 'react'
import CountriesCard from './CountriesCard';
import NorthAmerica from '@/image/countries/north-america.png'
import Asia from '@/image/countries/asia.png'
import Europe from '@/image/countries/europe.png'
import MiddleEast from '@/image/countries/middle-east.png'

const CountriesSection = () => {

  const countries = [
    {
      country: ["Canada", "United States"],
      image: NorthAmerica.src,
      tag: "North America",
      link: "/countries-we-serve/north-america",
    },
    {
      country: ["South Korea"],
      image: Asia.src,
      tag: "Asia",
      link: "/countries-we-serve/asia",
    },
    {
      country: ["UAE", "Saudi Arabia"],
      image: MiddleEast.src,
      tag: "Middle East",
      link: "/countries-we-serve/middle-east"
    },
    {
      country: ["Italy"],
      image: Europe.src,
      tag: "Europe",
      link: "/countries-we-serve/europe",
    },
  ];

  return (
    <section className='max-w-[1680px] mx-auto md:my-[100px] my-[10px]'>
      <h2 className="text-[20px] md:text-[48px] font-bold text-black  uppercase font-rajdhani leading-[20px] md:leading-[55px] md:mb-[45px] mb-[30px] md:mt-[20px] mt-[30px] text-center">
        Countries we serve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {countries.map((country, index) => (
          <CountriesCard key={index} {...country} index={index}  />
        ))}
      </div>
    </section>
  );
};


export default CountriesSection;
