import React from "react";
import DetailCardServiceOne from "../components/global/DetailCardServiceOne";
import DetailCardServiceTwo from "../components/global/DetailCradServiceTwo";
import HeroKorea from "@/image/hero/korea.png";
import HeroImg from "../components/global/HeroImg";
import Cta from "../components/global/Cta";
import CtaTwo from "../components/global/CtaTwo";
import ServiceImgOne from "@/image/country-page/service-13.jpg";
import ServiceImgTwo from "@/image/country-page/service-14.jpg";
import ServiceImgThree from "@/image/country-page/service-15.jpg";
import ServiceImgFour from "@/image/country-page/service-17.jpg";
import ServiceImgFive from "@/image/country-page/service-2.png";

const SouthKorea = () => {
  const ServiceOne = {
    title: "Our Operations",
    description:
      "Way Wise Jobs focuses on key industries in South Korea, providing skilled labor to support the country’s dynamic economy. In technology and IT, we supply top talent for software development, cybersecurity, and IT infrastructure to help businesses remain competitive. In manufacturing and engineering, we provide skilled workers for production, maintenance, and quality control, ensuring high efficiency and innovation. Additionally, we support South Korea’s finance and education sectors by recruiting professionals for roles in banking, accounting, teaching, and research, driving success across these critical industries.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Technology & IT",
    description:
      "Way Wise Jobs provides skilled professionals for South Korea's rapidly growing technology and IT sectors. We supply top-tier talent in software development, cybersecurity, and IT infrastructure to help businesses stay competitive in this high-tech market.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Manufacturing & Engineering",
    description:
      "We supply skilled workers for South Korea's manufacturing and engineering industries, including roles in production, quality control, and maintenance. Our talent helps businesses maintain high productivity and innovation in a competitive environment.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Finance & Education",
    description:
      "Way Wise Jobs connects South Korean businesses with professionals in finance and education. We provide qualified candidates for roles in banking, accounting, teaching, and research, helping businesses and institutions thrive in a dynamic market.",
    image: ServiceImgFour.src,
  };

  const ServiceFive = {
    title: "Our Process",
    description:
      "Way Wise Jobs follows a comprehensive recruitment and onboarding process in South Korea. We start with interviews and initial screening to identify qualified candidates, followed by skill testing to ensure they meet industry standards. To prepare workers for the South Korean work environment, we offer tailored training programs, including language courses. We also facilitate employer visits and testing to guarantee mutual satisfaction. Our team ensures compliance with local labor laws and regulations, while managing travel and onboarding logistics for seamless placement.",
    image: ServiceImgFive.src,
  };

  const HeroDataKorea = {
    title2: "South Korea",
    image: HeroKorea.src,
  };

  return (
    <main>
      <section className="md:mb-[78px] mb-[40px]">
        <HeroImg {...HeroDataKorea} />
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

export default SouthKorea;
