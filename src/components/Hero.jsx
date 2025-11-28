import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-[var(--color-rich-black)]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-midnight)] to-transparent opacity-50 z-0"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col md:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left pt-20 md:pt-0">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fadeInUp font-serif text-white">
                        Regala Arte,<br />
                        <span className="text-[var(--color-gold)] italic">Eterniza</span> el Momento.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg animate-fadeInUp delay-100 font-light tracking-wide">
                        Piezas exclusivas diseñadas para celebrar los hitos más importantes de la vida. Bodas, aniversarios y eventos corporativos.
                    </p>
                    <div className="animate-fadeInUp delay-200">
                        <button className="px-8 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-rich-black)] transition-all duration-300 uppercase tracking-widest text-sm">
                            Explorar Colección
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center mt-10 md:mt-0">
                    <div className="relative w-[80%] aspect-square max-w-[500px]">
                        {/* Decorative Frame */}
                        <div className="absolute top-4 -right-4 w-full h-full border-2 border-[var(--color-gold-dark)] opacity-30 z-0"></div>

                        {/* Main Image Container */}
                        <div className="absolute inset-0 shadow-2xl z-10 overflow-hidden">
                            <img
                                src={heroImage}
                                alt="Luxury Art Piece"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Gold Accent */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-gold)] opacity-10 z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
