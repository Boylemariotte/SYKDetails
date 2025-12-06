import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import Process from '../components/Process';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
    useScrollReveal();

    return (
        <>
            <Hero />
            <div className="reveal">
                <ProductCarousel />
            </div>
            <div className="reveal">
                <FeaturedProducts />
            </div>
            <div className="reveal">
                <Process />
            </div>
            <div className="reveal">
                <Categories />
            </div>
            <div className="reveal">
                <Testimonials />
            </div>
        </>
    );
};

export default Home;
