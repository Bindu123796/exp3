document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        { id: 1, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/250x200?text=T-Shirt' },
        { id: 2, name: 'Jeans', price: 49.99, image: 'https://via.placeholder.com/250x200?text=Jeans' },
        { id: 3, name: 'Sneakers', price: 79.99, image: 'https://via.placeholder.com/250x200?text=Sneakers' },
        { id: 4, name: 'Backpack', price: 34.99, image: 'https://via.placeholder.com/250x200?text=Backpack' }
    ];

    const productsGrid = document.querySelector('.products-grid');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    let cart = [];

    // Function to render products on the page
    function renderProducts() {
        productsGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Function to add a product to the cart
    window.addToCart = (productId) => {
        const productToAdd = products.find(p => p.id === productId);
        const existingCartItem = cart.find(item => item.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cart.push({ ...productToAdd, quantity: 1 });
        }
        
        renderCart();
    };

    // Function to render the cart
    function renderCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItem.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>$${itemTotal.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(cartItem);
        });
        cartTotalPrice.textContent = total.toFixed(2);
    }
    
    // Initial render of products and cart
    renderProducts();
    renderCart();
    
    // Simple checkout button functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Checkout successful! Your total is $' + cartTotalPrice.textContent);
            // In a real application, this would send data to a backend
            cart = []; // Clear cart after checkout
            renderCart();
        } else {
            alert('Your cart is empty!');
        }
    });

});