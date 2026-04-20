// Product data
const products = [
    {
        id: 1,
        name: 'Eternidad Dorada',
        category: 'bodas',
        image: 'assets/Flor1.jpg',
        description: 'Una pieza elegante con detalles dorados que simbolizan la unión eterna.',
        fullDescription: 'Eternidad Dorada es una obra maestra artesanal que combina la elegancia clásica con un toque contemporáneo. Cada detalle ha sido cuidadosamente seleccionado para representar la unión eterna de dos almas. Los dorados brillantes simbolizan la prosperidad y el lujo, mientras que las formas fluidas representan el amor que fluye ininterrumpidamente.'
    },
    {
        id: 2,
        name: 'Éxito Esculpido',
        category: 'corporativo',
        image: 'assets/Flor2.jpg',
        description: 'Diseño sofisticado perfecto para reconocimientos profesionales y logros.',
        fullDescription: 'Éxito Esculpido es una pieza monumental que captura la esencia del triunfo profesional. Sus líneas audaces y su presencia imponente la convierten en el regalo perfecto para reconocer años de dedicación y logros excepcionales. Cada ángulo ha sido diseñado para reflejar la determinación y la visión que caracterizan a los líderes exitosos.'
    },
    {
        id: 3,
        name: 'Legado Escrito',
        category: 'aniversario',
        image: 'assets/Flor3.jpg',
        description: 'Obra maestra que captura la esencia de los recuerdos compartidos.',
        fullDescription: 'Legado Escrito es más que una simple pieza decorativa; es un testimonio viviente del amor que perdura a través del tiempo. Cada elemento ha sido diseñado para contar una historia de compromiso, sacrificio y devoción. Perfecta para celebrar aniversarios importantes y honrar la jornada compartida.'
    },
    {
        id: 4,
        name: 'Primavera Eterna',
        category: 'bodas',
        image: 'assets/banner1.png',
        description: 'Frescura y renovación en cada detalle, ideal para nuevos comienzos.',
        fullDescription: 'Primavera Eterna captura la esencia del renacimiento y la esperanza que caracterizan a una nueva unión. Sus colores vibrantes y formas orgánicas representan el florecimiento del amor y las infinitas posibilidades que aguardan a la nueva pareja.'
    },
    {
        id: 5,
        name: 'Éxito Corporativo',
        category: 'corporativo',
        image: 'assets/banner2.png',
        description: 'Elegancia profesional que distingue y eleva cualquier logro.',
        fullDescription: 'Éxito Corporativo es la elección definitiva para reconocer la excelencia empresarial. Su diseño imponente y materiales premium la convierten en un símbolo de estatus y reconocimiento en el mundo corporativo.'
    },
    {
        id: 6,
        name: 'Amor Infinito',
        category: 'aniversario',
        image: 'assets/banner3.png',
        description: 'Símbolo perfecto del amor que crece con cada año compartido.',
        fullDescription: 'Amor Infinito representa la naturaleza expansiva del amor verdadero. Sus formas interconectadas y su diseño sin fin simbolizan cómo el amor crece y se fortalece con cada año compartido, creando un legado eterno.'
    },
    {
        id: 7,
        name: 'Sueño Dorado',
        category: 'cumpleaños',
        image: 'assets/Flor1.jpg',
        description: 'Celebración mágica que hace realidad los sueños más preciados.',
        fullDescription: 'Sueño Dorado es una celebración de aspiraciones y logros personales. Cada elemento ha sido diseñado para inspirar y motivar, recordándonos que cada sueño es válido y alcanzable con dedicación y pasión.'
    },
    {
        id: 8,
        name: 'Triunfo Elevado',
        category: 'corporativo',
        image: 'assets/Flor2.jpg',
        description: 'Reconocimiento excepcional para momentos de triunfo profesional.',
        fullDescription: 'Triunfo Elevado es una pieza monumental que captura la cima del éxito profesional. Su diseño ascendente y materiales de primera calidad la convierten en el reconocimiento definitivo para logros extraordinarios.'
    },
    {
        id: 9,
        name: 'Pasión Ardiente',
        category: 'bodas',
        image: 'assets/Flor3.jpg',
        description: 'Explosión de emociones que captura la pasión del amor verdadero.',
        fullDescription: 'Pasión Ardiente es una explosión de emociones y sentimientos intensos. Sus colores vibrantes y formas dinámicas representan la pasión incontrolable que define el amor verdadero y el compromiso eterno.'
    }
];

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Current section state
let currentSection = 'home';
let currentFilter = 'all';
let searchTerm = '';
let displayedProducts = 6;
let currentProductId = null;

