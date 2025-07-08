const names = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");
const message = document.querySelector(".message");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (names.value.trim() === ""|| email.value.trim() === "" || textarea.value.trim() === ""){
        message.textContent = "Please fill all fields.";
    }else{
        message.textContent = "Thank you for your submission!";
        names.value = "";
        email.value = "";
        textarea.value = "";
    }
});
