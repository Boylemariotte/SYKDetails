import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-rich-black)] text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold tracking-[0.15em] font-serif mb-6">
                            VIRGO <span className="text-[var(--color-gold)]">ART</span>
                        </h3>
                        <p className="text-gray-400 font-light leading-relaxed mb-6">
                            Elevando el arte de regalar. Piezas exclusivas que trascienden el tiempo y capturan la esencia de los momentos más preciados.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-gold)] uppercase tracking-widest text-sm">Explorar</h4>
                        <ul className="space-y-4">
                            {['Colección', 'Categorías', 'Testimonios', 'Sobre Nosotros'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[var(--color-gold)] transition-colors duration-300 text-sm tracking-wide">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-gold)] uppercase tracking-widest text-sm">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-light">
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--color-gold)]">✉</span>
                                info@virgoart.com
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--color-gold)]">☏</span>
                                +1 234 567 890
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-[var(--color-gold)]">⚲</span>
                                Calle Arte 123, Ciudad de México
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[var(--color-gold)] uppercase tracking-widest text-sm">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4 font-light">Suscríbete para recibir novedades exclusivas.</p>
                        <div className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-300 text-sm"
                            />
                            <button className="px-6 py-3 bg-[var(--color-gold)] text-[var(--color-rich-black)] font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        &copy; 2025 Virgo Art. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
