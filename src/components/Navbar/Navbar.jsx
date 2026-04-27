import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, Search, User, Menu, Heart, Package } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm.trim()}`);
    }
  };

  return (
    <nav className="navbar glass">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          FluxCommerce
          <span className="logo-accent">Explore <span style={{color: '#ffe500'}}>Plus</span></span>
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search for products, brands and more" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"><Search size={18} /></button>
        </form>

        <div className="nav-actions">
          <Link to="/wishlist" className="cart-btn hide-mobile">
            <Heart size={20} />
            <span>Wishlist</span>
          </Link>

          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span>Cart</span>
          </Link>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="user-name">{user.firstName || user.username}</Link>
              <button onClick={logout} className="logout-btn">
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}

          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
