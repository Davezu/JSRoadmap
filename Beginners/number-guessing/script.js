const guessInput = document.querySelector('#guess');
const btn = document.querySelector('#submit');
const result = document.querySelector('#result');
let tracking = 0;

btn.addEventListener('click', () => {
  tracking++;
  const player = guessInput.value;
  const randomizer = Math.floor(Math.random() * 100) + 1;

  if (!player) {
    result.innerText = 'Please Input a number (1-100)';
    return;
  }

  if (player == randomizer) {
    result.textContent = `Congratualtions! you guessed it right! on ${tracking} tries`;
  } else if (player > randomizer) {
    result.textContent = 'Your guess is too high';
  } else {
    result.textContent = 'Your guess is too low';
  }
});
