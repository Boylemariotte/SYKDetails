// Product data
const products = [
    {
        id: 1,
        name: 'Eternidad Dorada',
        category: 'bodas',
        image: 'assets/Flor1.jpg',
        description: 'Una pieza elegante con detalles dorados que simbolizan la unión eterna.'
    },
    {
        id: 2,
        name: 'Éxito Esculpido',
        category: 'corporativo',
        image: 'assets/Flor2.jpg',
        description: 'Diseño sofisticado perfecto para reconocimientos profesionales y logros.'
    },
    {
        id: 3,
        name: 'Legado Escrito',
        category: 'aniversario',
        image: 'assets/Flor3.jpg',
        description: 'Obra maestra que captura la esencia de los recuerdos compartidos.'
    },
    {
        id: 4,
        name: 'Primavera Eterna',
        category: 'bodas',
        image: 'assets/banner1.png',
        description: 'Frescura y renovación en cada detalle, ideal para nuevos comienzos.'
    },
    {
        id: 5,
        name: 'Éxito Corporativo',
        category: 'corporativo',
        image: 'assets/banner2.png',
        description: 'Elegancia profesional que distingue y eleva cualquier logro.'
    },
    {
        id: 6,
        name: 'Amor Infinito',
        category: 'aniversario',
        image: 'assets/banner3.png',
        description: 'Símbolo perfecto del amor que crece con cada año compartido.'
    },
    {
        id: 7,
        name: 'Sueño Dorado',
        category: 'cumpleaños',
        image: 'assets/Flor1.jpg',
        description: 'Celebración mágica que hace realidad los sueños más preciados.'
    },
    {
        id: 8,
        name: 'Triunfo Elevado',
        category: 'corporativo',
        image: 'assets/Flor2.jpg',
        description: 'Reconocimiento excepcional para momentos de triunfo profesional.'
    },
    {
        id: 9,
        name: 'Pasión Ardiente',
        category: 'bodas',
        image: 'assets/Flor3.jpg',
        description: 'Explosión de emociones que captura la pasión del amor verdadero.'
    }
];

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = totalItems > 0 ? 'inline-flex' : 'none';
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

// Render cart
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
                <a href="catalog.html" class="continue-shopping-btn">Explorar Catálogo</a>
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
                <a href="catalog.html" class="continue-shopping-link">Seguir Comprando</a>
            </div>
        </div>
    `;
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

// Load recommended products
function loadRecommendedProducts() {
    // Get products not in cart
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
    
    // Reload cart to show updated items
    renderCart();
}

// View product details
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
    loadRecommendedProducts();
});
