// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';
//import Login from './pages/Login';
//import Signup from './pages/Signup';
//import UserProfile from './pages/UserProfile';
import LoginForm from './components/auth/LoginForm';
import Checkout from './pages/Checkout';
//import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/me" element={<UserProfile />} /> */}
            <Route path="/checkout/:tourId" element={<Checkout />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;