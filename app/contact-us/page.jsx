import React from 'react'
import BreadcrumbSection from '../components/section/BreadcrumbSection';
import ContactCard from '../components/contact-us/ContactCard';
import { ContactForm } from '../components/contact-us/ContactForm';
import Map from '../components/contact-us/Map';
const ContactUs = () => {
  const contactCardItems = [
    {
      title: "United States",
      phone: "+1234567890",
      email: "info@waywisejobs.com",
      address: "Saddleback Ridge Rd, Santa Clarita, California,USA",
      number: 1,
    },
    {
      title: "Bangladesh",
      phone: "+1234567890",
      email: "info@waywisejobs.com",
      address: "House-148, Road-22, Mohakhali DOHS, Dhaka-1206",
      number: 2,
    },
    
  ];
  return (
    <main>
      <BreadcrumbSection />
      <section>
        <div className="container mx-auto px-4">
          <div className="md:mt-[80px] mt-[50px]">
            <h2 className="md:text-[48px] text-[20px] font-bold font-rajdhani uppercase leading-[53px] text-center text-black">
              Explore Our <span className="text-[#2A37EA]">Office</span>{" "}
              Worldwide
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-5">
              {contactCardItems.map((item, index) => (
                <ContactCard key={index} item={item} />
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section>
        <Map />
      </section>
    </main>
  );
}

export default ContactUs;
