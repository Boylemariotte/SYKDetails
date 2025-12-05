import React from 'react';
import cat1 from '../assets/Flor1.jpg';
import cat2 from '../assets/Flor2.jpg';
import cat3 from '../assets/Flor3.jpg';

const categories = [
    {
        title: 'Arte Personalizado',
        description: 'Obras únicas creadas para contar tu historia.',
        image: cat1
    },
    {
        title: 'Regalos Corporativos',
        description: 'Distinción y elegancia para tus socios.',
        image: cat2
    },
    {
        title: 'Ediciones Limitadas',
        description: 'Piezas exclusivas para coleccionistas.',
        image: cat3
    }
];

const Categories = () => {
    return (
        <section id="categories" className="py-24 bg-[var(--color-rich-black)] text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-sm font-semibold">Explora</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-white">Nuestras Categorías</h2>
                    <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="group relative h-96 overflow-hidden cursor-pointer border-0 shadow-xl">
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute inset-4 border border-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 z-10"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-white group-hover:text-[var(--color-gold)] transition-colors duration-300 translate-y-4 group-hover:translate-y-0 transform">
                                    {cat.title}
                                </h3>
                                <div className="w-12 h-0.5 bg-[var(--color-gold)] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <p className="text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                                    {cat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
