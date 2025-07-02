const display = document.querySelector(".content");

async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach(user => {
            display.innerHTML += `<div>${user.username}</div>`
        });
    } catch (error) {
        console.log("Fetch Error", error);
    }
}
getData();