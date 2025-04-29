document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const showPasswordBtns = document.querySelectorAll('.show-password');
    
    showPasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Password strength indicator (for register page)
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const strengthBars = document.querySelectorAll('.strength-bar');
            const strengthText = document.querySelector('.strength-text');
            const password = this.value;
            
            // Reset
            strengthBars.forEach(bar => {
                bar.style.backgroundColor = '#ddd';
            });
            
            if (password.length === 0) {
                strengthText.textContent = 'Força da senha';
                return;
            }
            
            // Very weak
            if (password.length < 6) {
                strengthBars[0].style.backgroundColor = '#e74c3c';
                strengthText.textContent = 'Muito fraca';
                strengthText.style.color = '#e74c3c';
                return;
            }
            
            // Weak
            if (password.length < 8) {
                strengthBars[0].style.backgroundColor = '#f39c12';
                strengthBars[1].style.backgroundColor = '#f39c12';
                strengthText.textContent = 'Fraca';
                strengthText.style.color = '#f39c12';
                return;
            }
            
            // Medium
            if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
                strengthBars[0].style.backgroundColor = '#f1c40f';
                strengthBars[1].style.backgroundColor = '#f1c40f';
                strengthBars[2].style.backgroundColor = '#f1c40f';
                strengthText.textContent = 'Média';
                strengthText.style.color = '#f1c40f';
                return;
            }
            
            // Strong
            strengthBars[0].style.backgroundColor = '#2ecc71';
            strengthBars[1].style.backgroundColor = '#2ecc71';
            strengthBars[2].style.backgroundColor = '#2ecc71';
            strengthBars[3]?.style.backgroundColor = '#2ecc71';
            strengthText.textContent = 'Forte';
            strengthText.style.color = '#2ecc71';
        });
    }
    
    // Form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const email = this.elements.email.value;
            const password = this.elements.password.value;
            
            if (!email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Login submitted:', { email, password });
            
            // Redirect to account page or home
            window.location.href = 'index.html';
        });
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = this.elements.name.value;
            const email = this.elements.email.value;
            const password = this.elements.password.value;
            const confirmPassword = this.elements['confirm-password'].value;
            const terms = this.elements.terms.checked;
            
            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            
            if (!terms) {
                alert('Você deve aceitar os Termos e Condições.');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Registration submitted:', { name, email, password });
            
            // Redirect to login page or home
            window.location.href = 'login.html';
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('facebook') ? 'Facebook' : 'Google';
            alert(`Você escolheu fazer login com ${provider}. Em uma aplicação real, isso redirecionaria para o serviço de autenticação.`);
        });
    });
    
    // Mobile menu toggle (same as in main script)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
});