// SPA Section Management
function showSection(section) {
    // Hide all sections
    document.getElementById('catalogSection').style.display = 'none';
    document.getElementById('productDetailSection').style.display = 'none';
    document.getElementById('cartSection').style.display = 'none';
    
    // Hide hero section for non-home sections
    const heroSection = document.querySelector('.hero');
    const processSection = document.querySelector('.process');
    const featuredSection = document.querySelector('.featured');
    
    if (section === 'home') {
        document.getElementById('catalogSection').style.display = 'none';
        document.getElementById('productDetailSection').style.display = 'none';
        document.getElementById('cartSection').style.display = 'none';
        heroSection.style.display = 'block';
        processSection.style.display = 'block';
        featuredSection.style.display = 'block';
    } else if (section === 'catalog') {
        document.getElementById('catalogSection').style.display = 'block';
        document.getElementById('productDetailSection').style.display = 'none';
        document.getElementById('cartSection').style.display = 'none';
        heroSection.style.display = 'none';
        processSection.style.display = 'none';
        featuredSection.style.display = 'none';
        renderCatalog();
    } else if (section === 'product') {
        document.getElementById('catalogSection').style.display = 'none';
        document.getElementById('productDetailSection').style.display = 'block';
        document.getElementById('cartSection').style.display = 'none';
        heroSection.style.display = 'none';
        processSection.style.display = 'none';
        featuredSection.style.display = 'none';
        if (currentProductId) {
            loadProductDetail(currentProductId);
        }
    } else if (section === 'cart') {
        document.getElementById('catalogSection').style.display = 'none';
        document.getElementById('productDetailSection').style.display = 'none';
        document.getElementById('cartSection').style.display = 'block';
        heroSection.style.display = 'none';
        processSection.style.display = 'none';
        featuredSection.style.display = 'none';
        renderCart();
    }
    
    currentSection = section;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
let mobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    mobileMenu.style.display = mobileMenuOpen ? 'flex' : 'none';
    
    if (mobileMenuOpen) {
        mobileMenuBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `;
    } else {
        mobileMenuBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        `;
    }
});

// Close mobile menu when clicking links
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOpen = false;
        mobileMenu.style.display = 'none';
        mobileMenuBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        `;
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Update cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    }
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'bodas': 'Bodas',
        'corporativo': 'Corporativo',
        'aniversario': 'Aniversario',
        'cumpleaños': 'Cumpleaños'
    };
    return names[category] || category;
}

// Catalog Functions
function renderCatalog() {
    const productsGrid = document.getElementById('productsGrid');
    
    let filteredProducts = products;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Limit displayed products
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="product-btn view-btn" onclick="viewProduct(${product.id})">Ver Detalles</button>
                    <button class="product-btn add-btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `).join('');
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (productsToShow.length < filteredProducts.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// View product details
function viewProduct(productId) {
    currentProductId = productId;
    showSection('product');
}

// Load product details
function loadProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        document.getElementById('productDetailContent').innerHTML = `
            <div class="product-not-found">
                <h2>Producto no encontrado</h2>
                <p>El producto que buscas no existe o ha sido eliminado.</p>
                <button class="back-to-catalog" onclick="showSection('catalog')">Ver Catálogo</button>
            </div>
        `;
        return;
    }
    
    document.getElementById('productDetailContent').innerHTML = `
        <div class="product-detail-grid">
            <div class="product-image-section">
                <div class="main-product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="image-decoration"></div>
                </div>
            </div>
            
            <div class="product-info-section">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h1>${product.name}</h1>
                
                <div class="product-description">
                    <h3>Descripción</h3>
                    <p>${product.fullDescription || product.description}</p>
                </div>
                
                <div class="product-features">
                    <h3>Características</h3>
                    <ul>
                        <li>Artesanía premium de alta calidad</li>
                        <li>Diseño exclusivo y único</li>
                        <li>Materiales seleccionados con cuidado</li>
                        <li>Empaque de lujo incluido</li>
                        <li>Certificado de autenticidad</li>
                    </ul>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Añadir al Carrito
                    </button>
                    <button class="wishlist-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
                
                <div class="product-info-badges">
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        Envío Gratis
                    </div>
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        Garantía de Calidad
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProducts = products.filter(p => 
        p.category === category && p.id !== currentProductId
    ).slice(0, 3);
    
    const relatedGrid = document.getElementById('relatedProductsGrid');
    
    relatedGrid.innerHTML = relatedProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="product-btn view-btn" onclick="viewProduct(${product.id})">Ver Detalles</button>
                    <button class="product-btn add-btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `).join('');
}

