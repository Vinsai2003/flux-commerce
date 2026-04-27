import React from 'react';
import './CheckoutSummary.css';

const CheckoutSummary = ({ cartItems, cartTotal }) => {
  return (
    <aside className="order-summary-sidebar glass">
      <h2>Order Summary</h2>
      <div className="ordered-items-list">
        {cartItems.map(item => (
          <div key={item.id} className="mini-item">
            <img src={item.image} alt={item.title} />
            <div className="mini-details">
              <p className="mini-title">{item.title}</p>
              <p className="mini-qty">Qty: {item.quantity}</p>
            </div>
            <p className="mini-price">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      
      <div className="summary-divider"></div>
      
      <div className="summary-totals">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span className="free">Free</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
      
      <button type="submit" className="place-order-btn">
        Place Order
      </button>
    </aside>
  );
};

export default CheckoutSummary;
