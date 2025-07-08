const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const calculate = document.querySelector("#calculate");
const amountTip = document.querySelector("#amountTip");

calculate.addEventListener ("click", () => {
    let billVal = parseFloat(bill.value);
    let tipval  = parseFloat(tip.value);

    if (Number.isNaN(billVal)|| Number.isNaN(tipval)){
        amountTip.innerHTML = `Please Enter a valid value`
    }else{
    let total = (billVal * tipval) / 100;
        amountTip.innerHTML = `Total tip is <span style="color:green"> $${total}</span>`;
    }   
});
    