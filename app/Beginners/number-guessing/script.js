const guessInput = document.querySelector('#guess');
const btn = document.querySelector('#submit');
const result = document.querySelector('#result');

let tracking = 0;
let randomizer = Math.floor(Math.random() * 100) + 1;


btn.addEventListener('click', () => {
  const player = Number(guessInput.value);

  if (isNaN(player) || player < 1 || player > 100) {
    result.innerText = 'Please Input a valid number (1-100)';
    return;
  }
  tracking++;
  if (player === randomizer) {
    result.innerHTML = `
  <p>Congratulations! You guessed it right in ${tracking} tries.</p>
  <button id="reset" style="
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  ">
    🔁 Play Again?
  </button>
`;
    
    const resetButton = document.querySelector('#reset')
      resetButton.addEventListener('click', () => {
      tracking = 0;
      guessInput.value = '';
      guessInput.focus();
      result.textContent = 'Make your first guess to start the game!';
      randomizer = Math.floor(Math.random() * 100) + 1;
      });
  } else if (player > randomizer) {
    result.textContent = 'Your guess is too high';
  } else{
    result.textContent = 'Your guess is too low';
  }
});
