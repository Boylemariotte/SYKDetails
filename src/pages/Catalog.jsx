import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const { addToCart } = useCart();

    const categories = ['Todas', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen text-[var(--color-rich-black)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Catálogo Exclusivo</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explora nuestra colección completa de detalles personalizados.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    {/* Search */}
                    <div className="w-full md:w-1/3 relative">
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-4 pr-10 py-3 border border-gray-300 focus:border-[var(--color-gold)] outline-none transition-colors"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${selectedCategory === cat
                                    ? 'bg-[var(--color-gold)] text-white border-[var(--color-gold)]'
                                    : 'bg-transparent text-gray-600 border-gray-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                                <Link to={`/product/${product.id}`} className="relative h-64 overflow-hidden block">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white border border-white px-4 py-2 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">Ver</span>
                                    </div>
                                </Link>

                                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-1 font-semibold">
                                            {product.category}
                                        </span>
                                        <Link to={`/product/${product.id}`}>
                                            <h3 className="text-lg font-serif font-bold mb-1 text-[var(--color-rich-black)] hover:text-[var(--color-gold)] transition-colors">
                                                {product.name}
                                            </h3>
                                        </Link>
                                        <p className="text-base text-gray-600 font-light mb-3">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full py-2 border border-[var(--color-rich-black)] text-[var(--color-rich-black)] hover:bg-[var(--color-rich-black)] hover:text-white transition-all duration-300 uppercase tracking-widest text-[10px] font-bold"
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }}
                            className="mt-4 text-[var(--color-gold)] underline hover:text-[var(--color-gold-dark)]"
                        >
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
