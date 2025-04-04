// src/components/tours/TourDescription.jsx
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaStar } from "react-icons/fa";
const TourDescription = ({ tour }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-us", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
    <div className="overview-box">
      <div>
      {/* <h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2> */}

      <div className="overview-box__group">
        <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>

        <div className="overview-box__detail">
          <FaCalendarAlt className="overview-box__icon" />
          <span className="overview-box__label">Next date</span>
          <span className="overview-box__text">
            {formatDate(tour.startDates[0])}
          </span>
        </div>

        <div className="overview-box__detail">
        <FaMapMarkerAlt className="overview-box__icon" />
          <span className="overview-box__label">Difficulty</span>
          <span className="overview-box__text">{tour.difficulty}</span>
        </div>

        <div className="overview-box__detail">
          <FaUserFriends className="overview-box__icon" />
          <span className="overview-box__label">Participants</span>
          <span className="overview-box__text">{tour.maxGroupSize} people</span>
        </div>

        <div className="overview-box__detail">
          <FaStar className="overview-box__icon" /> 
          <span className="overview-box__label">Rating</span>
          <span className="overview-box__text">{tour.ratingsAverage} / 5</span>
        </div>
      </div>

      <div className="overview-box__group">
        <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

        {tour.guides.map((guide) => (
          <div key={guide.id} className="overview-box__detail">
            <img
              className="overview-box__img"
              src={guide.photo}
              alt={guide.name}
            />
            <span className="overview-box__label">
              {guide.role === "lead-guide" ? "Lead guide" : "Tour guide"}
            </span>
            <span className="overview-box__text">{guide.name}</span>
          </div>
        ))}
      </div>
      </div>
      </div>
      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {tour.name} tour</h2>
        {tour.description.split("\n").map((paragraph, i) => (
          <p key={i} className="description__text">
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
};

export default TourDescription;
