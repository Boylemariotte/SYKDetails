import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      padding: scrolled ? '15px 0' : '30px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>
          VIRGO <span style={{ color: 'var(--color-gold)' }}>ART</span>
        </div>
        <nav>
          <ul style={{ display: 'flex', gap: '30px' }}>
            <li><a href="#featured" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Colección</a></li>
            <li><a href="#categories" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Categorías</a></li>
            <li><a href="#testimonials" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Testimonios</a></li>
            <li><a href="#contact" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contacto</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Comprar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
