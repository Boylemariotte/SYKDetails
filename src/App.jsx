import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import './index.css';

function App() {
    return (
        <CartProvider>
            <div className="App bg-[var(--color-rich-black)] min-h-screen text-white">
                <Header />
                <Cart />
                <Hero />
                <ProductCarousel />
                <FeaturedProducts />
                <Categories />
                <Testimonials />
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
