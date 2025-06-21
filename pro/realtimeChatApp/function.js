const userChat = document.querySelector('#userInput');
const chatWindow = document.querySelector('#chatWindow');
const sendButton = document.querySelector('#submit');


sendButton.addEventListener('click', () => {
    const message = userChat.value.trim();
    if (message !== "") {
        appendMessage("sent", message);
        userChat.value = "";
    }
    setTimeout(() => {
        appendMessage("recieved", "Bot: " + message);
    }, 1000);
});

function appendMessage(type, msg){
    const div = document.createElement('div');
    div.classList.add("message", type);
    div.textContent = msg;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}