# FluxCommerce - Premium E-commerce Capstone Project

FluxCommerce is a high-performance, production-ready e-commerce platform built as a Capstone Project for Frontend Development. It features a modern, mobile-first design, complex state management, and real-time API integration.

![FluxCommerce Preview](./flux_ecommerce_preview.png)

## 📖 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Architecture & Design](#architecture--design)
- [Performance Optimization](#performance-optimization)
- [Deployment](#deployment)
- [Author](#author)

## 🌟 Project Overview
The goal of this project was to build a comprehensive e-commerce frontend that simulates a real-world marketplace. It addresses core frontend challenges including dynamic routing, global state synchronization, and professional UI/UX design.

## ✨ Key Features
- **🛒 Dynamic Shopping**: Full catalog with category filtering and persistent shopping cart.
- **🔐 Secure Auth Simulation**: User authentication with protected routes and persistent login.
- **💖 Wishlist System**: Save favorite items for later with one-click cart transfer.
- **💳 Checkout Workflow**: Multi-step checkout with form validation and order summary.
- **📱 Responsive UI**: Premium glassmorphic design optimized for all screen sizes.
- **📦 Order History**: Track past purchases and manage user addresses.

## 🛠️ Tech Stack
- **Frontend**: React 19 (Vite)
- **Routing**: React Router 7
- **State Management**: Context API (Auth, Cart, Wishlist)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: FakeStoreAPI
- **Styling**: Vanilla CSS with Modern Design Tokens

## 📁 Project Structure
The project follows a modular, industry-standard directory structure:
```text
src/
├── components/       # Reusable UI components (Navbar, Card, etc.)
├── contexts/         # Global state logic (Auth, Cart, Wishlist)
├── hooks/            # Custom hooks for business logic
├── pages/            # Full-page view components
├── services/         # API integration layer
├── styles/           # Global theme and CSS variables
└── App.jsx           # Main application entry and routing
```

## 📁 GitHub Structure
The repository is organized according to the Capstone submission standards:
```text
src/
├── components/
│   ├── Navbar/
│   ├── ProductList/
│   ├── ProductCard/
│   ├── Cart/
│   └── Checkout/
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── CartPage.jsx
│   └── CheckoutPage.jsx
├── contexts/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
├── hooks/
│   └── useProducts.js
├── services/
│   └── api.js
├── styles/
├── public/
├── package.json
└── README.md
```

## 📦 Setup Instructions
To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vinsai2003/Flux-Commerce-.git
   ```
2. **Navigate to project folder**
   ```bash
   cd Flux-Commerce-
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start development server**
   ```bash
   npm run dev
   ```
5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Architecture & Design
- **Component-Based**: Highly modularized components for reusability.
- **State Management**: Uses the React Context API to avoid prop drilling while maintaining a clean data flow.
- **Protected Routes**: Custom authentication middleware to secure the checkout and profile pages.

## ⚡ Performance Optimization
- **Code Splitting**: Lazy loading implemented for all routes to minimize initial load time.
- **Asset Management**: Optimized images and icons for faster rendering.
- **State Efficiency**: Optimized context providers to prevent unnecessary re-renders.

## 🚀 Deployment
This project is optimized for deployment on **Netlify** or **Vercel**.
- **Live Link**: [Deployment Link will be here]

## 👨‍💻 Author
**[Your Name]** - *Lead Developer*

---
*Developed as part of the Frontend Mastery Capstone.*
