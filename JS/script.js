//Menu Mobile
function openNav() {
    document.getElementById("mySidepanel").style.width = "85%";
    document.getElementById("mySidepanel").style.maxWidth = "350px";
    document.body.classList.add("sidepanel-open");
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.body.classList.remove("sidepanel-open");
}

// Fechar o sidepanel ao clicar em um link
document.querySelectorAll('.sidepanel a:not(.closebtn)').forEach(link => {
    link.addEventListener('click', function() {
        if (!this.getAttribute('href').startsWith('#')) {
            closeNav();
        }
    });
});

// Fechar ao clicar fora (no overlay)
document.addEventListener('click', function(event) {
    const sidepanel = document.getElementById('mySidepanel');
    const openBtn = document.querySelector('.openbtn');
    
    if (!sidepanel.contains(event.target) && 
        event.target !== openBtn && 
        !openBtn.contains(event.target)) {
        closeNav();
    }
});
    // Slideshow Functionality
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName('slide');
        const dots = document.getElementsByClassName('dot');
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = '0';
            slides[i].style.zIndex = '0';
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        
        slides[slideIndex-1].style.opacity = '1';
        slides[slideIndex-1].style.zIndex = '1';
        dots[slideIndex-1].className += ' active';
    }
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        plusSlides(1);
    }, 5000);
    
    // Product Filter Functionality
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const productGrid = document.querySelector('.product-grid');
    const productCards = document.querySelectorAll('.product-card');
    
    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardPrice = parseFloat(card.getAttribute('data-price'));
            
            let categoryMatch = category === 'all' || cardCategory === category;
            let priceMatch = true;
            
            if (priceRange !== 'all') {
                if (priceRange === '0-50') {
                    priceMatch = cardPrice <= 50;
                } else if (priceRange === '50-100') {
                    priceMatch = cardPrice > 50 && cardPrice <= 100;
                } else if (priceRange === '100-200') {
                    priceMatch = cardPrice > 100 && cardPrice <= 200;
                } else if (priceRange === '200+') {
                    priceMatch = cardPrice > 200;
                }
            }
            
            if (categoryMatch && priceMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Add event listeners to filters
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-id') || Math.floor(Math.random() * 1000);
            const productTitle = productCard.querySelector('.product-title').textContent;
            const productPrice = parseFloat(productCard.getAttribute('data-price'));
            const productImage = productCard.querySelector('.product-img img').src;
            
            const product = {
                id: productId,
                title: productTitle,
                price: productPrice,
                image: productImage,
                quantity: 1
            };
            
            // Add to cart (using localStorage for simplicity)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const existingItem = cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(product);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show notification
            showNotification(`${product.title} adicionado ao carrinho!`);
        });
    });
    
    // Update cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelector('.cart-count').textContent = count;
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    let testimonialIndex = 0;
    
    function showTestimonial(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialIndex = (n + testimonials.length) % testimonials.length;
        
        testimonials[testimonialIndex].classList.add('active');
        testimonialDots[testimonialIndex].classList.add('active');
    }
    
    testimonialPrev.addEventListener('click', () => {
        showTestimonial(testimonialIndex - 1);
    });
    
    testimonialNext.addEventListener('click', () => {
        showTestimonial(testimonialIndex + 1);
    });
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto rotate testimonials
    setInterval(() => {
        showTestimonial(testimonialIndex + 1);
    }, 5000);
    
    // Initialize cart count
    updateCartCount();
    
    // Add notification style
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--success-color);
            color: white;
            padding: 15px 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            z-index: 3000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
