import React from "react";
import DetailCardServiceOne from "../components/global/DetailCardServiceOne";
import DetailCardServiceTwo from "../components/global/DetailCradServiceTwo";
import HeroUsa from "@/image/hero/usa.png";
import HeroImg from "../components/global/HeroImg";
import Cta from "../components/global/Cta";
import CtaTwo from "../components/global/CtaTwo";
import ServiceImgOne from "@/image/country-page/service-1.png";
import ServiceImgTwo from "@/image/country-page/service-2.png";
import ServiceImgThree from "@/image/country-page/service-3.png";
import ServiceImgFour from "@/image/country-page/service-4.png";


const UnitedStates = () => {
  const ServiceOne = {
    title: "Our Operations",
    description:
      "Way Wise Jobs partners with U.S. companies to provide skilled talent across key industries such as technology, healthcare, construction, and finance. We connect businesses with both local and international professionals, offering tailored staffing solutions to support growth and efficiency in a competitive market.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Skilled Talent for U.S. Industries",
    description:
      "Way Wise Jobs provides U.S. businesses with highly skilled professionals across industries like technology, healthcare, construction, and finance. Our extensive recruitment network connects companies with both local and international talent, offering customized staffing solutions to meet diverse business needs.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Tailored Recruitment Process",
    description:
      "We follow a structured recruitment process for U.S. businesses, starting with interviews and screening to identify qualified candidates. We perform skill testing to ensure candidates meet industry standards and provide necessary training. Our team ensures compliance with local labor laws and handles all logistics, including travel and onboarding, for a seamless placement experience.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Our Process",
    description:
      "Way Wise Jobs follows a structured recruitment and onboarding process for U.S. businesses. We conduct interviews and screenings to identify the best candidates, perform skill testing, and offer training programs to prepare workers for the U.S. work environment. We ensure compliance with local labor laws and manage travel and logistics for smooth placement.",
    image: ServiceImgFour.src,
  };



  const HeroDataUsa = {
    title2: "United States",
    image: HeroUsa.src,
  };

  return (
    <main>
      <section className="md:mb-[78px] mb-[40px]">
        <HeroImg {...HeroDataUsa} />
      </section>
      <section className="container mx-auto">
        <DetailCardServiceOne {...ServiceOne} />
        <DetailCardServiceTwo {...ServiceTwo} />
        <DetailCardServiceOne {...ServiceThree} />
        <DetailCardServiceTwo {...ServiceFour} />
      </section>
      <div className="mb-[200px]">
        <Cta />
        <CtaTwo />
      </div>
    </main>
  );
};

export default UnitedStates;
