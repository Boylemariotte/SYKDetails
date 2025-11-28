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
        <section id="testimonials" className="section" style={{ backgroundColor: 'var(--color-beige)' }}>
            <div className="container">
                <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Lo Que Dicen Nuestros Clientes</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {testimonials.map((t, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '40px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            borderTop: '3px solid var(--color-gold)'
                        }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1rem' }}>"{t.text}"</p>
                            <h4 style={{ fontSize: '1rem', marginBottom: '5px' }}>{t.author}</h4>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
