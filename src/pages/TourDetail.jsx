// src/pages/TourDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TourHeader from '../components/tours/TourHeader';
import TourDescription from '../components/tours/TourDescription';
import TourPictures from '../components/tours/TourPictures';
import TourMap from '../components/tours/TourMap';
import TourReviews from '../components/tours/TourReviews';
import TourCta from '../components/tours/TourCta';
import { tourService } from '../services/api';

const TourDetail = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await tourService.getTour(slug);
        setTour(response.data.data.data);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải thông tin tour. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    fetchTour();
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!tour) return <div className="error">Không tìm thấy tour</div>;

  return (
    <>
      <TourHeader tour={tour} />
      
      <section className="section-description">
        <div className="overview-box">
          <div>
            <TourDescription tour={tour} />
          </div>
        </div>
      </section>
      
      <TourPictures pictures={tour.images} />
      
      <TourMap locations={tour.locations} />
      
      <TourReviews reviews={tour.reviews} />
      
      <TourCta tour={tour} />
    </>
  );
};

export default TourDetail;