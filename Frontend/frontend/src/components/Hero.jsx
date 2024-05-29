import React from "react";

export const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Care Medical Institute is dedicated to providing compassionate and
          cutting-edge healthcare services. At our state-of-the-art facility,
          patients receive comprehensive medical treatments from highly
          qualified professionals. We prioritize personalized care, ensuring
          that each patient’s unique health needs are met with the utmost
          attention and expertise.
        </p>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};
