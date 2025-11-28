import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div className="hero-content" style={{ flex: 1, paddingRight: '50px', zIndex: 2 }}>
                    <h1 className="fade-in" style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '20px' }}>
                        Regala Arte,<br />
                        <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Eterniza</span> el Momento.
                    </h1>
                    <p className="fade-in" style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '500px', animationDelay: '0.2s' }}>
                        Piezas exclusivas diseñadas para celebrar los hitos más importantes de la vida. Bodas, aniversarios y eventos corporativos.
                    </p>
                    <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                        <button className="btn">Explorar Colección</button>
                    </div>
                </div>
                <div className="hero-image" style={{ flex: 1, height: '100%', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '20px 20px 0 var(--color-gold-light)',
                        zIndex: 1
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        right: '10%',
                        width: '200px',
                        height: '200px',
                        border: '2px solid var(--color-black)',
                        zIndex: 0
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
