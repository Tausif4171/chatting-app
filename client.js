const socket = io('http://localhost:4000')

const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('send-message', data => {
    console.log(data)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    socket.emit('send-chat-message', messageInput.value)
    messageInput.value = ''
})