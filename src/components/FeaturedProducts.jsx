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
        <section id="featured" className="section" style={{ backgroundColor: 'var(--color-beige)' }}>
            <div className="container">
                <h2 className="text-center mb-3" style={{ fontSize: '2.5rem' }}>Colección Destacada</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {products.map(product => (
                        <div key={product.id} className="product-card" style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '20px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                height: '300px',
                                overflow: 'hidden',
                                marginBottom: '20px',
                                position: 'relative'
                            }}>
                                <img src={product.image} alt={product.name} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{
                                    display: 'block',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                    marginBottom: '5px',
                                    letterSpacing: '1px'
                                }}>{product.category}</span>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{product.name}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text)', marginBottom: '15px' }}>{product.price}</p>
                                <button className="btn-outline" style={{ width: '100%' }}>Ver Detalles</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
