const socket = io('http://localhost:8000');

const form = document.getElementById('send-form');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const name = prompt("Enter your name to join the chat");
socket.emit('New-user-joined', name);

socket.on('User-joined', name => {
    append(`${name} joined the chat`, 'center');
})
socket.on('receive', data => {
    append(`${data.message} : $(data.user)`, 'left');
})