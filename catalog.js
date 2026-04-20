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
        description: 'Frescura y renovación en cada detalle, ideal para nuevas beginnings.'
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

let currentFilter = 'all';
let searchTerm = '';
let displayedProducts = 6;

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

// Render products
function renderProducts() {
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
    if (productsToShow.length < filteredProducts.length) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
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

// View product details
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
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
}

// Category filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        displayedProducts = 6; // Reset when changing filter
        renderProducts();
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    displayedProducts = 6; // Reset when searching
    renderProducts();
});

// Load more products
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    displayedProducts += 3;
    renderProducts();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderProducts();
});
