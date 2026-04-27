import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { api } from '../services/api';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    addToCart(product);
    navigate('/checkout');
  };

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;
  if (!product) return <div className="container">Product not found</div>;

  return (
    <div className="product-detail-page page-enter-active">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ChevronLeft size={20} /> Back to results
        </button>

        <section className="detail-section">
          <div className="detail-image-card">
            <img src={product.image} alt={product.title} />
            <div className="detail-actions">
              <button 
                className={`add-large-btn ${isAdding ? 'success' : ''}`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                <ShoppingCart size={20} />
                {isAdding ? 'ADDED' : 'ADD TO CART'}
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                BUY NOW
              </button>
            </div>
          </div>

          <div className="detail-info">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-title">{product.title}</h1>
            
            <div className="detail-rating">
              <div className="stars">
                {product.rating?.rate} <Star size={14} fill="white" color="white" />
              </div>
              <span className="reviews">{product.rating?.count} Ratings & Reviews</span>
            </div>

            <div className="detail-price">${product.price.toFixed(2)}</div>
            
            <div className="detail-description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <Truck size={20} />
                <span>Free Delivery</span>
              </div>
              <div className="badge">
                <Shield size={20} />
                <span>Replacement</span>
              </div>
              <div className="badge">
                <RefreshCw size={20} />
                <span>Warranty</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
