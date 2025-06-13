const products = [
    {name: "Rolex", price:1000, image:"./img1.PNG"},
    {name: "AP", price:1500, image:"./img1.PNG"},
];
const container = document.querySelector(".container");
let content= "";
products.forEach(product => {
    content+=`
        <div>
            <h1>${product.name}</h1>
            <img src="${product.image}" alt="${product.name}"/>
            <p>Price: ${product.price}</p>
        </div>
    `;
});
container.innerHTML = content;