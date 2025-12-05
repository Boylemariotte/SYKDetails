import React from 'react';

const steps = [
    {
        id: '01',
        title: 'Elige tu Estilo',
        description: 'Explora nuestra colección y selecciona la base perfecta para tu obra maestra.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.077-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
            </svg>
        )
    },
    {
        id: '02',
        title: 'Personaliza',
        description: 'Añade nombres, fechas o mensajes especiales. Hacemos realidad tu visión.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
        )
    },
    {
        id: '03',
        title: 'Recibe Magia',
        description: 'Enviamos tu detalle personalizado con un empaque de lujo, listo para sorprender.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12" />
            </svg>
        )
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-white text-[var(--color-rich-black)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-sm font-semibold">El Proceso</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Cómo Creamos Tu Detalle</h2>
                    <div className="w-24 h-1 bg-[var(--color-gold)] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-[var(--color-gold)] flex items-center justify-center mb-8 shadow-lg group-hover:bg-[var(--color-gold)] group-hover:text-white transition-all duration-500">
                                <div className="text-[var(--color-gold)] group-hover:text-white transition-colors duration-500">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Step Number */}
                            <span className="text-6xl font-serif text-gray-100 absolute -top-4 -right-4 -z-10 select-none group-hover:text-gray-200 transition-colors duration-300">
                                {step.id}
                            </span>

                            <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-600 font-light max-w-xs leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
