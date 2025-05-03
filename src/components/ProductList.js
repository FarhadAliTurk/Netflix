import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const mockProducts = [
  {
    id: 1,
    name: 'Casual T-Shirt',
    price: 20,
    image: 'https://printlab.clothing/cdn/shop/files/image-2_550x.png?v=1705776554',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJi0Rbuepci_jj8PAcjdOh02A5TzAL-_swA&s',
    tag: 'Sale',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 80,
    image: 'https://sc04.alicdn.com/kf/H37832190ddbd497cadb6fb0d78a38d1eM/230424467/H37832190ddbd497cadb6fb0d78a38d1eM.jpg',
    tag: 'Hot',
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 40,
    image: 'https://www.dressyzone.com/cdn/shop/files/p14836-embroidered-lawn-dress-update_2048x.jpg?v=1718187338',
    tag: 'New',
  },
];

function ProductList() {
  const [products] = useState(mockProducts);

  return (
    <section className="product-list-container">
      <h1 className="product-list-title">Our Products</h1>

      {products.length === 0 ? (
        <p className="loading-message">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
