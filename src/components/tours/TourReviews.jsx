// src/components/tours/TourReviews.jsx
import React from 'react';

const TourReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <section className="section-reviews"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="reviews">
          <p style={{ fontSize: '18px', fontWeight: 'bold', opacity: 0.8 }}>Chưa có đánh giá nào.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews.map(review => (
          <div key={review.id} className="reviews__card">
            <div className="reviews__avatar">
              <img
                className="reviews__avatar-img"
                src={review.user.photo}
                alt={review.user.name}
              />
              <h6 className="reviews__user">{review.user.name}</h6>
            </div>
            <p className="reviews__text">{review.review}</p>
            <div className="reviews__rating">
              {[1, 2, 3, 4, 5].map(star => (
                <svg
                  key={star}
                  className={`reviews__star reviews__star--${
                    star <= review.rating ? 'active' : 'inactive'
                  }`}
                >
                  <use xlinkHref="/img/icons.svg#icon-star"></use>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourReviews;