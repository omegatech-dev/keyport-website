import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal component to add scroll-triggered entrance animations.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.animation - CSS class for the animation (e.g., 'animate-fade-up')
 * @param {string} props.delay - CSS class for the delay (e.g., 'delay-100')
 * @param {string} props.className - Additional classes for the container
 */
const Reveal = ({ children, animation = 'animate-fade-up', delay = '', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it hits the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? `active ${animation} ${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
