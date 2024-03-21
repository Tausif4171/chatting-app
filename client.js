const socket = io('http://localhost:4000')

const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('message-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')

socket.emit('new-user', name)

socket.on('send-message', data => {
    console.log(data)
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', data => {
    console.log(data)
    appendMessage(`${data} connected`)
})

socket.on('user-disconnected', data => {
    appendMessage(`${data} disconnected`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    appendMessage(`You: ${messageInput.value}`)
    socket.emit('send-chat-message', messageInput.value)
    messageInput.value = ''
})

function appendMessage(message) {
    const data = document.createElement('p')
    data.textContent = message
    messageContainer.appendChild(data)
}