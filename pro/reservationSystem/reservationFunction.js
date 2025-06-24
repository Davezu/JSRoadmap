const userReservation = document.querySelector('#reservation');
const pickDate = document.querySelector('#date');
const pickTime = document.querySelector('#time');
const options = document.querySelector('#booking-options');
const button = document.querySelector('#submitBooking');
const summary = document.querySelector('#booking-summary');

const bookings = [];

button.addEventListener('click', (event) => {
  event.preventDefault();

  const name = userReservation.value.trim();
  const time = pickTime.value;
  const date = pickDate.value;
  const pickOptions = options.value;

  if (name === '' || time === '' || date === '' || pickOptions === '') {
    alert('Please Complete all fields');
    return;
  }
  const isTaken = bookings.some((b) => b.date === date);
  if (isTaken) {
    alert('Sorry, that time is already booked');
    return;
  } else {
    bookings.push({ name, time, date, pickOptions });
  }
  const li = document.createElement('li');
  li.textContent = `${name} booked a ${pickOptions} for ${time} on ${date}`;
  summary.appendChild(li);
});
