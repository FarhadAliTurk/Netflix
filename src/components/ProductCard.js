import React from 'react';
import '../styles/ProductCard.css'; // Adjust the path as necessary

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <div className="product-hover-overlay">
          <button className="quick-view-btn">Quick View</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
    </div>
  );
}

export default ProductCard;