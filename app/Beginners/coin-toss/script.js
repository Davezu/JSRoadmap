const head =document.querySelector("#Heads");
const tail = document.querySelector("#Tails");
const result  = document.querySelector("#res");
const btn  = document.querySelectorAll(".btn");

btn.forEach(button => {
    button.addEventListener('click', () => {    
        const playerChoice = button.id;
        const randomizer = Math.random() < 0.5 ? result.innerHTML = `You Choose <span style="color:red"> ${playerChoice}</span> and you lose` : result.innerHTML = `You Choose <span style="color:green">${playerChoice}</span> and you win`;
    });
});

