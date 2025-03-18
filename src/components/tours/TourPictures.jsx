// src/components/tours/TourPictures.jsx
import React from 'react';
const TourPictures = ({ pictures }) => {
  return (
    <section className="section-pictures">
      {pictures.map((image, index) => (
        <div key={index} className="picture-box">
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={image}
            alt={`Tour ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default TourPictures;