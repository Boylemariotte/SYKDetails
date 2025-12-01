import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import banner2 from '../assets/banner2.png';
import banner1 from '../assets/banner1.png';
import banner3 from '../assets/banner3.png';

const products = [
  {
    id: 1,
    image: banner2,
    title: "Timeless Elegance",
    description: "Discover our exclusive collection of luxury timepieces.",
    price: "$5,000" // Added price for cart
  },
  {
    id: 2,
    image: banner1,
    title: "Essence of Luxury",
    description: "Fragrances that define sophistication and style.",
    price: "$350" // Added price for cart
  },
  {
    id: 3,
    image: banner3,
    title: "Premium Craftsmanship",
    description: "Handcrafted leather accessories for the modern icon.",
    price: "$1,200" // Added price for cart
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-[var(--color-rich-black)]">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover opacity-50"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-rich-black)] via-transparent to-transparent opacity-90"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest text-[var(--color-gold)] animate-fadeInUp font-serif">
              {product.title}
            </h2>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto font-light text-gray-300 animate-fadeInUp delay-100 tracking-wide">
              {product.description}
            </p>
            <button
              onClick={() => addToCart({
                id: `carousel-${product.id}`, // Unique ID for carousel items
                name: product.title,
                price: product.price,
                image: product.image
              })}
              className="mt-10 px-10 py-4 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-rich-black)] transition-all duration-300 uppercase tracking-[0.2em] text-sm animate-fadeInUp delay-200"
            >
              Agregar al Carrito - {product.price}
            </button>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 border border-[var(--color-gold)] ${index === currentIndex ? 'bg-[var(--color-gold)] scale-125' : 'bg-transparent hover:bg-[var(--color-gold-light)]'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
