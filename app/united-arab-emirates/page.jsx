import React from 'react'
import DetailCardServiceOne from '../components/global/DetailCardServiceOne'
import DetailCardServiceTwo from '../components/global/DetailCradServiceTwo'
import HeroUae from '../../public/image/HeroUae.png'
import HeroImg from '../components/global/HeroImg'
import Cta from '../components/global/Cta'
import CtaTwo from '../components/global/CtaTwo'
import ServiceImgOne from '../../public/image/country-page/Service-1.png'
import ServiceImgTwo from '../../public/image/country-page/Service-2.png'
import ServiceImgThree from '../../public/image/country-page/Service-3.png'
import ServiceImgFour from '../../public/image/country-page/Service-4.png'  


const UnitedArabEmirates = () => {

  const ServiceOne = {
    title: "GET YOUR FREE CONSULTING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ante eget erat rutrum tempor. In finibus ullamcorper mollis. Nulla ut enim nec lectus finibus viverra id ut est. Curabitur pharetra non leo a tempus. Duis porta lacus vehicula ligula varius, nec mollis neque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras feugiat orci vitae lacinia faucibus. Morbi molestie faucibus augue, in volutpat tortor luctus quis. Aenean bibendum ligula luctus lorem pharetra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: ServiceImgOne.src,
  }

  const ServiceTwo = {
    title: "GET YOUR FREE CONSULTING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ante eget erat rutrum tempor. In finibus ullamcorper mollis. Nulla ut enim nec lectus finibus viverra id ut est. Curabitur pharetra non leo a tempus. Duis porta lacus vehicula ligula varius, nec mollis neque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras feugiat orci vitae lacinia faucibus. Morbi molestie faucibus augue, in volutpat tortor luctus quis. Aenean bibendum ligula luctus lorem pharetra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: ServiceImgTwo.src,
  }

  const ServiceThree = {
    title: "GET YOUR FREE CONSULTING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ante eget erat rutrum tempor. In finibus ullamcorper mollis. Nulla ut enim nec lectus finibus viverra id ut est. Curabitur pharetra non leo a tempus. Duis porta lacus vehicula ligula varius, nec mollis neque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras feugiat orci vitae lacinia faucibus. Morbi molestie faucibus augue, in volutpat tortor luctus quis. Aenean bibendum ligula luctus lorem pharetra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: ServiceImgThree.src,
  }

  const ServiceFour = {
    title: "GET YOUR FREE CONSULTING",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ante eget erat rutrum tempor. In finibus ullamcorper mollis. Nulla ut enim nec lectus finibus viverra id ut est. Curabitur pharetra non leo a tempus. Duis porta lacus vehicula ligula varius, nec mollis neque pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras feugiat orci vitae lacinia faucibus. Morbi molestie faucibus augue, in volutpat tortor luctus quis. Aenean bibendum ligula luctus lorem pharetra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: ServiceImgFour.src,
  }

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
