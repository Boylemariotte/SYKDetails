import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Preloader from './components/Preloader';
import './index.css';

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <CartProvider>
            {loading && <Preloader onFinish={() => setLoading(false)} />}
            <Router>
                <div className={`App bg-[var(--color-rich-black)] min-h-screen text-white transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    <Header />
                    <Cart />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
