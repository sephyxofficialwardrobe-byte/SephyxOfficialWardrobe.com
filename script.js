// SEPHYX E-commerce Application
class SephyxStore {
    constructor() {
        this.products = window.SEPHYX_PRODUCTS || [];
        this.cart = this.loadFromStorage('sephyx_cart') || [];
        this.wishlist = this.loadFromStorage('sephyx_wishlist') || [];
        this.currentSlide = 0;
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderProducts();
        this.renderNewDrops();
        this.updateCounts();
        this.setupCarousel();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(link.dataset.tab);
            });
        });

        // Back button for product preview
        const backBtn = document.getElementById('back-to-collection');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.switchTab('collection');
            });
        }

        // Modal controls
        document.getElementById('cart-btn').addEventListener('click', () => this.openModal('cart-modal'));
        document.getElementById('wishlist-btn').addEventListener('click', () => this.openModal('wishlist-modal'));
        
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', () => this.closeModal(btn.closest('.modal')));
        });

        // Checkout
        document.getElementById('checkout-btn').addEventListener('click', () => this.processOrder());
        const copyOrderBtn = document.getElementById('copy-order');
        if (copyOrderBtn) {
            copyOrderBtn.addEventListener('click', () => this.copyOrderDetails());
        }

        // Carousel dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });
    }

    switchTab(tabName) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    setupCarousel() {
        const track = document.getElementById('carousel-track');
        if (!track) return;
        
        // Auto-rotate carousel
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    nextSlide() {
        const track = document.getElementById('carousel-track');
        if (!track) return;
        const slides = track.children;
        this.currentSlide = (this.currentSlide + 1) % slides.length;
        this.updateCarousel();
    }

    previousSlide() {
        const track = document.getElementById('carousel-track');
        if (!track) return;
        const slides = track.children;
        this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
        this.updateCarousel();
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateCarousel();
    }

    updateCarousel() {
        const track = document.getElementById('carousel-track');
        const dots = document.querySelectorAll('.carousel-dot');
        
        if (track) {
            track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    renderProducts() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;
        grid.innerHTML = this.products.map(product => this.createProductCard(product)).join('');
    }

    renderNewDrops() {
        const grid = document.getElementById('new-drops-grid');
        if (!grid) return;
        const newDrops = this.products.filter(product => product.isNewDrop);
        grid.innerHTML = newDrops.map(product => this.createProductCard(product)).join('');
    }

    createProductCard(product) {
        const isInWishlist = this.wishlist.some(item => item.id === product.id);
        const wishlistClass = isInWishlist ? 'active' : '';
        const blindboxBadge = product.type === 'blindbox' ? '<div class="blindbox-badge">MYSTERY BOX</div>' : '';
        
        return `
            <div class="product-card" data-id="${product.id}">
                ${blindboxBadge}
                <img src="${product.image}" alt="${product.name}" class="product-image" onclick="store.showProductPreview(${product.id})">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">QAR ${product.price}</p>
                    <p class="product-slogan">"${product.slogan}"</p>
                    <div class="product-actions">
                        <button class="product-btn preview-btn" onclick="store.showProductPreview(${product.id})">
                            <i class="fas fa-eye"></i> PREVIEW
                        </button>
                        <button class="product-btn wishlist-btn ${wishlistClass}" onclick="store.toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="product-btn cart-btn" onclick="store.addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    showProductPreview(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            this.showNotification('Product not found!', 'error');
            return;
        }

        const previewContent = document.getElementById('preview-content');
        if (!previewContent) return;

        // Reset image index
        this.currentImageIndex = 0;

        if (product.type === 'blindbox') {
            previewContent.innerHTML = this.createBlindboxPreview(product);
        } else {
            previewContent.innerHTML = this.createRegularPreview(product);
        }

        this.switchTab('product-preview');
    }

    createRegularPreview(product) {
        const isInWishlist = this.wishlist.some(item => item.id === product.id);
        const wishlistClass = isInWishlist ? 'active' : '';
        const images = product.images || [product.image];
        
        return `
            <div class="preview-grid">
                <div class="preview-images">
                    <div class="main-image-container">
                        <img src="${images[this.currentImageIndex]}" alt="${product.name}" class="main-preview-image" id="main-preview-image">
                        ${images.length > 1 ? `
                            <div class="image-controls">
                                <button class="image-nav prev" onclick="store.previousImage(${JSON.stringify(images).replace(/"/g, '&quot;')})">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="image-nav next" onclick="store.nextImage(${JSON.stringify(images).replace(/"/g, '&quot;')})">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                    ${images.length > 1 ? `
                        <div class="thumbnail-gallery">
                            ${images.map((img, index) => `
                                <img src="${img}" alt="${product.name}" class="thumbnail ${index === this.currentImageIndex ? 'active' : ''}" 
                                     onclick="store.setImageIndex(${index}, ${JSON.stringify(images).replace(/"/g, '&quot;')})">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="preview-details">
                    <div class="preview-header">
                        <h1 class="preview-title">${product.name}</h1>
                        <p class="preview-slogan">"${product.slogan}"</p>
                        <div class="preview-price">QAR ${product.price}</div>
                    </div>
                    <div class="preview-description">
                        <h3>DESCRIPTION</h3>
                        <p>${product.description}</p>
                    </div>
                    ${product.specifications ? `
                        <div class="preview-specifications">
                            <h3>SPECIFICATIONS</h3>
                            <div class="spec-grid">
                                ${Object.entries(product.specifications).map(([key, value]) => `
                                    <div class="spec-item">
                                        <span class="spec-label">${key}:</span>
                                        <span class="spec-value">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${product.sizes ? `
                        <div class="preview-options">
                            <h3>SIZES</h3>
                            <div class="size-options">
                                ${product.sizes.map(size => `
                                    <button class="size-btn" onclick="this.classList.toggle('selected')">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${product.colors ? `
                        <div class="preview-options">
                            <h3>COLORS</h3>
                            <div class="color-options">
                                ${product.colors.map(color => `
                                    <button class="color-btn" onclick="this.classList.toggle('selected')">${color}</button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    <div class="preview-actions">
                        <button class="preview-action-btn wishlist-btn ${wishlistClass}" onclick="store.toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i> ${isInWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
                        </button>
                        <button class="preview-action-btn cart-btn" onclick="store.addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    createBlindboxPreview(product) {
        const isInWishlist = this.wishlist.some(item => item.id === product.id);
        const wishlistClass = isInWishlist ? 'active' : '';
        const images = product.images || [product.image];
        
        return `
            <div class="preview-grid blindbox-preview">
                <div class="preview-images">
                    <div class="main-image-container">
                        <img src="${images[this.currentImageIndex]}" alt="${product.name}" class="main-preview-image" id="main-preview-image">
                        <div class="blindbox-overlay">
                            <i class="fas fa-question"></i>
                            <span>MYSTERY CONTENTS</span>
                        </div>
                        ${images.length > 1 ? `
                            <div class="image-controls">
                                <button class="image-nav prev" onclick="store.previousImage(${JSON.stringify(images).replace(/"/g, '&quot;')})">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="image-nav next" onclick="store.nextImage(${JSON.stringify(images).replace(/"/g, '&quot;')})">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        ` : ''}
                    </div>
                    ${images.length > 1 ? `
                        <div class="thumbnail-gallery">
                            ${images.map((img, index) => `
                                <img src="${img}" alt="${product.name}" class="thumbnail ${index === this.currentImageIndex ? 'active' : ''}" 
                                     onclick="store.setImageIndex(${index}, ${JSON.stringify(images).replace(/"/g, '&quot;')})">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="preview-details">
                    <div class="preview-header">
                        <h1 class="preview-title">${product.name}</h1>
                        <p class="preview-slogan">"${product.slogan}"</p>
                        <div class="preview-price">QAR ${product.price}</div>
                        <div class="blindbox-info">
                            <i class="fas fa-gift"></i>
                            <span>MYSTERY BLINDBOX</span>
                        </div>
                    </div>
                    <div class="preview-description">
                        <h3>DESCRIPTION</h3>
                        <p>${product.description}</p>
                    </div>
                    ${product.specifications ? `
                        <div class="preview-specifications">
                            <h3>PACKAGE DETAILS</h3>
                            <div class="spec-grid">
                                ${Object.entries(product.specifications).map(([key, value]) => `
                                    <div class="spec-item">
                                        <span class="spec-label">${key}:</span>
                                        <span class="spec-value">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${product.blindboxData ? `
                        <div class="blindbox-outcomes">
                            <h3>POSSIBLE OUTCOMES & CHANCES</h3>
                            <div class="outcomes-info">
                                <p><i class="fas fa-info-circle"></i> ${product.blindboxData.totalItems}</p>
                            </div>
                            <div class="outcomes-grid">
                                ${product.blindboxData.possibleOutcomes.map(outcome => `
                                    <div class="outcome-item rarity-${outcome.rarity.toLowerCase()}">
                                        <img src="${outcome.image}" alt="${outcome.name}" class="outcome-image">
                                        <div class="outcome-info">
                                            <h4>${outcome.name}</h4>
                                            <p class="outcome-description">${outcome.description}</p>
                                            <div class="outcome-rarity">
                                                <span class="rarity-badge ${outcome.rarity.toLowerCase()}">${outcome.rarity.toUpperCase()}</span>
                                                <span class="chance-badge">${outcome.chance}% chance</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    <div class="preview-actions">
                        <button class="preview-action-btn wishlist-btn ${wishlistClass}" onclick="store.toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i> ${isInWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
                        </button>
                        <button class="preview-action-btn cart-btn" onclick="store.addToCart(${product.id})">
                            <i class="fas fa-gift"></i> ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    nextImage(images) {
        this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
        this.updatePreviewImage(images);
    }

    previousImage(images) {
        this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
        this.updatePreviewImage(images);
    }

    setImageIndex(index, images) {
        this.currentImageIndex = index;
        this.updatePreviewImage(images);
    }

    updatePreviewImage(images) {
        const mainImage = document.getElementById('main-preview-image');
        if (mainImage) {
            mainImage.src = images[this.currentImageIndex];
        }

        // Update thumbnail active state
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentImageIndex);
        });
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            this.showNotification('Product not found!', 'error');
            return;
        }

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveToStorage('sephyx_cart', this.cart);
        this.updateCounts();
        this.showNotification(`${product.name} added to cart!`, 'success');
    }

    toggleWishlist(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            this.showNotification('Product not found!', 'error');
            return;
        }

        const existingIndex = this.wishlist.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            this.wishlist.splice(existingIndex, 1);
            this.showNotification(`${product.name} removed from wishlist!`, 'info');
        } else {
            this.wishlist.push(product);
            this.showNotification(`${product.name} added to wishlist!`, 'success');
        }

        this.saveToStorage('sephyx_wishlist', this.wishlist);
        this.updateCounts();
        this.renderProducts();
        this.renderNewDrops();

        // Update preview page if currently viewing this product
        const currentTab = document.querySelector('.tab-content.active');
        if (currentTab && currentTab.id === 'product-preview') {
            this.showProductPreview(productId);
        }
    }

    updateCounts() {
        const cartCountEl = document.getElementById('cart-count');
        const wishlistCountEl = document.getElementById('wishlist-count');
        
        if (cartCountEl) {
            cartCountEl.textContent = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        }
        if (wishlistCountEl) {
            wishlistCountEl.textContent = this.wishlist.length;
        }
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.classList.add('active');

        if (modalId === 'cart-modal') {
            this.renderCart();
        } else if (modalId === 'wishlist-modal') {
            this.renderWishlist();
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
        }
    }

    renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        if (!cartItems || !cartTotal) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
            cartTotal.textContent = '0.00';
            return;
        }

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">QAR ${item.price}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="store.updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="store.updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="quantity-btn" onclick="store.removeFromCart(${item.id})" style="background: #ff0000;">×</button>
            </div>
        `).join('');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }

    renderWishlist() {
        const wishlistItems = document.getElementById('wishlist-items');
        if (!wishlistItems) return;

        if (this.wishlist.length === 0) {
            wishlistItems.innerHTML = '<p style="text-align: center; color: #666;">Your wishlist is empty</p>';
            return;
        }

        wishlistItems.innerHTML = this.wishlist.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">QAR ${item.price}</div>
                </div>
                <button class="product-btn cart-btn" onclick="store.addToCart(${item.id})" style="margin-right: 10px;">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="quantity-btn" onclick="store.toggleWishlist(${item.id})" style="background: #ff0000;">×</button>
            </div>
        `).join('');
    }

    updateQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.saveToStorage('sephyx_cart', this.cart);
            this.updateCounts();
            this.renderCart();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveToStorage('sephyx_cart', this.cart);
        this.updateCounts();
        this.renderCart();
    }

    processOrder() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }

        // Generate order details
        const orderDate = new Date().toLocaleString();
        const orderId = '#' + Math.random().toString(36).substr(2, 9).toUpperCase();
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const orderDetails = `SEPHYX ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORDER DATE: ${orderDate}
ORDER ID: ${orderId}
ITEMS ORDERED:
${this.cart.map(item => `  - ${item.name} x${item.quantity} - QAR ${(item.price * item.quantity).toFixed(2)}`).join('\n')}
TOTAL AMOUNT: QAR ${total.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

        const orderDetailsEl = document.getElementById('order-details');
        if (orderDetailsEl) {
            orderDetailsEl.textContent = orderDetails;
        }
        
        this.closeModal(document.getElementById('cart-modal'));
        this.openModal('order-modal');
    }

    copyOrderDetails() {
        const orderDetailsEl = document.getElementById('order-details');
        if (!orderDetailsEl) return;

        const orderDetails = orderDetailsEl.textContent;
        const shippingInfo = this.collectShippingInfo();
        const paymentMethods = this.collectPaymentMethods();
        const specialInstructionsEl = document.getElementById('special-instructions');
        const specialInstructions = specialInstructionsEl ? specialInstructionsEl.value : '';

        const fullOrderText = `${orderDetails}
SHIPPING ADDRESS: 
${shippingInfo}
PAYMENT METHOD: ${paymentMethods}
SPECIAL INSTRUCTIONS: ${specialInstructions}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Copy this and send to instagram 
 DMs @sephyxofficial.qa`;

        navigator.clipboard.writeText(fullOrderText).then(() => {
            this.showNotification('Order details copied to clipboard! Send Details To @sephyxofficial.qa On Our Instagram To Proceed ! Thank You For Shopping With Us', 'success');
            // Clear cart after successful order
            this.cart = [];
            this.saveToStorage('sephyx_cart', this.cart);
            this.updateCounts();
            this.closeModal(document.getElementById('order-modal'));
        }).catch(() => {
            this.showNotification('Failed to copy order details', 'error');
        });
    }

    collectShippingInfo() {
        const fields = ['shipping-name', 'shipping-address1', 'shipping-address2', 'shipping-city', 'shipping-state', 'shipping-zip', 'shipping-country'];
        return fields.map(field => {
            const el = document.getElementById(field);
            return el ? el.value : '';
        }).filter(val => val.trim()).join(', ');
    }

    collectPaymentMethods() {
        const paymentRadios = document.querySelectorAll('input[name="payment"]:checked');
        return paymentRadios.length > 0 ? paymentRadios[0].value : 'Not specified';
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;

        // Add to document
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            return null;
        }
    }
}

// Initialize the store when the page loads
let store;
document.addEventListener('DOMContentLoaded', () => {
    store = new SephyxStore();
});
