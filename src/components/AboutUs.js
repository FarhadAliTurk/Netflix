import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>Welcome to ClothingStore</h1>
          <p>Your Style, Your Identity</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            At ClothingStore, we believe fashion is more than just clothing –
            it’s a way of expressing who you are. Since 2020, we’ve been blending
            timeless style with modern trends to create fashion that fits your personality.
          </p>
        </div>
        <div className="story-image">
          <img
            src="https://img.freepik.com/free-psd/luxury-men-s-fashion-template-design_23-2150831372.jpg?t=st=1746260734~exp=1746264334~hmac=cd5a38b34dc8b3672265001f472cac980757ed3654b0a8b47794ac8ad640f452&w=1800"
            alt="ClothingStore brand story"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { icon: 'fas fa-leaf', title: 'Sustainability', text: 'Committed to eco-friendly fashion.' },
            { icon: 'fas fa-tshirt', title: 'Craftsmanship', text: 'Built with precision and care.' },
            { icon: 'fas fa-lightbulb', title: 'Innovation', text: 'Always evolving with trends.' }
          ].map((val, idx) => (
            <div className="value-item" key={idx}>
              <i className={val.icon}></i>
              <h3>{val.title}</h3>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fashion Showcase */}
      <section className="fashion-showcase">
        <h2>Our Designs</h2>
        <div className="showcase-grid">
          {[
            { src: 'https://img.freepik.com/free-photo/travel-concept-with-shirt-headphones_23-2149030601.jpg', alt: 'Casual Shirt with Accessories' },
            { src: 'https://img.freepik.com/premium-photo/hanging-clothing-black-white-sneakers-cap-jeans-clothes-rack-black_120485-406.jpg', alt: 'Street Style Rack' },
            { src: 'https://img.freepik.com/free-photo/woman-holding-shirts-choosing-what-outfit-wear_176420-16662.jpg', alt: 'Woman choosing outfit' },
            { src: 'https://img.freepik.com/free-photo/top-view-autumn-adventure-elements_23-2148634134.jpg', alt: 'Autumn Outfit Flatlay' }
          ].map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Discover Your Style</h2>
        <p>Explore our latest collections and find the perfect fit for you.</p>
        <button className="cta-button" aria-label="Shop Now">Shop Now</button>
      </section>
    </div>
  );
}

export default AboutUs;
