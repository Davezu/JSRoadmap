const addToCart = document.querySelector('#addtocart');
const total = document.querySelector('#totalAmount');
const cartItems = document.querySelector('#cartItems');
const cartBadge = document.querySelector('#cartBadge');
const checkoutBtn = document.querySelector('.checkout-btn');

const products = [];
let totalV = 0;

const updateCartDisplay = () => {
  if (products.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty</p>
        <span>Add some products to get started!</span>
      </div>
    `;
    checkoutBtn.disabled = true;
  } else {
    let content = '';
    products.forEach((prod, index) => {
      content += `
        <div class="cart-item">
          <div class="item-info">
            <div class="item-name">${prod.name}</div>
            <div class="item-price">₱${prod.price}</div>
          </div>
        </div>
      `;
    });
    cartItems.innerHTML = content;
    checkoutBtn.disabled = false;
  }

  cartBadge.textContent = products.length;
  total.textContent = `₱${totalV}`;
};

const addCart = (name, price) => {
  products.push({ name, price });
  totalV += price;
  updateCartDisplay();
};

addToCart.addEventListener('click', () => {
  addCart('Nike', 299);
});

// Initialize cart display
updateCartDisplay();
