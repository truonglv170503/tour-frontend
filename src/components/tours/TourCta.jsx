// src/components/tours/TourCta.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'; // Sẽ tạo sau

const TourCta = ({ tour }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  
  const handleBookTour = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Điều hướng đến trang thanh toán
    navigate(`/checkout/${tour.id}`);
  };

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" />
        </div>
        <img
          className="cta__img cta__img--1"
          src={tour.images[1]}
          alt="Tour picture"
        />
        <img
          className="cta__img cta__img--2"
          src={tour.images[2]}
          alt="Tour picture"
        />
        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button className="btn btn--green span-all-rows" onClick={handleBookTour}>
            {isAuthenticated ? 'Book tour now!' : 'Log in to book tour'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourCta;