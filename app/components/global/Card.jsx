import React from 'react'

const Card = (cardItem) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto 
                    transform transition-all duration-300 hover:scale-105 
                    hover:shadow-xl relative overflow-hidden
                    hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 
                    hover:before:w-full hover:before:h-1 hover:before:bg-gradient-to-r 
                    hover:before:from-red-600 hover:before:to-red-400">
      {/* Icon Section */}
      <div className="flex justify-center mb-6 group">
        <i className={cardItem.icon}
           style={{fontSize: "52px", color: "#2A37EA"}}></i>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4
                     font-rubik tracking-wide">
        {cardItem.title}
      </h2>

      <p className="text-gray-600 text-center leading-relaxed font-rubik">
        {cardItem.description}
      </p>
    </div>
  );
}

export default Card;
