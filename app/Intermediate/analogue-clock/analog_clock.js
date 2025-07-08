function clock() {
  const clock = document.querySelector('#clock');

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  let hours = now.getHours();
  let ampm = 'AM';

  time = hours % 12;
  if (hours >= 12) {
    ampm = 'PM';
  }
  clock.textContent = `The Current time is ${time
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')} ${ampm}`;
}
setInterval(clock, 1000);
