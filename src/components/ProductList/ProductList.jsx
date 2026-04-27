import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return <div className="no-results">No products found for this category.</div>;
  }

  return (
    <div className="product-grid-container">
      <div className="product-list-header">
        <h2>Recommended Products</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
