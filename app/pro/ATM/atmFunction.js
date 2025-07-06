const buttons = document.querySelectorAll('.action');
const balance = document.querySelector('#balance');
const userInput = document.querySelector('#enterBalance');

let userBalance = 0;

buttons.forEach((button) => {
  const actionType = button.getAttribute('data-type');
  button.onclick = () => {
    if (actionType === 'checkBalance') {
      balance.textContent = `Your Current balance is ${userBalance}`;
    } else if (actionType === 'deposit') {
      const currentBalance = Number(userInput.value);
      const input = userInput.value;
      if (currentBalance < 0 || input === '' || isNaN(currentBalance)) {
        alert('Negative numbers/empty are not valid');
      } else {
        userBalance += currentBalance;
        userInput.value = '';
        alert(
          `₱${currentBalance} deposited your Current Balance is ₱${userBalance}`
        );
      }
    } else if (actionType === 'widthraw') {
      const amountWidthraw = Number(userInput.value);
      const widthrawInput = userInput.value;
      if (amountWidthraw === 0 || widthrawInput === '')
        alert('Invalid widthrawing');
      else if (amountWidthraw > 0 && amountWidthraw <= userBalance) {
        userBalance -= amountWidthraw;
        userInput.value = '';
        alert(`₱${amountWidthraw} withdrawn. Remaining ₱${userBalance}`);
      } else {
        alert('Insufficient funds');
      }
    } else if (actionType === 'reset') {
      userBalance = 0;
      userInput.value = '';
      alert('Reset has been succesfully.');
    }
  };
});
