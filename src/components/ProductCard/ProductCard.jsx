import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useWishlist } from '../../contexts/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="product-card glass">
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        <button 
          className={`wishlist-toggle ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={toggleWishlist}
        >
          <Heart size={20} fill={isInWishlist(product.id) ? "var(--primary)" : "none"} />
        </button>
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="view-btn">
            <Eye size={20} />
          </Link>
        </div>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        
        <div className="product-rating">
          <Star size={14} fill="currentColor" />
          <span>{product.rating?.rate}</span>
          <span className="rating-count">({product.rating?.count})</span>
        </div>

        <div className="product-footer">
          <div className="product-price">${product.price.toFixed(2)}</div>
          <button 
            className={`add-to-cart-btn ${isAdding ? 'success' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Added!' : <ShoppingCart size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
