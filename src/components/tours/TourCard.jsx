// src/components/tours/TourCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.3s all;
  
  &:hover {
    transform: translateY(-0.5rem) scale(1.03);
  }
`;

const CardHeader = styled.div`
  position: relative;
  height: 22rem;
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TourName = styled.h3`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 70%;
  z-index: 10;
  font-size: 1.7rem;
  font-weight: 300;
  text-align: right;
  color: #fff;
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    to right bottom,
    rgba(125, 213, 111, 0.85),
    rgba(40, 180, 135, 0.85)
  );
`;

const TourCard = ({ tour }) => {
  return (
    <Card>
      <CardHeader>
        <HeaderImage
          src={`/img/tours/${tour.imageCover}`}
          alt={tour.name}
        />
        <TourName>{tour.name}</TourName>
      </CardHeader>
      <div className="card__details">
        <h4 className="card__sub-heading">
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className="card__text">{tour.summary}</p>
        <div className="card__data">
          <span>
            <i className="fas fa-map-marker-alt"></i>
            {tour.startLocation.description}
          </span>
        </div>
        <div className="card__data">
          <span>
            <i className="far fa-calendar-alt"></i>
            {new Date(tour.startDates[0]).toLocaleString('en-us', {
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>
        <div className="card__data">
          <span>
            <i className="fas fa-user"></i>
            {tour.maxGroupSize} people
          </span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">${tour.price}</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{tour.ratingsAverage}</span>
          <span className="card__footer-text">
            rating ({tour.ratingsQuantity})
          </span>
        </p>
        <Link to={`/tour/${tour.slug}`} className="btn btn--green btn--small">
          Details
        </Link>
      </div>
    </Card>
  );
};

export default TourCard;