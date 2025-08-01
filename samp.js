// Array to hold cart items
let cart = [];

// Function to update the cart
function updateCart() {
  const cartButton = document.getElementById('cartButton');
  cartButton.textContent = `Cart (${cart.length})`;
}

// Function to handle adding items to the cart
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-id');
  const productName = button.getAttribute('data-name');
  const productPrice = parseFloat(button.getAttribute('data-price'));

  // Add product to cart
  cart.push({
    id: productId,
    name: productName,
    price: productPrice
  });

  // Update cart button
  updateCart();
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

