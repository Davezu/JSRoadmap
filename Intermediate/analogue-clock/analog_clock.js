function clock() {
  const clock = document.querySelector('#clock');

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  clock.textContent = `The Current time is ${hours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}
setInterval(clock, 1000);
