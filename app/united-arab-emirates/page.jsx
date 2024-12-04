import React from 'react'
import DetailCardServiceOne from '../components/global/DetailCardServiceOne'
import DetailCardServiceTwo from '../components/global/DetailCradServiceTwo'
import HeroUae from '@/image/hero/uae.png'
import HeroImg from '../components/global/HeroImg'
import Cta from '../components/global/Cta'
import CtaTwo from '../components/global/CtaTwo'
import ServiceImgOne from '@/image/country-page/Service-7.jpg'
import ServiceImgTwo from '@/image/country-page/Service-9.jpg'
import ServiceImgThree from '@/image/country-page/Service-10.jpg'
import ServiceImgFour from '@/image/country-page/Service-11.jpg'  


const UnitedArabEmirates = () => {

  

  const ServiceOne = {
    title: "Our Operations",
    description:
      "Way Wise Jobs focuses on key industries in the UAE, providing skilled labor to support the country’s rapid development. In construction and infrastructure, we supply workers for large-scale development projects, including urban development and transport networks. In hospitality, we offer housekeeping and essential services to ensure excellence in service delivery. Additionally, we recruit professionals for finance and engineering roles, helping businesses meet the growing demand for skilled talent across these industries. By sourcing talent globally, we support the UAE’s position as a leading hub for trade and development.",
    image: ServiceImgOne.src,
  };

  const ServiceTwo = {
    title: "Construction & Infrastructure",
    description:
      "Way Wise Jobs provides skilled professionals for large-scale construction and infrastructure projects in the UAE. From urban development to transport networks, we supply the talent needed to support the country’s ambitious growth and development initiatives.",
    image: ServiceImgTwo.src,
  };

  const ServiceThree = {
    title: "Hospitality & Service Industry",
    description:
      "We specialize in sourcing talent for the hospitality industry in the UAE, offering services such as housekeeping and operational support. Our skilled professionals ensure top-notch service delivery, helping businesses maintain the highest standards in hospitality.",
    image: ServiceImgThree.src,
  };

  const ServiceFour = {
    title: "Our Process",
    description:
      "Way Wise Jobs follows a comprehensive recruitment and onboarding process in the UAE. We begin with interviews and screening to identify qualified candidates, followed by skill testing to ensure they meet industry standards. To prepare workers for the UAE work environment, we offer training programs, including language courses and cultural orientation. We also facilitate employer visits and testing to ensure mutual satisfaction. Our team ensures compliance with local labor laws and regulations, and we handle travel and onboarding logistics to ensure a smooth placement process.",
    image: ServiceImgFour.src,
  };

  const HeroDataUae = {
    title2: "United Arab Emirates",
    image: HeroUae.src,
  }

    

  return (
    <main>
      <section className="md:mb-[78px] mb-[40px]">
        <HeroImg {...HeroDataUae} />
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

export default UnitedArabEmirates;  
