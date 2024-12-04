import React from "react";
import DetailCardServiceOne from "../components/global/DetailCardServiceOne";
import DetailCardServiceTwo from "../components/global/DetailCradServiceTwo";
import HeroCanada from "@/image/hero/canada.png";
import HeroImg from "../components/global/HeroImg";
import Cta from "../components/global/Cta";
import CtaTwo from "../components/global/CtaTwo";
import ServiceImgOne from "@/image/country-page/Service-15.jpg";
import ServiceImgTwo from "@/image/country-page/Service-12.jpg";
import ServiceImgThree from "@/image/country-page/Service-8.jpg";
import ServiceImgFour from "@/image/country-page/Service-16.jpg";

const Canada = () => {
  const ServiceOne = {
    title: "Our Operations",
    description:
      "Way Wise Jobs focuses on key industries in Canada, providing skilled professionals for IT, healthcare, engineering, and skilled trades. We connect Canadian businesses with both local and international talent, ensuring the right fit for each company’s specific needs. Our expertise in recruitment helps businesses stay competitive and thrive in Canada's diverse and growing economy.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Skilled Talent for Canadian Industries",
    description:
      " Way Wise Jobs connects Canadian businesses with highly skilled professionals across industries such as IT, healthcare, engineering, and skilled trades. We source both local and international talent to deliver tailored staffing solutions that help Canadian companies thrive and remain competitive.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Efficient Recruitment Process",
    description:
      "Our recruitment process for Canadian businesses is efficient and thorough. We begin with interviews and screening to identify the best candidates, followed by skill testing to ensure they meet industry standards. We provide necessary training and ensure compliance with local labor laws, handling all logistics, including travel and onboarding, for a smooth placement experience.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Our Process",
    description:
      "We follow a structured recruitment and onboarding process for Canadian businesses. We start with interviews and screening to identify the most qualified candidates. Skill testing is performed to ensure industry standards are met, and we offer relevant training programs to prepare workers for the Canadian work environment. Our team ensures compliance with Canadian labor laws and manages all logistics, including travel arrangements and onboarding, for a smooth placement process.",
    image: ServiceImgFour.src,
  };

  const HeroDataCanada = {
    title2: "Canada",
    image: HeroCanada.src,
  };

  return (
    <main>
      <section className="md:mb-[78px] mb-[40px]">
        <HeroImg {...HeroDataCanada} />
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

export default Canada;
