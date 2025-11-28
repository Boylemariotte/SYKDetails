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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
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
            {['Colección', 'Categorías', 'Testimonios', 'Contacto'].map((item) => (
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
        <div className="hidden md:block">
          <button
            className={`px-6 py-2 border transition-all duration-300 uppercase tracking-widest text-xs font-semibold ${scrolled
                ? 'border-[var(--color-rich-black)] text-[var(--color-rich-black)] hover:bg-[var(--color-rich-black)] hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-[var(--color-rich-black)]'
              }`}
          >
            Comprar
          </button>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button className={`text-2xl ${scrolled ? 'text-black' : 'text-white'}`}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
