import React from "react";
import { ServiceCard } from "@/app/components/countries-we-serve/ServiceCard";
import CtaTwo from "@/app/components/global/CtaTwo";
import HeroImg from "@/app/components/global/HeroImg";
import heroImage from "@/image/HeroImg-1.png";
import { ServiceCardData } from "../page";
import { notFound } from "next/navigation";

const CountryPage = async ({ params }) => {
  const { id } = await params;

  // Find the specific country data
  const countryData = ServiceCardData.filter((card) => card.id === id);

  // If no country is found with this ID, show 404
  if (!countryData) {
    notFound();
  }

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
          {countryData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}

          {!countryData.length && ServiceCardData.map((card, index) => (
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

export async function generateStaticParams() {
  return ServiceCardData.map((country) => ({
    id: country.id,
  }));
}

export default CountryPage;
