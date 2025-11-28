import React from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const products = [
    {
        id: 1,
        name: 'Eternidad Dorada',
        price: '$1,200',
        image: product1,
        category: 'Bodas'
    },
    {
        id: 2,
        name: 'Éxito Esculpido',
        price: '$2,500',
        image: product2,
        category: 'Corporativo'
    },
    {
        id: 3,
        name: 'Legado Escrito',
        price: '$850',
        image: product3,
        category: 'Aniversario'
    }
];

const FeaturedProducts = () => {
    return (
        <section id="featured" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-sm font-semibold">Nuestra Selección</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-[var(--color-rich-black)]">Colección Destacada</h2>
                    <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map(product => (
                        <div key={product.id} className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Image Container */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                                {/* Quick Action */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <button className="w-full py-3 bg-white text-[var(--color-rich-black)] hover:bg-[var(--color-gold)] hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-bold">
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 text-center">
                                <span className="block text-xs uppercase tracking-widest text-[var(--color-gold)] mb-2 font-semibold">
                                    {product.category}
                                </span>
                                <h3 className="text-2xl font-serif font-bold mb-3 text-[var(--color-rich-black)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-lg text-gray-600 font-light mb-0">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="px-10 py-4 border border-[var(--color-rich-black)] text-[var(--color-rich-black)] hover:bg-[var(--color-rich-black)] hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-sm">
                        Ver Toda la Colección
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
