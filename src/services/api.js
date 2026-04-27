import { generateMockProducts } from './mockData';

const API_URL = 'https://fakestoreapi.com';

const allMockProducts = generateMockProducts();

export const api = {
  getProducts: async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const apiData = await response.json();
      return [...apiData, ...allMockProducts];
    } catch (err) {
      return allMockProducts;
    }
  },
  
  getProductById: async (id) => {
    const numericId = parseInt(id);
    if (numericId >= 200) {
      return allMockProducts.find(p => p.id === numericId);
    }
    const response = await fetch(`${API_URL}/products/${id}`);
    return response.json();
  },
  
  getProductsByCategory: async (category) => {
    const apiCategories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
    let products = [];
    
    if (apiCategories.includes(category)) {
      try {
        const response = await fetch(`${API_URL}/products/category/${category}`);
        products = await response.json();
      } catch (err) {
        console.error("API error", err);
      }
    }
    
    const mocks = allMockProducts.filter(p => p.category === category);
    return [...products, ...mocks];
  }
};
