import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page container section-white">
      <h1>About FluxCommerce</h1>
      <p>FluxCommerce is a premium e-commerce platform dedicated to providing the best shopping experience for our customers. We offer a wide range of curated products from fashion to electronics, ensuring quality and style in every purchase.</p>
      
      <h2>Our Mission</h2>
      <p>We aim to redefine online shopping by combining modern technology with human-centric design. Our goal is to make premium products accessible to everyone, everywhere.</p>
      
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality:</strong> We only source the best products.</li>
        <li><strong>Innovation:</strong> We continuously improve our platform.</li>
        <li><strong>Customer First:</strong> Your satisfaction is our priority.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
