import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CheckCircle2, CreditCard, MapPin } from 'lucide-react';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    clearCart();
    navigate('/order-success');
  };

  if (isOrdered) {
    return (
      <div className="container success-container page-enter-active">
        <CheckCircle2 size={100} color="#10b981" strokeWidth={1} />
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
        <p>Redirecting you to the home page...</p>
      </div>
    );
  }

  return (
    <div className="container checkout-page page-enter-active">
      <h1>Checkout</h1>
      
      <form onSubmit={handleSubmit} className="checkout-grid">
        <div className="checkout-form-sections">
          <section className="checkout-section glass">
            <h2><MapPin size={22} /> Shipping Information</h2>
            <div className="form-group row">
              <input type="text" name="firstName" placeholder="First Name" required onChange={handleInputChange} />
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleInputChange} />
            </div>
            <input type="email" name="email" placeholder="Email Address" required onChange={handleInputChange} />
            <input type="text" name="address" placeholder="Street Address" required onChange={handleInputChange} />
            <div className="form-group row">
              <input type="text" name="city" placeholder="City" required onChange={handleInputChange} />
              <input type="text" name="zipCode" placeholder="ZIP Code" pattern="[0-9]{5,}" title="Please enter a valid zip code" required onChange={handleInputChange} />
            </div>
          </section>

          <section className="checkout-section glass">
            <h2><CreditCard size={22} /> Payment Method</h2>
            <input type="text" name="cardNumber" placeholder="Card Number" pattern="[0-9]{16}" title="16-digit card number" required onChange={handleInputChange} />
            <div className="form-group row">
              <input type="text" name="expiry" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" title="MM/YY format" required onChange={handleInputChange} />
              <input type="text" name="cvv" placeholder="CVV" pattern="[0-9]{3,4}" title="3 or 4 digit CVV" required onChange={handleInputChange} />
            </div>
          </section>
        </div>

        <CheckoutSummary cartItems={cartItems} cartTotal={cartTotal} />
      </form>
    </div>
  );
};

export default CheckoutPage;
