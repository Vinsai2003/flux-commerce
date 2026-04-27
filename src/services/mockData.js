/**
 * FluxCommerce Mock Data Generator
 * Provides 25 items for every category to enrich the shopping experience.
 */

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

const unsplashImages = {
  "electronics": [
    "https://images.unsplash.com/photo-1526733170371-33129f170420?w=800&q=80",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80"
  ],
  "jewelery": [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80",
    "https://images.unsplash.com/photo-1598560912005-597659b75a8b?w=800&q=80",
    "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80"
  ],
  "men's clothing": [
    "https://images.unsplash.com/photo-1516257984877-283d997b6a74?w=800&q=80",
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80",
    "https://images.unsplash.com/photo-1488161628813-244a2dcba2aa?w=800&q=80",
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80",
    "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=800&q=80"
  ],
  "women's clothing": [
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c33?w=800&q=80",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"
  ],
  "home & furniture": [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    "https://images.unsplash.com/photo-155622857a-4192ef26b2bb?w=800&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80"
  ],
  "grooming": [
    "https://images.unsplash.com/photo-1599351431247-f579338421f0?w=800&q=80",
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&q=80",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
    "https://images.unsplash.com/photo-151261153a553-5964b601d4d7?w=800&q=80"
  ],
  "sports": [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    "https://images.unsplash.com/photo-1584733560230-512866503417?w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    "https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=800&q=80"
  ],
  "shoes": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80"
  ],
  "watches": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    "https://images.unsplash.com/photo-1524592093835-842139572c3d?w=800&q=80",
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
    "https://images.unsplash.com/photo-1508685096489-7a689bd20892?w=800&q=80",
    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80"
  ],
  "bags": [
    "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    "https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80",
    "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80"
  ]
};

const productPrefixes = {
  "electronics": ["Smart", "Ultra", "Wireless", "NextGen", "Pro", "Crystal", "Titanium"],
  "jewelery": ["Gold", "Silver", "Diamond", "Sparkling", "Ethereal", "Royal", "Vintage"],
  "men's clothing": ["Casual", "Slim Fit", "Classic", "Premium", "Urban", "Vintage", "Modern"],
  "women's clothing": ["Elegant", "Boho", "Chic", "Summer", "Floral", "Designer", "Silk"],
  "home & furniture": ["Minimalist", "Cozy", "Modern", "Scandi", "Luxury", "Handcrafted", "Solid Wood"],
  "grooming": ["Organic", "Professional", "Natural", "Ultimate", "Silky", "Smooth", "Advanced"],
  "sports": ["Performance", "Pro-Athletic", "Breathable", "Dynamic", "Endurance", "Elite", "Active"],
  "shoes": ["Speed", "Cloud", "Air", "Street", "Heritage", "Bold", "Cushioned"],
  "watches": ["Chronograph", "Quartz", "Automatic", "Precision", "Luxe", "Sport", "Classic"],
  "bags": ["Urban", "Travel", "Daily", "Executive", "Explorer", "Commuter", "Handmade"]
};

const productTypes = {
  "electronics": ["Headphones", "Tablet", "Camera", "Smartphone", "Speaker", "Monitor", "Laptop"],
  "jewelery": ["Necklace", "Bracelet", "Ring", "Earrings", "Pendant", "Anklet", "Bangle"],
  "men's clothing": ["Shirt", "T-shirt", "Jacket", "Trousers", "Sweater", "Suit", "Coat"],
  "women's clothing": ["Dress", "Blouse", "Skirt", "Gown", "Top", "Cardigan", "Jumpsuit"],
  "home & furniture": ["Sofa", "Chair", "Table", "Bed", "Shelf", "Lamp", "Cabinet"],
  "grooming": ["Kit", "Oil", "Shampoo", "Serum", "Razor", "Brush", "Lotion"],
  "sports": ["Kit", "Ball", "Bat", "Gloves", "Jersey", "Shorts", "Equipment"],
  "shoes": ["Sneakers", "Boots", "Loafers", "Sandals", "Running Shoes", "Formal Shoes", "Heels"],
  "watches": ["Watch", "Smartwatch", "Timepiece", "Tracker", "Clock"],
  "bags": ["Backpack", "Handbag", "Tote", "Messenger Bag", "Suitcase", "Wallet", "Clutch"]
};

const descriptions = [
  "Crafted with the finest materials for unparalleled comfort and style.",
  "Engineered for performance and built to last in any condition.",
  "A perfect blend of modern technology and timeless design.",
  "Experience the peak of luxury with this meticulously designed piece.",
  "Designed for those who demand excellence in every detail.",
  "Sustainable, durable, and stylish - the perfect addition to your lifestyle.",
  "Lightweight yet robust, offering maximum efficiency and ease of use.",
  "Bring a touch of elegance to your daily routine with this masterpiece."
];

export const generateMockProducts = () => {
  const products = [];
  let currentId = 200; // Start higher to avoid collision with FakeStoreAPI ids

  categories.forEach(category => {
    for (let i = 1; i <= 25; i++) {
      const prefix = productPrefixes[category][Math.floor(Math.random() * productPrefixes[category].length)];
      const type = productTypes[category][Math.floor(Math.random() * productTypes[category].length)];
      const imageIndex = Math.floor(Math.random() * unsplashImages[category].length);
      const descIndex = Math.floor(Math.random() * descriptions.length);
      
      products.push({
        id: currentId++,
        title: `${prefix} ${type} ${i}`,
        price: parseFloat((Math.random() * 500 + 20).toFixed(2)),
        description: descriptions[descIndex] + " This is a high-quality product from our latest collection.",
        category: category,
        image: unsplashImages[category][imageIndex] + `&sig=${currentId}`,
        rating: {
          rate: parseFloat((Math.random() * 2 + 3).toFixed(1)),
          count: Math.floor(Math.random() * 1000 + 50)
        }
      });
    }
  });

  return products;
};
