import React from 'react';

const testimonials = [
    {
        text: "Una pieza impresionante que capturó perfectamente la esencia de nuestra boda. Todos los invitados quedaron maravillados.",
        author: "Sofía & Alejandro",
        role: "Boda 2024"
    },
    {
        text: "El regalo corporativo más elegante que hemos dado. Nuestros clientes se sintieron verdaderamente valorados.",
        author: "Carlos Méndez",
        role: "CEO, TechCorp"
    },
    {
        text: "La atención al detalle y la calidad de los materiales son insuperables. Vale cada centavo.",
        author: "Elena R.",
        role: "Coleccionista"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-sm font-semibold">Testimonios</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-[var(--color-rich-black)]">La Voz de la Excelencia</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((t, index) => (
                        <div key={index} className="relative p-10 bg-gray-50 border-t-4 border-[var(--color-gold)] shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 text-6xl text-[var(--color-gold)] opacity-20 font-serif">"</div>

                            <p className="relative z-10 text-lg text-gray-700 italic mb-8 font-light leading-relaxed">
                                {t.text}
                            </p>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="text-xl font-bold text-[var(--color-rich-black)] font-serif">{t.author}</h4>
                                <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-semibold mt-1 block">
                                    {t.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
