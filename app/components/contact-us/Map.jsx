import React from 'react'

const Map = () => {
  return (
    <div className="mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.036064665254!2d90.3952484!3d23.782372200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e0b4f3e5fd%3A0x9e725404cc12432d!2sWay%20Wise%20Global!5e0!3m2!1sen!2sbd!4v1732432443380!5m2!1sen!2sbd"
        width="100%"
        height="500px"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
