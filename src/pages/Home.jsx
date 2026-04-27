import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductList from '../components/ProductList/ProductList';
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { products, loading, error } = useProducts(selectedCategory);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search')?.toLowerCase() || '';

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
    "home & furniture",
    "grooming",
    "sports",
    "shoes",
    "watches",
    "bags"
  ];

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-page page-enter-active">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Modern Style for the Modern Era</h1>
          <p>Discover our curated collection of premium products, from fashion to cutting-edge electronics.</p>
          <button className="cta-btn">Shop Now</button>
        </div>
      </header>

      <div className="container">
        <section className="filter-section">
          <button 
            className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </section>

        <ProductList products={filteredProducts} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
