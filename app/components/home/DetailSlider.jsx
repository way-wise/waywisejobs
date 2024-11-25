import React from 'react'
import ExperienceSection from '../../components/home/ExperienceSection'
import SliderTwo from '../../components/global/SliderTwo'
const DetailSlider = () => {
  return (
    <section className="relative h-screen flex justify-center items-center my-16">
      <ExperienceSection />
      <div className="w-full">
        <SliderTwo />
      </div>
    </section>
  );
}

export default DetailSlider;
