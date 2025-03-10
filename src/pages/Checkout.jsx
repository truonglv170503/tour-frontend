// src/pages/Checkout.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/booking/CheckoutForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const Checkout = () => {
  const { tourId } = useParams();
  
  return (
    <div className="checkout-page">
      <h2>Complete your booking</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm tourId={tourId} />
      </Elements>
    </div>
  );
};

export default Checkout;