// Cart Functions
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536 0v14.75a5.25 5.25 0 0 1-5.25 5.25m13.5-7.5H7.5m-9-3h10.538a.75.75 0 0 1 .68.425l1.062 2.5a.75.75 0 0 1-.68 1.075H8.25m0 0a5.25 5.25 0 0 1-5.25 5.25m13.5-7.5a5.25 5.25 0 0 0-5.25 5.25m5.25-5.25h5.25" />
                    </svg>
                </div>
                <h2>Tu carrito está vacío</h2>
                <p>Parece que aún no has añadido ningún producto a tu carrito.</p>
                <button class="continue-shopping-btn" onclick="showSection('catalog')">Explorar Catálogo</button>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }
    
    // Render cart items
    cartContent.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <span class="cart-item-category">${getCategoryName(item.category)}</span>
                        <p>${item.description}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-remove">
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m4.788 0A3.742 3.742 0 0 1 18 12.846c0 1.04-.313 2.014-.84 2.82m-4.788 0A3.742 3.742 0 0 1 6 12.846c0-1.04.313-2.014.84-2.82m12.84 0A3.742 3.742 0 0 1 21 12.846c0-1.04-.313-2.014-.84-2.82m-4.788 0l-.346-9m-4.788 0l-.346 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Calculate totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Render cart summary
    cartSummary.innerHTML = `
        <div class="summary-content">
            <h3>Resumen del Pedido</h3>
            <div class="summary-row">
                <span>Subtotal (${totalItems} productos)</span>
                <span>Contactar para precio</span>
            </div>
            <div class="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>Contactar para precio</span>
            </div>
            <div class="summary-actions">
                <button class="checkout-btn" onclick="proceedToCheckout()">Proceder al Checkout</button>
                <button class="continue-shopping-link" onclick="showSection('catalog')">Seguir Comprando</button>
            </div>
        </div>
    `;
    
    // Load recommended products
    loadRecommendedProducts();
}

// Load recommended products
function loadRecommendedProducts() {
    const cartProductIds = cart.map(item => item.id);
    const recommendedProducts = products.filter(p => !cartProductIds.includes(p.id)).slice(0, 3);
    
    const recommendedGrid = document.getElementById('recommendedGrid');
    
    recommendedGrid.innerHTML = recommendedProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="product-btn view-btn" onclick="viewProduct(${product.id})">Ver Detalles</button>
                    <button class="product-btn add-btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `).join('');
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Proceed to checkout
function proceedToCheckout() {
    alert('Función de checkout coming soon! Por favor contacta directamente para completar tu pedido.');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '¡Añadido!';
    btn.style.background = 'var(--color-gold)';
    btn.style.color = 'white';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
    }, 1500);
    
    // Reload cart if we're on cart page
    if (currentSection === 'cart') {
        renderCart();
    }
}

// Category filter buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        displayedProducts = 6;
        renderCatalog();
    }
});

// Search functionality
document.addEventListener('input', (e) => {
    if (e.target.id === 'searchInput') {
        searchTerm = e.target.value;
        displayedProducts = 6;
        renderCatalog();
    }
});

// Load more products
document.addEventListener('click', (e) => {
    if (e.target.id === 'loadMoreBtn') {
        displayedProducts += 3;
        renderCatalog();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target && currentSection === 'home') {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Hero button
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-btn')) {
        showSection('catalog');
    }
});

// View All button
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-all-btn')) {
        showSection('catalog');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
