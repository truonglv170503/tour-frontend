// src/components/tours/TourCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaStar } from "react-icons/fa";
//import "./assets/css/style.css";

// const Card = styled.div`
//   border-radius: 3px;
//     overflow: hidden;
//     -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
//     box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
//     background-color: #fff;
//     -webkit-transition: 0.3s all;
//     transition: 0.3s all;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-orient: vertical;
//     -webkit-box-direction: normal;
//     -ms-flex-direction: column;
//     flex-direction: column;

//   &:hover {
//     transform: translateY(-0.5rem) scale(1.03);
//   }
// `;

// const CardHeader = styled.div`
//   position: relative;
//   height: 22rem;
//   clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
// `;

// const HeaderImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const TourName = styled.h3`
//   position: absolute;
//   bottom: 2rem;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10;
//   font-size: 1.7rem;
//   font-weight: 700;
//   text-align: center;
//   color: #fff;
//   text-transform: uppercase;
//   padding: 0.5rem 1.5rem;
//   background-image: linear-gradient(
//     to right bottom,
//     rgba(125, 213, 111, 0.85),
//     rgba(40, 180, 135, 0.85)
//   );
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 10 100%);
//   padding: 0.5rem 1.5rem;
//   display: inline-block;
// `;

// const TourCard = ({ tour }) => {
//   console.log(process.env.REACT_APP_BACKEND_URL + tour.imageCover);
//   return (
//     <Card>
//       <CardHeader>
//         <HeaderImage
//           src={`${process.env.REACT_APP_BACKEND_URL}images/tours/${tour.imageCover}`}
//           alt={tour.name}
//         />

//         <TourName>
//           {tour.name}
//         </TourName>
//       </CardHeader>
//       <div className="card__details">
//         <h4 className="card__sub-heading">
//           {tour.difficulty} {tour.duration}-day tour
//         </h4>
//         <p className="card__text">{tour.summary}</p>
//         <div className="card__data">
//           <span>
//             <i className="fas fa-map-marker-alt"></i>
//             {tour.startLocation.description}
//           </span>
//         </div>
//         <div className="card__data">
//           <span>
//             <i className="far fa-calendar-alt"></i>
//             {new Date(tour.startDates[0]).toLocaleString("en-us", {
//               month: "long",
//               year: "numeric",
//             })}
//           </span>
//         </div>
//         <div className="card__data">
//           <span>
//             <i className="fas fa-user"></i>
//             {tour.maxGroupSize} people
//           </span>
//         </div>
//       </div>
//       <div className="card__footer">
//         <p>
//           <span className="card__footer-value">${tour.price}</span>
//           <span className="card__footer-text">per person</span>
//         </p>
//         <p className="card__ratings">
//           <span className="card__footer-value">{tour.ratingsAverage}</span>
//           <span className="card__footer-text">
//             rating ({tour.ratingsQuantity})
//           </span>
//         </p>
//         <Link to={`/tour/${tour.slug}`} className="btn btn--green btn--small">
//           Details
//         </Link>
//       </div>
//     </Card>
//   );
// };

// export default TourCard;
const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #059669;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  color: #4b5563;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e5e7eb;
`;

const PriceText = styled.p`
  font-weight: bold;
  color: #1f2937;
`;

const DetailsButton = styled(Link)`
  background-color: #059669;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
`;

const TourCard = ({ tour }) => {
  console.log(process.env.REACT_APP_BACKEND_URL + tour.imageCover);
  console.log("Slug của tour:", tour.slug);
  console.log(`${process.env.REACT_APP_BACKEND_URL}images/tours/${tour.imageCover}`)
  return (
    <Card>
      <CardImage
        //src={`${process.env.REACT_APP_BACKEND_URL}images/tours/${tour.imageCover}`}
        //src={`${process.env.REACT_APP_BACKEND_URL}images/tours/${tour.imageCover}`}
        src={tour.imageCover}
        alt={tour.name}
      />
      <CardContent>
        <CardTitle>{tour.name}</CardTitle>
        <CardText>{tour.difficulty.toUpperCase()} {tour.duration}-DAY TOUR</CardText>
        <CardText>{tour.summary}</CardText>
        <CardText>
          <FaMapMarkerAlt /> {tour.startLocation.description}
        </CardText>
        <CardText>
          <FaCalendarAlt /> {new Date(tour.startDates[0]).toLocaleString("en-us", { month: "long", year: "numeric" })}
        </CardText>
        <CardText>
          <FaUserFriends /> {tour.maxGroupSize} people
        </CardText>
      </CardContent>
      <CardFooter>
        <div>
          <PriceText>${tour.price} per person</PriceText>
          <CardText>
            <FaStar color="gold" /> {tour.ratingsAverage} rating ({tour.ratingsQuantity})
          </CardText>
        </div>
        <DetailsButton to={`/tours/${tour._id}`}>DETAILS</DetailsButton>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
