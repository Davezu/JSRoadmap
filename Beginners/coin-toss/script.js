const head =document.querySelector("#heads");
const tail = document.querySelector("#tails");
const result  = document.querySelector("#res");
const btn  = document.querySelectorAll(".btn");

btn.forEach(button => {
    button.addEventListener('click', () => {    
        const playerChoice = button.id;
        const randomizer = Math.random() < 0.5 ? result.innerHTML = `you choose ${playerChoice} and you lose` : result.innerHTML = `you choose ${playerChoice} and you win`;
    });
});

