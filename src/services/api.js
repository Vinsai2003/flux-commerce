const API_URL = 'https://fakestoreapi.com';

const mockProducts = [
  {
    id: 101,
    title: "Premium Velvet Sofa Set",
    price: 899.99,
    description: "Luxurious 3-seater velvet sofa with high-density foam cushions.",
    category: "home & furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    rating: { rate: 4.8, count: 120 }
  },
  {
    id: 102,
    title: "Modern Coffee Table",
    price: 149.50,
    description: "Minimalist coffee table with tempered glass top.",
    category: "home & furniture",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
    rating: { rate: 4.5, count: 85 }
  },
  {
    id: 103,
    title: "Professional Beard Trimmer",
    price: 45.99,
    description: "Cordless beard trimmer with self-sharpening blades.",
    category: "grooming",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
    rating: { rate: 4.7, count: 210 }
  },
  {
    id: 104,
    title: "Eco-Friendly Yoga Mat",
    price: 29.00,
    description: "Non-slip yoga mat made from biodegradable TPE material.",
    category: "sports",
    image: "https://images.unsplash.com/photo-1592432678893-94d03952f49c?w=800&q=80",
    rating: { rate: 4.6, count: 150 }
  },
  {
    id: 105,
    title: "Classic Leather Sneakers",
    price: 79.99,
    description: "Timeless white sneakers crafted from premium Italian leather.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    rating: { rate: 4.3, count: 450 }
  },
  {
    id: 106,
    title: "All-Star Running Shoes",
    price: 120.00,
    description: "High-performance running shoes with superior cushioning.",
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    rating: { rate: 4.9, count: 890 }
  },
  {
    id: 107,
    title: "Luxe Sapphire Watch",
    price: 299.00,
    description: "Elegant timepiece with sapphire glass and stainless steel band.",
    category: "watches",
    image: "https://images.unsplash.com/photo-1524592093835-842139572c3d?w=800&q=80",
    rating: { rate: 4.7, count: 65 }
  },
  {
    id: 108,
    title: "Sporty Digital Chrono",
    price: 55.00,
    description: "Rugged waterproof watch with dual time zones and backlight.",
    category: "watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    rating: { rate: 4.5, count: 320 }
  },
  {
    id: 109,
    title: "Canvas Travel Duffel",
    price: 85.00,
    description: "Durable cotton canvas bag with leather accents for quick trips.",
    category: "bags",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    rating: { rate: 4.6, count: 180 }
  },
  {
    id: 110,
    title: "Corporate Leather Briefcase",
    price: 199.00,
    description: "Sleek professional briefcase with laptop compartment.",
    category: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    rating: { rate: 4.4, count: 95 }
  },
  {
    id: 111,
    title: "Smart RGB Floor Lamp",
    price: 129.99,
    description: "Adjustable height lamp with millions of colors via app control.",
    category: "home & furniture",
    image: "https://images.unsplash.com/photo-1507473884658-c70b24082f8a?w=800&q=80",
    rating: { rate: 4.7, count: 140 }
  }
];

export const api = {
  getProducts: async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const apiData = await response.json();
      return [...apiData, ...mockProducts];
    } catch (err) {
      return mockProducts; // Fallback to mocks if API fails
    }
  },
  
  getProductById: async (id) => {
    const numericId = parseInt(id);
    if (numericId > 100) {
      return mockProducts.find(p => p.id === numericId);
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
    
    const mocks = mockProducts.filter(p => p.category === category);
    return [...products, ...mocks];
  }
};
