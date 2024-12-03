import React from 'react'
import CountriesCard from './CountriesCard';
import CountryCard1 from '@/image/country-card-1.png'

const CountriesSection = () => {

  const countries = [
    {
      country: ["Canada", "United States"],
      image: CountryCard1.src,
      tag: "North America",
      link: "/",
    },
    {
      country: ["Japan"],
      image: CountryCard1.src,
      tag: "Japan",
      link: "/",
    },
    {
      country: ["United Kingdom"],
      image: CountryCard1.src,
      tag: "Europe",
      link: "/",
    },
    {
      country: ["Australia"],
      image: CountryCard1.src,
      tag: "Australia",
      link: "/",
    },
  ];

  return (
    <section className='md:my-[100px] my-[10px] mx-[40px]'>
      <h2 className="text-[20px] md:text-[48px] font-bold text-black  uppercase font-rajdhani leading-[20px] md:leading-[55px] md:mb-[45px] mb-[20px] mt-[20px] text-center">
        Countries we serve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-[30px]">
        {countries.map((country, index) => (
          <CountriesCard key={index} {...country}  />
        ))}
      </div>
    </section>
  );
};


export default CountriesSection;
