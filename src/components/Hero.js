import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero-section text-center text-white">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Unlimited movies, TV shows, and more.</h1>
          <p className="lead">Watch anywhere. Cancel anytime. Ready to dive in?</p>
          <input
            type="email"
            className="form-control email-input"
            placeholder="Enter your email to get started"
          />
          <button className="btn btn-lg btn-danger mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;