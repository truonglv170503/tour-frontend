// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "../components/tours/TourCard";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}tours`
        );
        setTours(res.data.data.data);
      } catch (err) {
        setError("Failed to load tours");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="tours-container">
      <h1>All Tours</h1>
      <div className="card-container">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Home;
