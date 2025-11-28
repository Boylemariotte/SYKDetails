import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="App bg-[var(--color-rich-black)] min-h-screen text-white">
            <Header />
            <Hero />
            <ProductCarousel />
            <FeaturedProducts />
            <Categories />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
