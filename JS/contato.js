document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate required fields
            const requiredFields = contactForm.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const errorMessage = field.nextElementSibling;
                
                if (!field.value.trim()) {
                    field.style.borderColor = 'var(--danger-color)';
                    errorMessage.textContent = 'Este campo é obrigatório';
                    errorMessage.style.display = 'block';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                    errorMessage.style.display = 'none';
                    
                    // Special validation for email
                    if (field.type === 'email' && !validateEmail(field.value)) {
                        field.style.borderColor = 'var(--danger-color)';
                        errorMessage.textContent = 'Por favor, insira um e-mail válido';
                        errorMessage.style.display = 'block';
                        isValid = false;
                    }
                }
            });
            
            // If form is valid, submit it
            if (isValid) {
                // In a real application, you would send the form data to a server here
                // For this example, we'll just redirect to the success page
                window.location.href = 'contato-sucesso.html';
            }
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Update cart count from localStorage
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        
        if (cartCountElement) {
            cartCountElement.textContent = count;
        }
    }
    
    // Initialize cart count
    updateCartCount();
});