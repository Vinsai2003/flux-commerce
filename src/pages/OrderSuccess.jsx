import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="order-success-page container">
      <div className="success-card section-white">
        <div className="success-icon">
          <CheckCircle size={80} color="#388e3c" />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p className="order-id">Order ID: #FLUX-{orderId}</p>
        <p className="success-msg">
          Thank you for shopping with us. Your order will be delivered within 3-5 business days.
        </p>
        <div className="success-actions">
          <Link to="/profile" className="view-orders-btn">VIEW ORDERS</Link>
          <Link to="/" className="continue-btn">CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
