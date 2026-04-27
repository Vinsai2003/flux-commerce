import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import './CartItem.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div className="item-left">
        <div className="item-img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item-quantity">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            <Minus size={14} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            <Plus size={14} />
          </button>
        </div>
      </div>
      
      <div className="item-details">
        <Link to={`/product/${item.id}`} className="item-title">
          {item.title}
        </Link>
        <p className="item-category">{item.category}</p>
        
        <div className="item-price-row">
          <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        
        <button 
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
