const userReservation = document.querySelector('#reservation');
const pickDate = document.querySelector('#date');
const pickTime = document.querySelector('#time');
const options = document.querySelector('#booking-options');
const button = document.querySelector('#submitBooking');
const summary = document.querySelector('#booking-summary');

const bookings = [];

const updateBookingDisplay = () => {
  if (bookings.length === 0) {
    summary.innerHTML = '';
    return;
  }

  summary.innerHTML = '';
  bookings.forEach((booking) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${booking.name}</strong> booked <strong>${booking.pickOptions}</strong>
      <div class="booking-details">
        <div class="booking-detail">
          <div class="booking-detail-label">Date</div>
          <div class="booking-detail-value">${booking.date}</div>
        </div>
        <div class="booking-detail">
          <div class="booking-detail-label">Time</div>
          <div class="booking-detail-value">${booking.time}</div>
        </div>
      </div>
    `;
    summary.appendChild(li);
  });
};

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

  const isTaken = bookings.some(
    (b) => b.date === date && b.time === time && b.pickOptions === pickOptions
  );
  if (isTaken) {
    alert('Sorry, that slot is already booked');
    return;
  }

  bookings.push({ name, time, date, pickOptions });
  updateBookingDisplay();

  // Clear form after successful booking
  userReservation.value = '';
  pickTime.value = '';
  pickDate.value = '';
  options.value = '';

  // Show success message
  alert('Booking confirmed successfully!');
});
