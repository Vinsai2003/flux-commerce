import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogIn, LogOut, Search, User, Menu, Heart, Package, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm.trim()}`);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-left">
          <button className="mobile-menu-btn show-mobile" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            FluxCommerce
            <span className="logo-accent">Explore <span style={{color: '#ffe500'}}>Plus</span></span>
          </Link>
        </div>

        <form className="search-bar hide-mobile" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search for products, brands and more" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"><Search size={18} /></button>
        </form>

        <div className="nav-actions">
          {user ? (
            <div className="user-menu hide-mobile">
              <Link to="/profile" className="user-name">{user.firstName || user.username}</Link>
              <button onClick={logout} className="logout-btn">
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn hide-mobile">
              Login
            </Link>
          )}

          <Link to="/wishlist" className="cart-btn hide-mobile">
            <Heart size={20} />
            <span>Wishlist</span>
          </Link>

          <Link to="/cart" className="cart-btn" onClick={() => setIsMenuOpen(false)}>
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <span className="hide-mobile">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search - Visible only on mobile */}
      <div className="mobile-search container show-mobile">
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"><Search size={18} /></button>
        </form>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="user-info">
            <User size={20} />
            <span>{user ? `Hello, ${user.firstName || user.username}` : 'Welcome'}</span>
          </div>
          <button className="close-menu" onClick={toggleMenu}><X size={24} /></button>
        </div>
        <div className="sidebar-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          {user ? (
            <>
              <Link to="/profile" onClick={toggleMenu}>My Profile</Link>
              <Link to="/orders" onClick={toggleMenu}>My Orders</Link>
              <Link to="/wishlist" onClick={toggleMenu}>My Wishlist</Link>
              <Link to="/addresses" onClick={toggleMenu}>My Addresses</Link>
              <button onClick={() => { logout(); toggleMenu(); }} className="sidebar-logout">Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={toggleMenu}>Login / Signup</Link>
          )}
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
        </div>
      </div>
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
