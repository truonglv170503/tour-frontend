// src/components/tours/TourHeader.jsx
import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
const TourHeader = ({ tour }) => {
  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <img
          className="header__hero-img"
          src={tour.imageCover}
          alt={tour.name}
        />
        
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{tour.name}</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            
            <FaClock className="heading-box__icon" />
            <span className="heading-box__text">{tour.duration} days</span>
          </div>
          <div className="heading-box__detail">
            
            <FaMapMarkerAlt className="heading-box__icon" />
            <span className="heading-box__text">{tour.startLocation.description}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHeader;