const productInput = document.querySelector('#productName');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list');
const btn = document.querySelector('#submit');

const inventory = JSON.parse(localStorage.getItem('inventory')) || [];

const render = () => {
  list.innerHTML = '';
  inventory.forEach((prd, index) => {
    const items = document.createElement('p');
    items.textContent = ` ${index + 1}. Product: ${prd.product}, Quantity: ${
      prd.qt
    } `;

    const remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = 'Remove';

    remove.addEventListener('click', () => {
      inventory.splice(index, 1);
      localStorage.setItem('inventory', JSON.stringify(inventory));
      render();
    });
    const edit = document.createElement('a');
    edit.href = '#';
    edit.textContent = 'Edit';

    edit.addEventListener('click', () => {
      const prodValue = productInput.value.trim();
      const quant = Number(quantity.value);

      if (!isNaN(quant) && prodValue) {
        inventory[index] = { product: prodValue, qt: quant };
        localStorage.setItem('inventory', JSON.stringify(inventory));
        render();
        productInput.value = '';
        quantity.value = '';
      } else {
        alert('Please fill in both product and quantity correctly.');
      }
    });
    items.appendChild(edit);
    items.appendChild(document.createTextNode(' '));
    items.appendChild(remove);
    list.appendChild(items);
  });
};
btn.addEventListener('click', () => {
  const prdVal = productInput.value;
  const qty = Number(quantity.value);
  add(prdVal, qty);
});

const add = (product, qt) => {
  inventory.push({ product, qt });
  localStorage.setItem('inventory', JSON.stringify(inventory));
  render();
};
render();
