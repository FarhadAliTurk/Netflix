import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://cdn.pixabay.com/video/2018/10/25/18897-297379518_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Unleash Your Style</h1>
          <p className="hero-desc">
            Discover the latest trends and redefine fashion with ClothingStore.
          </p>
          <button className="hero-btn" onClick={() => navigate('/sale')}>
            Shop the Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
