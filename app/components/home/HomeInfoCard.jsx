'use client'

import React from "react";
import InfoCard from "./InfoCard";
import CountUp from "react-countup";

const HomeInfoCard = () => {
  const infoCardItems = [
    {
      background: "#2A37EA",
      color: "#ffffff",
      icon: "bi bi-building",
      title: <CountUp end={82} duration={5} />, 
      description: "North America",
    },
    {
      background: "#ffffff",
      color: "#2A37EA",
      icon: "bi bi-building",
      title: <CountUp end={150} duration={5}  /> , 
      description: "Asia",
    },
    {
      background: "#FF902E",
      color: "#ffffff",
      icon: "bi bi-building",
      title: <CountUp end={100} duration={5} />, 
      description: "Middle East",
    },
    {
      background: "#ffffff",
      color: "#2A37EA",
      icon: "bi bi-building",
      title: <CountUp end={120} duration={5} />, 
      description: "Europe",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  md:gap-6 ">
      {infoCardItems.map((item, index) => (
        <InfoCard key={index} item={item}  />
      ))}
    </div>
  );
};

export default HomeInfoCard;
