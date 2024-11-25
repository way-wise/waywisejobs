import React from 'react'
import InfoCard from './InfoCard'


const HomeInfoCard = () => {
    const infoCardItems = [
      {
        background: "#2A37EA",
        color: "#ffffff",
        icon: "bi bi-building",
        title: "82+",
        description: "Corporate Clients",
      },
      {
        background: "#ffffff",
        color: "#2A37EA",
        icon: "bi bi-building",
        title: "100+",
        description: "Projects Completed",
      },
      {
        background: "#2A37EA",
        color: "#ffffff",
        icon: "bi bi-building",
        title: "100+",
        description: "Projects Completed",
      },
      {
        background: "#ffffff",
        color: "#2A37EA",
        icon: "bi bi-building",
        title: "100+",
        description: "Projects Completed",
      },
    ];
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4'>    
        {infoCardItems.map((item, index) => (
            <InfoCard key={index} item={item} />
        ))}
    </div>
  );
};

export default HomeInfoCard;
