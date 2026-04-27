# Project Documentation: FluxCommerce

## 1. Project Overview
FluxCommerce is the Capstone Project for the Frontend Development course. The goal was to build a comprehensive, production-ready e-commerce application that demonstrates mastery of modern React patterns, state management, and API integration.

## 2. Architecture Decisions
- **Vite & React**: Chosen for fast development cycles and optimized build output.
- **Component-Based Architecture**: Highly modular structure to ensure maintainability and reusability.
- **Context API**: Leveraged for global state (Auth and Cart) to avoid prop drilling while keeping the codebase clean.
- **Service Layer**: All API calls are abstracted into a central `api.js` service for easier testing and maintenance.

## 3. State Management Approach
- **AuthContext**: Manages user login state, persisting user data to Local Storage for session persistence.
- **CartContext**: Handles all shopping cart operations (add, remove, update) and calculates totals dynamically. Uses Local Storage to ensure the cart survives page refreshes.

## 4. API Integration Details
The application integrates with the **FakeStoreAPI**.
- Fetches all products and categories on the home page.
- Fetches specific product details dynamically based on URL parameters.
- Uses the auth endpoint for simulated login (though redirected for this demo to a localStorage simulation).

## 5. Performance Optimizations
- **Lazy Loading**: All major pages are loaded lazily using `React.lazy` and `Suspense` to reduce the initial bundle size.
- **Image Optimization**: Images are loaded with the `loading="lazy"` attribute.
- **Code Splitting**: Routes are split into individual chunks.

## 6. Deployment Steps
1. Push code to GitHub.
2. Connect repository to Netlify/Vercel.
3. Configure build command: `npm run build`.
4. Set publish directory: `dist`.
5. Deploy.

## 7. Challenges Faced
- **Persistent State**: Syncing the cart state across multiple tabs and page refreshes was handled using `useEffect` and `localStorage`.
- **Responsive Layouts**: Creating a complex cart grid that works on small screens required custom CSS grid layouts with media queries.
- **Loading States**: Implementing a consistent loading experience during API fetches using the `Suspense` fallback.

## 8. Visual Documentation
[Screenshots of Home, Product Detail, Cart, and Checkout would be placed here]
