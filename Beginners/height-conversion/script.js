const feet = document.querySelector("#feet");
const inch = document.querySelector("#inch");
const results = document.querySelector("#result");
const btn = document.querySelector("#convert");
const feets = parseFloat(30.48);
const inches = parseFloat(2.54);

btn.addEventListener("click", () =>{
    if(!feet.value || !inch.value){
        alert("Please enter a value");
        return;
    }
    const value  = (feet.value * feets) + (inch.value * inches);
    results.textContent =  `your height is ${value}`
});