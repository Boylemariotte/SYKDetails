import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>VIRGO ART</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                            Arte exclusivo para momentos inolvidables.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '1rem' }}>Enlaces</h4>
                        <ul style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '10px' }}><a href="#featured">Colección</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#categories">Categorías</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#testimonials">Testimonios</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '1rem' }}>Contacto</h4>
                        <ul style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '10px' }}>info@virgoart.com</li>
                            <li style={{ marginBottom: '10px' }}>+1 234 567 890</li>
                            <li style={{ marginBottom: '10px' }}>Calle Arte 123, Ciudad</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '1rem' }}>Legal</h4>
                        <ul style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                            <li style={{ marginBottom: '10px' }}><a href="#">Política de Envíos</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#">Términos y Condiciones</a></li>
                            <li style={{ marginBottom: '10px' }}><a href="#">Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', opacity: 0.5 }}>
                    &copy; 2025 Virgo Art. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
