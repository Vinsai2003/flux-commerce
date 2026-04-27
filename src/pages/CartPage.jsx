import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/Cart/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container empty-cart page-enter-active">
        <ShoppingBag size={80} strokeWidth={1} />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="shop-btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container cart-page page-enter-active">
      <div className="cart-layout">
        <div className="cart-items-container">
          <div className="cart-header">
            My Cart ({cartItems.length})
          </div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateQuantity={updateQuantity} 
                removeFromCart={removeFromCart} 
              />
            ))}
          </div>
        </div>
        
        <div className="cart-summary">
          <div className="summary-title">PRICE DETAILS</div>
          <div className="summary-content">
            <div className="summary-row">
              <span>Price ({cartItems.length} items)</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Charges</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <Link to="/checkout" className="checkout-btn">
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
