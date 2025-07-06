const items = document.querySelector("#items");
const amount = document.querySelector("#amount");
const list = document.querySelector("#list");
const add = document.querySelector("#submit");
const balance = document.querySelector("#balance");
const budget = document.querySelector("#budgetSubmit");
const bdg = document.querySelector("#bdg");
let totalBudget = 0;
let budggetVal = 0;

budget.addEventListener('click', () => {
    if (balance.value === " "){
        alert("Please enter a valid budget amount");
        return;
    }

    budggetVal = parseFloat(balance.value);
    bdg.textContent = `Total Budget ${budggetVal}`;

    balance.value = " ";
});
add.addEventListener('click', () =>{
    if (items.value === " " || amount.value === " " || isNaN(parseFloat(amount.value))){
        alert("Please enter a valid item and amount");
        return;
    }

    const itemValue= items.value;
    const amountValue = parseFloat(amount.value);
    const lst = document.createElement('li');
    totalBudget += amountValue;
    const remaining = budggetVal - totalBudget;
   
    bdg.textContent = `Total Budget $${remaining.toFixed(2)}`;
    lst.textContent =`[ $-${amountValue.toFixed(2)} ] - ${itemValue} `;

    const remove =document.createElement('a');
    remove.href = "#";
    remove.textContent = "Remove";
    remove.addEventListener('click', () =>{
        lst.remove();
        totalBudget -= amountValue;
        const newRemaining = budggetVal - totalBudget;
        bdg.textContent = `Total Budget $${newRemaining.toFixed(2)}`;
    });
    lst.appendChild(remove);
    list.appendChild(lst);
    items.value = " ";
    amount.value = " ";
});