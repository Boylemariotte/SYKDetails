import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-4 text-[var(--color-rich-black)]'
        : 'bg-transparent py-8 text-white'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-[0.15em] font-serif">
          VIRGO <span className="text-[var(--color-gold)]">ART</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className={`text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/catalog" className={`text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Catálogo
              </Link>
            </li>
            {['Categorías', 'Testimonios', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center">
          <button
            onClick={toggleCart}
            className={`relative p-2 transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-[var(--color-gold)]' : 'text-white hover:text-[var(--color-gold)]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[var(--color-gold-metallic)] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden ml-4">
          <button className={`text-2xl ${scrolled ? 'text-black' : 'text-white'}`}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
