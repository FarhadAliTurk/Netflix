import React, { useState } from 'react';
import '../styles/Cart.css'; // Adjust the path as necessary

const initialCartItems = [
  { id: 1, name: 'Casual T-Shirt', price: 20, quantity: 2, image: 'https://via.placeholder.com/100x100?text=T-Shirt' },
  { id: 2, name: 'Denim Jacket', price: 50, quantity: 1, image: 'https://via.placeholder.com/100x100?text=Denim+Jacket' },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update the quantity of an item
  const updateQuantity = (id, action) => {
    setCartItems(prevItems =>
      prevItems.map(item => 
        item.id === id
          ? { ...item, quantity: action === 'increment' ? item.quantity + 1 : item.quantity - 1 }
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate the total price of the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button 
                  className="quantity-btn"
                  disabled={item.quantity <= 1}
                  onClick={() => updateQuantity(item.id, 'decrement')}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 'increment')}
                >
                  +
                </button>
                <button 
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
