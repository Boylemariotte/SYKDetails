import React from 'react';

const categories = [
    { title: 'Arte Personalizado', description: 'Obras únicas creadas para contar tu historia.' },
    { title: 'Regalos Corporativos', description: 'Distinción y elegancia para tus socios.' },
    { title: 'Ediciones Limitadas', description: 'Piezas exclusivas para coleccionistas.' }
];

const Categories = () => {
    return (
        <section id="categories" className="py-20 bg-[var(--color-rich-black)] text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="group relative h-80 overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--color-gold)] transition-colors duration-500">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-100 group-hover:scale-110 transition-transform duration-700"></div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center z-10">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                    {cat.title}
                                </h3>
                                <div className="w-12 h-0.5 bg-[var(--color-gold)] mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                <p className="text-gray-400 font-light group-hover:text-white transition-colors duration-300">
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
