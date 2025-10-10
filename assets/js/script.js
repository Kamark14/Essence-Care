// Dados dos produtos
        const products = [
            {
                id: 1,
                name: "Creme Facial Hidratante",
                category: "skincare",
                price: 89.90,
                oldPrice: 99.90,
                image: "Img/prod1.jpg",
                rating: 4.5,
                description: "Creme facial hidratante com ingredientes naturais que nutrem e revitalizam a pele, deixando-a macia e radiante.",
                features: ["Hidratação profunda", "Ingredientes naturais", "Adequado para todos os tipos de pele", "Fórmula não comedogênica"],
                details: "Nosso creme facial hidratante é formulado com ingredientes 100% naturais, incluindo extrato de aloe vera, óleo de amêndoas e manteiga de karité. Proporciona hidratação intensa por até 24 horas, sem deixar a pele oleosa. Ideal para uso diário, tanto de manhã quanto à noite."
            },
            {
                id: 2,
                name: "Shampoo Revitalizante",
                category: "haircare",
                price: 45.90,
                oldPrice: 55.90,
                image: "Img/prod2.jpg",
                rating: 4.2,
                description: "Shampoo revitalizante com extrato de babosa que limpa suavemente e fortalece os fios desde a raiz.",
                features: ["Fórmula sem sulfatos", "Extrato de babosa", "Fortalece os fios", "Limpeza suave"],
                details: "Nosso shampoo revitalizante é especialmente formulado para cabelos que precisam de nutrição intensa. Com extrato de babosa e óleo de argan, limpa suavemente sem ressecar, devolvendo a vitalidade e o brilho aos fios. Livre de sulfatos, parabenos e corantes artificiais."
            },
            {
                id: 3,
                name: "Óleo Corporal Relaxante",
                category: "bodycare",
                price: 65.90,
                oldPrice: 75.90,
                image: "Img/prod3.jpg",
                rating: 4.7,
                description: "Óleo corporal com essência de lavanda que hidrata a pele e proporciona uma sensação de relaxamento profundo.",
                features: ["Aroma relaxante de lavanda", "Hidratação intensa", "Absorção rápida", "Fórmula não oleosa"],
                details: "Este óleo corporal combina os benefícios hidratantes dos óleos naturais com o poder relaxante da lavanda. Sua fórmula de rápida absorção não deixa a pele oleosa, apenas macia e perfumada. Ideal para usar após o banho ou antes de dormir para uma noite de sono tranquila."
            },
            {
                id: 4,
                name: "Batom Líquido Matte",
                category: "makeup",
                price: 32.90,
                oldPrice: 39.90,
                image: "Img/prod4.jpg",
                rating: 4.3,
                description: "Batom líquido de acabamento matte com alta pigmentação e longa duração, disponível em diversas cores.",
                features: ["Acabamento matte", "Alta pigmentação", "Longa duração", "Fórmula vegana"],
                details: "Nosso batom líquido matte oferece cor intensa com acabamento aveludado que não resseca os lábios. Com fórmula vegana e enriquecida com manteiga de cacau, proporciona conforto e durabilidade por até 8 horas. Disponível em uma ampla gama de cores para todos os tons de pele."
            },
            {
                id: 5,
                name: "Sabonete Facial Detox",
                category: "skincare",
                price: 28.90,
                oldPrice: 35.90,
                image: "Img/prod5.jpg",
                rating: 4.6,
                description: "Sabonete facial com carvão ativado que remove impurezas e controla a oleosidade da pele.",
                features: ["Carvão ativado", "Limpeza profunda", "Controle de oleosidade", "Sem ressecamento"],
                details: "Formulado com carvão ativado e argila verde, nosso sabonete facial detox realiza uma limpeza profunda, removendo impurezas, toxinas e excesso de oleosidade sem ressecar a pele. Ideal para peles oleosas e mistas, pode ser usado diariamente para manter a pele limpa e revitalizada."
            },
            {
                id: 6,
                name: "Condicionador Reparador",
                category: "haircare",
                price: 42.90,
                oldPrice: 49.90,
                image: "Img/prod6.jpg",
                rating: 4.4,
                description: "Condicionador reparador com queratina que reconstrói os fios danificados e devolve o brilho natural.",
                features: ["Queratina natural", "Reconstrução dos fios", "Brilho intenso", "Desembaraço facilitado"],
                details: "Nosso condicionador reparador é enriquecido com queratina natural e óleo de argan, que penetram profundamente nos fios, reconstruindo as áreas danificadas e selando as cutículas. Resulta em cabelos mais fortes, brilhantes e fáceis de desembaraçar. Use após o shampoo para melhores resultados."
            },
            {
                id: 7,
                name: "Hidratante Corporal com Aveia",
                category: "bodycare",
                price: 55.90,
                oldPrice: 65.90,
                image: "Img/prod7.jpg",
                rating: 4.8,
                description: "Hidratante corporal com extrato de aveia que acalma e nutre a pele, ideal para peles sensíveis.",
                features: ["Extrato de aveia", "Acalma a pele", "Hidratação prolongada", "Para peles sensíveis"],
                details: "Especialmente formulado para peles sensíveis, nosso hidratante corporal com extrato de aveia proporciona hidratação intensa enquanto acalma irritações e vermelhidão. Sua textura leve é rapidamente absorvida, deixando a pele macia e sedosa sem sensação de oleosidade. Dermatologicamente testado."
            },
            {
                id: 8,
                name: "Paleta de Sombras Natural",
                category: "makeup",
                price: 79.90,
                oldPrice: 89.90,
                image: "Img/prod8.jpg",
                rating: 4.5,
                description: "Paleta de sombras com tons neutros e naturais, perfeita para looks do dia a dia e ocasiões especiais.",
                features: ["Tons neutros", "Alta pigmentação", "Textura cremosa", "Longa duração"],
                details: "Nossa paleta de sombras natural reúne 12 tons versáteis que vão do mate ao acetinado, perfeitos para criar looks do dia a dia ou mais elaborados para ocasiões especiais. Com alta pigmentação e textura cremosa, as sombras se espalham facilmente e têm longa duração sem acumular nas pálpebras."
            }
        ];

        // Estado da aplicação
        let currentUser = null;
        let cart = [];
        let wishlist = [];
        let orders = [];

        // Elementos DOM
        const productGrid = document.getElementById('product-grid');
        const cartIcon = document.getElementById('cart-icon');
        const cartCount = document.querySelector('.cart-count');
        const userIcon = document.getElementById('user-icon');
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const categoryFilter = document.getElementById('category-filter');
        const sortBy = document.getElementById('sort-by');

        // Modais
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        const cartModal = document.getElementById('cart-modal');
        const productDetailModal = document.getElementById('product-detail-modal');
        const userAreaModal = document.getElementById('user-area-modal');
        const cookiesModal = document.getElementById('cookies-modal');
        const successModal = document.getElementById('success-modal');

        // Botões de fechar modais
        document.getElementById('close-login').onclick = () => loginModal.style.display = 'none';
        document.getElementById('close-register').onclick = () => registerModal.style.display = 'none';
        document.getElementById('close-cart').onclick = () => cartModal.style.display = 'none';
        document.getElementById('close-product-detail').onclick = () => productDetailModal.style.display = 'none';
        document.getElementById('success-close').onclick = () => successModal.style.display = 'none';

        // Alternar entre login e cadastro
        document.getElementById('show-register').onclick = (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            registerModal.style.display = 'block';
        };

        document.getElementById('show-login').onclick = (e) => {
            e.preventDefault();
            registerModal.style.display = 'none';
            loginModal.style.display = 'block';
        };

        // Abrir modais
        userIcon.onclick = () => {
            if (currentUser) {
                loadUserData();
                userAreaModal.style.display = 'block';
            } else {
                loginModal.style.display = 'block';
            }
        };

        cartIcon.onclick = () => {
            loadCart();
            cartModal.style.display = 'block';
        };

        // Fechar modais ao clicar fora
        window.onclick = (e) => {
            if (e.target === loginModal) loginModal.style.display = 'none';
            if (e.target === registerModal) registerModal.style.display = 'none';
            if (e.target === cartModal) cartModal.style.display = 'none';
            if (e.target === productDetailModal) productDetailModal.style.display = 'none';
            if (e.target === userAreaModal) userAreaModal.style.display = 'none';
            if (e.target === cookiesModal) cookiesModal.style.display = 'none';
            if (e.target === successModal) successModal.style.display = 'none';
        };

        // Sidepanel
        function openNav() {
            document.getElementById("sidepanel").style.width = "250px";
            document.body.classList.add("sidepanel-open");
        }

        function closeNav() {
            document.getElementById("sidepanel").style.width = "0";
            document.body.classList.remove("sidepanel-open");
        }

        // Banner Slider
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.opacity = "0";
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.opacity = "1";
            dots[slideIndex - 1].className += " active";

            setTimeout(showSlides, 5000); // Muda a cada 5 segundos
        }

        function changeSlide(n) {
            slideIndex += n - 1;
            showSlides();
        }

        function currentSlide(n) {
            slideIndex = n - 1;
            showSlides();
        }

        // Renderizar produtos
        function renderProducts(productsToRender = products) {
            productGrid.innerHTML = '';

            if (productsToRender.length === 0) {
                productGrid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <i class="fas fa-search"></i>
                        <p>Nenhum produto encontrado</p>
                        <a href="#produtos" class="btn">Ver Todos os Produtos</a>
                    </div>
                `;
                return;
            }

            productsToRender.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-badge">${product.oldPrice ? 'Oferta' : 'Novo'}</div>
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(product.category)}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">
                            <div class="price">R$ ${product.price.toFixed(2)}</div>
                            ${product.oldPrice ? `<div class="old-price">R$ ${product.oldPrice.toFixed(2)}</div>` : ''}
                        </div>
                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span>(${product.rating})</span>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                            <button class="add-to-wishlist" data-id="${product.id}">
                                <i class="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `;
                productGrid.appendChild(productCard);

                // Adicionar evento de clique para abrir detalhes do produto
                productCard.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('add-to-cart') &&
                        !e.target.classList.contains('add-to-wishlist') &&
                        !e.target.closest('.add-to-cart') &&
                        !e.target.closest('.add-to-wishlist')) {
                        openProductDetail(product.id);
                    }
                });
            });

            // Adicionar eventos aos botões
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    addToCart(productId);
                });
            });

            document.querySelectorAll('.add-to-wishlist').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    toggleWishlist(productId);
                });
            });
        }

        // Gerar estrelas para avaliação
        function generateStars(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;

            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star"></i>';
            }

            if (halfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            }

            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star"></i>';
            }

            return stars;
        }

        // Obter nome da categoria
        function getCategoryName(category) {
            const categories = {
                'skincare': 'Cuidados com a Pele',
                'haircare': 'Cuidados com o Cabelo',
                'bodycare': 'Corpo e Banho',
                'makeup': 'Maquiagem'
            };
            return categories[category] || category;
        }

        // Adicionar ao carrinho
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }

            updateCartCount();
            saveToLocalStorage('cart', cart);
            showSuccess('Produto adicionado ao carrinho!');
        }

        // Atualizar contador do carrinho
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
        }

        // Carregar carrinho
        function loadCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Seu carrinho está vazio</p>
                        <a href="#produtos" class="btn">Continuar Comprando</a>
                    </div>
                `;
                cartTotal.textContent = 'R$ 0,00';
                return;
            }

            let total = 0;
            cartItems.innerHTML = '';

            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity" data-id="${item.id}">-</button>
                            <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="increase-quantity" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });

            cartTotal.textContent = `R$ ${total.toFixed(2)}`;

            // Adicionar eventos aos botões do carrinho
            document.querySelectorAll('.decrease-quantity').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    updateCartQuantity(productId, -1);
                });
            });

            document.querySelectorAll('.increase-quantity').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    updateCartQuantity(productId, 1);
                });
            });

            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });

            document.querySelectorAll('.cart-item-quantity input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const productId = parseInt(input.getAttribute('data-id'));
                    const newQuantity = parseInt(input.value);

                    if (newQuantity < 1) {
                        removeFromCart(productId);
                    } else {
                        updateCartQuantity(productId, 0, newQuantity);
                    }
                });
            });
        }

        // Atualizar quantidade no carrinho
        function updateCartQuantity(productId, change, newQuantity = null) {
            const item = cart.find(item => item.id === productId);
            if (!item) return;

            if (newQuantity !== null) {
                item.quantity = newQuantity;
            } else {
                item.quantity += change;
            }

            if (item.quantity < 1) {
                removeFromCart(productId);
            } else {
                updateCartCount();
                loadCart();
                saveToLocalStorage('cart', cart);
            }
        }

        // Remover do carrinho
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            loadCart();
            saveToLocalStorage('cart', cart);
        }

        // Alternar lista de desejos
        function toggleWishlist(productId) {
            if (!currentUser) {
                showSuccess('Faça login para adicionar aos favoritos!');
                loginModal.style.display = 'block';
                return;
            }

            const index = wishlist.indexOf(productId);

            if (index === -1) {
                wishlist.push(productId);
                showSuccess('Produto adicionado aos favoritos!');
            } else {
                wishlist.splice(index, 1);
                showSuccess('Produto removido dos favoritos!');
            }

            saveToLocalStorage('wishlist', wishlist);
        }

        // Abrir detalhes do produto
        function openProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const container = document.getElementById('product-detail-container');
            container.innerHTML = `
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <div class="product-meta">
                        <div class="rating">
                            <div class="stars">${generateStars(product.rating)}</div>
                            <span>(${product.rating})</span>
                        </div>
                        <div class="sku">SKU: EC${product.id.toString().padStart(3, '0')}</div>
                        <div class="availability">
                            <i class="fas fa-check"></i>
                            <span>Em estoque</span>
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="current-price">R$ ${product.price.toFixed(2)}</div>
                        ${product.oldPrice ? `<div class="old-price">R$ ${product.oldPrice.toFixed(2)}</div>` : ''}
                        ${product.oldPrice ? `<div class="discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</div>` : ''}
                    </div>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    <ul class="features">
                        ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease">-</button>
                            <input type="number" class="quantity-input" value="1" min="1">
                            <button class="quantity-btn increase">+</button>
                        </div>
                        <button class="btn add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
                        <button class="wishlist-btn" data-id="${product.id}">
                            <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-tabs">
                        <div class="tabs">
                            <div class="tab active" data-tab="description">Descrição</div>
                            <div class="tab" data-tab="reviews">Avaliações</div>
                        </div>
                        <div class="tab-content active" id="description-tab">
                            <p>${product.details}</p>
                        </div>
                        <div class="tab-content" id="reviews-tab">
                            <div class="review">
                                <div class="review-header">
                                    <div class="reviewer-name">Maria Silva</div>
                                    <div class="review-date">15/10/2023</div>
                                </div>
                                <div class="review-rating">${generateStars(5)}</div>
                                <p>Produto excelente! Superou minhas expectativas. Recomendo!</p>
                            </div>
                            <div class="review">
                                <div class="review-header">
                                    <div class="reviewer-name">João Santos</div>
                                    <div class="review-date">10/10/2023</div>
                                </div>
                                <div class="review-rating">${generateStars(4)}</div>
                                <p>Muito bom, mas a embalagem poderia ser melhor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Adicionar eventos
            const decreaseBtn = container.querySelector('.quantity-btn.decrease');
            const increaseBtn = container.querySelector('.quantity-btn.increase');
            const quantityInput = container.querySelector('.quantity-input');
            const addToCartBtn = container.querySelector('.add-to-cart-btn');
            const wishlistBtn = container.querySelector('.wishlist-btn');
            const tabs = container.querySelectorAll('.tab');

            decreaseBtn.addEventListener('click', () => {
                const value = parseInt(quantityInput.value);
                if (value > 1) quantityInput.value = value - 1;
            });

            increaseBtn.addEventListener('click', () => {
                const value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });

            addToCartBtn.addEventListener('click', () => {
                const productId = parseInt(addToCartBtn.getAttribute('data-id'));
                const quantity = parseInt(quantityInput.value);

                for (let i = 0; i < quantity; i++) {
                    addToCart(productId);
                }

                productDetailModal.style.display = 'none';
                cartModal.style.display = 'block';
            });

            wishlistBtn.addEventListener('click', () => {
                const productId = parseInt(wishlistBtn.getAttribute('data-id'));
                toggleWishlist(productId);

                // Atualizar ícone
                const icon = wishlistBtn.querySelector('i');
                if (wishlist.includes(productId)) {
                    icon.className = 'fas fa-heart';
                } else {
                    icon.className = 'far fa-heart';
                }
            });

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remover classe active de todas as tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    // Adicionar classe active à tab clicada
                    tab.classList.add('active');

                    // Esconder todos os conteúdos
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });

                    // Mostrar conteúdo correspondente
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                });
            });

            productDetailModal.style.display = 'block';
        }

        // Formulário de login
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            // Simulação de autenticação
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                currentUser = user;
                saveToLocalStorage('currentUser', currentUser);
                loginModal.style.display = 'none';
                showSuccess('Login realizado com sucesso!');

                // Atualizar ícone do usuário
                userIcon.innerHTML = '<i class="fas fa-user-check"></i>';
            } else {
                showSuccess('E-mail ou senha incorretos!', 'error');
            }
        });

        // Formulário de cadastro
        document.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.getElementById('terms').checked;

            // Validações
            if (password !== confirmPassword) {
                showSuccess('As senhas não coincidem!', 'error');
                return;
            }

            if (!terms) {
                showSuccess('Você deve aceitar os termos de uso!', 'error');
                return;
            }

            // Verificar se o usuário já existe
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            if (users.find(u => u.email === email)) {
                showSuccess('Este e-mail já está cadastrado!', 'error');
                return;
            }

            // Criar novo usuário
            const newUser = {
                id: Date.now(),
                name,
                email,
                password,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // Fazer login automaticamente
            currentUser = newUser;
            saveToLocalStorage('currentUser', currentUser);
            registerModal.style.display = 'none';
            showSuccess('Cadastro realizado com sucesso!');

            // Atualizar ícone do usuário
            userIcon.innerHTML = '<i class="fas fa-user-check"></i>';
        });

        // Carregar dados do usuário
        function loadUserData() {
            if (!currentUser) return;

            // Atualizar informações do usuário
            document.getElementById('user-name').textContent = currentUser.name;
            document.getElementById('user-email').textContent = currentUser.email;
            document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();

            // Carregar formulário de perfil
            document.getElementById('profile-name').value = currentUser.name;
            document.getElementById('profile-email').value = currentUser.email;
            document.getElementById('profile-phone').value = currentUser.phone || '';
            document.getElementById('profile-address').value = currentUser.address || '';

            // Carregar pedidos
            loadOrders();

            // Carregar lista de desejos
            loadWishlist();
        }

        // Carregar pedidos
        function loadOrders() {
            const ordersList = document.getElementById('orders-list');

            if (orders.length === 0) {
                ordersList.innerHTML = `
                    <tr>
                        <td colspan="4" style="text-align: center;">Nenhum pedido encontrado</td>
                    </tr>
                `;
                return;
            }

            ordersList.innerHTML = '';
            orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>#${order.id}</td>
                    <td>${new Date(order.date).toLocaleDateString('pt-BR')}</td>
                    <td>R$ ${order.total.toFixed(2)}</td>
                    <td><span class="order-status status-${order.status}">${getStatusText(order.status)}</span></td>
                `;
                ordersList.appendChild(row);
            });
        }

        // Obter texto do status
        function getStatusText(status) {
            const statusMap = {
                'pending': 'Pendente',
                'completed': 'Concluído',
                'cancelled': 'Cancelado'
            };
            return statusMap[status] || status;
        }

        // Carregar lista de desejos
        function loadWishlist() {
            const wishlistItems = document.getElementById('wishlist-items');

            if (wishlist.length === 0) {
                wishlistItems.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-heart"></i>
                        <p>Sua lista de desejos está vazia</p>
                        <a href="#produtos" class="btn">Explorar Produtos</a>
                    </div>
                `;
                return;
            }

            wishlistItems.innerHTML = '';
            wishlist.forEach(productId => {
                const product = products.find(p => p.id === productId);
                if (!product) return;

                const wishlistItem = document.createElement('div');
                wishlistItem.className = 'product-card';
                wishlistItem.innerHTML = `
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(product.category)}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">
                            <div class="price">R$ ${product.price.toFixed(2)}</div>
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                            <button class="add-to-wishlist" data-id="${product.id}">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `;
                wishlistItems.appendChild(wishlistItem);
            });

            // Adicionar eventos
            document.querySelectorAll('#wishlist-items .add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    addToCart(productId);
                });
            });

            document.querySelectorAll('#wishlist-items .add-to-wishlist').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(button.getAttribute('data-id'));
                    toggleWishlist(productId);
                    loadWishlist();
                });
            });
        }

        // Formulário de perfil
        document.getElementById('profile-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('profile-name').value;
            const email = document.getElementById('profile-email').value;
            const phone = document.getElementById('profile-phone').value;
            const address = document.getElementById('profile-address').value;

            // Atualizar usuário
            currentUser.name = name;
            currentUser.email = email;
            currentUser.phone = phone;
            currentUser.address = address;

            // Atualizar no localStorage
            saveToLocalStorage('currentUser', currentUser);

            // Atualizar lista de usuários
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('users', JSON.stringify(users));
            }

            showSuccess('Perfil atualizado com sucesso!');
            loadUserData();
        });

        // Logout
        document.getElementById('logout-btn').addEventListener('click', () => {
            currentUser = null;
            localStorage.removeItem('currentUser');
            userAreaModal.style.display = 'none';
            userIcon.innerHTML = '<i class="fas fa-user"></i>';
            showSuccess('Logout realizado com sucesso!');
        });

        // Tabs da área do usuário
        document.querySelectorAll('.user-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remover classe active de todas as tabs
                document.querySelectorAll('.user-tab').forEach(t => t.classList.remove('active'));
                // Adicionar classe active à tab clicada
                tab.classList.add('active');

                // Esconder todos os conteúdos
                document.querySelectorAll('.user-tab-content').forEach(content => {
                    content.classList.remove('active');
                });

                // Mostrar conteúdo correspondente
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });

        // Formulário de contato
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const category = document.getElementById('category').value;
            const message = document.getElementById('message').value;

            // Simular envio
            setTimeout(() => {
                document.getElementById('contact-form').reset();
                successModal.style.display = 'block';
                document.getElementById('success-title').textContent = 'Mensagem Enviada!';
                document.getElementById('success-message').textContent = 'Obrigado pelo seu contato. Responderemos em breve.';
            }, 1000);
        });

        // Formulário de newsletter
        document.getElementById('newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;

            // Simular inscrição
            setTimeout(() => {
                e.target.reset();
                showSuccess('Inscrição realizada com sucesso!');
            }, 1000);
        });

        // Finalizar compra
        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (cart.length === 0) {
                showSuccess('Seu carrinho está vazio!', 'error');
                return;
            }

            if (!currentUser) {
                cartModal.style.display = 'none';
                loginModal.style.display = 'block';
                showSuccess('Faça login para finalizar a compra!');
                return;
            }

            // Simular finalização de compra
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const newOrder = {
                id: Date.now(),
                date: new Date().toISOString(),
                items: [...cart],
                total: total,
                status: 'pending'
            };

            orders.push(newOrder);
            saveToLocalStorage('orders', orders);

            // Limpar carrinho
            cart = [];
            updateCartCount();
            saveToLocalStorage('cart', cart);

            cartModal.style.display = 'none';
            showSuccess('Compra realizada com sucesso!');
        });

        // Continuar comprando
        document.getElementById('continue-shopping').addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        // Filtros e busca
        categoryFilter.addEventListener('change', filterProducts);
        sortBy.addEventListener('change', filterProducts);
        searchBtn.addEventListener('click', filterProducts);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                filterProducts();
            }
        });

        function filterProducts() {
            let filteredProducts = [...products];

            // Filtrar por categoria
            const category = categoryFilter.value;
            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.category === category);
            }

            // Filtrar por busca
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
            }

            // Ordenar
            const sort = sortBy.value;
            switch (sort) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }

            renderProducts(filteredProducts);
        }

        // Mostrar modal de sucesso
        function showSuccess(message, type = 'success') {
            const successTitle = document.getElementById('success-title');
            const successMessage = document.getElementById('success-message');

            successTitle.textContent = type === 'success' ? 'Sucesso!' : 'Atenção!';
            successMessage.textContent = message;

            if (type === 'success') {
                successTitle.style.color = 'var(--success-color)';
            } else {
                successTitle.style.color = 'var(--danger-color)';
            }

            successModal.style.display = 'block';
        }

        // Mostrar/ocultar senha
        document.getElementById('show-login-password').addEventListener('click', () => {
            const passwordInput = document.getElementById('login-password');
            const icon = document.getElementById('show-login-password').querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                passwordInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });

        document.getElementById('show-register-password').addEventListener('click', () => {
            const passwordInput = document.getElementById('register-password');
            const icon = document.getElementById('show-register-password').querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                passwordInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });

        document.getElementById('show-confirm-password').addEventListener('click', () => {
            const passwordInput = document.getElementById('confirm-password');
            const icon = document.getElementById('show-confirm-password').querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                passwordInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });

        // Cookies
        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookiesModal.style.display = 'none';
        });

        document.getElementById('decline-cookies').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            cookiesModal.style.display = 'none';
        });

        // Salvar no localStorage
        function saveToLocalStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        // Carregar do localStorage
        function loadFromLocalStorage(key) {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        }

        // Inicialização
        function init() {
            // Carregar dados do localStorage
            currentUser = loadFromLocalStorage('currentUser');
            cart = loadFromLocalStorage('cart') || [];
            wishlist = loadFromLocalStorage('wishlist') || [];
            orders = loadFromLocalStorage('orders') || [];

            // Atualizar interface
            updateCartCount();
            renderProducts();

            // Verificar se o usuário está logado
            if (currentUser) {
                userIcon.innerHTML = '<i class="fas fa-user-check"></i>';
            }

            // Verificar cookies
            const cookiesAccepted = localStorage.getItem('cookiesAccepted');
            if (!cookiesAccepted) {
                setTimeout(() => {
                    cookiesModal.style.display = 'block';
                }, 2000);
            }
        }

        // Inicializar a aplicação
        document.addEventListener('DOMContentLoaded', init);
