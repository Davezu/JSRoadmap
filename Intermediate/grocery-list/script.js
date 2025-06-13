const input = document.querySelector("#itemInput");
const add = document.querySelector("#add");
const list = document.querySelector(".items");

add.addEventListener("click", () =>{
    if (input.value === " "){
        alert("Enter a valid item");
        return;
    }
    const item = input.value;
    const lis = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = item;

    const remove = document.createElement('button');
    remove.textContent ="Remove";
    remove.addEventListener('click', () =>{
        lis.remove();
    });

    lis.appendChild(checkbox);
    lis.appendChild(label);
    lis.appendChild(remove);
    list.appendChild(lis);
    input.value =" ";
});


