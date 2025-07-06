
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const api = "b1cc3ff984309b902ba7bf90b631674b";


async function fetchData() {
    const userInput = document.querySelector("#userInput").value;
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${api}`;
        const response = await fetch(url);
        const data = await response.json();
        city.textContent = data.name;
        temp.textContent = `${data.main.temp}`;
        desc.textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error_fetching:", error);
    }
}
