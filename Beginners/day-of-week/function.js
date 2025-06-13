const weeks = document.querySelector("#weekInput");
const output = document.querySelector("#res");
const button = document.querySelector("#button");

button.addEventListener("click", () => {

    if (!weeks.value) {
        alert("Please enter a date in the format MM/DD/YYYY");
        return;
    }
    const date = new Date(weeks.value);
    const number = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[number];

    output.innerText = `The day of the week is: ${dayName}`;
});
// JavaScript Logic:

// 1.Capture the user input when the button is clicked.

// 2. Convert the input into a JavaScript Date object.

// 3.Use the getDay() method to find the weekday.

// 4. Display the day of the week in a user-friendly format (e.g., Monday, Tuesday).

// 5. Example Input and Output

// Input: 2025-05-14

// Output: Wednesday
