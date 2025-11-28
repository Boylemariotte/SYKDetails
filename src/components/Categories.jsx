import React from 'react';

const categories = [
    { title: 'Arte Personalizado', description: 'Obras únicas creadas para contar tu historia.' },
    { title: 'Regalos Corporativos', description: 'Distinción y elegancia para tus socios.' },
    { title: 'Ediciones Limitadas', description: 'Piezas exclusivas para coleccionistas.' }
];

const Categories = () => {
    return (
        <section id="categories" className="section">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {categories.map((cat, index) => (
                        <div key={index} style={{
                            position: 'relative',
                            height: '250px',
                            backgroundColor: 'var(--color-black)',
                            color: 'var(--color-white)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                            onMouseOver={(e) => e.currentTarget.querySelector('.cat-bg').style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.querySelector('.cat-bg').style.transform = 'scale(1)'}
                        >
                            <div className="cat-bg" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #1A1A1A, #333333)',
                                zIndex: 1,
                                transition: 'transform 0.5s ease'
                            }}></div>
                            <div style={{ zIndex: 2 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--color-gold)' }}>{cat.title}</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{cat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
