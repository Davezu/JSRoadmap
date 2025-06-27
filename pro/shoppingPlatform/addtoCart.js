const addToCart = document.querySelector("#addtocart");
const total = document.querySelector("#totalAmount");
const plist = document.querySelector(".product-list");

const products = [];
let totalV = 0;

const addCart = (name, price) => {
    products.push({ name, price });

    let content = "";

    products.forEach((prod, index) => {
        content += `
        <p>${index + 1}</p>
        <div>
            <h1>${prod.name}</h1>
            <p>Price: ₱${prod.price}</p>
        </div>
        `;
    });

    plist.innerHTML = content;
    totalV += price;
    total.textContent = `Total Price: ₱${totalV}`;
};

addToCart.addEventListener('click', () => {
    addCart("Nike", 299);
});
