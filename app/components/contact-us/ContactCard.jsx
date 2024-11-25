import React from 'react'

const ContactCard = ({ item }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto 
                    transform transition-all duration-300
                    border-2 border-solid
                    hover:shadow-xl relative overflow-hidden
                    hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 
                    hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r 
                    hover:before:from-red-600 hover:before:to-red-400 group mt-6"
    >
      <div className="text-center space-y-2 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h2>
        <a
          href={`tel:${item.phone}`}
          className="font-rajdhani font-bold text-[18px] text-[#2A37EA] hover:text-[#2A37EA]"
        >
          {item.phone}
        </a>
        <a
          href={`mailto:${item.email}`}
          className="text-[#2A37EA] hover:text-[#2A37EA] font-bold font-rajdhani text-[18px]"
        >
          {item.email}
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 font-rubik">
        <p className="text-[#2A37EA] text-[14px] text-center mt-2">
          {item.address}
        </p>
        <div className="text-[#2A37EA]/50 group-hover:text-[#2A37EA] text-4xl font-bold absolute top-1 right-2">
          {item.number}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
