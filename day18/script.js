// Initialize an empty cart
let cart = [];

// Function to display the cart
function renderCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear current cart display

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    const cartList = document.createElement("ul");

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });

    cartContainer.appendChild(cartList);

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalPriceElement = document.createElement("p");
    totalPriceElement.textContent = `Total: $${totalPrice}`;
    cartContainer.appendChild(totalPriceElement);
}

// Function to handle adding items to the cart
function addToCart(event) {
    const button = event.target;

    // Extract product data from button
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    // Check if the item exists in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // If it doesn't exist, add a new item to the cart
        cart.push({ id, name, price, quantity: 1 });
    }

    // Update cart display
    renderCart();
}

// Attach event listeners to the "Add to Cart" buttons
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => button.addEventListener("click", addToCart));

// Render the initial cart state
renderCart();
