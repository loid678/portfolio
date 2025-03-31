// ReturnTopButton.jsx
import React, { useState, useEffect } from 'react';
import "../styles.css";

const ReturnTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down a certain amount
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`return-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <span>&#8593;</span> {/* Up arrow character */}
    </div>
  );
};

export default ReturnTopButton;