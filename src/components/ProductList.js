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
    image: 'https://denims.pk/cdn/shop/files/Mens_Denim_Jacket_Stretchable_Fine_Lycra_-_DENIMS_-5605370.jpg?v=1731804684&width=1200',
    tag: 'Sale',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 80,
    image: 'https://1ststep.pk/cdn/shop/files/7_426447d9-598d-4cd7-935a-ab1b9426b253_2048x2048.webp?v=1743779225',
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
