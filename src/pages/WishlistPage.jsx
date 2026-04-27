import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist container section-white">
        <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d405a711-213d-4114-8846-dbfd151e1633.png?q=90" alt="Empty" />
        <h2>Empty Wishlist</h2>
        <p>You have no items in your wishlist. Start adding!</p>
        <Link to="/" className="shop-btn">SHOP NOW</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page container">
      <div className="wishlist-container section-white">
        <h1 className="wishlist-header">My Wishlist ({wishlist.length})</h1>
        {wishlist.map(product => (
          <div key={product.id} className="wishlist-item">
            <div className="item-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="item-details">
              <Link to={`/product/${product.id}`} className="item-title">{product.title}</Link>
              <div className="item-price">${product.price.toFixed(2)}</div>
            </div>
            <div className="wishlist-actions">
              <button 
                className="wish-add-btn" 
                onClick={() => {
                  addToCart(product);
                  removeFromWishlist(product.id);
                }}
              >
                <ShoppingCart size={18} /> ADD TO CART
              </button>
              <button className="wish-remove-btn" onClick={() => removeFromWishlist(product.id)}>
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
