import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-[var(--color-rich-black)]">
                <h2 className="text-3xl font-serif mb-4">Producto no encontrado</h2>
                <Link to="/catalog" className="text-[var(--color-gold)] underline">Volver al Catálogo</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen text-[var(--color-rich-black)]">
            <div className="container mx-auto px-6 md:px-12">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center text-gray-500 hover:text-[var(--color-gold)] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Volver
                </button>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square overflow-hidden shadow-2xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <span className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[var(--color-rich-black)]">
                            {product.name}
                        </h1>
                        <p className="text-3xl font-light text-gray-800 mb-8">
                            ${product.price}
                        </p>

                        <div className="w-24 h-1 bg-[var(--color-gold)] mb-8"></div>

                        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                            {product.description}
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex-1 py-4 bg-[var(--color-rich-black)] text-white hover:bg-[var(--color-gold)] transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-lg hover:shadow-xl"
                            >
                                Agregar al Carrito
                            </button>
                            <button className="px-6 py-4 border border-gray-300 text-gray-600 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--color-gold)]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                    Envío Gratis
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--color-gold)]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                    Garantía de Calidad
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
