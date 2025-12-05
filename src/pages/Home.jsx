import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import Process from '../components/Process';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductCarousel />
            <FeaturedProducts />
            <Process />
            <Categories />
            <Testimonials />
        </>
    );
};

export default Home;
